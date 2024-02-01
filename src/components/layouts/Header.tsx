import { tv } from "tailwind-variants";

export const Header = () => {
  return (
    <header className={headerStyle()}>
      {/* いずれLinkにする */}
      <h1 className={titleStyle()}>Pokemon Dex</h1>
    </header>
  );
};

const headerStyle = tv({
  base: "bg-header h-[7%] w-screen flex items-center",
});

const titleStyle = tv({
  base: "text-2xl ml-4",
});
