import createMiddleware from "next-intl/middleware";

export default createMiddleware({
  // TODO: UNIFY THIS CONFIG
  locales: ["en", "pt-br"],
  defaultLocale: "en",
});

export const config = {
  matcher: ["/", "/(pt-br|en)/:path*"],
};
