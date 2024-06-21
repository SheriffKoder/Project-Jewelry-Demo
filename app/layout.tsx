import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Amira Jewelry Designs",
  description: "Digital Designs Shop",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      
      
      <body className={`relative min-h-[100dvh]`}>
        <span className="absolute top-0 w-full">
          <Header />
        </span>
        {children}
        {/* <Footer /> */}

      </body>
    </html>
  );
}
