export default async function Product({ params }: { params: { id: string } }) {
  const { id } = await params; // dynamic parameters use [] convention in the folder name..
  return <h1>Product: {id}</h1>;
}
