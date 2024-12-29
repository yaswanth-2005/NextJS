import Link from "next/link";

export default function Prod() {
  const productId = 100;
  return (
    <>
      <h1>Products Page</h1>
      <h2>
        <Link href="/prod/1">Product1</Link>
      </h2>
      <h2>
        <Link href="/prod/2">Product2</Link>
      </h2>
      <h2>
        <Link href="/prod/3" replace>
          Product3
        </Link>
      </h2>
      <h2>
        <Link href={`/prod/${productId}`}>Product 100</Link>
      </h2>
    </>
  );
}
