import Image from "next/image"
import HistoryImg from "../assets/images/HistoryImg.webp";

const History = () => {
    return (
        <section id="history" className="py-20 md:py-24">
            <div className="container">
                <div className="grid grid-cols-3 gap-6 items-center">
                    <div className="col-span-full md:col-span-2">
                        <h2 className="tracking-tight text-neutral-800 text-4xl md:text-5xl font-semibold">Nuestra historia</h2>
                        <p className="my-4 text-base text-neutral-700">Todo comenzó con un grupo de amigos en su último ciclo, unidos por una visión en común: crear una agencia de software donde cada uno pudiera demostrar su talento sin depender de terceros para definir su camino. No se trataba solo de programar, sino de construir algo propio, donde la creatividad y la innovación fueran el motor del proyecto.</p>
                        <p className="my-4 text-base text-neutral-700">A medida que se acercaba el final del 2024, la idea dejó de ser solo una conversación entre compañeros y se convirtió en un propósito real. Uno de ellos decidió dar el primer paso, convirtiéndose en el rostro de la agencia y reuniendo a quienes compartían su visión. Así nació un sueño: una agencia de software creada desde la pasión y la determinación de sus fundadores, lista para ofrecer soluciones tecnológicas innovadoras.</p>
                        <span className="text-base font-semibold md:text-xl text-customBlue">Soluciones que impulsan tu negocio</span>
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