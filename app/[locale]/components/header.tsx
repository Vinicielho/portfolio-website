"use client";
import { useLayoutEffect, useRef, useState } from "react";
import LocaleSwitcher from "./localeSwitcher";
import ThemeSwitcher from "./themeSwitcher";

export default function Header() {
  const headerRef = useRef<HTMLDivElement>(null);
  // TODO: Terminal complains about scrollY not being initialized but it works anyhow??
  const [onTop, setOnTop] = useState(scrollY > 0 ? false : true);

  useLayoutEffect(() => {
    const handleScroll = () => {
      if (headerRef.current) {
        if (window.scrollY > 0) {
          setOnTop(false);
        } else {
          setOnTop(true);
        }
      }
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      ref={headerRef}
      className={`sticky top-0 contentWidth box-content flex justify-between items-center p-4 rounded-b-xl transition-all ${
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
