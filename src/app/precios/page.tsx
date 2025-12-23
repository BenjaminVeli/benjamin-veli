import Service from "@/sections/Service"
import { Metadata } from "next"

export const metadata: Metadata = {
    title: "TomsoJs - Precios",
    description: "Descubre los mejores planes para desarrollar tu presencia digital. Desde páginas web optimizadas hasta plataformas completas y tiendas virtuales con integración de pagos. Elige el plan ideal y haz crecer tu negocio online con transparencia y calidad.",
    openGraph: {
        title: "TomsoJs - Precios",
        description: "Descubre los mejores planes para desarrollar tu presencia digital. Desde páginas web optimizadas hasta plataformas completas y tiendas virtuales con integración de pagos. Elige el plan ideal y haz crecer tu negocio online con transparencia y calidad.",
        url: "https://tomsojs.vercel.app/precios",
        siteName: "TomsoJS",
        type: "website",
        locale: "es_ES",
    },
    alternates: {
        canonical: "https://tomsojs.vercel.app/precios",
    }
};

const page = () => {
    return (
        <>
            <Service />
        </>
    )
}

export default page