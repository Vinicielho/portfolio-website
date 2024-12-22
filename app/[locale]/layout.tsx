import type { Metadata } from "next";
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import Header from "./components/header";
import Footer from "./components/footer";
import { MyThemeProvider } from "./components/themeProvider";
import { League_Spartan } from "next/font/google";
import "../globals.css";

const leagueGothic = League_Spartan({
  subsets: ["latin"],
  variable: "--league-gothic",
});

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

  // TODO:SIMPLIFY/REDUCE TAGS?
  return (
    <html
      className={`bg-background text-text ${leagueGothic.variable}`}
      lang={locale}
      suppressHydrationWarning
    >
      <body className="flex flex-col items-center">
        <MyThemeProvider>
          {/* TODO: Fix the page refreshing when changing lenguage*/}
          <NextIntlClientProvider messages={messages}>
            <Header />
            <main className="contentWidth">{children}</main>
            <Footer />
          </NextIntlClientProvider>
        </MyThemeProvider>
      </body>
    </html>
  );
}
