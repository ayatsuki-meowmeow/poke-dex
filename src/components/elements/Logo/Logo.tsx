import Link from "next/link";
import { tv, VariantProps } from "tailwind-variants";
import { PropsWithChildren } from "react";

type Props = {
  className?: string;
} & VariantProps<typeof logoStyle>;

export const Logo = ({ children, className }: PropsWithChildren<Props>) => {
  return (
    <Link href="/">
      <h1 className={logoStyle({ className: className })}>{children}</h1>
    </Link>
  )
}

const logoStyle = tv({
  base: "text-2xl ml-4",
  // 必要になったら使う
  // variants: {
  //   color: {
  //     primary: "text-primary",
  //     secondary: "text-secondary",
  //   },
  // },
});

