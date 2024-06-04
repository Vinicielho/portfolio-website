import { notFound } from "next/navigation";
import { getRequestConfig } from "next-intl/server";
import commons from "./commons.json";

const locales = commons.locales;

export default getRequestConfig(async ({ locale }) => {
  if (!locales.includes(locale as any)) notFound();

  return {
    messages: (await import(`/messages/${locale}.json`)).default,
  };
});
