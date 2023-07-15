export type GeoProjection =
  | "geoEqualEarth"
  | "geoAlbers"
  | "geoAzimuthalEqualArea"
  | "geoAzimuthalEquidistant"
  | "geoConicConformal"
  | "geoConicEquidistant"
  | "geoStereographic"
  | "geoMercator"
  | "geoTransverseMercator";

const geoProjections: GeoProjection[] = [
  "geoEqualEarth", // rounded border
  "geoMercator", // most classical map representation
  "geoTransverseMercator", // flat but centered on the pole
];

export const getRandomGeoProjection = (): GeoProjection => {
  const index = Math.floor(Math.random() * geoProjections.length);
  return geoProjections[index];
};
