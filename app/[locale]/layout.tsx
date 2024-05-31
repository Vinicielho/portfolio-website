import type { Metadata } from "next";
import { Providers } from "../components/themeProvider";
import "../globals.css";
import ThemeSwitcher from "../components/themeSwitcher";

export const metadata: Metadata = {
  title: "Vinicius's portfolio website",
  description: "Allow me to present myself!",
};

export default async function RootLayout({
  children,
  lang,
}: Readonly<{
  children: React.ReactNode;
  lang: string;
}>) {
  return (
    <html lang={lang} suppressHydrationWarning>
      <body className="min-h-screen min-w-screen flex flex-col items-center bg-background text-text">
        <Providers>
          <header className="flex 2-max">
            <h1 className="text-2xl italic text-accent">Welcome!</h1>
            <button>lenguage</button>
            <ThemeSwitcher />
          </header>
          <main>{children}</main>
        </Providers>
      </body>
    </html>
  );
}
