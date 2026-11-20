import { type Country, type RandomSource, sampleCountries } from "./countries";
import { type Level, getLevelRules } from "./rules";

type LevelRunStatus = "playing" | "won" | "lost";

interface LevelRunState {
  sample: readonly Country[];
  targetCountry: Country | undefined;
  tries: number;
  foundCountries: readonly Country[];
  status: LevelRunStatus;
}

export interface RunState {
  level: Level;
  levelRun: LevelRunState;
}

export type RunAction =
  { type: "guess"; code: string; name: string } | { type: "skip" };

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

const statusOf = (
  level: Level,
  { tries, foundCountries }: Pick<LevelRunState, "tries" | "foundCountries">,
): LevelRunStatus => {
  const rules = getLevelRules(level);
  if (foundCountries.length >= rules.goal) return "won";
  if (tries >= rules.tries) return "lost";
  return "playing";
};

const guess = (
  level: Level,
  levelRun: LevelRunState,
  code: string,
  name: string,
): { levelRun: LevelRunState; outcome: GuessOutcome } => {
  const tries = levelRun.tries + 1;
  const { targetCountry } = levelRun;
  if (targetCountry?.code !== code) {
    const { foundCountries } = levelRun;
    return {
      levelRun: {
        ...levelRun,
        tries,
        status: statusOf(level, { tries, foundCountries }),
      },
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
      status: statusOf(level, { tries, foundCountries }),
    },
    outcome: { kind: "correct" },
  };
};

const skip = (levelRun: LevelRunState): LevelRunState => ({
  ...levelRun,
  targetCountry: nextTargetCountry(levelRun),
});

export const createRun = (random: RandomSource) => ({
  start: (level: Level): RunState => {
    const sample = sampleCountries(level, random);
    return {
      level,
      levelRun: {
        sample,
        targetCountry: sample[0],
        tries: 0,
        foundCountries: [],
        status: "playing",
      },
    };
  },
  dispatch: (state: RunState, action: RunAction): RunTransition => {
    if (action.type === "skip") {
      return {
        state: { ...state, levelRun: skip(state.levelRun) },
        outcome: undefined,
      };
    }
    const result = guess(state.level, state.levelRun, action.code, action.name);
    return {
      state: { ...state, levelRun: result.levelRun },
      outcome: result.outcome,
    };
  },
});
