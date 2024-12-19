import React from "react";

const page = ({ params }: { params: { id: string } }) => {
  const { id } = params;
  return (
    <div>
      <h1>Generic User Details!!</h1>
      <h2>User ID : {id}</h2>
    </div>
  );
};

export default page;
