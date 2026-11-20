import { describe, expect, it } from "vitest";

import { getLevelRules, Level } from "./rules";

describe("getLevelRules", () => {
  it.each([
    [Level.Easy, { number: 1, goal: 5, tries: 20, sampleSize: 20 }],
    [Level.Normal, { number: 2, goal: 10, tries: 25, sampleSize: 30 }],
    [Level.Hard, { number: 3, goal: 15, tries: 30, sampleSize: 40 }],
    [Level.Extreme, { number: 4, goal: 20, tries: 40, sampleSize: 50 }],
  ])("defines the %s Level", (level, expected) => {
    expect(getLevelRules(level)).toMatchObject(expected);
  });
});

describe("Level emoji", () => {
  it.each([
    [Level.Easy, ""],
    [Level.Normal, "🏴‍☠️"],
    [Level.Hard, "🤯"],
    [Level.Extreme, "🫡"],
  ])("gives %s the emoji %j", (level, emoji) => {
    expect(getLevelRules(level).emoji).toBe(emoji);
  });
});

describe("new Projection", () => {
  it("is only introduced by the Normal Level", () => {
    const introducing = Object.values(Level).filter(
      (level) => getLevelRules(level).introducesNewProjection,
    );
    expect(introducing).toEqual([Level.Normal]);
  });
});

describe("next Level", () => {
  it.each([
    [Level.Easy, Level.Normal],
    [Level.Normal, Level.Hard],
    [Level.Hard, Level.Extreme],
  ])("follows %s with %s", (level, next) => {
    expect(getLevelRules(level).nextLevel).toBe(next);
  });

  it("has no next Level after Extreme", () => {
    expect(getLevelRules(Level.Extreme).nextLevel).toBeUndefined();
  });
});
