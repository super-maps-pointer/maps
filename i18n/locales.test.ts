import { describe, expect, it } from "vitest";

import en from "./locales/en.json";
import fr from "./locales/fr.json";

const keysOf = (value: unknown, prefix = ""): string[] =>
  typeof value === "object" && value !== null
    ? Object.entries(value).flatMap(([key, child]) =>
        keysOf(child, prefix === "" ? key : `${prefix}.${key}`),
      )
    : [prefix];

describe("locales", () => {
  it("define the same keys in every language", () => {
    expect(keysOf(fr).toSorted()).toEqual(keysOf(en).toSorted());
  });
});
