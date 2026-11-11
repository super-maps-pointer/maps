type MapToken =
  | "game.bg"
  | "bar.bg"
  | "bar.border"
  | "gauge.track"
  | "gauge.fill"
  | "map.sphere"
  | "map.ocean"
  | "map.graticules";
export const colorVar = (token: MapToken) =>
  `var(--chakra-colors-${token.replace(".", "-")})`;
