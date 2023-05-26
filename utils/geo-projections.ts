export type GeoProjection =
  | "geoEqualEarth"
  | "geoAlbers"
  | "geoAzimuthalEqualArea"
  | "geoAzimuthalEquidistant"
  | "geoOrthographic"
  | "geoConicConformal"
  | "geoConicEquidistant"
  | "geoStereographic"
  | "geoMercator"
  | "geoTransverseMercator";

const geoProjections: GeoProjection[] = [
  "geoEqualEarth",
  "geoAlbers",
  "geoAzimuthalEqualArea",
  "geoAzimuthalEquidistant",
  "geoOrthographic",
  "geoConicConformal",
  "geoConicEquidistant",
  "geoStereographic",
  "geoMercator",
  "geoTransverseMercator",
];

export const getRandomGeoProjection = (): GeoProjection => {
  const index = Math.floor(Math.random() * geoProjections.length);
  return geoProjections[index];
};
