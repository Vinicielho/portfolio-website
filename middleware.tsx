import createMiddleware from "next-intl/middleware";
import commons from "./commons.json";

// TODO: Middleware not running everywhere for some reason
export default createMiddleware({
  locales: commons.locales,
  defaultLocale: commons.locales[0],
});

// TODO: Find a way to dynamically update the matcher with the commons thing
export const config = {
  matcher: ["/", "/(pt-br|en)/:path*"],
};
