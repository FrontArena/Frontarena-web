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

                <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-5">
                    {steps.map((step, index) => {
                        const Icon = step.icon;

                        return (
                            <div
                                key={step.title}
                                className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-6 transition-all duration-300 hover:border-green-500/40 hover:bg-white/[0.07]"
                            >
                                <div className="absolute inset-0 bg-gradient-to-b from-green-500/0 to-green-500/5 opacity-0 transition-opacity group-hover:opacity-100" />

                                <div className="relative z-10">
                                    <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-green-500/10 text-green-500">
                                        <Icon size={28} />
                                    </div>

                                    <span className="text-xs font-bold text-green-500">
                                        PASSO {index + 1}
                                    </span>

                                    <h3 className="mt-2 text-xl font-bold text-white">
                                        {step.title}
                                    </h3>

                                    <p className="mt-3 text-sm leading-relaxed text-gray-400">
                                        {step.description}
                                    </p>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}