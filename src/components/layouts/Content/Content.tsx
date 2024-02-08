import { tv } from "tailwind-variants";
import { PropsWithChildren } from "react";

export const Content = ({ children }: PropsWithChildren) => {
  return <div className={contentStyle()}>{children}</div>;
};

const contentStyle = tv({
  base: "h-[90%] w-screen",
});
