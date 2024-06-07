// Code with a dropdown instead of a toggle, for reference
// "use client";
// import commons from "../../../commons.json";
// import { useLocale } from "next-intl";
// import { useRouter } from "next/navigation";
// import { ChangeEvent, useTransition } from "react";

// export default function LocaleSwitcher() {
//   const [isPending, startTransition] = useTransition();
//   const router = useRouter();
//   const localActive = useLocale();

//   const onSelectChange = (e: ChangeEvent<HTMLSelectElement>) => {
//     const nextLocale = e.target.value;
//     startTransition(() => {
//       router.replace(`/${nextLocale}`);
//     });
//   };
//   return (
//     <select
//       className="border rounded-md border-accent option:bg-transparent"
//       defaultValue={localActive}
//       onChange={onSelectChange}
//       disabled={isPending}
//     >
//       {commons.locales.map((locale) => (
//         <option key={locale} value={locale}>
//           {locale}
//         </option>
//       ))}
//     </select>
//   );
// }

"use client";
import commons from "../../../commons.json";
import { useLocale } from "next-intl";
import { useRouter } from "next/navigation";
import { useTransition } from "react";

export default function LocaleSwitcher() {
  const [isPending, startTransition] = useTransition();
  const router = useRouter();
  const currentLocale = useLocale();

  const toggleLocale = () => {
    const nextLocale = commons.locales.find(
      (locale) => locale !== currentLocale
    );
    startTransition(() => {
      router.replace(`/${nextLocale}`);
    });
  };

  return (
    <button
      className="border rounded-md border-accent px-4 py-2"
      onClick={toggleLocale}
      disabled={isPending}
    >
      {currentLocale}
    </button>
  );
}
