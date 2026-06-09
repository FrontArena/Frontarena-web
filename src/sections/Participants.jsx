export default function Participants() {
    const participants = [
        "Chokiwars",
        "Leandrado",
        "LeheL-design",
        "noritame",
        "sabrinasavini",
    ];

    return (
        <section
            id="participants"
            className="w-full py-32"
        >
            <div className="mx-auto max-w-7xl px-6">
                <h2 className="mb-12 text-center font-['Orbitron'] text-4xl font-bold">
                    Participantes
                </h2>

                <div className="grid gap-6 md:grid-cols-3 lg:grid-cols-5">
                    {participants.map((participant) => (
                        <div
                            key={participant}
                            className="rounded-2xl border border-white/10 bg-white/5 p-6 text-center transition hover:border-purple-500"
                        >
                            <div className="mx-auto mb-4 h-16 w-16 rounded-full bg-gradient-to-r from-cyan-500 to-purple-600" />

                            <h3>{participant}</h3>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}