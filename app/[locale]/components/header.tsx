"use client";
import { useLayoutEffect, useRef, useState } from "react";
import LocaleSwitcher from "./localeSwitcher";
import ThemeSwitcher from "./themeSwitcher";

export default function Header() {
  const headerRef = useRef<HTMLDivElement>(null);
  const [onTop, setOnTop] = useState(false);

  useLayoutEffect(() => {
    const handleScroll = () => {
      setOnTop(window.scrollY === 0);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      ref={headerRef}
      className={`sticky top-0 contentWidth box-content flex justify-between items-center p-4 rounded-b-xl ${
        onTop ? "myShadow" : "backdrop-blur-sm"
      }`}
    >
      Logo
      {/* TODO: M E Z M E R I Z E */}
      <div className="flex gap-4 items-center">
        <ThemeSwitcher />
        <LocaleSwitcher />
      </div>
    </header>
  );
}
