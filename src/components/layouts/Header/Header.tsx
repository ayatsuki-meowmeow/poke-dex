import { tv } from "tailwind-variants";
import { MainLogo } from "@/features/header/components/MainLogo";

export const Header = () => {
  return (
    <header className={headerStyle()}>
      <MainLogo />
    </header>
  );
};

const headerStyle = tv({
  base: "bg-header h-[7%] w-screen flex items-center",
});
