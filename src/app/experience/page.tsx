import Service from "@/sections/Service"
import { Metadata } from "next"

export const metadata: Metadata = {
    title: "TomsoJs - Experience",
    description: "Desarrollador Full Stack con dos años de experiencia en ERP, plataformas web y sistemas de gestión, usando Angular, React, C#, Django y SQL para soluciones escalables y orientadas al negocio.",
    openGraph: {
        title: "TomsoJs - Experience",
        description: "Desarrollador Full Stack con dos años de experiencia en ERP, plataformas web y sistemas de gestión, usando Angular, React, C#, Django y SQL para soluciones escalables y orientadas al negocio.",
        url: "https://benjamin-veli-mariano.vercel.app/experience",
        siteName: "TomsoJS",
        type: "website",
        locale: "es_ES",
    },
    alternates: {
        canonical: "https://benjamin-veli-mariano.vercel.app/experience",
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