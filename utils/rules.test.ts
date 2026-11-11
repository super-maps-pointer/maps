import { describe, expect, it } from "vitest";

import { getNextLevel, Level } from "./rules";

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
