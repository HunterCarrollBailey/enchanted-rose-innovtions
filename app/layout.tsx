import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

import Header from "@/app/components/header/Header";
import Navbar from "@/app/components/header/Navbar";
import Footer from "@/app/components/footer/Footer";

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
            <body className={`${inter.className} bg-slate-950 flex flex-col min-h-screen`}>
                <Header>
                    <Navbar brand={"Enchanted Rose Innovations"}/>
                </Header>
                <main className="flex-grow">
                    {children}
                </main>
                <Footer />
            </body>
        </html>
    );
}
