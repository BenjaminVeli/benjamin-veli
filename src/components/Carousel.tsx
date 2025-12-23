"use client";

import { technologies } from "@/constants/tech";
import Image from "next/image";
import { motion } from "framer-motion";
import { useState } from "react";

const Carousel = () => {
    const [hoveredId, setHoveredId] = useState<number | null>(null);

    const handleMouseEnter = (id: number) => {
        setHoveredId(id);
    };

    const handleMouseLeave = () => {
        setHoveredId(null);
    };

    return (
        <div className="container overflow-hidden">
            <div className="flex MyGradient gap-14">
                <motion.div
                    initial={{ x: 0 }}
                    animate={{ x: "-100%" }}
                    transition={{
                        duration: 30,
                        repeat: Infinity,
                        ease: "linear",
                        repeatType: "loop"
                    }}
                    className="flex gap-14 flex-shrink-0"
                >
                    {technologies.map(({ id, img, name }) => (
                        <div
                            key={id}
                            className={`
                                cursor-pointer 
                                bg-white 
                                rounded-2xl 
                                p-2
                                md:p-2.5
                                transition-all 
                                duration-500 
                                ${hoveredId && hoveredId !== id ? 'grayscale opacity-50' : ''}
                            `}
                            onMouseEnter={() => handleMouseEnter(id)}
                            onMouseLeave={handleMouseLeave}
                        >
                            <Image src={img} alt={name} className="w-8 h-8 md:w-12 md:h-12" />
                        </div>
                    ))}
                </motion.div>
                <motion.div
                    initial={{ x: 0 }}
                    animate={{ x: "-100%" }}
                    transition={{
                        duration: 30,
                        repeat: Infinity,
                        ease: "linear",
                        repeatType: "loop"
                    }}
                    className="flex gap-14 flex-shrink-0"
                >
                    {technologies.map(({ id, img, name }) => (
                        <div
                            key={id}
                            className={`
                                cursor-pointer 
                                bg-white 
                                rounded-2xl 
                                p-2
                                md:p-2.5
                                transition-all 
                                duration-500 
                                ${hoveredId && hoveredId !== id ? 'grayscale opacity-50' : ''}
                            `}
                            onMouseEnter={() => handleMouseEnter(id)}
                            onMouseLeave={handleMouseLeave}
                        >
                            <Image src={img} alt={name} className="w-8 h-8 md:w-12 md:h-12" />
                        </div>
                    ))}
                </motion.div>
            </div>
        </div>
    );
};

export default Carousel;