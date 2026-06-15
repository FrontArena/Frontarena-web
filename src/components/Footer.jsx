import { BsGithub } from "react-icons/bs";
import { ChevronLeft, ChevronRight, ArrowUp } from "lucide-react";

export default function Footer() {
    return (
        <footer className="relative overflow-hidden bg-black">
            {/* Glow */}
            <div className="absolute bottom-0 left-1/2 h-96 w-96 -translate-x-1/2 rounded-full bg-purple-600/10 blur-[180px]" />

            <div className="relative mx-auto max-w-7xl px-6 py-12">

                <div className="grid gap-12 md:grid-cols-3">

                    {/* Texto + Botão de volta para cima */}
                    <div>
                        <p className="mt-5 text-lg text-gray-300">
                            Um tema. Inúmeras soluções.
                        </p>

                        <p className="mt-4 max-w-sm text-gray-500">
                            Comunidade focada em desafios frontend,
                            criatividade e evolução através da prática.
                        </p>

                        <a className="mt-6 inline-flex items-center gap-2 rounded-xl border border-purple-500/50 bg-purple-500/10 
                                    px-4 py-2 text-sm text-purple-300 transition hover:border-purple-500/50 hover:bg-purple-500/20"
                            href="#top">
                            Voltar pra cima
                            <ArrowUp size={14} />
                        </a>
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
                                    href="\monster"
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
                            <div className="flex flex-rows gap-3">
                                <a
                                    href="https://github.com/FrontArena"
                                    target="_blank"
                                    rel="noreferrer"
                                    className="group flex items-center gap-3 rounded-2xl border border-cyan-500/20 bg-cyan-500/10 px-5 py-3 text-cyan-300 transition-all hover:border-cyan-500/50 hover:bg-cyan-500/20"
                                >
                                    <BsGithub
                                        size={18}
                                        className="transition-transform group-hover:scale-110"
                                    />

                                    <div className="text-left">
                                        <p className="text-sm font-semibold">
                                            FrontArena
                                        </p>

                                        <p className="text-xs text-cyan-400/70">
                                            Repositório oficial
                                        </p>
                                    </div>
                                </a>

                                <a
                                    href="https://github.com/Chokiwars"
                                    target="_blank"
                                    rel="noreferrer"
                                    className="group flex items-center gap-3 rounded-2xl border border-purple-500/20 bg-purple-500/10 px-5 py-3 text-purple-300 transition-all hover:border-purple-500/50 hover:bg-purple-500/20"
                                >
                                    <BsGithub
                                        size={18}
                                        className="transition-transform group-hover:scale-110"
                                    />

                                    <div className="text-left">
                                        <p className="text-sm font-semibold">
                                            Chokiwars
                                        </p>

                                        <p className="text-xs text-purple-400/70">
                                            Criadora do projeto
                                        </p>
                                    </div>
                                </a>
                            </div>

                            <p className="max-w-md text-sm leading-relaxed text-gray-500">
                                Acompanhe desafios, regras, participantes e futuras temporadas.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Linha */}
                <div className="my-10 border-t border-white/10" />

                {/* Bottom */}
                <div className="text-center text-sm text-gray-500">
                    <p>
                        © {new Date().getFullYear()} FrontArena. Todos os direitos reservados.
                        <span className="mx-3 text-purple-500">•</span>
                        Construído pela comunidade FrontArena ⚔️
                        <span className="mx-3 text-cyan-500">•</span>
                        Versão 1.0.0
                    </p>
                </div>
            </div>
        </footer>
    );
}