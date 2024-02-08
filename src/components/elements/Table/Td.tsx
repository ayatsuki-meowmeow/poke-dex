import { tv } from "tailwind-variants";
import { ComponentPropsWithoutRef } from "react";

type Props = ComponentPropsWithoutRef<"td">;

export const Td = ({ children, ...props }: Props) => {
  return (
    <td {...props} className={tdStyle({ className: props.className })}>
      {children}
    </td>
  );
};

const tdStyle = tv({
  base: "",
});
