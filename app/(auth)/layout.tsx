"use client";

import Link from "next/link";
import React, { useState } from "react";
import { usePathname } from "next/navigation";

const navlinks = [
  { name: "Register", href: "/register" },
  { name: "Login", href: "/login" },
  { name: "Forgot Password", href: "/forgot-password" },
];

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [input, setInput] = useState(" ");
  const pathname = usePathname();
  return (
    <div>
      <p className="text-2xl text-blue-500 text-center">{children}</p>
      <div>
        <input
          className="border-blue-500 border p-2 bg-transparent rounded m-3"
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
      </div>
      {navlinks.map((link) => {
        const isActive = pathname.startsWith(link.href);
        return (
          <div>
            <Link
              href={link.href}
              key={link.name}
              className={
                isActive ? "font-bold text-blue-500 mr-4" : "text-white mr-4"
              }
            >
              {link.name}
            </Link>
          </div>
        );
      })}
    </div>
  );
}

//usePath name for knowing the current path also called as Active links..
// if we replace the file name as the template.tsx then the state is not preserved it would be lost and the resynchronization would be happen..
