"use client";
import { useTranslations } from "next-intl";
import { useState } from "react";

export default function Home() {
  const t = useTranslations("page");
  const [reading, setReading] = useState("theme");

  // Presta atenção nas tags!
  return (
    <div className="flex flex-col items-center">
      <div className="h-screen flex flex-col justify-around items-center text-center">
        {/* TODO: Animar as boas vindas */}
        <h1 className="text-7xl">{t("title")}</h1>
        <div className="myBox myShadow w-3/4 text-xl animate-fadeIn">
          <h2>{t("heroBox")}</h2>
        </div>
      </div>
      {/* Essa caixa vai ter um side nav que vai olhar a lista de conteudos dentro das traduções, criar um link pra cada um e selecionar ele para colocar aqui e ser lido*/}
      <div className="w-full flex items center">
        <div>Sidenav</div>
        <div>
          <div className="text-center">Título</div>
          <div className="py-4 ">{t(`explanations.${reading}.content`)}</div>
        </div>
      </div>
    </div>
  );
}
