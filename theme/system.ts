import { createSystem, defaultConfig, defineConfig } from "@chakra-ui/react";

const palette = (shades: Record<string, string>) =>
  Object.fromEntries(
    Object.entries(shades).map(([shade, value]) => [shade, { value }]),
  );
const paletteSemantics = (name: string) => ({
  solid: {
    value: { _light: `{colors.${name}.500}`, _dark: `{colors.${name}.400}` },
  },
  contrast: { value: "white" },
  fg: {
    value: { _light: `{colors.${name}.700}`, _dark: `{colors.${name}.200}` },
  },
  muted: {
    value: { _light: `{colors.${name}.100}`, _dark: `{colors.${name}.800}` },
  },
  subtle: {
    value: { _light: `{colors.${name}.50}`, _dark: `{colors.${name}.900}` },
  },
  emphasized: {
    value: { _light: `{colors.${name}.200}`, _dark: `{colors.${name}.700}` },
  },
  focusRing: { value: `{colors.${name}.500}` },
});

const config = defineConfig({
  theme: {
    tokens: {
      fonts: {
        body: { value: "var(--font-raleway), sans-serif" },
        heading: { value: "var(--font-raleway), sans-serif" },
      },
      colors: {
        primary: palette({
          50: "#E1EBEB",
          100: "#B4CDCD",
          200: "#83ABAC",
          300: "#51898A",
          400: "#2B7071",
          500: "#065758",
          600: "#054F50",
          700: "#044647",
          800: "#033C3D",
          900: "#022C2D",
        }),
        secondary: palette({
          50: "#F8EDEC",
          100: "#EDD2CF",
          200: "#E2B4B0",
          300: "#D69690",
          400: "#CD8078",
          500: "#C46960",
          600: "#BE6158",
          700: "#B6564E",
          800: "#AF4C44",
          900: "#A23B33",
        }),
        third: palette({
          50: "#FCFDFD",
          100: "#F6FBFA",
          200: "#F1F8F7",
          300: "#EBF5F4",
          400: "#E6F2F1",
          500: "#E2F0EF",
          600: "#DFEEED",
          700: "#DAECEB",
          800: "#D6E9E8",
          900: "#CFE5E4",
        }),
        forth: palette({
          50: "#F5FAFA",
          100: "#E5F2F3",
          200: "#D4EAEB",
          300: "#C3E1E2",
          400: "#B6DADC",
          500: "#A9D4D6",
          600: "#A2CFD1",
          700: "#98C9CC",
          800: "#8FC3C6",
          900: "#7EB9BC",
        }),
        fifth: palette({
          50: "#F0F8F8",
          100: "#DAEDEE",
          200: "#C1E1E2",
          300: "#A8D5D6",
          400: "#95CCCE",
          500: "#82C3C5",
          600: "#7ABDBF",
          700: "#6FB5B8",
          800: "#65AEB0",
          900: "#52A1A3",
        }),
      },
    },
    semanticTokens: {
      colors: {
        primary: paletteSemantics("primary"),
        secondary: paletteSemantics("secondary"),
        game: {
          bg: { value: { _light: "{colors.third.500}", _dark: "#0B171B" } },
        },
        splash: {
          hero: { value: { _light: "{colors.third.500}", _dark: "#0B171B" } },
          section: {
            value: {
              _light: "{colors.secondary.500}",
              _dark: "{colors.secondary.800}",
            },
          },
        },
        bar: {
          bg: {
            value: {
              _light: "{colors.primary.500}",
              _dark: "{colors.primary.800}",
            },
          },
          border: { value: "{colors.primary.900}" },
        },
        gauge: {
          track: { value: { _light: "white", _dark: "#1E2D31" } },
          fill: { value: "{colors.secondary.500}" },
        },
        map: {
          sphere: { value: { _light: "white", _dark: "#0B171B" } },
          ocean: { value: { _light: "#F2F2F2", _dark: "#10232A" } },
          land: { value: { _light: "white", _dark: "#2A3B40" } },
          landHover: {
            value: { _light: "{colors.forth.600}", _dark: "#3D6B6E" },
          },
          landPressed: {
            value: { _light: "{colors.forth.800}", _dark: "#4F8487" },
          },
          guessed: {
            value: {
              _light: "{colors.fifth.500}",
              _dark: "{colors.fifth.900}",
            },
          },
          stroke: { value: { _light: "#333333", _dark: "#9AA5A8" } },
          graticules: { value: { _light: "#AFAFB6", _dark: "#33444A" } },
        },
      },
    },
  },
});

export const system = createSystem(defaultConfig, config);
