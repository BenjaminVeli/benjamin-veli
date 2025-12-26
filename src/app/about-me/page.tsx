import AboutUs from "@/sections/AboutUs"
import History from "@/sections/History"
// import Involved from "@/sections/Involved"
import LatestProyect from "@/sections/LatestProyect"

export const metadata = {
  title: "TomsoJs - About Me",
  description: "Mi nombre es Benjamín Jhosep Veli Mariano, tengo 20 años y soy egresado de Tecsup en la carrera de Diseño y Desarrollo de Software.",
  openGraph: {
    title: "TomsoJs - About Me",
    description: "Mi nombre es Benjamín Jhosep Veli Mariano, tengo 20 años y soy egresado de Tecsup en la carrera de Diseño y Desarrollo de Software.",
    url: "https://benjamin-veli-mariano.vercel.app/about-me",
    siteName: "TomsoJS",
    type: "website",
    locale: "es_ES",
  },
  alternates: {
    canonical: "https://benjamin-veli-mariano.vercel.app/about-me",
  }
};

const page = () => {
  return (
    <div>
      <AboutUs />
      <History />
      <LatestProyect />
      {/* <Involved /> */}
    </div>
  )
}

export default page