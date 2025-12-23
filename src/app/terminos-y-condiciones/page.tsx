import { DM_Sans } from "next/font/google";

const DmSans = DM_Sans({
    variable: "--font-dm-sans",
    subsets: ["latin"],
})

export const metadata = {
    title: "Términos y condiciones - TomsoJS",
    description: "Consulta los términos y condiciones de TomsoJS, nuestra agencia de desarrollo de software. Conoce sobre costos, uso del servicio, propiedad intelectual, modificaciones, pagos y más.",
    openGraph: {
        title: "Términos y condiciones - TomsoJS",
        description: "Consulta los términos y condiciones de TomsoJS, nuestra agencia de desarrollo de software. Conoce sobre costos, uso del servicio, propiedad intelectual, modificaciones, pagos y más.",
        url: "https://tomsojs.vercel.app/terminos-y-condiciones",
        siteName: "TomsoJS",
        type: "website",
        locale: "es_ES",
    },
    alternates: {
        canonical: "https://tomsojs.vercel.app/terminos-y-condiciones",
    }
};

const page = () => {
    return (
        <section id="terms-and-conditions" className={`${DmSans.className} min-h-screen flex items-center pt-[85px] pb-4`}>
            <div className="container">
                <div className="mx-auto lg:max-w-4xl">
                    <h1 className="text-3xl md:text-5xl font-medium tracking-tighter text-blackCarbon mb-3">Términos y condiciones</h1>
                    <p className="text-metalicGray text-base mb-4">Última actualización: 22 de febrero del 2025</p>

                    <h2 className="text-lg md:text-xl font-medium tracking-tighter mb-3">1. Costo de los Servicios</h2>
                    <p className="text-metalicGray text-base mb-1.5">Cada uno de nuestros servicios tiene un precio inicial establecido, el cual cubre las características básicas mencionadas en cada plan. Sin embargo, el costo final puede variar dependiendo de los requerimientos específicos de cada proyecto.</p>
                    <p className="text-metalicGray text-base mb-1.5">Factores como funcionalidades personalizadas, integraciones adicionales, nivel de seguridad, complejidad del diseño y otros aspectos pueden influir en el precio total. Antes de iniciar cualquier desarrollo, analizaremos tus necesidades y te proporcionaremos una cotización detallada y transparente.</p>
                    <p className="text-metalicGray text-base mb-4">Nuestro objetivo es brindarte una solución a medida, asegurando calidad y eficiencia en cada etapa del proceso.</p>

                    <h2 className="text-lg md:text-xl font-medium tracking-tighter mb-3">2. Uso del Servicio</h2>
                    <p className="text-metalicGray text-base mb-4">Los usuarios que accedan a nuestros servicios se comprometen a utilizarlos de manera legal y ética. No se permite el uso de nuestros desarrollos para actividades ilícitas, fraudulentas o que infrinjan derechos de terceros.</p>

                    <h2 className="text-lg md:text-xl font-medium tracking-tighter mb-3">3. Propiedad Intelectual</h2>
                    <p className="text-metalicGray text-base mb-4">Todos los diseños, códigos y desarrollos entregados a nuestros clientes son propiedad de la agencia hasta que el pago total del servicio haya sido realizado. Una vez completado el pago, la propiedad del código y los archivos será transferida al cliente.</p>

                    <h2 className="text-lg md:text-xl font-medium tracking-tighter mb-3">4. Modificaciones y Revisión del Proyecto</h2>
                    <p className="text-metalicGray text-base mb-4">Cualquier cambio o funcionalidad adicional solicitada después de la aprobación inicial del proyecto podrá generar costos adicionales. Se permitirá un número limitado de revisiones según el acuerdo inicial.</p>

                    <h2 className="text-lg md:text-xl font-medium tracking-tighter mb-3">5. Limitación de Responsabilidad</h2>
                    <p className="text-metalicGray text-base mb-1.5">Nuestra agencia no se hace responsable por:</p>
                    <ul className="list-disc list-inside text-metalicGray text-base mb-4">
                        <li>Errores o fallos causados por modificaciones ajenas a nuestro equipo.</li>
                        <li>Pérdida de datos por parte del cliente.</li>
                        <li>Ataques de seguridad si el cliente no sigue las recomendaciones de protección.</li>
                    </ul>

                    <h2 className="text-lg md:text-xl font-medium tracking-tighter mb-3">6. Confidencialidad</h2>
                    <p className="text-metalicGray text-base mb-4">Toda la información proporcionada por el cliente será tratada de manera confidencial. Nos comprometemos a no compartir, vender ni utilizar los datos para fines distintos a los estipulados en el contrato.</p>

                    <h2 className="text-lg md:text-xl font-medium tracking-tighter mb-3">7. Métodos de Pago y Reembolsos</h2>
                    <p className="text-metalicGray text-base mb-4">Los pagos deben realizarse según los acuerdos establecidos. No se ofrecerán reembolsos una vez iniciado el desarrollo, salvo en casos excepcionales evaluados por la agencia.</p>

                    <h2 className="text-lg md:text-xl font-medium tracking-tighter mb-3">
                        8. Licencia y Atribución
                    </h2>

                    <p className="text-metalicGray text-base mb-1.5">
                        En la página principal de este sitio web se utilizan algunos íconos de frameworks y tecnologías, los cuales están licenciados bajo la
                        <span className="font-semibold"> Atribución 4.0 Internacional (CC BY 4.0)</span>.
                    </p>

                    <p className="text-base mb-1.5">
                        <span className="font-semibold">Autor del material:</span>{" "}
                        <a
                            href="https://www.figma.com/@adnanhassan"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="font-medium text-customBlue"
                        >
                            Adnan Hassan
                        </a>
                    </p>

                    <p className="text-base mb-1.5">
                        <span className="font-semibold">Licencia:</span>{" "}
                        <a
                            href="https://creativecommons.org/licenses/by/4.0/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="font-medium text-customBlue"
                        >
                            Creative Commons BY 4.0
                        </a>
                    </p>

                    <h3 className="text-lg font-medium tracking-tight mt-4 mb-2">Ilustraciones</h3>

                    <p className="text-metalicGray text-base mb-1.5">
                        Este sitio web utiliza ilustraciones de{" "}
                        <a
                            href="https://storyset.com/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="font-semibold"
                        >
                            Storyset
                        </a>{" "}
                        en la página principal bajo la licencia de atribución correspondiente.
                    </p>

                    <ul className="list-disc list-inside text-base text-customBlue">
                        <li>
                            <a
                                href="https://storyset.com/business"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="font-medium"
                            >
                                Business illustrations by Storyset
                            </a>
                        </li>
                        <li>
                            <a
                                href="https://storyset.com/online"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="font-medium"
                            >
                                Online illustrations by Storyset
                            </a>
                        </li>
                        <li>
                            <a
                                href="https://storyset.com/work"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="font-medium"
                            >
                                Work illustrations by Storyset
                            </a>
                        </li>
                    </ul>

                </div>
            </div>
        </section >
    )
}

export default page