import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

import Header from "@/components/header/Header";
import Navbar from "@/components/header/Navbar";
import Footer from "@/components/footer/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Enchanted Rose Innovations",
  description: "Creative solutions to complex technical problems.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} flex min-h-screen flex-col bg-slate-950`}
      >
        <Header>
          <Navbar brand={"Enchanted Rose Innovations"} />
        </Header>
        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
