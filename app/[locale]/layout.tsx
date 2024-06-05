import type { Metadata } from "next";
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import { Providers } from "./components/themeProvider";
import "../globals.css";
import Header from "./components/header";

export const metadata: Metadata = {
  title: "Vinicius's portfolio website",
  description: "Allow me to present myself!",
};

export default async function RootLayout({
  children,
  params: { locale },
}: Readonly<{
  children: React.ReactNode;
  params: { locale: string };
}>) {
  const messages = await getMessages();

  return (
    <html lang={locale} suppressHydrationWarning>
      <body className="min-h-screen min-w-screen flex flex-col items-center bg-background text-text">
        <Providers>
          <NextIntlClientProvider messages={messages}>
            <Header />
            <main>{children}</main>
          </NextIntlClientProvider>
        </Providers>
      </body>
    </html>
  );
}
