import { describe, expect, it } from "vitest";

import { getProjectionName } from "./geo-projections";

describe("getProjectionName", () => {
  it.each([
    ["geoMercator", "Mercator"],
    ["geoEqualEarth", "Equal Earth"],
    ["geoTransverseMercator", "Transverse Mercator"],
  ] as const)("names %s as %s", (projection, name) => {
    expect(getProjectionName(projection)).toBe(name);
  });
});
