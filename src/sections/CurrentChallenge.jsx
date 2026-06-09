import { motion } from "framer-motion";

export default function CurrentChallenge() {
    return (
        <section className="relative flex min-h-[calc(100vh-64px)] items-center justify-center overflow-hidden bg-black">
            
            <div className="mx-auto max-w-7xl px-6">
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="rounded-3xl border border-white/10 bg-white/5 p-10 backdrop-blur-md"
                >
                    <span className="text-cyan-400">
                        Arena Atual
                    </span>

                    <h2 className="mt-4 font-['Orbitron'] text-4xl font-bold">
                        Arena #01
                    </h2>

                    <p className="mt-4 text-gray-400">
                        Landing Page Futurista
                    </p>
                </motion.div>
            </div>
        </section>
    );
}