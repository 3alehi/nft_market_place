import type { Metadata } from "next";
import Navbar from './components/Navbar';

import "./globals.css";

export const metadata: Metadata = {
  title: "NFT Market Place",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body  className="bg-[#2B2B2B] text-white"
      >

        <Navbar/>
        {children}
      </body>
    </html>
  );
}