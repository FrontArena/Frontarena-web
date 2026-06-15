import { ArrowRight, Trophy, Zap } from "lucide-react";
import { motion } from "framer-motion";
import Button from "../../../components/ui/Button";

export default function Hero() {
    return (
        <section className="relative overflow-hidden">
            {/* Background */}
            <div className="absolute inset-0 bg-black" />

            {/* Glow Verde */}
            <div className="absolute left-1/2 top-0 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-green-500/20 blur-[120px]" />

            {/* Grid */}
            <div
                className="absolute inset-0 opacity-[0.03]"
                style={{
                    backgroundImage: `
            linear-gradient(to right, white 1px, transparent 1px),
            linear-gradient(to bottom, white 1px, transparent 1px)
          `,
                    backgroundSize: "50px 50px",
                }}
            />

            <div className="container relative mx-auto px-6 py-12">
                <div className="grid items-center gap-16 lg:grid-cols-2">
                    {/* Conteúdo */}
                    <div>
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="mb-6 inline-flex items-center gap-2 rounded-full border border-green-500/30 bg-green-500/10 px-4 py-2 text-sm text-green-400"
                        >
                            <Zap size={16} />
                            Primeiro Desafio FrontArena
                        </motion.div>

                        <motion.h1
                            initial={{ opacity: 0, y: 40 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.1 }}
                            className="text-5xl font-black leading-none text-white md:text-7xl"
                        >
                            MONSTER
                            <span className="block text-green-500 animate-pulse">
                                ENERGY
                            </span>
                            CHALLENGE
                        </motion.h1>

                        <motion.p
                            initial={{ opacity: 0, y: 40 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2 }}
                            className="mt-6 max-w-xl text-lg text-gray-400"
                        >
                            Receba uma versão sorteada do Monster Energy e
                            crie uma landing page capaz de impressionar toda
                            a comunidade FrontArena.
                        </motion.p>

                        <motion.div
                            initial={{ opacity: 0, y: 40 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.3 }}
                            className="mt-10 flex flex-wrap gap-4"
                        >
                            <Button
                            variant="solid" 
                            className="group flex items-center gap-2 rounded-xl bg-green-500 px-6 py-4 font-semibold text-black transition hover:scale-105">
                                Participar
                                <ArrowRight
                                    size={18}
                                    className="transition group-hover:translate-x-1"
                                />
                            </Button>

                            <Button
                            variant="solid" 
                            className="rounded-xl border border-white/10 px-6 py-4 font-semibold text-white transition hover:bg-white/5">
                                Ver Regras
                            </Button>
                        </motion.div>

                        <div className="mt-10 flex flex-wrap gap-4">
                            <div className="rounded-xl border border-white/10 bg-white/5 px-5 py-3">
                                <p className="text-sm text-gray-500">
                                    Participação
                                </p>
                                <p className="font-semibold text-white">
                                    Individual
                                </p>
                            </div>

                            <div className="rounded-xl border border-white/10 bg-white/5 px-5 py-3">
                                <p className="text-sm text-gray-500">
                                    Sorteio
                                </p>
                                <p className="font-semibold text-white">
                                    Versão do Monster
                                </p>
                            </div>

                            <div className="rounded-xl border border-white/10 bg-white/5 px-5 py-3">
                                <p className="text-sm text-gray-500">
                                    Avaliação
                                </p>
                                <p className="font-semibold text-white">
                                    Comunidade
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Lata */}
                    <motion.div
                        animate={{
                            y: [0, -15, 0],
                        }}
                        transition={{
                            duration: 4,
                            repeat: Infinity,
                            ease: "easeInOut",
                        }}
                        className="relative flex justify-center"
                    >
                        {/* Glow */}
                        <div className="absolute h-[450px] w-[450px] rounded-full bg-green-500/20 blur-[120px]" />

                        <img
                            src="https://nossadistribuidorabebidas.com.br/wp-content/uploads/2021/12/monster-473ml.png"
                            alt="Monster Energy"
                            className="relative z-10 h-[700px] object-contain drop-shadow-[0_0_60px_rgba(34,197,94,0.7)]"
                        />

                        {/* Badge */}
                        <div className="absolute right-10 top-10 rounded-2xl border border-green-500/20 bg-black/70 px-4 py-3 backdrop-blur">
                            <div className="flex items-center gap-2 text-green-400">
                                <Trophy size={18} />
                                <span className="font-semibold">
                                    Temporada 01
                                </span>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}