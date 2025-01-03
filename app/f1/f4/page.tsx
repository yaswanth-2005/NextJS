import Link from "next/link";

export default function F1() {
  return (
    <>
      <h2>F1 Page</h2>
      <br />
      <Link href="/f1/f3" className="text-blue-500 underline">
        F3
      </Link>
      <Link href="/aboutme">About</Link>
    </>
  );
}
