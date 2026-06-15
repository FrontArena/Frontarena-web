import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
    UserPlus,
    Shuffle,
    Code2,
    Upload,
    Trophy,
} from "lucide-react";

const steps = [
    {
        icon: UserPlus,
        title: "Inscreva-se na Arena",
        description:
            "Inscreva-se agora dentro da FrontArena e garanta sua vaga na primeira temporada do desafio.",
    },
    {
        icon: Shuffle,
        title: "Receba seu Tema Monster",
        description:
            "Uma versão do Monster Energy será sorteada para você, definindo a identidade visual do seu projeto.",
    },
    {
        icon: Code2,
        title: "Desenvolva seu Projeto",
        description:
            "Use sua criatividade para construir uma landing page inspirada na sua versão sorteada do Monster.",
    },
    {
        icon: Upload,
        title: "Envie seu Projeto",
        description:
            "Publique sua criação dentro do prazo definido e compartilhe seu trabalho com a comunidade.",
    },
    {
        icon: Trophy,
        title: "Dispute o Topo",
        description:
            "Os projetos serão avaliados pela comunidade e pelos organizadores com base em criatividade, design e qualidade.",
    },
];

export default function HowItWorks() {
    const [selectedStep, setSelectedStep] = useState(0);

    const ActiveIcon = steps[selectedStep].icon;

    return (
        <section className="px-6 py-24">
            <div className="mx-auto max-w-7xl">
                {/* Header */}
                <div className="mb-16 text-center">
                    <span className="text-sm font-semibold uppercase tracking-[0.3em] text-green-500">
                        Como Funciona
                    </span>

                    <h2 className="mt-4 text-4xl font-black text-white md:text-5xl">
                        Entre na Arena
                    </h2>

                    <p className="mx-auto mt-6 max-w-2xl text-lg text-gray-400 align-middle inline-flex items-center gap-2">
                        O processo é simples. Receba seu Monster, crie algo
                        incrível e mostre suas habilidades para toda a
                        comunidade.
                    </p>
                </div>

                {/* Timeline */}
                <div className="relative mt-20">
                    <div className="absolute left-0 top-8 hidden h-0.5 w-full bg-gradient-to-r from-green-900/20 via-green-700 to-green-900/20 lg:block" />

                    <div className="grid gap-10 lg:grid-cols-5">
                        {steps.map((step, index) => {
                            const Icon = step.icon;

                            const isActive =
                                selectedStep === index;

                            return (
                                <div
                                    key={step.title}
                                    onClick={() =>
                                        setSelectedStep(index)
                                    }
                                    className={`
                                        relative cursor-pointer text-center transition-all duration-300
                                        ${isActive
                                            ? "scale-105"
                                            : "opacity-60 hover:opacity-100"
                                        }
                                    `}
                                >
                                    {/* Número */}
                                    <div
                                        className={`
                                            absolute -top-3 left-1/2 z-20 flex h-8 w-8 -translate-x-1/2 items-center justify-center rounded-full border text-xs font-bold transition-all
                                            ${isActive
                                                ? "border-green-500 bg-green-500 text-black"
                                                : "border-green-500/30 bg-black text-green-500"
                                            }
                                        `}
                                    >
                                        {index + 1}
                                    </div>

                                    {/* Ícone */}
                                    <div
                                        className={`
                                            mx-auto flex h-16 w-16 items-center justify-center rounded-2xl border transition-all
                                            ${isActive
                                                ? "border-green-500 bg-green-500/20 text-green-400 shadow-[0_0_40px_rgba(34,197,94,0.4)]"
                                                : "border-green-500/20 bg-green-500/10 text-green-500"
                                            }
                                        `}
                                    >
                                        <Icon size={30} />
                                    </div>

                                    <h3 className="mt-6 text-lg font-bold text-white">
                                        {step.title}
                                    </h3>
                                </div>
                            );
                        })}
                    </div>

                    <p className="mt-10 text-center text-gray-400">
                        Clique em um passo para visualizar mais detalhes.
                    </p>
                </div>

                {/* Card Dinâmico */}
                <AnimatePresence mode="wait">
                    <motion.div
                        key={selectedStep}
                        initial={{
                            opacity: 0,
                            y: 20,
                        }}
                        animate={{
                            opacity: 1,
                            y: 0,
                        }}
                        exit={{
                            opacity: 0,
                            y: -20,
                        }}
                        transition={{
                            duration: 0.25,
                        }}
                        className="mt-20 rounded-3xl border border-green-500/20 bg-white/5 p-8"
                    >
                        <span className="text-sm font-bold text-green-500">
                            PASSO{" "}
                            {String(
                                selectedStep + 1
                            ).padStart(2, "0")}
                        </span>

                        <div className="mt-4 flex items-center gap-4">
                            <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-green-500/10">
                                <ActiveIcon
                                    size={28}
                                    className="text-green-500"
                                />
                            </div>

                            <h3 className="text-3xl font-bold text-white">
                                {steps[selectedStep].title}
                            </h3>
                        </div>

                        <p className="mt-6 max-w-5xl text-lg text-gray-400">
                            {steps[selectedStep].description}
                        </p>
                    </motion.div>
                </AnimatePresence>
            </div>
        </section>
    );
}