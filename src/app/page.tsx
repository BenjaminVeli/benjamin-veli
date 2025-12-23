import Hero from "@/sections/Hero"
// import Process from "@/sections/Process"
// import Question from "@/sections/Question"
import Technology from "@/sections/Technology"

export const metadata = {
  title: "TomsoJs - Inicio",
  description: "Desarrollamos soluciones digitales innovadoras para potenciar tu presencia online. Creación de software a medida, desarrollo web y optimización SEO.",
  openGraph: {
    title: "Términos y condiciones - TomsoJS",
    description: "Desarrollamos soluciones digitales innovadoras para potenciar tu presencia online. Creación de software a medida, desarrollo web y optimización SEO.",
    url: "https://tomsojs.vercel.app/",
    siteName: "TomsoJS",
    type: "website",
    locale: "es_ES",
  },
  alternates: {
    canonical: "https://tomsojs.vercel.app/",
  }
};

const page = () => {
  return (
    <>
      <Hero />
      <Technology />
      {/* <Process />
      <Question /> */}
    </>
  )
}

export default page