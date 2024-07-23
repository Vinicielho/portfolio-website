import { BrandGithub, BrandLinkedin, Mail } from "tabler-icons-react";
import { useTranslations } from "next-intl";
import Link from "next/link";

export default function Footer() {
  const t = useTranslations("components.footer");

  return (
    <footer className="mt-80 contentWidth box-content flex gap-1 justify-between p-4 rounded-t-xl myShadow">
      <div className="w-1/3">{t(`thanks`)}</div>
      <div>
        <div className="myBox flex flex-col gap-1 text-center	">
          <p>{t(`contact`)}</p>
          <Link
            className="inlineContent"
            href="https://www.linkedin.com/in/viniciuscoelho1995/"
          >
            <BrandLinkedin />
            /viniciuscoelho1995
          </Link>
          <Link className="inlineContent" href="https://github.com/Vinicielho">
            <BrandGithub />
            /Vinicielho
          </Link>
          <Link
            className="inlineContent"
            href="mailto:vinicius_webdev@proton.me"
          >
            <Mail />
            vinicius_webdev@proton.me
          </Link>
        </div>
      </div>
    </footer>
  );
}
