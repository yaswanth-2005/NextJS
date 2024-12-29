"use client";

import { useRouter } from "next/navigation";

export default function OrderProduct() {
  const router = useRouter();
  const handleClick = () => {
    console.log("order Placed..");
    router.push("/");
    // router.replace("/")
    // router.back();
    // router.forward();
  };
  return (
    <>
      <h2>Order Product</h2>
      <button
        className="border border-blue-500 rounded p-4 m-5"
        onClick={handleClick}
      >
        Place Order
      </button>
    </>
  );
}

// Navigating Programmatically...
