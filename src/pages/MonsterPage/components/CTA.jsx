import { ArrowRight } from "lucide-react";

export default function CTA() {
    return (
        <section className="relative overflow-hidden px-6 py-32">
            <div className="absolute inset-0 bg-gradient-to-r from-green-500/10 via-green-500/5 to-transparent" />

            <div className="absolute left-1/2 top-1/2 h-[400px] w-[400px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-green-500/20 blur-[120px]" />

            <div className="relative mx-auto max-w-4xl text-center">
                <span className="text-sm font-semibold uppercase tracking-[0.3em] text-green-500 animate-pulse">
                    FrontArena Season 01
                </span>

                <h2 className="mt-6 text-5xl font-black text-white md:text-7xl">
                    ACEITA O
                    <span className="block text-green-500">
                        DESAFIO?
                    </span>
                </h2>

                <p className="mx-auto mt-6 max-w-2xl text-lg text-gray-400 align-middle inline-flex items-center gap-2">
                    Receba seu Monster sorteado, desenvolva uma landing page
                    incrível e dispute o primeiro título da FrontArena.
                </p>

                <button className="group mt-10 inline-flex items-center gap-3 rounded-2xl bg-green-500 px-8 py-5 text-lg font-bold text-black transition hover:scale-105">
                    Participar Agora

                    <ArrowRight
                        size={20}
                        className="transition group-hover:translate-x-1"
                    />
                </button>
            </div>
        </section>
    );
}