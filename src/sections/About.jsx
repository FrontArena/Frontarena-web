import { motion } from "framer-motion";
import { Flag, Code2, Trophy, Landmark } from "lucide-react";

const cards = [
    {
        icon: <Flag size={28} />,
        title: "Receive a Challenge",
        description:
            "Every participant receives the same frontend challenge to solve.",
    },
    {
        icon: <Code2 size={28} />,
        title: "Build Your Way",
        description:
            "Use React, Vue, Angular, Tailwind, HTML, CSS or any technology you prefer.",
    },
    {
        icon: <Trophy size={28} />,
        title: "Show Your Solution",
        description:
            "Publish your project and compare ideas, creativity and execution.",
    },
];

export default function About() {
    return (
        <section
            id="about"
            className="relative py-32"
        >
            <div className="mx-auto max-w-7xl px-6">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mx-auto max-w-3xl text-center"
                >
                    <div
                        className="mx-auto mb-6 w-fit rounded-full border border-purple-500/30 bg-purple-500/10 px-5 py-2
                        text-sm text-purple-300 align-middle inline-flex items-center gap-2"
                    >
                        <Landmark size={16} className="inline-block" />
                        Sobre a FrontArena
                    </div>

                    <h2 className="mt-6 font-['Orbitron'] text-4xl font-bold text-white md:text-6xl">
                        Desenvolvedores.
                        <br />

                        <span className="bg-gradient-to-r from-cyan-400 via-indigo-500 to-purple-500 bg-clip-text text-transparent">
                            Um Desafio.
                        </span>

                        <br />

                        Soluções Infinitas.
                    </h2>

                    <p className="mt-6 text-lg text-gray-400">
                        FrontArena is a frontend challenge community where
                        developers compete, learn and evolve by building
                        completely different solutions for the same challenge.
                    </p>
                </motion.div>

                {/* Cards */}
                <div className="mt-20 grid gap-6 md:grid-cols-3">
                    {cards.map((card, index) => (
                        <motion.div
                            key={card.title}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.15 }}
                            className="group rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl
                                transition hover:border-purple-500/40 hover:bg-purple-950/10"
                        >
                            <div
                                className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-r
                                    from-cyan-500 to-purple-600 text-white"
                            >
                                {card.icon}
                            </div>

                            <h3 className="mb-3 text-xl font-semibold">
                                {card.title}
                            </h3>

                            <p className="text-gray-400">
                                {card.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}