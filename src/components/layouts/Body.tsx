import { tv } from "tailwind-variants";
import { PropsWithChildren } from "react";

export const Body = ({ children }: PropsWithChildren) => {
  return <div className={bodyStyle()}>{children}</div>;
};

const bodyStyle = tv({
  base: "h-[90%] w-screen",
});
