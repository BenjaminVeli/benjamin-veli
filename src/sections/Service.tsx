"use client";

import { services } from "@/constants/data";
import { RiCheckFill } from "react-icons/ri";
import Link from "next/link";
import { DM_Sans } from "next/font/google";
import { motion } from "framer-motion";
import { fadeInStagger, fadeInStaggerChild } from "@/utils/motionVariants";

const DmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
})

const Service = () => {
  return (
    <section id="services" className={`${DmSans.className} min-h-screen flex items-center pt-[4.25rem] xl:pt-0 `}>
      <motion.div variants={fadeInStagger}
        initial="start"
        animate="end"
        className="container">
        <motion.h1 variants={fadeInStaggerChild} className="text-4xl md:text-5xl xl:text-6xl font-medium text-center tracking-tighter text-blackCarbon mb-2">
          Desarrolla tu Presencia Digital
        </motion.h1>
        <div className="mx-auto md:max-w-2xl mb-4">
          <motion.p variants={fadeInStaggerChild} className="text-center text-metalicGray text-base md:text-xl">
            Desarrollamos tu proyecto con total transparencia. Elige el plan que mejor se adapte a tus necesidades y comienza a crecer online.
          </motion.p>
        </div>
        <motion.div variants={fadeInStaggerChild} className="grid md:grid-cols-2 lg:grid-cols-3 grid-cols-1 gap-10 items-start">
          {services.map(({ id, title, price, type, features }) => (
            <div key={id} className={`cursor-pointer p-6 mt-10 border border-GraphiteBlack rounded-3xl ${id === 2 ? "bg-DeepBlack" : ""}`}>
              <h2 className={`font-medium text-xl tracking-tigher ${id === 2 ? "text-smokeGray" : "text-metalicGray"}`}>{title}</h2>
              <p className={`tracking-tighter text-4xl font-medium ${id === 2 ? "text-white" : "text-GraphiteBlack"}`}>{price}</p>
              <p className={`text-base tracking-tighter mt-2 ${id === 2 ? "text-smokeGray" : "text-metalicGray"}`}>{type}</p>
              <span className={`h-px block sm:my-5 my-4 ${id === 2 ? "bg-customGreen" : "bg-DeepBlack"}`} />
              <ul className="inline-flex flex-col text-left gap-4">
                {features.map(({ id: featureId, feature }) => (
                  <li key={featureId} className="flex items-center gap-2">
                    <div className={`w-6 h-6 rounded-full flex items-center justify-center ${id === 2 ? "bg-customGreen" : "bg-DeepBlack"}`}>
                      <RiCheckFill size={18} className={`${id === 2 ? "text-GraphiteBlack" : "text-white"}`} />
                    </div>
                    <span className={`${id === 2 ? "text-white" : "text-GraphiteBlack"}`}>{feature}</span>
                  </li>
                ))}
              </ul>
              <Link href="/contacto" className={`block w-full py-2.5 px-3.5 text-center border rounded-md mt-6 ${id === 2 ? "border-customGreen bg-customGreen" : "border-DeepBlack bg-DeepBlack"}`}>
                <span className={`font-medium text-sm uppercase ${id === 2 ? "text-GraphiteBlack" : "text-white"}`}>Comprar</span>
              </Link>
            </div>
          ))}
        </motion.div>
      </motion.div>
    </section >
  );
};

export default Service;