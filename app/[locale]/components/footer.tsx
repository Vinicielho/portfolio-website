import { useTranslations } from "next-intl";
import Link from "next/link";

export default function Footer() {
  const t = useTranslations("layout.footer");

  //TODO: faz a tradução, no lugar dos nomes põe apenas os logos
  return (
    // TODO: agradecimentos de um lado, contatos no outro
    <footer className="flex gap-1 py-2">
      <p>{t(`title`)}</p>
      <div className="underline flex gap-1">
        <Link href="https://www.linkedin.com/in/viniciuscoelho1995/">
          Linkedin,
        </Link>
        <Link href="https://github.com/Vinicielho">Github</Link>
        {/* Oncliock add to clipboard: */}
      </div>
      {t(`or`)} email: vinicius_webdev@proton.me
    </footer>
  );
}
