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
        <h1 className="text-7xl ">{t("title")}</h1>
        <div className="myBox myShadow w-3/4 text-xl animate-fadeIn">
          <h2>{t("heroBox")}</h2>
        </div>
      </div>
      {/* Caixa nomeada Meus projetos, e sidenav pra selecionar qual projeto mostrar */}
      <div className="myBox w-full flex flex-col items center">
        <div>Título</div>
        <div>sidenav com "meus projetos" como primeira opção</div>
        <div className="py-4 ">{t(`explanations.${reading}.content`)}</div>
      </div>
    </div>
  );
}
