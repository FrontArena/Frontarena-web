import { useState } from "react";
import { ChevronDown } from "lucide-react";

const questions = [
    {
        question: "Preciso usar React?",
        answer:
            "Não. Você pode utilizar qualquer tecnologia frontend.",
    },
    {
        question: "Posso usar Tailwind CSS?",
        answer:
            "Sim. Tailwind, Sass, Styled Components e qualquer solução de estilização são permitidas.",
    },
    {
        question: "Backend conta pontos?",
        answer:
            "Não. O foco principal do desafio é frontend.",
    },
    {
        question: "Posso participar sozinho?",
        answer:
            "Sim. O desafio é individual.",
    },
    {
        question: "Posso usar bibliotecas externas?",
        answer:
            "Sim. Desde que respeitem as regras do desafio.",
    },
];

export default function FAQ() {
    const [open, setOpen] = useState(null);

    return (
        <section className="px-6 py-24">
            <div className="mx-auto max-w-4xl">
                <div className="mb-16 text-center">
                    <span className="text-sm font-semibold uppercase tracking-[0.3em] text-green-500">
                        FAQ
                    </span>

                    <h2 className="mt-4 text-4xl font-black text-white md:text-5xl">
                        Perguntas Frequentes
                    </h2>
                </div>

                <div className="space-y-4">
                    {questions.map((item, index) => (
                        <div
                            key={index}
                            className="overflow-hidden rounded-2xl border border-white/10 bg-white/5"
                        >
                            <button
                                onClick={() =>
                                    setOpen(open === index ? null : index)
                                }
                                className="flex w-full items-center justify-between p-6 text-left"
                            >
                                <span className="font-semibold text-white">
                                    {item.question}
                                </span>

                                <ChevronDown
                                    className={`transition ${
                                        open === index
                                            ? "rotate-180"
                                            : ""
                                    }`}
                                />
                            </button>

                            {open === index && (
                                <div className="px-6 pb-6 text-gray-400">
                                    {item.answer}
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}