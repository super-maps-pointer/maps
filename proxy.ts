import acceptLanguage from "accept-language";
import { type NextRequest, NextResponse } from "next/server";
import { cookieName, fallbackLng, isLocale, languages } from "@/i18n/settings";

acceptLanguage.languages([...languages]);

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|.*\\..*).*)"],
};

function detectLocale(request: NextRequest) {
  const fromCookie = request.cookies.get(cookieName)?.value;
  if (isLocale(fromCookie)) return fromCookie;

  const fromHeader = acceptLanguage.get(request.headers.get("Accept-Language"));
  if (isLocale(fromHeader)) return fromHeader;

  return fallbackLng;
}

export function proxy(request: NextRequest) {
  const { pathname, search } = request.nextUrl;
  const [, firstSegment] = pathname.split("/");

  if (isLocale(firstSegment)) return NextResponse.next();

  const locale = detectLocale(request);
  return NextResponse.redirect(
    new URL(
      `/${locale}${pathname === "/" ? "" : pathname}${search}`,
      request.url,
    ),
  );
}
