"use client";

import { ChakraProvider } from "@chakra-ui/react";
import type { ReactNode } from "react";
import { CookiesProvider } from "react-cookie";
import { I18nextProvider } from "react-i18next";
import { ColorModeProvider } from "@/components/ui/color-mode";
import { Toaster } from "@/components/ui/toaster";
import { useI18n } from "@/i18n/client";
import type { Locale } from "@/i18n/settings";
import { system } from "@/theme/system";

interface ProvidersProps {
  locale: Locale;
  children: ReactNode;
}

export function Providers({ locale, children }: ProvidersProps) {
  return (
    <CookiesProvider>
      <TranslationProvider locale={locale}>
        <ChakraProvider value={system}>
          <ColorModeProvider>
            {children}
            <Toaster />
          </ColorModeProvider>
        </ChakraProvider>
      </TranslationProvider>
    </CookiesProvider>
  );
}

function TranslationProvider({ locale, children }: ProvidersProps) {
  const i18n = useI18n(locale);
  return <I18nextProvider i18n={i18n}>{children}</I18nextProvider>;
}
