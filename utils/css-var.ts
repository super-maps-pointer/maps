type MapToken =
  | "game.bg"
  | "bar.bg"
  | "bar.border"
  | "gauge.track"
  | "gauge.fill"
  | "map.sphere"
  | "map.ocean"
  | "map.graticules"
  | "splash.hero"
  | "splash.section";
export const colorVar = (token: MapToken) =>
  `var(--chakra-colors-${token.replace(".", "-")})`;
