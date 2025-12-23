import { process } from "@/constants/process"
import { DM_Sans } from "next/font/google";
import Image from "next/image";

const DmSans = DM_Sans({
    variable: "--font-dm-sans",
    subsets: ["latin"],
})

const Process = () => {
    return (
        <section id="process" className={`${DmSans.className} min-h-screen flex items-center`}>
            <div className="container relative">
                <h2 className="text-4xl md:text-6xl font-medium text-center tracking-tighter text-black">
                    Proceso de trabajo
                </h2>
                <div className="grid lg:grid-cols-2 grid-cols-1 gap-10 my-10">
                    {process.map(({ id, title, img, name, content }) => (
                        <div className={`border border-GraphiteBlack border-b-[0.6rem] rounded-4xl cursor-pointer ${[1, 4].includes(id) ? "bg-white" : [2, 5].includes(id) ? "bg-charcoalBlue" : "bg-customGreen"}`} key={id}>
                            <div className="p-6 z-10 relative">
                                <div className="grid grid-cols-2 items-center justify-center">
                                    <div className="col-span-2 sm:col-span-1 text-center md:text-left">
                                        <h3 className={`mt-6 text-2xl text-GraphiteBlack px-2 rounded-xl font-medium inline-block ${[1, 4].includes(id) ? "bg-customGreen" : "bg-white"}`}>{title}</h3>
                                        <p className={`mt-4 ${[1, 3, 4, 6].includes(id) ? "text-GraphiteBlack" : "text-white"}`}>{content}</p>
                                    </div>
                                    <div className="col-span-2 sm:col-span-1 flex items-center justify-center w-full h-full">
                                        <Image src={img} alt={name} className="" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section >
    )
}

export default Process