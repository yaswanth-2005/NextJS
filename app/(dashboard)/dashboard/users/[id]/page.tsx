import React from "react";

const page = async ({ params }: { params: { id: string } }) => {
  const { id } = await params;
  return (
    <div>
      <h1>Generic User Details!!</h1>
      <h2>User ID : {id}</h2>
    </div>
  );
};

export default page;
