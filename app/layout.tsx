import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Greet } from "./components/greet";
import { Counter } from "./components/counter";
import { Navigation } from "./components/navigations";
import { ClerkProvider } from "@clerk/nextjs";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Hello nextjs",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body
          className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        >
          <header className="text-center bg-slate-900 text-white p-5 mb-4">
            <Navigation />
          </header>
          {children}
          {/* <Greet />
        <Counter /> */}
          <footer className="text-3xl text-center text-white bg-slate-900 p-5 mt-4">
            Hello, Let's start from Begin!!
          </footer>
        </body>
      </html>
    </ClerkProvider>
  );
}
