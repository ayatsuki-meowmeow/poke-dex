import { tv } from "tailwind-variants";
import { ComponentPropsWithoutRef } from "react";

type Props = ComponentPropsWithoutRef<"thead">;

export const Thead = ({ children, ...props }: Props) => {
  return (
    <thead {...props} className={theadStyle({ className: props.className })}>
      {children}
    </thead>
  );
};

const theadStyle = tv({
  base: "bg-gray-400",
});
