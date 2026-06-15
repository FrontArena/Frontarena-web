import {
    UserPlus,
    Shuffle,
    Code2,
    Upload,
    Trophy,
} from "lucide-react";

const steps = [
    {
        icon: UserPlus,
        title: "Inscreva-se",
        description:
            "Entre para o desafio e garanta sua participação na primeira temporada da FrontArena.",
    },
    {
        icon: Shuffle,
        title: "Receba seu Monster",
        description:
            "Cada participante receberá uma versão sorteada do Monster Energy.",
    },
    {
        icon: Code2,
        title: "Desenvolva",
        description:
            "Crie uma landing page inspirada na identidade visual da sua versão.",
    },
    {
        icon: Upload,
        title: "Envie seu Projeto",
        description:
            "Publique seu projeto dentro do prazo definido para o desafio.",
    },
    {
        icon: Trophy,
        title: "Dispute o Topo",
        description:
            "Os projetos serão avaliados pela comunidade e pelos organizadores.",
    },
];

export default function HowItWorks() {
    return (
        <section className="px-6 py-24">
            <div className="mx-auto max-w-7xl">
                <div className="mb-16 text-center">
                    <span className="text-sm font-semibold uppercase tracking-[0.3em] text-green-500">
                        Como Funciona
                    </span>

                    <h2 className="mt-4 text-4xl font-black text-white md:text-5xl">
                        Entre na Arena
                    </h2>

                    <p className="mx-auto mt-6 max-w-2xl text-lg text-gray-400 align-middle inline-flex items-center gap-2">
                        O processo é simples. Receba seu Monster, crie algo
                        incrível e mostre suas habilidades para toda a
                        comunidade.
                    </p>
                </div>

                <div className="relative mt-20">
                    {/* Linha */}
                    <div className="absolute left-0 top-8 hidden h-0.5 w-full bg-gradient-to-r from-green-900/20 via-green-700 to-green-900/20 lg:block" />

                    <div className="grid gap-10 lg:grid-cols-5">
                        {steps.map((step, index) => {
                            const Icon = step.icon;

                            return (
                                <div
                                    key={step.title}
                                    className="relative text-center"
                                >
                                    {/* Número */}
                                    <div className="absolute -top-3 left-1/2 z-20 flex h-8 w-8 -translate-x-1/2 items-center justify-center rounded-full border border-green-500/30 bg-black text-xs font-bold text-green-500">
                                        {index + 1}
                                    </div>

                                    {/* Ícone */}
                                    <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl border border-green-500/20 bg-green-500/10 text-green-500 shadow-[0_0_30px_rgba(34,197,94,0.15)]">
                                        <Icon size={30} />
                                    </div>

                                    {/* Conteúdo */}
                                    <h3 className="mt-6 text-lg font-bold text-white">
                                        {step.title}
                                    </h3>

                                    <p className="mt-3 text-sm leading-relaxed text-gray-400">
                                        {step.description}
                                    </p>
                                </div>
                            );
                        })}
                    </div>


                    <p className="mx-auto mt-6 max-w-2xl text-lg text-gray-400 align-middle inline-flex items-center gap-2">
                        Siga esses passos para participar do desafio e mostrar suas habilidades.
                    </p>
                </div>

                <div className="mt-20 space-y-6">
                    <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
                        <span className="text-sm font-bold text-green-500">
                            PASSO 01
                        </span>

                        <h3 className="mt-2 text-2xl font-bold text-white">
                            Inscreva-se na Arena
                        </h3>

                        <p className="mt-4 text-gray-400">
                            Inscreva-se agora dentro da FrontArena e receba seu
                            Monster para começar sua jornada na arena.
                        </p>
                    </div>

                    <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
                        <span className="text-sm font-bold text-green-500">
                            PASSO 02
                        </span>

                        <h3 className="mt-2 text-2xl font-bold text-white">
                            Receba seu tema Monster
                        </h3>

                        <p className="mt-4 text-gray-400">
                            Uma versão do Monster Energy será sorteada para você,
                            definindo o tema visual que servirá como inspiração
                            para seu projeto.
                        </p>
                    </div>

                    {/* restante dos passos */}


                    <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
                        <span className="text-sm font-bold text-green-500">
                            PASSO 03
                        </span>
                        <h3 className="mt-2 text-2xl font-bold text-white">
                            Desenvolva seu Projeto
                        </h3>

                        <p className="mt-4 text-gray-400">
                            Use sua criatividade para desenvolver uma landing page incrível, inspirada na identidade
                            visual da sua versão do Monster.
                        </p>
                    </div>


                    <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
                        <span className="text-sm font-bold text-green-500">
                            PASSO 04
                        </span>
                        <h3 className="mt-2 text-2xl font-bold text-white">
                            Envie seu Projeto
                        </h3>

                        <p className="mt-4 text-gray-400">
                            Publique seu projeto dentro do repositório definido e compartilhe com a comunidade.
                        </p>
                    </div>


                    <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
                        <span className="text-sm font-bold text-green-500">
                            PASSO 05
                        </span>
                        <h3 className="mt-2 text-2xl font-bold text-white">
                            Dispute o Topo
                        </h3>
                        <p className="mt-4 text-gray-400">
                            Os projetos serão avaliados pela comunidade e pelos organizadores, com base em critérios como criatividade, design, código e responsividade.
                        </p>
                    </div>
                </div>

            </div>
        </section>
    );
}
