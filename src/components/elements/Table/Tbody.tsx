import { tv } from "tailwind-variants";
import { ComponentPropsWithoutRef } from "react";

type Props = ComponentPropsWithoutRef<"tbody">;

export const Tbody = ({ children, ...props }: Props) => {
  return (
    <tbody {...props} className={tbodyStyle({ className: props.className })}>
      {children}
    </tbody>
  );
};

const tbodyStyle = tv({
  base: "bg-gray-200",
});
