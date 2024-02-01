import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { tv } from "tailwind-variants";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Pokemon dex",
  description: "This is Pokemon dex",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body className={mainStyle()}>{children}</body>
    </html>
  );
}

const mainStyle = tv({
  base: "bg-main",
});
