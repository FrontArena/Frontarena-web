import { Palette, Lightbulb, Smartphone, Code2 } from "lucide-react";

const criteria = [
    {
        icon: Palette,
        percentage: "40%",
        title: "Design",
        description:
            "Visual, identidade, impacto e qualidade estética do projeto.",
    },
    {
        icon: Lightbulb,
        percentage: "25%",
        title: "Criatividade",
        description:
            "Originalidade das ideias e diferenciais apresentados.",
    },
    {
        icon: Code2,
        percentage: "20%",
        title: "Código",
        description:
            "Organização, boas práticas e estrutura do projeto.",
    },
    {
        icon: Smartphone,
        percentage: "15%",
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
                    <span className="text-sm font-semibold uppercase tracking-[0.3em] text-green-500">
                        Avaliação
                    </span>

                    <h2 className="mt-4 text-4xl font-black text-white md:text-5xl">
                        Como os Projetos Serão Avaliados
                    </h2>

                    <p className="mx-auto mt-4 max-w-2xl text-gray-400">
                        Cada detalhe importa. Mostre suas habilidades e
                        impressione a comunidade.
                    </p>
                </div>

                <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
                    {criteria.map((item) => {
                        const Icon = item.icon;

                        return (
                            <div
                                key={item.title}
                                className="rounded-3xl border border-white/10 bg-white/5 p-8 transition hover:border-green-500/30"
                            >
                                <Icon
                                    size={34}
                                    className="mb-6 text-green-500"
                                />

                                <span className="text-5xl font-black text-green-500">
                                    {item.percentage}
                                </span>

                                <h3 className="mt-4 text-xl font-bold text-white">
                                    {item.title}
                                </h3>

                                <p className="mt-3 text-gray-400">
                                    {item.description}
                                </p>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}