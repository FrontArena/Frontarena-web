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
        icon: <Atom size={36} />,
        description: "Interfaces modernas e componentizadas.",
    },
    {
        name: "Vue",
        icon: <Triangle size={36} />,
        description: "Leve, simples e extremamente produtivo.",
    },
    {
        name: "Angular",
        icon: <Triangle size={36} />,
        description: "Estrutura completa para aplicações robustas.",
    },
    {
        name: "Tailwind",
        icon: <Wind size={36} />,
        description: "Estilização rápida com classes utilitárias.",
    },
    {
        name: "TypeScript",
        icon: <FileCode2 size={36} />,
        description: "Mais segurança e produtividade no código.",
    },
    {
        name: "Next.js",
        icon: <Rocket size={36} />,
        description: "Performance, SSR e escalabilidade.",
    },
    {
        name: "Sass",
        icon: <Palette size={36} />,
        description: "CSS mais organizado e poderoso.",
    },
    {
        name: "Vite",
        icon: <Zap size={36} />,
        description: "Builds extremamente rápidas.",
    },
];

export default function Technologies() {
    return (
        <section id="technologies" className="relative py-22 overflow-hidden">

            {/* Glow */}
            <div className="absolute left-0 top-1/2 h-96 w-96 -translate-y-1/2 rounded-full bg-cyan-500/10 blur-[180px]" />

            <div className="absolute right-0 top-1/2 h-96 w-96 -translate-y-1/2 rounded-full bg-purple-600/10 blur-[180px]" />

            <div className="relative mx-auto max-w-7xl px-6">

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
                        Não importa qual ferramenta você domina.
                        Na FrontArena cada participante é livre para
                        construir sua solução da forma que desejar.
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
                            whileHover={{ y: -8 }}
                            className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl transition hover:border-cyan-500/40"
                        >

                            {/* Glow */}
                            <div className="absolute inset-0 opacity-0 transition duration-500 group-hover:opacity-100">
                                <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 via-transparent to-purple-600/10" />
                            </div>

                            <div className="relative z-10">

                                <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-3xl bg-gradient-to-r from-cyan-500 to-purple-600 text-white shadow-[0_0_30px_rgba(6,182,212,.25)]">
                                    {tech.icon}
                                </div>

                                <h3 className="text-2xl font-bold text-white">
                                    {tech.name}
                                </h3>

                                <p className="mt-4 text-sm leading-relaxed text-gray-400">
                                    {tech.description}
                                </p>

                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Footer */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    className="mt-16 text-center"
                >
                    <p className="text-gray-500">
                        HTML, CSS, JavaScript ou qualquer outra tecnologia frontend também são bem-vindas.
                    </p>
                </motion.div>

            </div>
        </section>
    );
}