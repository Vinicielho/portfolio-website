import { useTranslations } from "next-intl";

export default function Home() {
  const t = useTranslations("page");

  return (
    <main>
      <h1>{t("first")}</h1>
      <h2>{t("second")}</h2>
      <h3>{t("third")}</h3>
    </main>
  );
}
