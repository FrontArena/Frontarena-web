import { motion } from "framer-motion";
import { Users, User, ExternalLink } from "lucide-react";

export default function Participants() {
    const participants = [
        {
            name: "Chokiwars",
            github: "https://github.com/Chokiwars",
            image: "https://warriorcats.com/wp-content/uploads/2025/03/Scourge.png",
        },
        {
            name: "Leandrado",
            github: "https://github.com/Leandrado",
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRpjGhSuLVgAs8Fe8CsPdAwlob3qmERsL7Wcqsovwyd7Q&s",
        },
        {
            name: "LeheL-design",
            github: "https://github.com/LeheL-design",
            image: "https://www.iamfy.co/cdn/shop/files/m_2Fx1000_2F9c20f7f3-e09a-48db-b1c6-68769a12e4a5.jpg?v=1760740974",
        },
        {
            name: "noritame",
            github: "https://github.com/noritame",
            image: "https://i.pinimg.com/736x/49/ca/8b/49ca8bb058038bdaf8bc467fca0dff28.jpg",
        },
        {
            name: "sabrinasavini",
            github: "https://github.com/sabrinasavini",
            image: "https://yt3.googleusercontent.com/ytc/AIdro_lEeZP6Urk3JhCp_BnVamf57KSdAv-ZJb2nJqHmW-8ZIuM=s900-c-k-c0x00ffffff-no-rj",
        },
        {
            name: "IgorLDev",
            github: "https://github.com/IgorLDev",
            image: "https://wallpapers.com/images/hd/snivy-on-leafy-background-voo65p8ok3gqsday.jpg",
        },
        {
            name: "Guest #342",
            github: null,
            image: null,
        },
        {
            name: "Guest #1552",
            github: null,
            image: null,
        },
        {
            name: "Guest #121",
            github: null,
            image: null,
        },
    ];

    return (
        <section id="participants" className="relative">
            <div className="mx-auto max-w-7xl px-6">

                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-16 text-center"
                >
                    <div className="mx-auto mb-6 flex w-fit items-center gap-2 rounded-full border border-cyan-500/30 bg-cyan-500/10 px-5 py-2 text-sm text-cyan-300">
                        <Users size={16} />
                        Participantes
                    </div>

                    <h2 className="font-['Orbitron'] text-4xl font-bold text-white md:text-6xl ali al">
                        Os Combatentes da Arena
                    </h2>

                    <p className="mx-auto mt-6 max-w-2xl text-lg text-gray-400 align-middle inline-flex items-center gap-2">
                        Cada participante possui liberdade total para criar sua própria
                        solução utilizando as tecnologias que preferir.
                    </p>
                </motion.div>

                {/* Grid */}
                <div className="flex flex-wrap justify-center gap-6">
                    {participants.map((participant, index) => (
                        <motion.div
                            key={`${participant.name}-${index}`}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.05 }}
                            className="group w-full max-w-[220px] rounded-3xl border border-white/10 bg-white/5 p-6 text-center backdrop-blur-xl transition hover:border-purple-500/40 hover:bg-white/10"                        >
                            <div className="mx-auto mb-4 flex h-20 w-20 items-center justify-center overflow-hidden rounded-full border border-white/10 bg-gradient-to-r from-cyan-500/20 to-purple-600/20">

                                {participant.image ? (
                                    <img
                                        src={participant.image}
                                        alt={participant.name}
                                        className="h-full w-full object-cover"
                                    />
                                ) : (
                                    <User size={32} className="text-gray-400" />
                                )}

                            </div>

                            <h3 className="font-medium text-white">
                                {participant.name}
                            </h3>

                            {participant.github && (
                                <a
                                    href={participant.github}
                                    target="_blank"
                                    rel="noreferrer"
                                    className="mt-4 inline-flex items-center gap-2 rounded-xl border border-cyan-500/20 bg-cyan-500/10 px-4 py-2 text-sm text-cyan-300 transition hover:border-cyan-500/50 hover:bg-cyan-500/20"
                                >
                                    Ver GitHub
                                    <ExternalLink size={14} />
                                </a>
                            )}
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}