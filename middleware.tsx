import createMiddleware from "next-intl/middleware";
import commons from "./commons.json";

export default createMiddleware({
  locales: commons.locales,
  defaultLocale: commons.locales[0],
});

export const config = {
  matcher: ["/", "/(pt-br|en)/:path*"],
};
