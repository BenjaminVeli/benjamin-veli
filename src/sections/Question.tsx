"use client";
import React from "react";
import { questions } from "@/constants/data";
import PlusIcon from "../assets/icons/plus.svg";
import MinusIcon from "../assets/icons/minus.svg";
import clsx from "clsx";
import { motion, AnimatePresence } from "framer-motion";

const AccordionItem = ({ id, question, answer }: { id: number; question: string; answer: string; }) => {
    const [isOpen, setIsOpen] = React.useState(false);
    return (
        <div className="py-7 border-b border-blue-900 cursor-pointer" key={id}>
            <button className="flex items-center cursor-pointer w-full" onClick={() => setIsOpen(!isOpen)} aria-expanded={isOpen} aria-controls={`answer-${id}`}>
                <span className="flex-1 text-lg font-medium text-blackCarbon text-left">{question}</span>
                {isOpen ? <MinusIcon className="text-blue-500" /> : <PlusIcon className="text-blue-500" />}
            </button>
            <AnimatePresence>
                {isOpen && (
                    <motion.div id={`answer-${id}`} className={clsx("mt-4", { hidden: !isOpen })}
                        initial={{
                            opacity: 0,
                            height: 0,
                            marginTop: 0,
                        }}
                        animate={{
                            opacity: 1,
                            height: "auto",
                            marginTop: "16px",
                        }}
                        exit={{
                            opacity: 0,
                            height: 0,
                            marginTop: 0,
                        }}>
                        <span className="text-gray-700">{answer}</span>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

const Question = () => {
    return (
        <section id="questions" className="bg-white text-white flex items-center min-h-screen">
            <div className="container">
                <h2 className="text-4xl md:text-6xl font-semibold text-center tracking-tighter text-blackCarbon">Preguntas frecuentes</h2>
                <div className="mt-12 max-w-[700px] mx-auto">
                    {questions.map(({ id, question, answer }) => (
                        <AccordionItem question={question} answer={answer} key={id} id={id} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Question;