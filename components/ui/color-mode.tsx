"use client";

import { IconButton } from "@chakra-ui/react";
import { Moon, Sun } from "lucide-react";
import { ThemeProvider, useTheme } from "next-themes";
import type { ThemeProviderProps } from "next-themes";

export function ColorModeProvider(props: ThemeProviderProps) {
  return <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange {...props} />;
}

export function useColorMode() {
  const { resolvedTheme, setTheme, forcedTheme } = useTheme();
  const colorMode = forcedTheme ?? resolvedTheme;
  const toggleColorMode = () => {
    setTheme(resolvedTheme === "dark" ? "light" : "dark");
  };
  return { colorMode, setColorMode: setTheme, toggleColorMode };
}

export function ColorModeButton() {
  const { toggleColorMode } = useColorMode();
  return (
    <IconButton
      onClick={toggleColorMode}
      rounded="full"
      variant="solid"
      colorPalette="secondary"
      aria-label="Toggle color mode"
    >
      {/* Both icons render; CSS picks one so server and client markup match */}
      <Sun className="hidden dark:block" />
      <Moon className="block dark:hidden" />
    </IconButton>
  );
}
