import LocaleSwitcher from "./localeSwitcher";
import ThemeSwitcher from "./themeSwitcher";

export default function Header() {
  return (
    <header className="flex 2-max w-full justify-end items-center p-4">
      {/*TODO: Logo> */}
      {/* TODO: Create an animation for the logo */}
      <div className="flex gap-4 items-center">
        <ThemeSwitcher />
        <LocaleSwitcher />
      </div>
    </header>
  );
}
