import Hero from "./components/Hero";
import HowItWorks from "./components/HowItWorks";
import Rules from "./components/Rules";
import Evaluation from "./components/Evaluation";
import FAQ from "./components/FAQ";
import CTA from "./components/CTA";

export default function MonsterPage() {
    return (
        <main className="bg-black text-white">
            <Hero />
            <HowItWorks />
            <Rules />
            <Evaluation />
            <FAQ />
            <CTA />
        </main>
    );
}