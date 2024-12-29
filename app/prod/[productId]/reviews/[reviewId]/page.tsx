import { notFound } from "next/navigation";

export default function reviews({
  params,
}: {
  params: {
    productId: string;
    reviewId: string;
  };
}) {
  if (parseInt(params.reviewId) > 1000) {
    notFound();
  }

  return (
    <h2>
      Review {params.reviewId} for the product {params.productId}
    </h2>
  );
}

// Dynamic nested routing..
