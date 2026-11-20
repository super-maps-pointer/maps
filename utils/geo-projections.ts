const PROJECTION_NAMES = {
  geoEqualEarth: "Equal Earth",
  geoMercator: "Mercator",
  geoTransverseMercator: "Transverse Mercator",
} as const;

export type GeoProjection = keyof typeof PROJECTION_NAMES;

const isGeoProjection = (name: string): name is GeoProjection =>
  name in PROJECTION_NAMES;

export const PROJECTION_POOL: readonly GeoProjection[] =
  Object.keys(PROJECTION_NAMES).filter(isGeoProjection);

export const getProjectionName = (projection: GeoProjection) =>
  PROJECTION_NAMES[projection];
