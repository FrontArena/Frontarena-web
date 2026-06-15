import { motion } from "framer-motion";
import Button from "../components/ui/Button";
import { ArrowRight, Trophy, Users, Code2, Landmark } from "lucide-react";

export default function Hero() {
    return (
        <section className="relative flex min-h-[calc(100vh-64px)] items-center justify-center overflow-hidden bg-black">
            {/* Glow Roxo */}
            <div className="absolute left-[-200px] top-[-200px] h-[500px] w-[500px] rounded-full bg-purple-600/20 blur-[150px]" />

            {/* Glow Azul */}
            <div className="absolute bottom-[-200px] right-[-200px] h-[500px] w-[500px] rounded-full bg-cyan-500/20 blur-[150px]" />

            {/* Grid */}
            <div
                className="
                    absolute inset-0
                    bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)]
                    bg-[size:60px_60px]
                "
            />

            <div className="relative z-10 mx-auto flex max-w-7xl flex-col items-center px-6 text-center">

                {/* Título */}
                <motion.h1
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="leading-tight bg-gradient-to-r from-cyan-400 via-indigo-500 to-purple-500 bg-clip-text text-transparent"
                >
                    Um tema.
                    <br />

                    <span className="bg-gradient-to-r from-cyan-400 via-indigo-500 to-purple-500 bg-clip-text text-transparent">
                        Inúmeras soluções.
                    </span>
                </motion.h1>

                {/* Descrição */}
                <motion.p
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    className="mt-8 max-w-3xl text-lg leading-relaxed text-gray-400"
                >
                    FrontArena é uma arena de desafios frontend onde
                    desenvolvedores recebem o mesmo tema e criam
                    soluções completamente diferentes utilizando
                    as tecnologias que preferirem.
                </motion.p>

                {/* Botões */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 }}
                    className="mt-10 flex flex-col gap-4 sm:flex-row"
                >

                    <Button>
                        Arena Atual <ArrowRight size={18} />
                    </Button>

                    <Button variant="secondary">
                        Participantes
                    </Button>
                    
                </motion.div>

                {/* Estatísticas */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.6 }}
                    className="
                        mt-10
                        mb-20
                        grid
                        gap-6
                        md:grid-cols-3
                    "
                >
                    <div className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl">
                        <Trophy className="mx-auto mb-4 text-cyan-400" />

                        <h3 className="text-3xl font-bold text-white">
                            01
                        </h3>

                        <p className="text-gray-400">
                            Arena Ativa
                        </p>
                    </div>

                    <div className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl">
                        <Users className="mx-auto mb-4 text-indigo-400" />

                        <h3 className="text-3xl font-bold text-white">
                            05
                        </h3>

                        <p className="text-gray-400">
                            Participantes
                        </p>
                    </div>

                    <div className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl">
                        <Code2 className="mx-auto mb-4 text-purple-400" />

                        <h3 className="text-3xl font-bold text-white">
                            ∞
                        </h3>

                        <p className="text-gray-400">
                            Possibilidades
                        </p>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}