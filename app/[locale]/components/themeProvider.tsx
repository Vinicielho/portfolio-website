'use client'
import { ThemeProvider } from 'next-themes'

// TODO: Revisit the necessity of this component!
export function MyThemeProvider({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
      {children}
    </ThemeProvider>
  );
}