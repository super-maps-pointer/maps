import { describe, expect, it } from "vitest";
import { Level } from "./rules";
import { type RunState, createRun } from "./run";

const run = createRun(() => 0);

const target = (state: RunState) => {
  const country = state.levelRun.targetCountry;
  if (country === undefined) throw new Error("No Target country");
  return country;
};

const guessTarget = (state: RunState) =>
  run.dispatch(state, {
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

describe("a correct guess", () => {
  it("counts a Try and a found country and moves to the next Target country", () => {
    const state = run.start(Level.Easy);
    const first = target(state);

    const { state: next, outcome } = guessTarget(state);

    expect(outcome).toEqual({ kind: "correct" });
    expect(next.levelRun.tries).toBe(1);
    expect(next.levelRun.foundCountries).toEqual([first]);
    expect(next.levelRun.targetCountry).toBe(state.levelRun.sample[1]);
  });
});

describe("Skip", () => {
  it("moves to the next Target country without spending a Try", () => {
    const state = run.start(Level.Easy);

    const { state: next, outcome } = run.dispatch(state, { type: "skip" });

    expect(outcome).toBeUndefined();
    expect(next.levelRun.targetCountry).toBe(state.levelRun.sample[1]);
    expect(next.levelRun.tries).toBe(0);
  });

  it("has no limit and cycles back to skipped countries", () => {
    const state = run.start(Level.Easy);
    const sampleSize = state.levelRun.sample.length;

    const next = repeat(state, sampleSize * 3, skip);

    expect(next.levelRun.targetCountry).toBe(target(state));
    expect(next.levelRun.tries).toBe(0);
  });

  it("never comes back to a found country", () => {
    const { state } = guessTarget(run.start(Level.Easy));
    const sample = state.levelRun.sample;

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

describe("the Level run status", () => {
  it("is playing when the Level run starts", () => {
    expect(run.start(Level.Easy).levelRun.status).toBe("playing");
  });

  it("is won as soon as found countries reach the Goal", () => {
    const almost = repeat(
      run.start(Level.Easy),
      4,
      (s) => guessTarget(s).state,
    );
    expect(almost.levelRun.status).toBe("playing");

    expect(guessTarget(almost).state.levelRun.status).toBe("won");
  });

  it("is lost as soon as Tries reach the cap", () => {
    const almost = repeat(run.start(Level.Easy), 19, wrongGuess);
    expect(almost.levelRun.status).toBe("playing");

    expect(wrongGuess(almost).levelRun.status).toBe("lost");
  });

  it("follows the Goal and Tries of the Level", () => {
    const normal = run.start(Level.Normal);

    expect(repeat(normal, 9, (s) => guessTarget(s).state).levelRun.status).toBe(
      "playing",
    );
    expect(repeat(normal, 24, wrongGuess).levelRun.status).toBe("playing");
    expect(repeat(normal, 25, wrongGuess).levelRun.status).toBe("lost");
  });
});

const seededRandom = (seed: number) => {
  let current = seed;
  return () => {
    current = (current * 9301 + 49297) % 233280;
    return current / 233280;
  };
};

describe("the sample", () => {
  it("is drawn from the injected random source", () => {
    const first = createRun(seededRandom(1)).start(Level.Easy).levelRun.sample;
    const same = createRun(seededRandom(1)).start(Level.Easy).levelRun.sample;
    const other = createRun(seededRandom(2)).start(Level.Easy).levelRun.sample;

    expect(same).toEqual(first);
    expect(other).not.toEqual(first);
    expect(first).toHaveLength(20);
  });
});

describe("a wrong guess", () => {
  it("counts a Try, keeps the Target country and returns the clicked country's name", () => {
    const state = run.start(Level.Easy);

    const { state: next, outcome } = run.dispatch(state, {
      type: "guess",
      code: "XXX",
      name: "Atlantis",
    });

    expect(outcome).toEqual({ kind: "wrong", clickedName: "Atlantis" });
    expect(next.levelRun.tries).toBe(1);
    expect(next.levelRun.foundCountries).toEqual([]);
    expect(next.levelRun.targetCountry).toBe(target(state));
  });

  it("includes a click on an already found country", () => {
    const start = run.start(Level.Easy);
    const found = target(start);
    const { state } = guessTarget(start);

    const { state: next, outcome } = run.dispatch(state, {
      type: "guess",
      code: found.code,
      name: found.name,
    });

    expect(outcome).toEqual({ kind: "wrong", clickedName: found.name });
    expect(next.levelRun.tries).toBe(2);
    expect(next.levelRun.foundCountries).toEqual([found]);
  });
});
