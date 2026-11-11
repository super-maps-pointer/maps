export type GeoProjection =
  "geoEqualEarth" | "geoMercator" | "geoTransverseMercator";

const PROJECTION_NAMES: Record<GeoProjection, string> = {
  geoEqualEarth: "Equal Earth",
  geoMercator: "Mercator",
  geoTransverseMercator: "Transverse Mercator",
};

export const getProjectionName = (projection: GeoProjection) =>
  PROJECTION_NAMES[projection];
