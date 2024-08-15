import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

import Header from "@/app/components/header/Header";
import Navbar from "@/app/components/header/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Enchanted Rose Innovations",
  description: "Creative solutions to complex technical problems.",
};

export default function RootLayout({ children, }: Readonly<{ 
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className={`${inter.className} bg-slate-950`}>
                <Header>
                    <Navbar brand={"Enchanted Rose Innovations"}/>
                </Header>
                {children}
            </body>
        </html>
    );
}
