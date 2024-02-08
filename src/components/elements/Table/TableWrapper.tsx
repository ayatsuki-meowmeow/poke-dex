import { tv } from "tailwind-variants";
import { ComponentPropsWithoutRef } from "react";

type Props = ComponentPropsWithoutRef<"table">;

export const TableWrapper = ({ children, ...props }: Props) => {
  return (
    <table {...props} className={tableStyle({ className: props.className })}>
      {children}
    </table>
  );
};

const tableStyle = tv({
  base: "",
});
