import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Thirdweb from "@/components/Thirdweb";
import Header from "@/components/Header";
import { Toaster } from "react-hot-toast";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "PSCU Dex",
  description: "Pulsar Star Corporation United - Decentralized exchange to trade UFC ERC-20 tokens on Avalanche.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Thirdweb>
        <body className={`${inter.className} min-h-screen dark bg-black flex flex-col`}>
          <Toaster />
          <Header />
          {children}
        </body>
      </Thirdweb>
    </html>
  );
}
