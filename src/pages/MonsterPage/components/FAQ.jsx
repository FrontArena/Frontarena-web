import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronDown } from "lucide-react";

const questions = [
    {
        question: "Preciso usar React?",
        answer:
            "Não. Você pode utilizar qualquer tecnologia frontend. O importante é entregar uma experiência incrível.",
    },
    {
        question: "Posso usar Tailwind CSS?",
        answer:
            "Sim. Tailwind CSS, Sass, Styled Components, CSS Modules e qualquer outra solução de estilização são permitidas.",
    },
    {
        question: "Backend conta pontos?",
        answer:
            "Não. O foco principal da FrontArena é o frontend. Você pode adicionar backend, mas ele não será considerado na avaliação.",
    },
    {
        question: "Posso participar sozinho?",
        answer:
            "Sim. Este desafio foi pensado para participação individual.",
    },
    {
        question: "Posso usar bibliotecas externas?",
        answer:
            "Sim. Bibliotecas são permitidas desde que respeitem as regras do desafio e não substituam o trabalho criativo principal.",
    },
];

export default function FAQ() {
    const [open, setOpen] = useState(0);

    return (
        <section className="relative px-6 pb-24">
            <div className="mx-auto max-w-5xl">
                {/* Header */}
                <div className="mb-16 text-center">
                    <span className="text-sm font-semibold uppercase tracking-[0.3em] text-cyan-500">
                        FAQ
                    </span>

                    <h2 className="mt-4 text-4xl font-black text-white md:text-5xl">
                        Perguntas Frequentes
                    </h2>

                    <p className="mx-auto mt-6 max-w-2xl text-lg text-gray-400 align-middle inline-flex items-center gap-2">
                        Tire suas dúvidas antes de entrar na arena.
                    </p>
                </div>

                {/* FAQ */}
                <div className="space-y-4">
                    {questions.map((item, index) => {
                        const isOpen = open === index;

                        return (
                            <motion.div
                                key={item.question}
                                layout
                                className={`
                                    overflow-hidden rounded-3xl border transition-all duration-300
                                    ${
                                        isOpen
                                            ? "border-cyan-500/30 bg-cyan-500/[0.03]"
                                            : "border-white/10 bg-white/5"
                                    }
                                `}
                            >
                                <button
                                    onClick={() =>
                                        setOpen(isOpen ? null : index)
                                    }
                                    className="cursor-pointer flex w-full items-center justify-between gap-6 p-6 text-left"
                                >
                                    <div className="flex items-center gap-5">
                                        <div
                                            className={`
                                                flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border text-sm font-bold
                                                ${
                                                    isOpen
                                                        ? "border-cyan-500/30 bg-cyan-500/10 text-cyan-500"
                                                        : "border-white/10 bg-white/5 text-gray-400"
                                                }
                                            `}
                                        >
                                            {String(index + 1).padStart(
                                                2,
                                                "0"
                                            )}
                                        </div>

                                        <span className="text-lg font-semibold text-white">
                                            {item.question}
                                        </span>
                                    </div>

                                    <ChevronDown
                                        className={`shrink-0 text-cyan-500 transition-transform duration-300 ${
                                            isOpen
                                                ? "rotate-180"
                                                : ""
                                        }`}
                                    />
                                </button>

                                <AnimatePresence>
                                    {isOpen && (
                                        <motion.div
                                            initial={{
                                                height: 0,
                                                opacity: 0,
                                            }}
                                            animate={{
                                                height: "auto",
                                                opacity: 1,
                                            }}
                                            exit={{
                                                height: 0,
                                                opacity: 0,
                                            }}
                                            transition={{
                                                duration: 0.25,
                                            }}
                                        >
                                            <div className="border-t border-white/10 px-6 py-5 text-gray-400">
                                                {item.answer}
                                            </div>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </motion.div>
                        );
                    })}
                </div>

                {/* Footer */}
                <div className="mt-12 rounded-3xl border border-cyan-500/20 bg-cyan-500/[0.03] p-6 text-center">
                    <p className="text-gray-300">
                        Ainda ficou com alguma dúvida?
                    </p>

                    <p className="mt-2 text-sm text-gray-500">
                        Entre em contato com a organização da FrontArena
                        através da comunidade oficial.
                    </p>
                </div>
            </div>
        </section>
    );
}