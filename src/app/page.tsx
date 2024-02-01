import Link from "next/link";

export default function Home() {
  return (
    <div className="flex justify-center items-center h-screen flex-col">
      <h1 className="flex text-xl justify-center items-center">
        Welcome to Pokemon dex
      </h1>
      <Link href="/welcome">Let&apos;s Go</Link>
    </div>
  );
}
