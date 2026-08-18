import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar"
import  Footer from "@/components/footer"
import SessionWrapper from "@/components/sessionwrapper"

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Buy me a Brownie ",
  description: "Buy me a borwnie . A clone or patreon , where fans fund there favourite creators .",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col text-white">
        <SessionWrapper>
        <Navbar/>
        <div className="min-h-[87vh] bg-[#090a20]   ">
        {children}
        </div>
        <Footer/>
        </SessionWrapper>
        </body>
    </html>
  );
}