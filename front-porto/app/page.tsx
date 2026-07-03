import Navbar from '@/components/layout/Navbar';
import About from '@/components/sections/About';
import Contact from '@/components/sections/Contact';
import Hero from '@/components/sections/Hero';
import Projects from '@/components/sections/Projects';
import Skills from '@/components/sections/Skills';
import RevealSection from '@/components/ui/RevealSection';

export default function Home() {
    return (
        <main>
            <Navbar />
            <Hero />
            <RevealSection>
                <About />
            </RevealSection>
            <RevealSection>
                <Skills />
            </RevealSection>
            <RevealSection>
                <Projects />
            </RevealSection>
            <RevealSection>
                <Contact />
            </RevealSection>
        </main>
    );
}
