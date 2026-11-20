import { type Country, type RandomSource, sampleCountries } from "./countries";
import { Level, getLevelRules } from "./rules";

interface LevelRunState {
  sample: readonly Country[];
  targetCountry: Country | undefined;
  tries: number;
  foundCountries: readonly Country[];
}

export type RunState =
  | { screen: "introduction" | "levelWon" | "retry" | "finished"; level: Level }
  | { screen: "playing"; level: Level; levelRun: LevelRunState };

export type PlayingRunState = Extract<RunState, { screen: "playing" }>;

export type RunAction =
  | { type: "play" }
  | { type: "retry" }
  | { type: "guess"; code: string; name: string }
  | { type: "skip" };

export type GuessOutcome =
  { kind: "correct" } | { kind: "wrong"; clickedName: string };

interface RunTransition {
  state: RunState;
  outcome: GuessOutcome | undefined;
}

const nextTargetCountry = ({
  sample,
  targetCountry,
  foundCountries,
}: Pick<LevelRunState, "sample" | "targetCountry" | "foundCountries">) => {
  const currentIndex =
    targetCountry === undefined ? -1 : sample.indexOf(targetCountry);
  for (let step = 1; step <= sample.length; step++) {
    const candidate = sample[(currentIndex + step) % sample.length];
    if (candidate !== undefined && !foundCountries.includes(candidate)) {
      return candidate;
    }
  }
  return targetCountry;
};

const guess = (
  levelRun: LevelRunState,
  code: string,
  name: string,
): { levelRun: LevelRunState; outcome: GuessOutcome } => {
  const tries = levelRun.tries + 1;
  const { targetCountry } = levelRun;
  if (targetCountry?.code !== code) {
    return {
      levelRun: { ...levelRun, tries },
      outcome: { kind: "wrong", clickedName: name },
    };
  }
  const foundCountries = [...levelRun.foundCountries, targetCountry];
  return {
    levelRun: {
      ...levelRun,
      tries,
      foundCountries,
      targetCountry: nextTargetCountry({ ...levelRun, foundCountries }),
    },
    outcome: { kind: "correct" },
  };
};

const skip = (levelRun: LevelRunState): LevelRunState => ({
  ...levelRun,
  targetCountry: nextTargetCountry(levelRun),
});

const startLevelRun = (level: Level, random: RandomSource): PlayingRunState => {
  const sample = sampleCountries(level, random);
  return {
    screen: "playing",
    level,
    levelRun: {
      sample,
      targetCountry: sample[0],
      tries: 0,
      foundCountries: [],
    },
  };
};

const reachLevel = (
  level: Level,
  screen: "introduction" | "levelWon",
): RunState => ({ screen, level });

const reachNextLevel = (level: Level): RunState => {
  const { nextLevel } = getLevelRules(level);
  return nextLevel === undefined
    ? { screen: "finished", level }
    : reachLevel(nextLevel, "levelWon");
};

const endLevelRun = (state: PlayingRunState): RunState => {
  const { goal, tries } = getLevelRules(state.level);
  const { levelRun } = state;
  if (levelRun.foundCountries.length >= goal) {
    return reachNextLevel(state.level);
  }
  if (levelRun.tries >= tries) return { screen: "retry", level: state.level };
  return state;
};

const withoutOutcome = (state: RunState): RunTransition => ({
  state,
  outcome: undefined,
});

export const createRun = (random: RandomSource) => ({
  start: (): RunState => reachLevel(Level.Easy, "introduction"),
  dispatch: (state: RunState, action: RunAction): RunTransition => {
    if (action.type === "play") {
      return state.screen === "introduction" || state.screen === "levelWon"
        ? withoutOutcome(startLevelRun(state.level, random))
        : withoutOutcome(state);
    }
    if (action.type === "retry") {
      return state.screen === "retry"
        ? withoutOutcome(startLevelRun(state.level, random))
        : withoutOutcome(state);
    }
    if (state.screen !== "playing") return withoutOutcome(state);
    if (action.type === "skip") {
      return withoutOutcome({ ...state, levelRun: skip(state.levelRun) });
    }
    const result = guess(state.levelRun, action.code, action.name);
    return {
      state: endLevelRun({ ...state, levelRun: result.levelRun }),
      outcome: result.outcome,
    };
  },
});
