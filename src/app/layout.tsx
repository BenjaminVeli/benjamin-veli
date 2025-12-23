import type { Metadata } from "next";

import { Geist } from "next/font/google";
import localFont from 'next/font/local'

import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const myFont = localFont({ src: './ABCWhyte-Regular-Trial.woff2' })


export const metadata: Metadata = {
  title: "TomsoJS",
  description: "Agencia de Software",
  openGraph: {
    title: "TomsoJS",
    description: "Agencia de Software",
    url: "https://tomsojs.vercel.app/",
    siteName: "TomsoJS",
    type: "website",
    locale: "es_ES",
  },
  alternates: {
    canonical: "https://tomsojs.vercel.app/",
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.className} ${myFont.className}`}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
