type MapToken =
  | "game.bg"
  | "bar.bg"
  | "bar.border"
  | "gauge.track"
  | "gauge.fill"
  | "map.sphere"
  | "map.ocean"
  | "map.graticules";

/** CSS variable of a semantic color token from `theme/system.ts` (follows light/dark mode). */
export const colorVar = (token: MapToken) => `var(--chakra-colors-${token.replace(".", "-")})`;
