import { NextRequest } from "next/server";
import createMiddleware from "next-intl/middleware";
import commons from "./commons.json";

const intlMiddleware = createMiddleware({
  locales: commons.locales,
  defaultLocale: commons.locales[0],
  localePrefix: "never",
});

// TODO: solve "Unable to find next-intl locale because the middleware didn't run on this request. See https://next-intl-docs.vercel.app/docs/routing/middleware#unable-to-find-locale. The notFound() function will be called as a result."
export default function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  const localesRegex = new RegExp(`^/(${commons.locales.join("|")})(/.*)?$`);
  const shouldHandle = pathname === "/" || localesRegex.test(pathname);

  if (!shouldHandle) return;

  return intlMiddleware(request);
}

export const config = {
  matcher: ["/:path*"],
};
