"use client";

import Link from "next/link";
import Tomso from "../assets/icons/Tomso.svg";
import Time from "@/components/Time";

const Hero = () => {
  return (
    <section id="hero" className="min-h-screen flex items-center pt-[4.25rem] sm:pt-0">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-6">
          <div className="md:text-left text-center">

            <h1
              className="text-4xl sm:text-6xl xl:text-8xl font-bold tracking-normal text-neutral-900 leading-none mb-10 sm:mb-12">
              <span>
                Benjamín{" "}
              </span>
              <span>Veli{" "}</span>
              <span className="relative inline-block">
                <span className="absolute bottom-0 left-0 h-2/5 w-full bg-customGreen"></span>
                <span className="relative z-10">Mariano</span>
              </span>
            </h1>

            <p className="font-normal text-lg sm:text-xl text-neutral-900">Desarrollador Full Stack con casi 2 años de experiencia, especializado en la creación de aplicaciones web y sistemas escalables, orientados a resultados.</p>
            <div className="mt-10 sm:mt-12 flex items-center flex-col gap-4 md:flex-row">
              <Link href="/contact-me" className="font-medium bg-white hover:bg-zinc-950 border rounded-md border-zinc-950 py-2.5 px-6 transition-all duration-300 text-zinc-950 hover:text-white text-center">
                Contáctame
              </Link>
              <Link href="/about-me" className="font-medium inline-block bg-customGreen hover:bg-zinc-950 border rounded-md border-customGreen py-2.5 px-6 transition-all duration-300 text-black hover:text-white">
                Sobre mí
              </Link>
            </div>
          </div>
          <div className="relative flex justify-center items-center bg-neutral-50">
            <div>
              <Tomso className="text-customBlue md:h-[400px] md:w-[400px] w-72 h-72 relative" />
              <Time />
            </div>
          </div>
        </div>
      </div>
    </section >
  );
}

export default Hero;