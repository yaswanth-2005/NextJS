import React from "react";
import { Greet } from "../components/greet";
import { Counter } from "../components/counter";

const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <h1 className="text-3xl text-center bg-slate-900 text-white p-5 mb-4">
        Navbar
      </h1>
      {children}
      <Greet />
      <Counter />
      <footer className="text-3xl text-center text-white bg-slate-900 p-5 mt-4">
        Hello, Let's start from Begin!!
      </footer>
    </div>
  );
};

export default layout;
