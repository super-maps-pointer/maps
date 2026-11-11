import { Schema } from "effect";

export const languages = ["en", "fr"] as const;
export const Locale = Schema.Literals(languages);
export type Locale = typeof Locale.Type;

export const isLocale = Schema.is(Locale);

export const fallbackLng: Locale = "en";
const defaultNS = "translation";
export const cookieName = "i18next";

export function getOptions(lng: Locale = fallbackLng, ns: string = defaultNS) {
  return {
    supportedLngs: [...languages],
    fallbackLng,
    lng,
    fallbackNS: defaultNS,
    defaultNS,
    ns,
  };
}
