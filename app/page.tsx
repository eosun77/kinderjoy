import Link from "next/link";

export default function Home() {
  return (
    <main>
      <Link href={"/user"}>users</Link>
    </main>
  );
}
