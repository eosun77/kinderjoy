import Link from "next/link";

export default function Home() {
  return (
    <main>
      <Link href={"/lottery"}>뽑기</Link>
    </main>
  );
}
