import { useTranslations } from "next-intl";
import PresentationBox from "./components/presentationBox";

export default function Home() {
  const t = useTranslations("page");
  const c = useTranslations("components");

  // Presta atenção nas tags!
  return (
    <div className="flex flex-col items-center">
      <div className="h-screen flex flex-col justify-around items-center text-center">
        {/* TODO: Animar as boas vindas */}
        <h1 className="text-8xl ">{t("title")}</h1>
        <div className="myBox myShadow w-3/4 text-xl animate-fadeIn">
          <h2>{t("heroBox")}</h2>
        </div>
      </div>
      <PresentationBox presentations={c.raw("presentationBox")} />
    </div>
  );
}