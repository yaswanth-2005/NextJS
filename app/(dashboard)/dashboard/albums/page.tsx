import React from "react";

async function page() {
  const response = await fetch("https://jsonplaceholder.typicode.com/albums");
  if (!response.ok) throw new Error("Failed to fetch data");

  const albums = await response.json();
  return (
    <>
      {albums.map((album: { id: number; title: string }) => (
        <div
          className="flex flex-row gap-5 m-5 align-center justify-between border border-s-white p-5 rounded-lg"
          key={album.id}
        >
          <h3>{album.title}</h3>
          <p>{album.id}</p>
        </div>
      ))}
    </>
  );
}

export default page;
