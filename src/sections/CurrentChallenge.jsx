import { motion } from "framer-motion";
import { Flame, Users, FolderGit2, CalendarDays } from "lucide-react";

import Button from "../components/ui/Button";

export default function CurrentChallenge() {
    return (
        <section id="challenge" className="relative py-32">
            <div className="mx-auto max-w-7xl px-6">

                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center"
                >
                    <div className="mx-auto mb-6 flex w-fit items-center gap-2 rounded-full border border-cyan-500/30 bg-cyan-500/10 px-5 py-2 text-sm text-cyan-300">
                        <Flame size={16} />
                        Arena Atual
                    </div>

                    <h2 className="font-['Orbitron'] text-4xl font-bold text-white md:text-6xl">
                        O primeiro desafio começou.
                    </h2>

                    <p className="mx-auto mt-6 max-w-2xl text-lg text-gray-400 align-middle inline-flex items-center gap-2">
                        Todos os participantes receberam o mesmo tema. Agora é hora
                        de transformar criatividade, código e design em uma solução única.
                    </p>
                </motion.div>

                {/* Arena Card */}
                <motion.div
                    initial={{ opacity: 0, y: 60 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="relative mt-20 overflow-hidden rounded-3xl border border-cyan-500/20 bg-white/5 p-10 backdrop-blur-xl"
                >
                    {/* Glow */}
                    <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 via-cyan-400/20 to-cyan-500/10" />

                    {/* Glow Extra */}
                    <div className="absolute -left-32 top-0 h-72 w-72 rounded-full bg-cyan-500/20 blur-[120px]" />

                    <div className="relative z-10">

                        <span className="text-sm uppercase tracking-[0.3em] text-cyan-400">
                            Arena #01
                        </span>

                        <h3 className="mt-4 font-['Orbitron'] text-5xl font-black text-white md:text-7xl">
                            MONSTER ENERGY
                        </h3>

                        <p className="mt-6 max-w-4xl text-lg text-gray-300 align-middle inline-flex items-center gap-2">
                            Desenvolva uma landing page inspirada na identidade da Monster Energy.<br />
                            O objetivo é criar uma experiência visual impactante, com muita personalidade,
                            animações, energia e uma estética capaz de representar a marca.
                        </p>

                        {/* Tags */}
                        <div className="mt-8 flex flex-wrap gap-3 align-middle inline-flex items-center">
                            {[
                                "Energia",
                                "Gaming",
                                "Performance",
                                "Esportes Radicais",
                                "Criatividade",
                                "Animações",
                            ].map((tag) => (
                                <span
                                    key={tag}
                                    className="rounded-full border border-cyan-500/20 bg-cyan-500/10 px-4 py-2 text-sm text-cyan-300"
                                >
                                    {tag}
                                </span>
                            ))}
                        </div>

                        {/* Tecnologias */}
                        <div className="mt-6 flex flex-wrap gap-3 align-middle inline-flex items-center">
                            {[
                                "HTML",
                                "CSS",
                                "JavaScript",
                                "TypeScript",
                                "React",
                                "Vue",
                                "Angular",
                                "Tailwind",
                                "Framer Motion",
                            ].map((tech) => (
                                <span
                                    key={tech}
                                    className="rounded-full border border-white/10 bg-black/30 px-4 py-2 text-sm text-gray-300"
                                >
                                    {tech}
                                </span>
                            ))}
                        </div>

                        {/* CTA */}
                        <div className="mt-10 flex flex-col gap-10 sm:flex-row items-center justify-center"> 
                            <Button>
                                Participar da Arena
                            </Button>

                            <Button variant="secondary">
                                Ver Regras
                            </Button>
                        </div>

                        {/* Stats */}
                        <div className="mt-14 grid gap-6 md:grid-cols-3">
                            <div className="rounded-2xl border border-white/10 bg-black/20 p-6">
                                <Users className="mb-4 text-cyan-400" />

                                <h4 className="text-3xl font-bold text-white">
                                    08
                                </h4>

                                <p className="text-gray-400">
                                    Desafiantes
                                </p>
                            </div>

                            <div className="rounded-2xl border border-white/10 bg-black/20 p-6">
                                <FolderGit2 className="mb-4 text-cyan-400" />

                                <h4 className="text-3xl font-bold text-white">
                                    00
                                </h4>

                                <p className="text-gray-400">
                                    Submissões
                                </p>
                            </div>

                            <div className="rounded-2xl border border-white/10 bg-black/20 p-6">
                                <CalendarDays className="mb-4 text-cyan-400" />

                                <h4 className="text-3xl font-bold text-white">
                                    30
                                </h4>

                                <p className="text-gray-400">
                                    Dias Restantes
                                </p>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}