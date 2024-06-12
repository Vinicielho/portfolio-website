"use client";
import { useTranslations } from "next-intl";
import { useState } from "react";

export default function Home() {
  const t = useTranslations("page");
  const [reading, setReading] = useState("theme");

  // Presta atenção nas tags!
  return (
    <div className="size-full flex flex-col items-center">
      <div className="size-full flex flex-col justify-around items-center text-center">
        {/* TODO: Animar as boas vindas */}
        <h1 className="text-7xl ">{t("title")}</h1>
        <div className="textBox text-xl">
          <h2>{t(`herosBox.title`)}</h2>
          <h3>{t(`herosBox.subtitle`)}</h3>
        </div>
      </div>
      {/* This will become a sidenav with scrollspy to toggle between the content */}
      <div className="w-full flex flex-col items center">
        <div className="w-full border-2 rounded-md flex justify-around">
          <div onClick={() => setReading("theme")}>
            {t(`explanations.theme.title`)}
          </div>
          <div onClick={() => setReading("intl")}>
            {t(`explanations.intl.title`)}
          </div>
        </div>
        <div className="py-2">{t(`explanations.${reading}.content`)}</div>
      </div>
    </div>
  );
}
