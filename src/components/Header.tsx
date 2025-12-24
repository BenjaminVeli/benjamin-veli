"use client";
import { useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"

import { navLinks, socialMedias } from "@/constants/data"
import TomsoJS from "../assets/icons/TomsoJS.svg";
import { motion, AnimatePresence } from "framer-motion";
import { NavItemsProps } from "@/types";

const NavItems: React.FC<NavItemsProps> = ({ closeMenu }) => {
    const pathname = usePathname();

    return (
        <ul className="flex flex-col items-center gap-0 lg:flex-row lg:gap-6 relative z-20 w-full">
            {navLinks.map(({ id, href, name }) => (
                <li
                    key={id}
                    className="text-black text-xl lg:text-sm hover:text-customBlue transition-all duration-500 w-full whitespace-nowrap font-normal lg:font-medium relative uppercase">
                    <Link
                        href={href}
                        onClick={closeMenu || undefined}
                        className={`block w-full py-3 lg:py-0 relative
                            ${pathname === href ? 'after:absolute after:bottom-[-4px] after:left-0 after:w-full after:h-0.5 after:bg-white lg:after:bg-customBlue' : ''}`}
                    >
                        {name}
                    </Link>
                </li>
            ))}
        </ul>
    );
};

// El resto del componente Header permanece igual
const Header = () => {
    const [isOpen, setIsOpen] = useState(false);
    const toggleMenu = () => setIsOpen(!isOpen);
    const closeMenu = () => setIsOpen(false);

    const menuVariants = {
        hidden: { x: "-100%", opacity: 0 },
        visible: { x: "0%", opacity: 1 },
        exit: { x: "-100%", opacity: 0 },
    };

    return (
        <header className="fixed top-0 left-0 w-full z-50 bg-white">
            <div className="border-b border-[#ebebeb]">
                <div className="container">
                    <div className="flex justify-between lg:relative items-center h-16 lg:h-18">
                        <Link href="/" title="Go to Tomso homepage" aria-label="Tomso homepage">
                            <TomsoJS className="relative h-8 w-[90px]" />
                        </Link>

                        <nav className="lg:flex hidden">
                            <NavItems closeMenu={null} />
                        </nav>

                        <div className="hidden gap-x-6 items-center lg:flex">
                            <a href="https://drive.google.com/file/d/1_wDRwWyMd-G4Yx32SYMMeirrcGnA8g8K/view?usp=sharing" rel="noopener noreferrer" target="_blank" className="border-2 py-1 text-sm uppercase px-2.5 rounded-md bg-customGreen font-medium">
                                <span>Descargar Cv</span>
                            </a>
                        </div>

                        <button
                            onClick={toggleMenu}
                            className="lg:hidden flex relative w-6 h-6"
                            aria-label="Toggle Menu"
                        >
                            <motion.span
                                className="absolute right-0 top-[3px] block h-0.5 w-6 rounded-full bg-black"
                                animate={{
                                    rotate: isOpen ? 45 : 0,
                                    y: isOpen ? 8 : 0
                                }}
                                transition={{ duration: 0.2 }}
                            />
                            <motion.span
                                className="absolute right-0 top-[11px] block h-0.5 w-6 rounded-full bg-black"
                                animate={{
                                    opacity: isOpen ? 0 : 1
                                }}
                                transition={{ duration: 0.2 }}
                            />
                            <motion.span
                                className="absolute right-0 bottom-[3px] block h-0.5 w-6 rounded-full bg-black"
                                animate={{
                                    rotate: isOpen ? -45 : 0,
                                    y: isOpen ? -8 : 0
                                }}
                                transition={{ duration: 0.2 }}
                            />
                        </button>

                    </div>
                </div>
                <AnimatePresence>
                    {isOpen && (
                        <motion.div
                            className="absolute z-20 w-full h-screen bg-white"
                            variants={menuVariants}
                            initial="hidden"
                            animate="visible"
                            exit="exit"
                            transition={{ type: "tween", duration: 0.3 }}
                        >
                            <div className="pt-16 sm:pt-28 px-8">
                                <nav>
                                    <NavItems closeMenu={closeMenu} />
                                </nav>
                                <div className="py-14">
                                    <a href="https://drive.google.com/file/d/1_wDRwWyMd-G4Yx32SYMMeirrcGnA8g8K/view?usp=sharing" rel="noopener noreferrer" target="_blank" className="border py-1 text-sm uppercase px-2.5 rounded-md bg-customGreen font-medium">
                                        <span>Descargar Cv</span>
                                    </a>
                                </div>
                                <div className="flex gap-4 justify-center">
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
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </header>
    )
}

export default Header