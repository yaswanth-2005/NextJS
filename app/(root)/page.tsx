import Image from "next/image";
import Hello from "../components/Hello";
import { title } from "process";

export const metadata = {
  title: "Yaswanth Varada | NextJS",
  description: "Hello, world NextJS is pretty much cool!!!",
};

export default function Home() {
  console.log("Hello what are you doing - server Asking");

  return (
    <>
      <Hello />
    </>
  );
}
