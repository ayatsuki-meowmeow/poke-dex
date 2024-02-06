import { tv } from "tailwind-variants";

export const Footer = () => {
  return (
    <footer className={footerStyle()}>
      <p className={messageStyle()}>
        &quot;You can be &apos;Pokemon Master&apos;......&quot;
      </p>
    </footer>
  );
};

const footerStyle = tv({
  base: "bg-footer h-[3%] w-screen flex items-center justify-center",
});

const messageStyle = tv({
  base: "text-xs italic",
});
