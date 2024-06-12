import { useTranslations } from "next-intl";
import Link from "next/link";

export default function Footer() {
  const t = useTranslations("components.header");

  // faz a tradução, no lugar dos nomes põe apenas os logos
  return (
    <footer className="flex gap-1 py-2">
      <p>Find me on </p>
      <div className="underline flex gap-1">
        <Link href="https://www.linkedin.com/in/viniciuscoelho1995/">
          Linkedin,
        </Link>
        <Link href="https://github.com/Vinicielho">Github</Link>
      </div>
      or email: viniciuscoelho1995@yahoo.com.br
    </footer>
  );
}
