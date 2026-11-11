"use client";

import { ChakraProvider } from "@chakra-ui/react";
import type { ReactNode } from "react";
import { CookiesProvider } from "react-cookie";
import { ColorModeProvider } from "@/components/ui/color-mode";
import { Toaster } from "@/components/ui/toaster";
import { system } from "@/theme/system";

export function Providers({ children }: { children: ReactNode }) {
  return (
    <CookiesProvider>
      <ChakraProvider value={system}>
        <ColorModeProvider>
          {children}
          <Toaster />
        </ColorModeProvider>
      </ChakraProvider>
    </CookiesProvider>
  );
}
