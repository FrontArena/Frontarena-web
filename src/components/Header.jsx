import { motion } from "framer-motion";
import { ChevronRight, ChevronLeft } from "lucide-react";
import Button from "./ui/Button";

export default function Header() {
    return (
        <motion.header
            initial={{ y: -80, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.7 }}
            className="sticky top-0 left-0 z-50 h-16 w-full border-b border-white/10 bg-black/60 backdrop-blur-xl"
        >
            <div className="flex items-center justify-between rounded-2xl border border-white/10 bg-black/60 px-6 backdrop-blur-xl">
                {/* Logo */}
                <a
                    href="/"
                    className="group flex items-center gap-1"
                >
                    <ChevronLeft
                        size={60}
                        className="text-cyan-500 transition duration-300 group-hover:-translate-x-1 mt-2"
                    />

                    <h1 className="font-['Orbitron'] text-2xl font-bold tracking-wide">
                        <span className="bg-gradient-to-r from-cyan-500 to-indigo-600 bg-clip-text text-transparent">
                            Front
                        </span>

                        <span className="bg-gradient-to-r from-indigo-500 to-purple-600 bg-clip-text text-transparent">
                            Arena/
                        </span>
                    </h1>

                    <ChevronRight
                        size={60}
                        className="text-purple-600 transition duration-300 group-hover:translate-x-1 mt-3"
                    />
                </a>

                {/* Navegação */}
                <nav>
                    <ul className="hidden items-center gap-8 text-sm md:flex">
                        <li>
                            <Button
                                variant="ghost"
                                href="#about"
                                className="text-gray-400 transition hover:text-white"
                            >
                                Sobre
                            </Button>
                        </li>

                        <li>
                            <Button
                                variant="ghost"
                                href="#challenge"
                                className="text-gray-400 transition hover:text-white"
                            >
                                Arena Atual
                            </Button>
                        </li>

                        <li>
                            <Button
                                variant="ghost"
                                href="#participants"
                                className="text-gray-400 transition hover:text-white"
                            >
                                Participantes
                            </Button>
                        </li>

                        <li>
                            <Button
                                variant="ghost"
                                href="#ranking"
                                className="text-gray-400 transition hover:text-white"
                            >
                                Ranking
                            </Button>
                        </li>
                    </ul>
                </nav>

                {/* CTA */}
                <Button
                    variant="primary"
                    href="https://github.com/FrontArena"
                    target="_blank"
                >
                    GitHub
                </Button>
            </div>
        </motion.header>
    );
}