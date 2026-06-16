import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import {
    ChevronRight,
    ChevronLeft,
    Menu,
    X,
} from "lucide-react";

import Button from "./ui/Button";

export default function Header() {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <motion.header
            initial={{ y: -80, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.7 }}
            className="sticky top-0 left-0 z-50 h-16 w-full border-b border-white/10 bg-black/60 backdrop-blur-xl"
        >
            <div className="flex h-full items-center justify-between px-4 md:px-6">

                {/* Logo */}
                <a
                    href="/"
                    className="group flex items-center gap-1"
                >
                    <ChevronLeft
                        size={40}
                        className="mt-1 text-cyan-500 transition duration-300 group-hover:-translate-x-1 md:size-[60px]"
                    />

                    <h1 className="font-['Orbitron'] text-lg font-bold tracking-wide md:text-2xl">
                        <span className="bg-gradient-to-r from-cyan-500 to-indigo-600 bg-clip-text text-transparent">
                            Front
                        </span>

                        <span className="bg-gradient-to-r from-indigo-500 to-purple-600 bg-clip-text text-transparent">
                            Arena/
                        </span>
                    </h1>

                    <ChevronRight
                        size={40}
                        className="mt-2 text-purple-600 transition duration-300 group-hover:translate-x-1 md:size-[60px]"
                    />
                </a>

                {/* Desktop */}
                <div className="hidden items-center gap-6 md:flex">
                    <nav>
                        <ul className="flex items-center gap-4">
                            <li>
                                <Button variant="ghost" href="#about">
                                    Sobre
                                </Button>
                            </li>

                            <li>
                                <Button variant="ghost" href="/monster">
                                    Arena Atual
                                </Button>
                            </li>

                            <li>
                                <Button variant="ghost" href="#participants">
                                    Participantes
                                </Button>
                            </li>

                            <li>
                                <Button variant="ghost" href="#ranking">
                                    Ranking
                                </Button>
                            </li>
                        </ul>
                    </nav>

                    <Button
                        href="https://github.com/FrontArena"
                        target="_blank"
                    >
                        GitHub
                    </Button>
                </div>

                {/* Mobile Button */}
                <button
                    onClick={() => setMenuOpen(true)}
                    className="rounded-xl border border-white/10 p-2 text-white md:hidden"
                >
                    <Menu size={22} />
                </button>

                {/* Mobile Menu */}
                <AnimatePresence>
                    {menuOpen && (
                        <>
                            {/* Overlay */}
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                onClick={() => setMenuOpen(false)}
                                className="fixed inset-0 bg-black/70 backdrop-blur-sm"
                            />

                            {/* Drawer */}
                            <motion.div
                                initial={{ x: "100%" }}
                                animate={{ x: 0 }}
                                exit={{ x: "100%" }}
                                transition={{ type: "spring", damping: 25 }}
                                className="fixed top-0 right-0 h-screen w-[280px] border-l border-white/10 bg-black p-6"
                            >
                                <div className="mb-10 flex items-center justify-between">
                                    <h2 className="font-['Orbitron'] text-xl text-white">
                                        Menu
                                    </h2>

                                    <button
                                        onClick={() => setMenuOpen(false)}
                                        className="text-gray-400"
                                    >
                                        <X size={24} />
                                    </button>
                                </div>

                                <nav className="flex flex-col gap-4">
                                    <Button
                                        variant="ghost"
                                        href="#about"
                                    >
                                        Sobre
                                    </Button>

                                    <Button
                                        variant="ghost"
                                        href="/monster"
                                    >
                                        Arena Atual
                                    </Button>

                                    <Button
                                        variant="ghost"
                                        href="#participants"
                                    >
                                        Participantes
                                    </Button>

                                    <Button
                                        variant="ghost"
                                        href="#ranking"
                                    >
                                        Ranking
                                    </Button>

                                    <div className="mt-4 border-t border-white/10 pt-4">
                                        <Button
                                            href="https://github.com/FrontArena"
                                            target="_blank"
                                        >
                                            GitHub
                                        </Button>
                                    </div>
                                </nav>
                            </motion.div>
                        </>
                    )}
                </AnimatePresence>
            </div>
        </motion.header>
    );
}