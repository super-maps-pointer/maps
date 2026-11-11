import type { GeographiesProps } from "react-simple-maps";

/** Feature handed to `<Geographies>` children (the package exports `Geography` as a component only). */
type Geography = Parameters<
  GeographiesProps["children"]
>[0]["geographies"][number];

/** Natural Earth properties we read from `public/ne_50m_countries.json`. */
interface CountryProperties {
  NAME: string;
  ADM0_A3: string;
  LABEL_X: number;
  LABEL_Y: number;
}

export type CountryGeography = Geography & { properties: CountryProperties };

export const isCountryGeography = (
  geography: Geography,
): geography is CountryGeography => {
  const properties: unknown = geography.properties;
  return (
    typeof properties === "object" &&
    properties !== null &&
    "NAME" in properties &&
    typeof properties.NAME === "string" &&
    "ADM0_A3" in properties &&
    typeof properties.ADM0_A3 === "string" &&
    "LABEL_X" in properties &&
    typeof properties.LABEL_X === "number" &&
    "LABEL_Y" in properties &&
    typeof properties.LABEL_Y === "number"
  );
};
