import Link from "next/link";
import { tv } from "tailwind-variants";

export default function Home() {
  return (
    <div className={mainStyle()}>
      <h1>Welcome to Pokemon dex</h1>
      <Link href="/dictionary" className={linkStyle()}>
        Let&apos;s Go
      </Link>
    </div>
  );
}

const linkStyle = tv({
  base: "hover:cursor-pointer underline text-link-default hover:text-link-hover",
});

const mainStyle = tv({
  base: "flex text-xl justify-center items-center h-full flex-col",
});
