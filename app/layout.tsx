import type { Metadata } from "next";
import { Providers } from "./Components/providers";
import "./globals.css";
import ThemeSwitcher from "./Components/themeSwitcher";

export const metadata: Metadata = {
  title: "Vinicius's portfolio website",
  description: "Allow me to present myself!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className="min-h-screen flex flex-col items-center bg-background text-text"
    >
      <body>
        <Providers>
          <header className="flex">
            <h1
              className="text-xl italic text-accent"
              // style={{ color: "var(--accent)" }}
            >
              Welcome!
            </h1>
            <button>lenguage</button>
            <ThemeSwitcher />
          </header>
          <main>{children}</main>
        </Providers>
      </body>
    </html>
  );
}