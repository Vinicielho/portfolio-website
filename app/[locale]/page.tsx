import { useTranslations } from "next-intl";

export default function Home() {
  const t = useTranslations("page");

  return (
    <div className="h-full flex flex-col gap-4 justify-center ">
      <div className="textBox text-center">
        {/* TODO: Animate the hero's welcome */}
        <h1 className="text-4xl">{t("first")}</h1>
        <h2 className="text-3xl">{t("second")}</h2>
        <h3 className="text-3xl">{t("third")}</h3>
      </div>
      <div>
        <div>{t("explain1")}</div>
        <div>{t("explain2")}</div>
      </div>
    </div>
  );
}
