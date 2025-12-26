import Hero from "@/sections/Hero"
// import Process from "@/sections/Process"
// import Question from "@/sections/Question"
import Technology from "@/sections/Technology"

export const metadata = {
  title: "TomsoJs - Inicio",
  description: "Desarrollador Full Stack con casi 2 años de experiencia, especializado en la creación de aplicaciones web y sistemas escalables, orientados a resultados.",
  openGraph: {
    title: "Términos y condiciones - TomsoJS",
    description: "Desarrollador Full Stack con casi 2 años de experiencia, especializado en la creación de aplicaciones web y sistemas escalables, orientados a resultados.",
    url: "https://benjamin-veli-mariano.vercel.app/",
    siteName: "TomsoJS",
    type: "website",
    locale: "es_ES",
  },
  alternates: {
    canonical: "https://benjamin-veli-mariano.vercel.app/",
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