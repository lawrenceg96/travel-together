import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import localFont from "next/font/local";

import { WishlistProvider } from "@/context/WishlistContext";

import "./globals.css";


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});


const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});


const benguiat = localFont({

  src: "../public/fonts/benguiat-bold.ttf",

  variable: "--font-benguiat",

  display: "swap",

});



export const metadata: Metadata = {
  title: "Travel Together",
  description: "Ciara & Lawrence's Holiday Planner",
};



export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (

    <html
      lang="en"
      className={`
        ${geistSans.variable}
        ${geistMono.variable}
        ${benguiat.variable}
        h-full
        antialiased
      `}
    >

      <body className="min-h-full flex flex-col">

        <WishlistProvider>

          {children}

        </WishlistProvider>

      </body>

    </html>

  );

}