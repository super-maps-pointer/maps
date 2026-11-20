"use client";

import { IconButton } from "@chakra-ui/react";
import { Moon, Sun } from "lucide-react";
import { ThemeProvider, useTheme } from "next-themes";
import type { ThemeProviderProps } from "next-themes";
import { useTranslation } from "@/i18n/client";

export function ColorModeProvider(props: ThemeProviderProps) {
  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="system"
      enableSystem
      disableTransitionOnChange
      {...props}
    />
  );
}

function useColorMode() {
  const { resolvedTheme, setTheme, forcedTheme } = useTheme();
  const colorMode = forcedTheme ?? resolvedTheme;
  const toggleColorMode = () => {
    setTheme(resolvedTheme === "dark" ? "light" : "dark");
  };
  return { colorMode, setColorMode: setTheme, toggleColorMode };
}

export function ColorModeButton() {
  const { t } = useTranslation();
  const { toggleColorMode } = useColorMode();
  return (
    <IconButton
      onClick={toggleColorMode}
      rounded="full"
      variant="solid"
      colorPalette="secondary"
      aria-label={t("game.toggleColorMode")}
    >
      <Sun className="hidden dark:block" />
      <Moon className="block dark:hidden" />
    </IconButton>
  );
}
