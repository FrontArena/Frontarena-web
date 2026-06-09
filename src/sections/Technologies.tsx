export default function Technologies() {
    const techs = [
        "React",
        "Vue",
        "Angular",
        "Tailwind",
        "TypeScript",
        "Next.js",
        "Sass",
        "Vite",
    ];

    return (
        <section className="w-full py-32">
            <div className="mx-auto max-w-7xl px-6 text-center">
                <h2 className="mb-12 font-['Orbitron'] text-4xl font-bold">
                    Tecnologias
                </h2>

                <div className="flex flex-wrap justify-center gap-4">
                    {techs.map((tech) => (
                        <span
                            key={tech}
                            className="rounded-full border border-purple-500/30 px-5 py-2 text-purple-300"
                        >
                            {tech}
                        </span>
                    ))}
                </div>
            </div>
        </section>
    );
}