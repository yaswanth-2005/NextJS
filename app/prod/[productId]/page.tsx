import { Metadata } from "next";
import Link from "next/link";
type Props = {
  params: {
    productId: string;
  };
};

export const generateMetadata = async ({
  params,
}: Props): Promise<Metadata> => {
  const title = await new Promise((resolve) => {
    setTimeout(() => {
      resolve(`iphone ${params.productId}`);
    }, 100);
  });

  return {
    title: `product ${title}`,
  };
};

export default function IndividualProducts({ params }: Props) {
  return (
    <>
      <h2>Details about the product {params.productId}</h2>
      <Link href="/prod" className="border border-blue-500 rounded-lg p-2">
        GO back
      </Link>
    </>
  );
}

// Metadata optimizing
