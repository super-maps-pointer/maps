"use client";

import { Raleway } from "next/font/google";
import {
  ChakraProvider,
  extendTheme,
  type ThemeConfig,
} from "@chakra-ui/react";
import { CacheProvider } from "@chakra-ui/next-js";

const raleway = Raleway({ weight: "400", subsets: ["latin"] });

const theme: ThemeConfig = extendTheme({
  fonts: {
    body: raleway.style.fontFamily,
    heading: raleway.style.fontFamily,
  },
  colors: {
    map: {
      graticules: "#EAEAEC",
      default: "#FFFFFF",
      stroke: "#333333",
    },
    primary: {
      main: "#065758",
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
    },
    secondary: {
      main: "#c46960",
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
    },
    third: {
      main: "e2f0ef",
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
    },
    forth: {
      main: "a9d4d6",
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
    },
    fifth: {
      main: "#82c3c5",
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
    },
  },
});

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    // <CacheProvider>
    <ChakraProvider theme={theme}>{children}</ChakraProvider>
    // </CacheProvider>
  );
}
