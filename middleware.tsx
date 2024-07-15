import createMiddleware from "next-intl/middleware";
import commons from "./commons.json";

// TODO: solve "Unable to find `next-intl` locale because the middleware didn't run on this request. See https://next-intl-docs.vercel.app/docs/routing/middleware#unable-to-find-locale. The `notFound()` function will be called as a result."
export default createMiddleware({
  locales: commons.locales,
  defaultLocale: commons.locales[0],
});

// TODO: Find a way to dynamically update the matcher with the commons thing
export const config = {
  matcher: ["/", "/(pt-br|en)/:path*"],
};
