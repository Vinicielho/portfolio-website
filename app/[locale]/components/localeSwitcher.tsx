"use client";
import commons from "../../../commons.json";
import { useLocale } from "next-intl";
import { useRouter } from "next/navigation";
import { useTransition } from "react";

// TODO: for some reason the whole page updates and scrolls back up, cant it just update and stay where it was?
export default function LocaleSwitcher() {
  const [isPending, startTransition] = useTransition();
  const router = useRouter();
  const currentLocale = useLocale();

  // TODO: put this directly in the onClick
  const toggleLocale = () => {
    const nextLocale = commons.locales.find(
      (locale) => locale !== currentLocale
    );
    startTransition(() => {
      router.replace(`/${nextLocale}`);
    });
  };

  return (
    <button className="myBox" onClick={toggleLocale} disabled={isPending}>
      {currentLocale}
    </button>
  );
}