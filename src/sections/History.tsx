import Image from "next/image"
import HistoryImg from "../assets/images/HistoryImg.webp";

const History = () => {
    return (
        <section id="history" className="py-20 md:py-24">
            <div className="container">
                <div className="grid grid-cols-3 gap-6 items-center">
                    <div className="col-span-full md:col-span-2">
                        <h2 className="tracking-tight text-neutral-800 text-4xl md:text-5xl font-semibold">Sobre mí</h2>
                        <p className="my-4 text-base text-neutral-700">
                            Mi nombre es Benjamín Jhosep Veli Mariano, tengo 20 años y soy egresado de Tecsup en la carrera de Diseño y Desarrollo de Software.
                        </p>
                        <p className="my-4 text-base text-neutral-700">Durante mi formación académica participé en distintos proyectos, siendo uno de
                            los más destacados el desarrollo de un recorrido virtual en 360° para el campus
                            de Tecsup, donde pude aplicar conocimientos de frontend, experiencia de usuario
                            y organización de proyectos.
                        </p>
                        <p className="my-4 text-base text-neutral-700">
                            Actualmente cuento con casi 2 años de experiencia en el entorno laboral,
                            participando en el desarrollo de aplicaciones web, consumo de APIs, manejo de
                            bases de datos y trabajo en equipo, siempre enfocado en escribir código limpio,
                            escalable y mantenible.
                        </p>
                        <p className="my-4 text-base text-neutral-700"></p>
                        <span className="text-base font-semibold md:text-xl text-customBlue">Desarrollador FullStack</span>
                    </div>
                    <div className="col-span-full md:col-span-1 flex justify-center overflow-hidden rounded-2xl border-2 w-full h-full cursor-pointer">
                        <Image src={HistoryImg} alt="History Img" className="object-cover w-full h-full hover:scale-110 duration-300" />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default History