import createMiddleware from "next-intl/middleware";
import commons from "./commons.json";

export default createMiddleware({
  locales: commons.locales,
  defaultLocale: commons.locales[0],
});

// Todo: Find a way to dynamically update the matcher with the commons thing
export const config = {
  matcher: ["/", "/(pt-br|en)/:path*"],
};
