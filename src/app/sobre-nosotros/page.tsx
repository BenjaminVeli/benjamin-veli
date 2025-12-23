import AboutUs from "@/sections/AboutUs"
import History from "@/sections/History"
// import Involved from "@/sections/Involved"
import LatestProyect from "@/sections/LatestProyect"

export const metadata = {
  title: "TomsoJs - Sobre Nosotros",
  description: "Conoce nuestra historia y el equipo detrás de nuestra agencia de software. Desde una visión compartida hasta soluciones innovadoras para impulsar tu negocio.",
  openGraph: {
    title: "TomsoJs - Sobre Nosotros",
    description: "Conoce nuestra historia y el equipo detrás de nuestra agencia de software. Desde una visión compartida hasta soluciones innovadoras para impulsar tu negocio.",
    url: "https://tomsojs.vercel.app/sobre-nosotros",
    siteName: "TomsoJS",
    type: "website",
    locale: "es_ES",
  },
  alternates: {
    canonical: "https://tomsojs.vercel.app/sobre-nosotros",
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