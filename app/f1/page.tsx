import Link from "next/link";

export default function F1() {
  return (
    <>
      <h2>F1 Page</h2>
      <br />
      <Link href="/f1/f2" className="text-blue-500 underline">
        F2
      </Link>
    </>
  );
}

// (.) To match segments on the same level
// (..) To match segments on the one level above
// (..)(..) To match segements on the two levels above
// (...) To match segments in the root app directory.
