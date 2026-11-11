"use client";

import { createInstance } from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import resourcesToBackend from "i18next-resources-to-backend";
import { useParams } from "next/navigation";
import { useEffect } from "react";
import { useCookies } from "react-cookie";
import {
  initReactI18next,
  useTranslation as useTranslationOrg,
} from "react-i18next";
import {
  cookieName,
  fallbackLng,
  getOptions,
  isLocale,
  languages,
} from "./settings";

const runsOnServerSide = typeof window === "undefined";

const { lng: _lng, ...clientOptions } = getOptions();

void createInstance()
  .use(initReactI18next)
  .use(LanguageDetector)
  .use(
    resourcesToBackend(
      (language: string) => import(`./locales/${language}.json`),
    ),
  )
  .init({
    ...clientOptions,
    detection: { order: ["path", "htmlTag", "cookie", "navigator"] },
    preload: runsOnServerSide ? [...languages] : [],
  });
export function useTranslation() {
  const { locale } = useParams<{ locale: string }>();
  const lng = isLocale(locale) ? locale : fallbackLng;
  const [cookies, setCookie] = useCookies([cookieName]);
  const result = useTranslationOrg();
  const { i18n } = result;

  if (runsOnServerSide && i18n.resolvedLanguage !== lng) {
    void i18n.changeLanguage(lng);
  }

  useEffect(() => {
    if (i18n.resolvedLanguage === lng) return;
    void i18n.changeLanguage(lng);
  }, [lng, i18n]);

  useEffect(() => {
    if (cookies[cookieName] === lng) return;
    setCookie(cookieName, lng, { path: "/" });
  }, [lng, cookies, setCookie]);

  return result;
}
