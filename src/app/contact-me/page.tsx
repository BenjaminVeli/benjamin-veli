import Contact from "@/sections/Contact";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "TomsoJs - Contact Me",
  description: "¿Tienes un proyecto o una oportunidad profesional? Hablemos.",
  openGraph: {
    title: "TomsoJs - Contact Me",
    description: "¿Tienes un proyecto o una oportunidad profesional? Hablemos.",
    url: "https://benjamin-veli-mariano.vercel.app/contact-me",
    siteName: "TomsoJS",
    type: "website",
    locale: "es_ES",
  },
  alternates: {
    canonical: "https://benjamin-veli-mariano.vercel.app/contact-me",
  }
};

const page = () => {
  return (
    <>
      <Contact />
    </>
  );
};

export default page