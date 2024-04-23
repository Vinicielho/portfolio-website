import type { Metadata } from "next";
import { Providers } from "./providers";
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
    <html lang="en" suppressHydrationWarning>
      <body className="min-h-screen flex flex-col items-center">
        <Providers>
        <header><i>Welcome!</i><button>lenguage</button><ThemeSwitcher/></header>
        {children}
        </Providers>
      </body>
    </html>
  );
}