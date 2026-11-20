import { describe, expect, it } from "vitest";

import { isMicroCountry, sampleCountries } from "./countries";
import { Level } from "./rules";

describe("isMicroCountry", () => {
  it.each(["SMR", "VAT", "MCO", "AND", "LIE", "MLT", "BHR", "SGP"])(
    "treats %s as a Micro-country",
    (code) => {
      expect(isMicroCountry(code)).toBe(true);
    },
  );

  it.each(["FRA", "BRA", "CHN"])(
    "does not treat %s as a Micro-country",
    (code) => {
      expect(isMicroCountry(code)).toBe(false);
    },
  );
});

const seededRandom = (seed: number) => {
  let state = seed;
  return () => {
    state = (state * 1_103_515_245 + 12_345) % 2_147_483_648;
    return state / 2_147_483_648;
  };
};

const codesOf = (countries: { code: string }[]) =>
  countries.map((country) => country.code);

describe("sampleCountries", () => {
  it("draws the same sample from the same random source", () => {
    expect(codesOf(sampleCountries(Level.Hard, seededRandom(42)))).toEqual(
      codesOf(sampleCountries(Level.Hard, seededRandom(42))),
    );
  });

  it("draws a different sample from a different random source", () => {
    expect(codesOf(sampleCountries(Level.Hard, seededRandom(1)))).not.toEqual(
      codesOf(sampleCountries(Level.Hard, seededRandom(2))),
    );
  });

  it.each(Object.values(Level))(
    "only returns distinct countries of the %s Level",
    (level) => {
      const sample = sampleCountries(level, seededRandom(7));

      expect(sample.every((country) => country.level === level)).toBe(true);
      expect(new Set(codesOf(sample)).size).toBe(sample.length);
    },
  );

  it.each([
    [Level.Easy, 20],
    [Level.Normal, 30],
    [Level.Hard, 40],
  ])("caps the %s sample at %i countries", (level, size) => {
    expect(sampleCountries(level, seededRandom(3))).toHaveLength(size);
  });

  it("returns every Extreme country when the Level has fewer than its sample size", () => {
    const sample = sampleCountries(Level.Extreme, seededRandom(3));

    expect(sample).toHaveLength(47);
  });
});
