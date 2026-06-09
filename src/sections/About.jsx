import { motion } from "framer-motion";

export default function About() {
    return (
        <section
            id="about"
            className="w-full bg-black py-32"
        >
            <div className="mx-auto max-w-7xl px-6 text-center">
                <motion.h2
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-6 font-['Orbitron'] text-4xl font-bold"
                >
                    Sobre a FrontArena
                </motion.h2>

                <p className="mx-auto max-w-3xl text-lg text-gray-400">
                    Todos recebem o mesmo desafio.
                    Cada participante escolhe sua própria stack,
                    arquitetura e criatividade para construir algo único.
                </p>
            </div>
        </section>
    );
}