import LocaleSwitcher from "./localeSwitcher";
import Logo from "./logo";
import ThemeSwitcher from "./themeSwitcher";

export default function Header() {
  return (
    <header className="flex 2-max w-full justify-between items-center p-4">
      {/* TODO: Create an animation for the logo */}
      <Logo />
      {/* <div>logo</div> */}
      <div className="flex gap-4 items-center">
        <ThemeSwitcher />
        <LocaleSwitcher />
      </div>
    </header>
  );
}
