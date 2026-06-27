'use client';

import { motion } from 'framer-motion';
import useScroll from '@/hooks/useScroll';

const item = {
    hidden: { opacity: 0, y: 24 },
    show: { opacity: 1, y: 0 },
};

const container = {
    hidden: {},
    show: {
        transition: {
            staggerChildren: 0.18,
            delayChildren: 0.2,
        },
    },
};

export default function Hero() {
    const scrollY = useScroll();

    // 🌊 Scroll-based Apple effect
    const opacity = Math.max(1 - scrollY / 500, 0);
    const scale = Math.max(1 - scrollY / 2000, 0.96);
    const translateY = scrollY * 0.15;

    return (
        <section
            id="home"
            style={{
                minHeight: '100vh',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                padding: '0 24px',
                position: 'relative',
                overflow: 'hidden',
            }}
        >
            {/* 🌟 background glow */}
            <div
                style={{
                    position: 'absolute',
                    top: '-250px',
                    left: '50%',
                    transform: 'translateX(-50%)',
                    width: '700px',
                    height: '700px',
                    background:
                        'radial-gradient(circle, rgba(0,122,255,0.25), transparent 60%)',
                    filter: 'blur(80px)',
                    zIndex: -2,
                    animation: 'floatGlow 8s ease-in-out infinite',
                }}
            />

            <div
                style={{
                    position: 'absolute',
                    top: '-150px',
                    left: '20%',
                    width: '500px',
                    height: '500px',
                    background:
                        'radial-gradient(circle, rgba(88,86,214,0.18), transparent 60%)',
                    filter: 'blur(90px)',
                    zIndex: -3,
                    animation: 'floatGlow2 10s ease-in-out infinite',
                }}
            />

            <div
                style={{
                    position: 'absolute',
                    bottom: '-200px',
                    right: '10%',
                    width: '600px',
                    height: '600px',
                    background:
                        'radial-gradient(circle, rgba(10,132,255,0.15), transparent 65%)',
                    filter: 'blur(100px)',
                    zIndex: -4,
                    animation: 'floatGlow3 12s ease-in-out infinite',
                }}
            />

            {/* 🌊 Scroll wrapper (Apple depth system) */}
            <div
                style={{
                    opacity,
                    transform: `translateY(${translateY}px) scale(${scale})`,
                    willChange: 'transform, opacity',
                    transition: 'all 0.15s linear',
                }}
            >
                {/* 🎬 Framer Motion entry animation */}
                <motion.div
                    variants={container}
                    initial="hidden"
                    animate="show"
                    style={{
                        textAlign: 'center',
                        maxWidth: '800px',
                    }}
                >
                    {/* subtitle */}
                    <motion.div
                        variants={item}
                        style={{
                            fontSize: '14px',
                            letterSpacing: '2px',
                            color: 'var(--text-secondary)',
                            marginBottom: '12px',
                        }}
                        transition={{
                            duration: 1.4,
                            ease: [0.25, 1, 0.3, 1], // Apple cubic bezier
                        }}
                    >
                        FULL STACK DEVELOPER
                    </motion.div>

                    {/* title */}
                    <motion.h1
                        variants={item}
                        style={{
                            fontSize: '56px',
                            fontWeight: 600,
                            lineHeight: 1.1,
                            marginBottom: '20px',
                        }}
                        transition={{
                            duration: 1.4,
                            ease: [0.25, 1, 0.3, 1], // Apple cubic bezier
                        }}
                    >
                        Hi, I’m{' '}
                        <span style={{ color: 'var(--accent)' }}>Santoso</span>.
                    </motion.h1>

                    {/* description */}
                    <motion.p
                        variants={item}
                        style={{
                            fontSize: '18px',
                            color: 'var(--text-secondary)',
                            lineHeight: 1.6,
                            marginBottom: '30px',
                        }}
                        transition={{
                            duration: 1.4,
                            ease: [0.25, 1, 0.3, 1], // Apple cubic bezier
                        }}
                    >
                        I build clean, modern, and performant web experiences
                        using JavaScript, TypeScript, and modern frameworks.
                    </motion.p>

                    {/* CTA */}
                    <motion.div
                        variants={item}
                        style={{
                            display: 'flex',
                            justifyContent: 'center',
                            gap: '12px',
                        }}
                        transition={{
                            duration: 1.4,
                            ease: [0.25, 1, 0.3, 1], // Apple cubic bezier
                        }}
                    >
                        <a
                            href="#projects"
                            style={{
                                padding: '10px 18px',
                                borderRadius: '999px',
                                background: 'var(--accent)',
                                color: 'white',
                                border: 'none',
                                cursor: 'pointer',
                                textDecoration: 'none',
                                display: 'inline-block',
                            }}
                        >
                            View Projects
                        </a>

                        <a
                            href="#contact"
                            style={{
                                padding: '10px 18px',
                                borderRadius: '999px',
                                border: '1px solid var(--border)',
                                background: 'transparent',
                                color: 'var(--text-primary)',
                                cursor: 'pointer',
                                textDecoration: 'none',
                                display: 'inline-block',
                            }}
                        >
                            Contact Me
                        </a>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
}
