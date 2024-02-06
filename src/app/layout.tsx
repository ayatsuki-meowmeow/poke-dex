import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { tv } from "tailwind-variants";
import { Header } from "@/components/layouts/Header/Header";
import { Footer } from "@/components/layouts/Footer/Footer";
import { Body } from "@/components/layouts/Content/Content";

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
      <body className={mainStyle()}>
        <Header />
        <Body>{children}</Body>
        <Footer />
      </body>
    </html>
  );
}

const mainStyle = tv({
  base: "bg-main h-screen w-screen font-sans overflow-hidden",
});
