import React from "react";
import { motion, useInView } from "framer-motion";
import { containerStagger, fadeInUp, fadeInLeft } from "./motionVariants";
import { ScrollRevealProps } from "@/types";

const ScrollReveal: React.FC<ScrollRevealProps> = ({
    children,
    variant,
    amount = 0.1,
    className = "",
}) => {
    const ref = React.useRef(null);
    const isInView = useInView(ref, { once: true, amount });

    // Define los variants disponibles
    const variants = {
        container: containerStagger,
        fadeInUp,
        fadeInLeft,
    };

    // Verifica que el variant proporcionado existe
    if (variant && !variants[variant as keyof typeof variants]) {
        console.warn(`Variant "${variant}" no encontrado. Usando el comportamiento por defecto.`);
    }

    return (
        <motion.div
            ref={ref}
            variants={variant ? variants[variant as keyof typeof variants] : undefined}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            className={className}
        >
            {children}
        </motion.div>
    );
};

export default ScrollReveal;