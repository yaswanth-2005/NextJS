import Link from "next/link";
import React from "react";

const page = () => {
  return (
    <>
      <h1 className="mt-10 mb-4">Dashboard Users</h1>
      <Link href="/dashboard/users/1">User 1</Link>
      <br />
      <Link href="/dashboard/users/2">User 2</Link>
      <br />
      <Link href="/dashboard/users/3">User 3</Link>
      <br />
      <Link href="/dashboard/users/4">User 4</Link>
    </>
  );
};

export default page;
