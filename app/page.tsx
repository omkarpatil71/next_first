import Link from "next/link";

export default function Home() {
  return (
    <div>
      <Link href={"/about"}>ABOUT</Link>
      <h1>hello bhava</h1>
    </div>
  );
}
