import { readFileSync } from "node:fs";
import { join } from "node:path";

import { describe, expect, it } from "vitest";

import { CATALOGUE, MICRO_COUNTRIES } from "./countries";

interface NaturalEarthTopology {
  objects: {
    ne_50m_admin_0_countries: {
      geometries: { properties: { ADM0_A3: string } }[];
    };
  };
}

const naturalEarth = JSON.parse(
  readFileSync(join(process.cwd(), "public/ne_50m_countries.json"), "utf8"),
) as NaturalEarthTopology;

const naturalEarthCodes = new Set(
  naturalEarth.objects.ne_50m_admin_0_countries.geometries.map(
    (geometry) => geometry.properties.ADM0_A3,
  ),
);

const CATALOGUE_COUNTRIES_KNOWN_MISSING_FROM_NATURAL_EARTH = [
  "BES",
  "GUF",
  "GIB",
  "GLP",
  "MTQ",
  "MYT",
  "REU",
  "TKL",
  "USG",
  "UMI",
  "BJN",
  "SER",
  "ESB",
  "CNM",
  "KAB",
  "WSB",
  "PGA",
  "SCR",
  "BRI",
  "SPI",
  "BRT",
  "CSI",
];

const catalogueCodes = new Set(CATALOGUE.map((country) => country.code));

describe("country catalogue data", () => {
  it("only holds countries found in the Natural Earth countries data, apart from the known missing ones", () => {
    const missing = [...catalogueCodes].filter(
      (code) => !naturalEarthCodes.has(code),
    );

    expect(missing).toEqual(
      CATALOGUE_COUNTRIES_KNOWN_MISSING_FROM_NATURAL_EARTH,
    );
  });

  it("holds every Micro-country", () => {
    const missing = MICRO_COUNTRIES.filter((code) => !catalogueCodes.has(code));

    expect(missing).toEqual([]);
  });
});
