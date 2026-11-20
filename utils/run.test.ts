import { describe, expect, it } from "vitest";
import { Level } from "./rules";
import { type RunState, createRun } from "./run";

const seededRandom = (seed: number) => {
  let current = seed;
  return () => {
    current = (current * 9301 + 49297) % 233280;
    return current / 233280;
  };
};

const run = createRun(() => 0);

const playEasy = (someRun: ReturnType<typeof createRun>) =>
  someRun.dispatch(someRun.start(), { type: "play" }).state;

const startEasy = () => playEasy(run);

const levelRunOf = (state: RunState) => {
  if (state.screen !== "playing") throw new Error("No Level run");
  return state.levelRun;
};

const target = (state: RunState) => {
  const country = levelRunOf(state).targetCountry;
  if (country === undefined) throw new Error("No Target country");
  return country;
};

const guessTarget = (state: RunState, someRun = run) =>
  someRun.dispatch(state, {
    type: "guess",
    code: target(state).code,
    name: target(state).name,
  });

const skip = (state: RunState) => run.dispatch(state, { type: "skip" }).state;

const wrongGuess = (state: RunState) =>
  run.dispatch(state, { type: "guess", code: "XXX", name: "Atlantis" }).state;

const repeat = (
  state: RunState,
  times: number,
  action: (state: RunState) => RunState,
) => Array.from({ length: times }).reduce<RunState>(action, state);

const play = (state: RunState) => run.dispatch(state, { type: "play" }).state;

const winLevelRun = (state: RunState, someRun = run): RunState =>
  state.screen === "playing"
    ? winLevelRun(guessTarget(state, someRun).state, someRun)
    : state;

const reachNormal = () => play(winLevelRun(startEasy()));

describe("the screen flow", () => {
  it("starts on the introduction screen and play starts the first Level run on Easy", () => {
    const state = run.start();
    expect(state.screen).toBe("introduction");

    const { state: playing } = run.dispatch(state, { type: "play" });

    expect(playing.screen).toBe("playing");
    expect(playing.level).toBe(Level.Easy);
    expect(levelRunOf(playing).tries).toBe(0);
  });

  it("shows the next-level screen for the next Level after a won Level run, and play starts its Level run", () => {
    const won = winLevelRun(startEasy());

    expect(won).toEqual({ screen: "levelWon", level: Level.Normal });

    const next = play(won);
    expect(next.screen).toBe("playing");
    expect(next.level).toBe(Level.Normal);
    expect(levelRunOf(next).foundCountries).toEqual([]);
  });

  it("goes from the introduction to the end screen through every Level", () => {
    const levelsPlayed: string[] = [];
    let state = run.start();
    while (state.screen !== "finished") {
      state = play(state);
      levelsPlayed.push(state.level);
      state = winLevelRun(state);
    }

    expect(levelsPlayed).toEqual([
      Level.Easy,
      Level.Normal,
      Level.Hard,
      Level.Extreme,
    ]);
    expect(state).toEqual({ screen: "finished", level: Level.Extreme });
  });

  it("shows the retry screen after a lost Level run, and retry starts a new Level run on the same Level with a fresh sample", () => {
    const retryRun = createRun(seededRandom(1));
    const normal = retryRun.dispatch(
      winLevelRun(playEasy(retryRun), retryRun),
      { type: "play" },
    ).state;
    const lost = repeat(
      normal,
      25,
      (s) =>
        retryRun.dispatch(s, { type: "guess", code: "XXX", name: "Atlantis" })
          .state,
    );

    expect(lost).toEqual({ screen: "retry", level: Level.Normal });

    const retried = retryRun.dispatch(lost, { type: "retry" }).state;
    expect(retried.screen).toBe("playing");
    expect(retried.level).toBe(Level.Normal);
    expect(levelRunOf(retried).tries).toBe(0);
    expect(levelRunOf(retried).sample).not.toEqual(levelRunOf(normal).sample);
  });
});

describe("a correct guess", () => {
  it("counts a Try and a found country and moves to the next Target country", () => {
    const state = startEasy();
    const first = target(state);

    const { state: next, outcome } = guessTarget(state);

    expect(outcome).toEqual({ kind: "correct" });
    expect(levelRunOf(next).tries).toBe(1);
    expect(levelRunOf(next).foundCountries).toEqual([first]);
    expect(levelRunOf(next).targetCountry).toBe(levelRunOf(state).sample[1]);
  });
});

describe("Skip", () => {
  it("moves to the next Target country without spending a Try", () => {
    const state = startEasy();

    const { state: next, outcome } = run.dispatch(state, { type: "skip" });

    expect(outcome).toBeUndefined();
    expect(levelRunOf(next).targetCountry).toBe(levelRunOf(state).sample[1]);
    expect(levelRunOf(next).tries).toBe(0);
  });

  it("has no limit and cycles back to skipped countries", () => {
    const state = startEasy();
    const sampleSize = levelRunOf(state).sample.length;

    const next = repeat(state, sampleSize * 3, skip);

    expect(levelRunOf(next).targetCountry).toBe(target(state));
    expect(levelRunOf(next).tries).toBe(0);
  });

  it("never comes back to a found country", () => {
    const { state } = guessTarget(startEasy());
    const sample = levelRunOf(state).sample;

    const visited = Array.from({ length: sample.length * 2 }).reduce<{
      state: RunState;
      targets: string[];
    }>(
      (acc) => {
        const next = skip(acc.state);
        return { state: next, targets: [...acc.targets, target(next).code] };
      },
      { state, targets: [] },
    );

    expect(visited.targets).not.toContain(sample[0]?.code);
    expect(new Set(visited.targets).size).toBe(sample.length - 1);
  });
});

describe("the end of a Level run", () => {
  it("is won as soon as found countries reach the Goal", () => {
    const almost = repeat(startEasy(), 4, (s) => guessTarget(s).state);
    expect(almost.screen).toBe("playing");

    expect(guessTarget(almost).state.screen).toBe("levelWon");
  });

  it("is lost as soon as Tries reach the cap", () => {
    const almost = repeat(startEasy(), 19, wrongGuess);
    expect(almost.screen).toBe("playing");

    expect(wrongGuess(almost).screen).toBe("retry");
  });

  it("follows the Goal and Tries of the Level", () => {
    const normal = reachNormal();

    expect(repeat(normal, 9, (s) => guessTarget(s).state).screen).toBe(
      "playing",
    );
    expect(repeat(normal, 24, wrongGuess).screen).toBe("playing");
    expect(repeat(normal, 25, wrongGuess).screen).toBe("retry");
  });
});

describe("the sample", () => {
  it("is drawn from the injected random source", () => {
    const first = levelRunOf(playEasy(createRun(seededRandom(1)))).sample;
    const same = levelRunOf(playEasy(createRun(seededRandom(1)))).sample;
    const other = levelRunOf(playEasy(createRun(seededRandom(2)))).sample;

    expect(same).toEqual(first);
    expect(other).not.toEqual(first);
    expect(first).toHaveLength(20);
  });
});

describe("a wrong guess", () => {
  it("counts a Try, keeps the Target country and returns the clicked country's name", () => {
    const state = startEasy();

    const { state: next, outcome } = run.dispatch(state, {
      type: "guess",
      code: "XXX",
      name: "Atlantis",
    });

    expect(outcome).toEqual({ kind: "wrong", clickedName: "Atlantis" });
    expect(levelRunOf(next).tries).toBe(1);
    expect(levelRunOf(next).foundCountries).toEqual([]);
    expect(levelRunOf(next).targetCountry).toBe(target(state));
  });

  it("includes a click on an already found country", () => {
    const start = startEasy();
    const found = target(start);
    const { state } = guessTarget(start);

    const { state: next, outcome } = run.dispatch(state, {
      type: "guess",
      code: found.code,
      name: found.name,
    });

    expect(outcome).toEqual({ kind: "wrong", clickedName: found.name });
    expect(levelRunOf(next).tries).toBe(2);
    expect(levelRunOf(next).foundCountries).toEqual([found]);
  });
});
