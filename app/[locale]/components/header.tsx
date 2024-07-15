"use client";
import { useEffect, useRef } from "react";
import LocaleSwitcher from "./localeSwitcher";
import ThemeSwitcher from "./themeSwitcher";

export default function Header() {
  // Elemento mais específico?
  const headerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (headerRef.current) {
        if (window.scrollY > 0) {
          headerRef.current.classList.add("backdrop-blur-sm");
          headerRef.current.classList.add("rounded-xl");
          headerRef.current.classList.add("myShadow");
        } else {
          headerRef.current.classList.remove("backdrop-blur-sm");
          headerRef.current.classList.remove("rounded-xl");
          headerRef.current.classList.remove("myShadow");
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      ref={headerRef}
      // TODO: Animação de quando muda
      className="sticky top-0 w-full flex justify-between items-center p-4 transition-all"
    >
      Logo
      {/* TODO: Create an animation for the logo */}
      <div className="flex gap-4 items-center">
        <ThemeSwitcher />
        <LocaleSwitcher />
      </div>
    </header>
  );
}
