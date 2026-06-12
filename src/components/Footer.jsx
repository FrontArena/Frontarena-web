import { BsGithub } from "react-icons/bs";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function Footer() {
    return (
        <footer className="relative overflow-hidden border-t border-white/10 bg-black">
            {/* Glow */}
            <div className="absolute bottom-0 left-1/2 h-96 w-96 -translate-x-1/2 rounded-full bg-purple-600/10 blur-[180px]" />

            <div className="relative mx-auto max-w-7xl px-6 py-20">

                <div className="grid gap-12 md:grid-cols-3">

                    {/* Marca */}
                    <div>
                        <a
                            href="/"
                            className="group flex items-center gap-1"
                        >
                            <ChevronLeft
                                size={32}
                                className="text-cyan-500 transition group-hover:-translate-x-1"
                            />

                            <h2 className="font-['Orbitron'] text-3xl font-bold">
                                <span className="bg-gradient-to-r from-cyan-500 to-indigo-600 bg-clip-text text-transparent">
                                    Front
                                </span>

                                <span className="bg-gradient-to-r from-indigo-500 to-purple-600 bg-clip-text text-transparent">
                                    Arena/
                                </span>
                            </h2>

                            <ChevronRight
                                size={32}
                                className="text-purple-500 transition group-hover:translate-x-1"
                            />
                        </a>

                        <p className="mt-5 text-lg text-gray-300">
                            Um tema. Inúmeras soluções.
                        </p>

                        <p className="mt-4 max-w-sm text-gray-500">
                            Comunidade focada em desafios frontend,
                            criatividade e evolução através da prática.
                        </p>
                    </div>

                    {/* Navegação */}
                    <div>
                        <h3 className="mb-5 font-semibold text-white">
                            Navegação
                        </h3>

                        <ul className="space-y-3">
                            <li>
                                <a
                                    href="#about"
                                    className="text-gray-400 transition hover:text-cyan-400"
                                >
                                    Sobre
                                </a>
                            </li>

                            <li>
                                <a
                                    href="#challenge"
                                    className="text-gray-400 transition hover:text-cyan-400"
                                >
                                    Arena Atual
                                </a>
                            </li>

                            <li>
                                <a
                                    href="#participants"
                                    className="text-gray-400 transition hover:text-cyan-400"
                                >
                                    Participantes
                                </a>
                            </li>

                            <li>
                                <a
                                    href="#technologies"
                                    className="text-gray-400 transition hover:text-cyan-400"
                                >
                                    Tecnologias
                                </a>
                            </li>
                        </ul>
                    </div>

                    {/* Comunidade */}
                    <div>
                        <h3 className="mb-5 font-semibold text-white">
                            Comunidade
                        </h3>

                        <div className="space-y-4">

                            <a
                                href="https://github.com/FrontArena"
                                target="_blank"
                                rel="noreferrer"
                                className="flex w-fit items-center gap-3 rounded-xl border border-purple-500/20 bg-purple-500/10 px-4 py-3 text-purple-300 transition hover:border-purple-500/50 hover:bg-purple-500/20"
                            >
                                <BsGithub size={18} />
                                GitHub
                            </a>

                            <p className="text-gray-500">
                                Acompanhe desafios, regras,
                                participantes e futuras temporadas.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Linha */}
                <div className="my-10 border-t border-white/10" />

                {/* Bottom */}
                <div className="flex flex-col gap-3 text-center text-sm text-gray-500 md:flex-row md:items-center md:justify-between">
                    <p>
                        © {new Date().getFullYear()} FrontArena. Todos os direitos reservados.
                    </p>

                    <p>
                        Construído pela comunidade FrontArena ⚔️
                    </p>

                    <p>
                        Versão 1.0.0
                    </p>
                </div>
            </div>
        </footer>
    );
}