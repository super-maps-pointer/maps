import { describe, expect, it } from "vitest";

import {
  getLevelEmoji,
  getLevelNumber,
  getNextLevel,
  introducesNewProjection,
  Level,
  LEVEL_ORDER,
} from "./rules";

describe("getNextLevel", () => {
  it.each([
    [Level.Easy, Level.Normal],
    [Level.Normal, Level.Hard],
    [Level.Hard, Level.Extreme],
  ])("advances from %s to %s", (current, next) => {
    expect(getNextLevel(current)).toBe(next);
  });

  it("stays on the last level", () => {
    expect(getNextLevel(Level.Extreme)).toBe(Level.Extreme);
  });
});

describe("getLevelNumber", () => {
  it.each([
    [Level.Easy, 1],
    [Level.Normal, 2],
    [Level.Hard, 3],
    [Level.Extreme, 4],
  ])("numbers %s as %i", (level, number) => {
    expect(getLevelNumber(level)).toBe(number);
  });
});

describe("getLevelEmoji", () => {
  it("has no emoji for the first level", () => {
    expect(getLevelEmoji(Level.Easy)).toBe("");
  });

  it.each([Level.Normal, Level.Hard, Level.Extreme])(
    "has an emoji for %s",
    (level) => {
      expect(getLevelEmoji(level)).not.toBe("");
    },
  );
});

describe("introducesNewProjection", () => {
  it("is only true for the normal level", () => {
    expect(LEVEL_ORDER.filter(introducesNewProjection)).toEqual([Level.Normal]);
  });
});
