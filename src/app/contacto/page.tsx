import Contact from "@/sections/Contact";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "TomsoJs - Contacto",
  description: "Escríbenos y da el primer paso para hacer realidad tu proyecto. ¡Estamos listos para ayudarte!",
  openGraph: {
    title: "TomsoJs - Contacto",
    description: "Escríbenos y da el primer paso para hacer realidad tu proyecto. ¡Estamos listos para ayudarte!",
    url: "https://tomsojs.vercel.app/contacto",
    siteName: "TomsoJS",
    type: "website",
    locale: "es_ES",
  },
  alternates: {
    canonical: "https://tomsojs.vercel.app/contacto",
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