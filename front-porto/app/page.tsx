'use client';
import { useEffect, useState } from 'react';
import Navbar from '@/components/layout/Navbar';
import About from '@/components/sections/About';
import Contact from '@/components/sections/Contact';
import Hero from '@/components/sections/Hero';
import Projects from '@/components/sections/Projects';
import Skills from '@/components/sections/Skills';
import RevealSection from '@/components/ui/RevealSection';

export default function Home() {
    const [cursor, setCursor] = useState({ x: 0, y: 0 });

    useEffect(() => {
        const move = (e: MouseEvent) => {
            setCursor({
                x: e.clientX,
                y: e.clientY,
            });
        };

        window.addEventListener('mousemove', move);

        return () => window.removeEventListener('mousemove', move);
    }, []);
    return (
        <main>
            <div
                style={{
                    position: 'fixed',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    pointerEvents: 'none',
                    zIndex: 0,
                }}
            >
                {/* MAIN GLOW */}
                <div
                    style={{
                        position: 'absolute',
                        left: cursor.x,
                        top: cursor.y,
                        width: '420px',
                        height: '420px',
                        transform: 'translate(-50%, -50%)',
                        background:
                            'radial-gradient(circle, rgba(0,122,255,0.12) 0%, rgba(0,122,255,0.06) 40%, transparent 70%)',
                        filter: 'blur(90px)',
                        opacity: 0.6,
                        mixBlendMode: 'screen',
                        transition: 'left 0.18s ease-out, top 0.18s ease-out',
                    }}
                />

                {/* SECOND LAYER */}
                <div
                    style={{
                        position: 'absolute',
                        left: cursor.x + 60,
                        top: cursor.y + 40,
                        width: '320px',
                        height: '320px',
                        transform: 'translate(-50%, -50%)',
                        background:
                            'radial-gradient(circle, rgba(88,86,214,0.10), transparent 70%)',
                        filter: 'blur(100px)',
                        opacity: 0.5,
                        mixBlendMode: 'screen',
                        transition: 'left 0.22s ease-out, top 0.22s ease-out',
                    }}
                />
            </div>
            <Navbar />

            <Hero />

            <RevealSection>
                <section style={{ height: '100vh' }}>
                    <About />
                </section>
            </RevealSection>

            <RevealSection>
                <section style={{ height: '100vh' }}>
                    <Skills />
                </section>
            </RevealSection>

            <RevealSection>
                <section style={{ height: '100vh' }}>
                    <Projects />
                </section>
            </RevealSection>

            <RevealSection>
                <section style={{ height: '100vh' }}>
                    <Contact />
                </section>
            </RevealSection>
        </main>
    );
}
