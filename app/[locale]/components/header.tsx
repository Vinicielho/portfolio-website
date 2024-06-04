import { useTranslations } from "next-intl";

import LocaleSwitcher from "./localeSwitcher";
import ThemeSwitcher from "./themeSwitcher";

export default function Header() {
  const t = useTranslations("components.header");

  return (
    <header className="flex 2-max">
      <h1 className="text-2xl italic text-accent">{t("title")}</h1>
      <LocaleSwitcher />
      <ThemeSwitcher />
    </header>
  );
}
