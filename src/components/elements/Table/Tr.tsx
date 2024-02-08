import { tv, VariantProps } from "tailwind-variants";
import { ComponentPropsWithoutRef } from "react";

type Props = ComponentPropsWithoutRef<"tr"> & VariantProps<typeof trStyle>;

export const Tr = ({ children, ...props }: Props) => {
  return (
    <tr {...props} className={trStyle({ className: props.className })}>
      {children}
    </tr>
  );
};

const trStyle = tv({
  base: "",
  variants: {
    parts: {
      thead: "bg-gray-300",
      tbody: "bg-gray-100",
    },
  },
});
