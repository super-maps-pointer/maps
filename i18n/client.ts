"use client";

import { createInstance } from "i18next";
import { useEffect, useMemo } from "react";
import { useCookies } from "react-cookie";
import {
  initReactI18next,
  useTranslation as useTranslationOrg,
} from "react-i18next";
import en from "./locales/en.json";
import fr from "./locales/fr.json";
import { type Locale, cookieName, getOptions } from "./settings";

const resources = {
  en: { translation: en },
  fr: { translation: fr },
} as const;

function createI18n(locale: Locale) {
  const instance = createInstance();
  void instance
    .use(initReactI18next)
    .init({ ...getOptions(locale), resources, initAsync: false });
  return instance;
}

export function useI18n(locale: Locale) {
  const i18n = useMemo(() => createI18n(locale), [locale]);
  const [cookies, setCookie] = useCookies([cookieName]);

  useEffect(() => {
    if (cookies[cookieName] === locale) return;
    setCookie(cookieName, locale, { path: "/" });
  }, [locale, cookies, setCookie]);

  return i18n;
}

export function useTranslation() {
  return useTranslationOrg();
}
