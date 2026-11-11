import { render, renderHook } from "@testing-library/react";
import type { ReactElement, ReactNode } from "react";
import { Providers } from "@/app/[locale]/providers";
import type { Locale } from "@/i18n/settings";

const wrapperFor = (locale: Locale) =>
  function Wrapper({ children }: { children: ReactNode }) {
    return <Providers locale={locale}>{children}</Providers>;
  };

export const renderWithProviders = (ui: ReactElement, locale: Locale) =>
  render(ui, { wrapper: wrapperFor(locale) });

export const renderHookWithProviders = <Result,>(
  hook: () => Result,
  locale: Locale,
) => renderHook(hook, { wrapper: wrapperFor(locale) });
