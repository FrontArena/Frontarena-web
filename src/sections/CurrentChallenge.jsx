import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { Flame, Users, FolderGit2, CalendarDays, Lock } from "lucide-react";

import Button from "../components/ui/Button";

export default function CurrentChallenge() {

    // Data e hora do início da arena (15 de junho de 2026, às 12:00 PM, horário de Brasília)
    const targetDate = new Date("2026-06-15T12:00:00-03:00");

    const [timeLeft, setTimeLeft] = useState({
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0,
        finished: false,
    });


    useEffect(() => {
        const interval = setInterval(() => {
            const now = new Date();
            const difference = targetDate - now;

            if (difference <= 0) {
                setTimeLeft((prev) => ({
                    ...prev,
                    finished: true,
                }));

                clearInterval(interval);
                return;
            }

            setTimeLeft({
                days: Math.floor(difference / (1000 * 60 * 60 * 24)),
                hours: Math.floor(
                    (difference / (1000 * 60 * 60)) % 24
                ),
                minutes: Math.floor(
                    (difference / (1000 * 60)) % 60
                ),
                seconds: Math.floor(
                    (difference / 1000) % 60
                ),
                finished: false,
            });
        }, 1000);

        return () => clearInterval(interval);
    }, []);

    // Data e hora do término da arena (30 de junho de 2026, às 12:00 PM, horário de Brasília)
    const endDate = new Date("2026-06-30T12:00:00-03:00");

    const [challengeTimeLeft, setChallengeTimeLeft] = useState({
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0,
    });

    useEffect(() => {
        const interval = setInterval(() => {
            const now = new Date();
            const difference = endDate - now;

            if (difference <= 0) {
                setChallengeTimeLeft({
                    days: 0,
                    hours: 0,
                    minutes: 0,
                    seconds: 0,
                });

                clearInterval(interval);
                return;
            }

            setChallengeTimeLeft({
                days: Math.floor(difference / (1000 * 60 * 60 * 24)),
                hours: Math.floor(
                    (difference / (1000 * 60 * 60)) % 24
                ),
                minutes: Math.floor(
                    (difference / (1000 * 60)) % 60
                ),
                seconds: Math.floor(
                    (difference / 1000) % 60
                ),
            });
        }, 1000);

        return () => clearInterval(interval);
    }, []);

    return (
        <section id="challenge" className="relative py-32">
            <div className="mx-auto max-w-7xl px-6">

                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center"
                >
                    <div className="mx-auto mb-6 flex w-fit items-center gap-2 rounded-full border border-cyan-500/30 bg-cyan-500/10 px-5 py-2 text-sm text-cyan-300">
                        <Flame size={16} />
                        Arena Atual
                    </div>

                    <h2 className="font-['Orbitron'] text-4xl font-bold text-white md:text-6xl">
                        O primeiro desafio começou.
                    </h2>

                    <p className="mx-auto mt-6 max-w-2xl text-lg text-gray-400 align-middle inline-flex items-center gap-2">
                        Todos os participantes receberam o mesmo tema. Agora é hora
                        de transformar criatividade, código e design em uma solução única.
                    </p>
                </motion.div>

                {/* Arena Card */}
                <motion.div
                    initial={{ opacity: 0, y: 60 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="relative mt-20 overflow-hidden rounded-3xl border border-cyan-500/20 bg-white/5 p-10 backdrop-blur-xl"
                >
                    {/* Glow */}
                    <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 via-cyan-400/20 to-cyan-500/10" />

                    {/* Glow Extra */}
                    <div className="absolute -left-32 top-0 h-72 w-72 rounded-full bg-cyan-500/20 blur-[120px]" />

                    <div className="relative z-10">

                        <span className="text-sm uppercase tracking-[0.3em] text-cyan-400">
                            Arena #01
                        </span>

                        <h3 className="mt-4 font-['Orbitron'] text-5xl font-black text-white md:text-7xl">
                            MONSTER ENERGY
                        </h3>

                        <p className="mt-6 max-w-4xl text-lg text-gray-300 align-middle inline-flex items-center gap-2">
                            Desenvolva uma landing page inspirada na identidade da Monster Energy.<br />
                            O objetivo é criar uma experiência visual impactante, com muita personalidade,
                            animações, energia e uma estética capaz de representar a marca.
                        </p>

                        <div className="mt-10">
                            {!timeLeft.finished ? (
                                <>
                                    <p className="mb-6 text-sm uppercase tracking-[0.3em] text-cyan-400">
                                        A Arena começa em
                                    </p>

                                    <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
                                        <div className="rounded-2xl border border-cyan-500/20 bg-black/30 p-6 text-center">
                                            <h4 className="text-4xl font-bold text-white">
                                                {timeLeft.days}
                                            </h4>

                                            <p className="mt-2 text-gray-400">
                                                Dias
                                            </p>
                                        </div>

                                        <div className="rounded-2xl border border-cyan-500/20 bg-black/30 p-6 text-center">
                                            <h4 className="text-4xl font-bold text-white">
                                                {timeLeft.hours}
                                            </h4>

                                            <p className="mt-2 text-gray-400">
                                                Horas
                                            </p>
                                        </div>

                                        <div className="rounded-2xl border border-cyan-500/20 bg-black/30 p-6 text-center">
                                            <h4 className="text-4xl font-bold text-white">
                                                {timeLeft.minutes}
                                            </h4>

                                            <p className="mt-2 text-gray-400">
                                                Minutos
                                            </p>
                                        </div>

                                        <div className="rounded-2xl border border-cyan-500/20 bg-black/30 p-6 text-center">
                                            <h4 className="text-4xl font-bold text-white">
                                                {timeLeft.seconds}
                                            </h4>

                                            <p className="mt-2 text-gray-400">
                                                Segundos
                                            </p>
                                        </div>
                                    </div>
                                </>
                            ) : (
                                <div className="mt-10 rounded-3xl border border-green-500/20 bg-gradient-to-r from-green-500/10 via-green-400/5 to-green-500/10 p-8 text-center">

                                    <h3 className="mt-5 font-['Orbitron'] text-4xl font-black text-white">
                                        Arena Desbloqueada!
                                    </h3>

                                    <p className="mx-auto mt-4 max-w-2xl text-gray-300 align-middle inline-flex items-center gap-2">
                                        Os participantes já podem iniciar seus projetos e enviar suas
                                        soluções para a primeira temporada da FrontArena.
                                    </p>
                                </div>
                            )}
                        </div>

                        {/* Tags */}
                        <div className="mt-8 inline-flex flex-wrap items-center gap-3">
                            {[
                                "Energia Extrema",
                                "Adrenalina",
                                "Gaming",
                                "Neon",
                                "Visual Agressivo",
                                "Animações Impactantes",
                                "Alta Performance",
                            ].map((tag) => (
                                <span
                                    key={tag}
                                    className="rounded-full border border-cyan-500/20 bg-cyan-500/10 px-4 py-2 text-sm text-cyan-300"
                                >
                                    {tag}
                                </span>
                            ))}
                        </div>

                        {/* Tecnologias */}
                        <div className="mt-6 flex flex-wrap gap-3 align-middle inline-flex items-center">
                            {[
                                "HTML",
                                "CSS",
                                "JavaScript",
                                "TypeScript",
                                "React",
                                "Vue",
                                "Angular",
                                "Tailwind",
                                "Framer Motion",
                            ].map((tech) => (
                                <span
                                    key={tech}
                                    className="rounded-full border border-white/10 bg-black/30 px-4 py-2 text-sm text-gray-300"
                                >
                                    {tech}
                                </span>
                            ))}
                        </div>

                        {/* CTA */}
                        {timeLeft.finished ? (
                            <div className="mt-10 flex flex-col items-center justify-center gap-10 sm:flex-row">
                                <Button
                                    to={"/monster"}
                                    variant="solid"
                                    className="bg-green-500 px-6 py-4 font-semibold text-black transition hover:scale-105">
                                    Participar da Arena
                                </Button>

                                <Button
                                    variant="secondary"
                                    onClick={() =>
                                        document
                                            .getElementById("rules")
                                            ?.scrollIntoView({ behavior: "smooth" })
                                    }
                                >
                                    Ver Regras
                                </Button>
                            </div>
                        ) : (
                            <div className="mt-10 flex flex-col items-center justify-center gap-4">
                                <div className="rounded-2xl border border-yellow-500/20 bg-yellow-500/10 px-6 py-4 text-center">
                                    <p className="font-semibold text-yellow-300">
                                        <Lock size={16} className="inline-block" /> A Arena ainda não foi liberada
                                    </p>

                                    <p className="mt-2 text-sm text-yellow-200/70">
                                        Aguarde a contagem regressiva chegar ao fim.
                                    </p>
                                </div>
                            </div>
                        )}

                        {/* Stats */}
                        {timeLeft.finished && (
                            <div className="mt-14 grid gap-6 md:grid-cols-3">
                                <div className="rounded-2xl border border-white/10 bg-black/20 p-6">
                                    <Users className="mb-4 text-cyan-400" />

                                    <h4 className="text-3xl font-bold text-white">
                                        08
                                    </h4>

                                    <p className="text-gray-400">
                                        Desafiantes
                                    </p>
                                </div>

                                <div className="rounded-2xl border border-white/10 bg-black/20 p-6">
                                    <FolderGit2 className="mb-4 text-cyan-400" />

                                    <h4 className="text-3xl font-bold text-white">
                                        00
                                    </h4>

                                    <p className="text-gray-400">
                                        Submissões
                                    </p>
                                </div>

                                <div className="rounded-2xl border border-white/10 bg-black/20 p-6">
                                    <CalendarDays className="mb-4 text-cyan-400" />

                                    <h4 className="text-3xl font-bold text-white">
                                        {challengeTimeLeft.days}d {challengeTimeLeft.hours}h
                                    </h4>

                                    <p className="text-gray-400">
                                        Tempo Restante
                                    </p>
                                </div>
                            </div>
                        )}
                        <div className="mt-10">
                            <p className="mb-5 text-sm uppercase tracking-[0.3em] text-red-400">
                                Encerramento da Arena
                            </p>

                            <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
                                <div className="rounded-2xl border border-red-500/20 bg-black/30 p-6 text-center">
                                    <h4 className="text-4xl font-bold text-white">
                                        {challengeTimeLeft.days}
                                    </h4>

                                    <p className="mt-2 text-gray-400">
                                        Dias
                                    </p>
                                </div>

                                <div className="rounded-2xl border border-red-500/20 bg-black/30 p-6 text-center">
                                    <h4 className="text-4xl font-bold text-white">
                                        {challengeTimeLeft.hours}
                                    </h4>

                                    <p className="mt-2 text-gray-400">
                                        Horas
                                    </p>
                                </div>

                                <div className="rounded-2xl border border-red-500/20 bg-black/30 p-6 text-center">
                                    <h4 className="text-4xl font-bold text-white">
                                        {challengeTimeLeft.minutes}
                                    </h4>

                                    <p className="mt-2 text-gray-400">
                                        Minutos
                                    </p>
                                </div>

                                <div className="rounded-2xl border border-red-500/20 bg-black/30 p-6 text-center">
                                    <h4 className="text-4xl font-bold text-white">
                                        {challengeTimeLeft.seconds}
                                    </h4>

                                    <p className="mt-2 text-gray-400">
                                        Segundos
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}