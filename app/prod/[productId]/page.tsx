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
      <Link href="/prod">GO back</Link>
    </>
  );
}

// Metadata optimizing
