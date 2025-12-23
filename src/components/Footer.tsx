"use client";
import Link from "next/link"
// import Image from "next/image";
import { navLinks, socialMedias } from "@/constants/data"

import Tomso from "../assets/icons/Tomso.svg";

const Footer = () => {
  return (
    <footer className="border-t border-[#ebebeb] bg-white">
      <div className="pt-14">
        <div className="container">

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            <div
              className="text-left"
            >
              <Link href="/" title="Go to Tomso homepage" aria-label="Tomso homepage" className="flex mb-4">
                <Tomso className="h-8 w-8 text-black" />
                <span className="ml-2 text-black font-bold text-2xl">Tomso JS</span>
              </Link>
              <p className="text-neutral-600 text-sm">
                Construido por <Link href="https://tomso-portfolio.vercel.app"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Visit my Github Profile"
                  className="text-customBlue">@BenjaminVeli</Link>
              </p>
              <p className="text-neutral-600 text-sm">
                Diseñador y Desarrollador de <span className="text-neutral-800">Software Web</span>
              </p>
            </div>

            <div className="text-center text-sm">
              <h3 className="text-black font-bold mb-4">Menu</h3>
              <nav>
                <ul className="flex flex-col gap-4">
                  {navLinks.map((navLink) => (
                    <li key={navLink.id}>
                      <a
                        href={navLink.href}
                        className="font-normal text-neutral-600 hover:text-blue-600 transition-all duration-300 cursor-pointer"
                      >
                        {navLink.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </nav>
            </div>

            <div
              className="flex flex-col items-center gap-4 text-center text-sm"
            >
              <h3 className="text-black font-bold">Contactame</h3>
              <p className="text-neutral-600">velibenjamin222@gmail.com</p>
              <h4 className="font-medium mt-4 uppercase">Social Media</h4>
              <div className="flex gap-4">
                {socialMedias.map((socialMedia) => (
                  <a
                    href={socialMedia.link}
                    aria-label={socialMedia.label}
                    target="_blank"
                    rel="noopener noreferrer"
                    key={socialMedia.id}
                    className="bg-black hover:bg-customGreen p-3 rounded-full border border-customGreen transition-all duration-500 group"
                  >
                    <socialMedia.icon className="text-white transition-all duration-500 text-2xl group-hover:text-black" />
                  </a>
                ))}
              </div>
            </div>
          </div>
          <div className="flex pt-12 pb-4 flex-col md:flex-row justify-between text-center gap-4">
            <p className="text-sm text-neutral-600">
              &copy; 2024{" "}
              <Link href="/" className="text-black font-medium hover:underline">
                Tomso JS™
              </Link>{" "}
              . Todos los derechos reservados.
            </p>
            <div className="flex gap-4 justify-center">
              <Link href="/terminos-y-condiciones" className="text-neutral-600 text-sm">Términos y condiciones</Link>
              <Link href="/politicas-de-privacidad" className="text-neutral-600 text-sm">Pólitica de privacidad</Link>
            </div>
          </div >
        </div>
      </div>
    </footer>
  )
}

export default Footer