import { motion } from "framer-motion";
import {
    Cpu,
    Atom,
    Triangle,
    Wind,
    FileCode2,
    Rocket,
    Palette,
    Zap,
} from "lucide-react";

const techs = [
    {
        name: "React",
        icon: <Atom size={28} />,
    },
    {
        name: "Vue",
        icon: <Triangle size={28} />,
    },
    {
        name: "Angular",
        icon: <Triangle size={28} />,
    },
    {
        name: "Tailwind",
        icon: <Wind size={28} />,
    },
    {
        name: "TypeScript",
        icon: <FileCode2 size={28} />,
    },
    {
        name: "Next.js",
        icon: <Rocket size={28} />,
    },
    {
        name: "Sass",
        icon: <Palette size={28} />,
    },
    {
        name: "Vite",
        icon: <Zap size={28} />,
    },
];

export default function Technologies() {
    return (
        <section id="technologies" className="relative py-32">
            <div className="mx-auto max-w-7xl px-6">

                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-16 text-center"
                >
                    <div className="mx-auto mb-6 flex w-fit items-center gap-2 rounded-full border border-purple-500/30 bg-purple-500/10 px-5 py-2 text-sm text-purple-300">
                        <Cpu size={16} />
                        Tecnologias
                    </div>

                    <h2 className="font-['Orbitron'] text-4xl font-bold text-white md:text-6xl">
                        Escolha suas armas
                    </h2>

                    <p className="mx-auto mt-6 max-w-2xl text-lg text-gray-400 align-middle inline-flex items-center gap-2">
                        Na FrontArena não existe tecnologia obrigatória.
                        Cada participante é livre para construir sua solução
                        utilizando as ferramentas que mais domina.
                    </p>
                </motion.div>

                {/* Grid */}
                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
                    {techs.map((tech, index) => (
                        <motion.div
                            key={tech.name}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.05 }}
                            className="group rounded-3xl border border-white/10 bg-white/5 p-8 text-center backdrop-blur-xl transition hover:border-cyan-500/40 hover:bg-white/10"
                        >
                            <div className="mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-r from-cyan-500 to-purple-600 text-white">
                                {tech.icon}
                            </div>

                            <h3 className="text-xl font-semibold text-white">
                                {tech.name}
                            </h3>
                        </motion.div>
                    ))}
                </div>

                {/* Footer */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    className="mt-12 text-center"
                >
                    <p className="text-gray-500">
                        E qualquer outra tecnologia frontend que você desejar utilizar.
                    </p>
                </motion.div>

            </div>
        </section>
    );
}