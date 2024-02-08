import { tv } from "tailwind-variants";
import { ComponentPropsWithoutRef } from "react";

type Props = ComponentPropsWithoutRef<"th">;

export const Th = ({ children, ...props }: Props) => {
  return (
    <th {...props} className={thStyle({ className: props.className })}>
      {children}
    </th>
  );
};

const thStyle = tv({
  base: "",
});
