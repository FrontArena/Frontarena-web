// import { Github, Heart } from "lucide-react";

export default function Footer() {
    return (
        <footer className="border-t border-white/10 bg-black">
            <div className="mx-auto max-w-7xl px-6 py-12">
                <div className="flex flex-col items-center justify-between gap-8 md:flex-row">
                    {/* Marca */}
                    <div>
                        <h2 className="font-['Orbitron'] text-2xl font-bold text-white">
                            Front<span className="text-purple-500">Arena</span>
                        </h2>

                        <p className="mt-2 text-sm text-gray-400">
                            Um tema. Inúmeras soluções.
                        </p>
                    </div>

                    {/* Links */}
                    <div className="flex flex-wrap items-center gap-6 text-sm text-gray-400">
                        <a
                            href="#"
                            className="transition hover:text-cyan-400"
                        >
                            Sobre
                        </a>

                        <a
                            href="#"
                            className="transition hover:text-cyan-400"
                        >
                            Arenas
                        </a>

                        <a
                            href="#"
                            className="transition hover:text-cyan-400"
                        >
                            Participantes
                        </a>

                        <a
                            href="#"
                            className="transition hover:text-cyan-400"
                        >
                            Ranking
                        </a>
                    </div>

                    {/* Github */}
                    <a
                        href="https://github.com/FrontArena"
                        target="_blank"
                        rel="noreferrer"
                        className="flex items-center gap-2 rounded-lg border border-purple-500/30 px-4 py-2 text-sm text-purple-400 transition hover:border-purple-500 hover:bg-purple-500/10"
                    >
                        {/* <Github size={18} /> */}
                        GitHub
                    </a>
                </div>

                <div className="mt-10 border-t border-white/10 pt-6 text-center text-sm text-gray-500">
                    <p className="flex items-center justify-center gap-2">
                        Desenvolvido com 
                        {/* <Heart size={14} className="text-purple-500" /> */}
                        pela comunidade FrontArena.
                    </p>

                    <p className="mt-2">
                        © {new Date().getFullYear()} FrontArena. Todos os direitos reservados.
                    </p>
                </div>
            </div>
        </footer>
    );
}