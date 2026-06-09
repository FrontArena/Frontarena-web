import Hero from "../sections/Hero";
import About from "../sections/About";
import CurrentChallenge from "../sections/CurrentChallenge";
import Participants from "../sections/Participants";
import Technologies from "../sections/Technologies";

export default function Home() {
    return (
        <>
            <Hero />

            <About />

            <CurrentChallenge />

            <Participants />

            <Technologies />
        </>
    );
}