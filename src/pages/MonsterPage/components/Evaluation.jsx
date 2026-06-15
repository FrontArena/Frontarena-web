import { Palette, Lightbulb, Smartphone, Code2 } from "lucide-react";

const criteria = [
    {
        icon: Palette,
        points: 40,
        title: "Design",
        description:
            "Visual, identidade, impacto e qualidade estética do projeto.",
    },
    {
        icon: Lightbulb,
        points: 25,
        title: "Criatividade",
        description:
            "Originalidade das ideias e diferenciais apresentados.",
    },
    {
        icon: Code2,
        points: 20,
        title: "Código",
        description:
            "Organização, boas práticas e estrutura do projeto.",
    },
    {
        icon: Smartphone,
        points: 15,
        title: "Responsividade",
        description:
            "Experiência consistente em desktop, tablet e mobile.",
    },
];

export default function Evaluation() {
    return (
        <section className="px-6 py-24">
            <div className="mx-auto max-w-7xl">
                <div className="mb-16 text-center">
                    <span className="text-sm font-semibold uppercase tracking-[0.3em] text-cyan-500">
                        Avaliação
                    </span>

                    <h2 className="mt-4 text-4xl font-black text-white md:text-5xl">
                        Como os Projetos Serão Avaliados
                    </h2>

                    <p className="mx-auto mt-6 max-w-2xl text-lg text-gray-400 align-middle inline-flex items-center gap-2">
                        Cada detalhe importa. Mostre suas habilidades e
                        impressione a comunidade.
                    </p>
                </div>

                <div className="mx-auto mt-20 max-w-7xl space-y-8 grid md:space-y-0 md:grid-cols-2 gap-6">
                    {criteria.map((item) => {
                        const Icon = item.icon;

                        return (
                            <div
                                key={item.title}
                                className="rounded-3xl border border-white/10 bg-white/5 p-6"
                            >
                                <div className="mb-4 flex items-center justify-between">
                                    <div className="flex items-center gap-4">
                                        <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-cyan-500/10">
                                            <Icon
                                                size={24}
                                                className="text-cyan-500"
                                            />
                                        </div>

                                        <div>
                                            <h3 className="font-bold text-white">
                                                {item.title}
                                            </h3>

                                            <p className="text-sm text-gray-400">
                                                {item.description}
                                            </p>
                                        </div>
                                    </div>

                                    <span className="text-2xl font-black text-cyan-500">
                                        {item.points} pts
                                    </span>
                                </div>

                                <div className="h-3 overflow-hidden rounded-full bg-white/5">
                                    <div
                                        className="h-full rounded-full bg-cyan-500"
                                        style={{
                                            width: `${item.points}%`,
                                        }}
                                    />
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}