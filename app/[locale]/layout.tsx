import type { Metadata } from "next";
import { League_Spartan } from "next/font/google";
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import { Providers } from "./components/themeProvider";
import "../globals.css";
import Header from "./components/header";
import Footer from "./components/footer";

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

  return (
    <html
      className={`min-w-screen min-h-screen flex justify-center bg-background text-text ${leagueGothic.variable}`}
      lang={locale}
      suppressHydrationWarning
    >
      <body className="w-[90%] max-w-screen-xl">
        <Providers>
          <NextIntlClientProvider messages={messages}>
            <main className="size-full">
              <Header />
              {children}
              <Footer />
            </main>
          </NextIntlClientProvider>
        </Providers>
      </body>
    </html>
  );
}
