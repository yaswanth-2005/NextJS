"use client";

import { useEffect } from "react";

export default function Error({
  error,
  reset,
}: {
  error: Error;
  reset: () => void;
}) {
  useEffect(() => {
    console.log(error);
  }, [error]);

  return (
    <div className="flex items-center justify-center h-screen">
      <div className="text-2xl text-red-500">Error fetching users Data..</div>
      <br />
      <div>{error.message}</div>
      <br />
      <button onClick={reset}>Try Again</button>
      {/* recovering from the errors */}
    </div>
  );
}
