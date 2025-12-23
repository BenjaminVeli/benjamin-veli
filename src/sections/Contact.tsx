"use client";
import { motion } from "framer-motion";
import { handleForm } from "@/app/action";
import { SubmitButton } from "@/components/SubmitButton";
import { fadeInStagger, fadeInStaggerChild } from "@/utils/motionVariants";

const Contact = () => {
    async function clientAction(formData: FormData) {
        try {
            await handleForm(formData);
            alert("Mensaje enviado correctamente. ¡Gracias por contactarnos!");

            // Resetear el formulario
            const form = document.querySelector('form');
            if (form) form.reset();

        } catch (error) {
            alert("Error al enviar el mensaje. Por favor, intenta nuevamente.");
            console.log(error);
        }
    }

    return (
        <section
            id="contact"
            className="w-full flex justify-center items-center min-h-screen pt-[4.25rem] sm:pt-0"
        >
            <div className="container">
                <motion.div variants={fadeInStagger}
                    initial="start"
                    animate="end">
                    <motion.h1
                        variants={fadeInStaggerChild}
                        className="text-4xl md:text-6xl font-medium text-center tracking-tighter text-customBlue mb-5 mt-4 md:mt-0"
                    >
                        Contáctanos!
                    </motion.h1>
                    <motion.p
                        variants={fadeInStaggerChild}
                        className="text-xl md:text-2xl text-blackCarbon  text-center mb-16 md:mb-40"
                    >
                        ¿Tienes una propuesta o idea interesante para compartir? ¡Hagámosla realidad!
                    </motion.p>

                    <motion.div
                        variants={fadeInStaggerChild}
                        className="container">
                        <form
                            action={clientAction}
                            className="px-0 md:px-14"
                        >
                            <div className="grid grid-cols-2 gap-x-20 gap-y-14 input-box">
                                <div className="col-span-2 input-field px-0 lg:px-14">
                                    <input
                                        type="text"
                                        name="to_name"
                                        className="input"
                                        required
                                    />
                                    <label htmlFor="name" className="text-blackCarbon">
                                        Nombre Completo
                                    </label>
                                </div>
                                <div className="col-span-2 sm:col-span-1 input-field px-0 lg:px-14">
                                    <input
                                        type="email"
                                        name="to_email"
                                        className="input"
                                        required
                                    />
                                    <label htmlFor="email" className="text-blackCarbon">
                                        Correo Electrónico
                                    </label>
                                </div>
                                <div className="col-span-2 sm:col-span-1 input-field px-0 lg:px-14">
                                    <input
                                        type="number"
                                        name="to_phone"
                                        className="input"
                                        required
                                    />
                                    <label htmlFor="phone" className="text-blackCarbon">
                                        Número de Teléfono
                                    </label>
                                </div>
                                <div className="col-span-2 px-0 lg:px-14 input-field">
                                    <textarea
                                        name="message"
                                        className="input"
                                        required
                                    />
                                    <label htmlFor="message" className="text-blackCarbon">
                                        Tu mensaje
                                    </label>
                                </div>
                                <div className="col-span-2 flex items-center justify-center">
                                    <SubmitButton />
                                </div>
                            </div>
                        </form>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    )
}

export default Contact