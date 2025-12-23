import { Metadata } from "next";
import { DM_Sans } from "next/font/google";
import Link from "next/link";

const DmSans = DM_Sans({
    variable: "--font-dm-sans",
    subsets: ["latin"],
})

export const metadata: Metadata = {
    title: "Políticas de privacidad - TomsoJS",
    description: "Consulta nuestras políticas de privacidad y cómo protegemos tu información personal en TomsoJS.",
    openGraph: {
        title: "Políticas de privacidad - TomsoJS",
        description: "Consulta nuestras políticas de privacidad y cómo protegemos tu información personal en TomsoJS.",
        url: "https://tomsojs.vercel.app/politicas-de-privacidad",
        siteName: "TomsoJS",
        type: "website",
        locale: "es_ES",
    },
    alternates: {
        canonical: "https://tomsojs.vercel.app/politicas-de-privacidad",
    }
};

const page = () => {
    return (
        <section id="terms-and-conditions" className={`${DmSans.className} min-h-screen flex items-center pt-[85px] pb-4 `}>
            <div className="container">
                <div className="mx-auto lg:max-w-4xl">
                    <h1 className="text-3xl md:text-5xl font-medium tracking-tighter text-blackCarbon mb-3">Póliticas de privacidad</h1>
                    <p className="text-metalicGray text-base mb-4">Última actualización: 22 de febrero del 2025</p>

                    <h2 className="text-lg md:text-xl font-medium tracking-tighter mb-3">1. Uso de la Información y Protección de Datos</h2>
                    <p className="text-metalicGray text-base mb-1.5">Los datos personales proporcionados a través del formulario de contacto en nuestra página web serán utilizados exclusivamente para responder a las consultas y solicitudes enviadas por los usuarios.</p>
                    <p className="text-metalicGray text-base mb-1.5">Nos comprometemos a no vender, compartir ni utilizar esta información con fines comerciales, publicitarios o de lucro. Toda la información ingresada se manejará con confidencialidad y será eliminada o archivada de forma segura una vez gestionada la consulta.</p>
                    <p className="text-metalicGray text-base mb-4">El usuario al enviar su información reconoce y acepta que su mensaje será recibido y tratado únicamente con el propósito de brindar una respuesta a su solicitud.</p>

                    <h2 className="text-lg md:text-xl font-medium tracking-tighter mb-3">2. Derechos del Usuario</h2>
                    <p className="text-metalicGray text-base mb-1.5">Los usuarios tienen derecho a:</p>
                    <ul className="list-disc list-inside text-metalicGray text-base mb-4">
                        <li>Solicitar la corrección de datos incorrectos o desactualizados.</li>
                        <li>Pedir la eliminación de sus datos personales de nuestros registros.</li>
                        <li>Revocar su consentimiento para el uso de sus datos en cualquier momento.</li>
                    </ul>
                    <p className="text-metalicGray text-base mb-4">Para ejercer estos derechos, el usuario puede comunicarse con nosotros a través de los medios indicados en la sección de <Link href="/contacto" className="text-customBlue font-medium">Contacto</Link>.</p>

                    <h2 className="text-lg md:text-xl font-medium tracking-tighter mb-3">3. Contacto</h2>
                    <p className="text-metalicGray text-base mb-4">Si tiene comentarios o preguntas sobre nuestra Política de privacidad, contáctenos <Link href="/contacto" className="text-customBlue font-medium">Formulario de contacto</Link></p>

                    <h2 className="text-lg md:text-xl font-medium tracking-tighter mb-3"></h2>
                    <p className="text-metalicGray text-base mb-1.5"></p>

                </div>
            </div>
        </section>
    )
}

export default page