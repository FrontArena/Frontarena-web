import { CheckCircle2, XCircle } from "lucide-react";

const allowed = [
    "HTML",
    "CSS",
    "JavaScript",
    "TypeScript",
    "React",
    "Vue",
    "Angular",
    "Svelte",
    "Tailwind CSS",
    "Sass",
    "Framer Motion",
];

const forbidden = [
    "Templates prontos",
    "Projetos copiados",
    "Clones diretos de sites existentes",
    "Submissões fora do prazo",
];

export default function Rules() {
    return (
        <section 
        id="rules"
        className="px-6 py-24">
            <div className="mx-auto max-w-7xl">
                <div className="mb-16 text-center">
                    <span className="text-sm font-semibold uppercase tracking-[0.3em] text-green-500">
                        Regras
                    </span>

                    <h2 className="mt-4 text-4xl font-black text-white md:text-5xl">
                        O que Vale?
                    </h2>

                    <p className="mx-auto mt-4 max-w-2xl text-gray-400">
                        O objetivo é criar uma experiência única inspirada no
                        universo Monster Energy. Use sua criatividade.
                    </p>
                </div>

                <div className="grid gap-8 lg:grid-cols-2">
                    {/* Permitido */}
                    <div className="rounded-3xl border border-green-500/20 bg-green-500/5 p-8">
                        <div className="mb-8 flex items-center gap-3">
                            <CheckCircle2
                                size={30}
                                className="text-green-500"
                            />

                            <h3 className="text-2xl font-bold text-white">
                                Permitido
                            </h3>
                        </div>

                        <div className="grid gap-4 sm:grid-cols-2">
                            {allowed.map((item) => (
                                <div
                                    key={item}
                                    className="flex items-center gap-3 rounded-xl border border-white/10 bg-black/20 p-4"
                                >
                                    <CheckCircle2
                                        size={18}
                                        className="text-green-500"
                                    />

                                    <span className="text-gray-200">
                                        {item}
                                    </span>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Não permitido */}
                    <div className="rounded-3xl border border-red-500/20 bg-red-500/5 p-8">
                        <div className="mb-8 flex items-center gap-3">
                            <XCircle
                                size={30}
                                className="text-red-500"
                            />

                            <h3 className="text-2xl font-bold text-white">
                                Não Permitido
                            </h3>
                        </div>

                        <div className="grid gap-4">
                            {forbidden.map((item) => (
                                <div
                                    key={item}
                                    className="flex items-center gap-3 rounded-xl border border-white/10 bg-black/20 p-4"
                                >
                                    <XCircle
                                        size={18}
                                        className="text-red-500"
                                    />

                                    <span className="text-gray-200">
                                        {item}
                                    </span>
                                </div>
                            ))}
                        </div>

                        <div className="mt-8 rounded-2xl border border-yellow-500/20 bg-yellow-500/5 p-5">
                            <p className="text-sm text-yellow-300">
                                ⚠️ O uso de IA para auxiliar no desenvolvimento
                                é permitido, mas o projeto deve refletir suas
                                próprias decisões, criatividade e implementação.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}