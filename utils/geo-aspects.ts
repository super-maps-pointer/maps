export type GeoAspect =
  | "European - Africa centric"
  | "U.S. centric"
  | "North polar aspect"
  | "South polar aspect"
  | "Asia centric";

const geoAspects: GeoAspect[] = [
  "European - Africa centric",
  "U.S. centric",
  "North polar aspect",
  "South polar aspect",
  "Asia centric",
];

export const getRandomGeoAspect = (): GeoAspect => {
  const index = Math.floor(Math.random() * geoAspects.length);
  return geoAspects[index];
};

export const getRotationFromGeoAspect = (
  geoAspect: GeoAspect
): [number, number, number] => {
  switch (geoAspect) {
    case "European - Africa centric":
      return [0, 0, 0];
    case "U.S. centric":
      return [110, -40, 0];
    case "North polar aspect":
      return [0, -90, 0];
    case "South polar aspect":
      return [0, 90, 0];
    case "Asia centric":
      return [110, 40, 0];
  }
};
