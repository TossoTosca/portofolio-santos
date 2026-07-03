'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { ArrowDownRight, Braces, Circle, Database, Server } from 'lucide-react';
import GlassCard from '@/components/ui/GlassCard';

const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
};

const container = {
    hidden: {},
    show: { transition: { staggerChildren: 0.13, delayChildren: 0.12 } },
};

export default function Hero() {
    return (
        <section id="home" className="hero section-shell">
            <div className="hero-glow hero-glow-one" aria-hidden="true" />
            <div className="hero-glow hero-glow-two" aria-hidden="true" />

            <div className="hero-layout">
                <motion.div
                    variants={container}
                    initial="hidden"
                    animate="show"
                    className="hero-content"
                >
                    <motion.p variants={item} className="section-eyebrow">
                        FULL STACK DEVELOPER
                    </motion.p>
                    <motion.h1 variants={item}>
                        I turn complex ideas into
                        <span> thoughtful digital products.</span>
                    </motion.h1>
                    <motion.p variants={item} className="hero-intro">
                        Hi, I&apos;m Santoso. I design and build dependable web
                        experiences across the interface, API, and database.
                    </motion.p>
                    <motion.div variants={item} className="hero-actions">
                        <a href="#projects" className="button button-primary">
                            Explore my work <ArrowDownRight size={17} />
                        </a>
                        <a href="#contact" className="button button-secondary">
                            Start a conversation
                        </a>
                    </motion.div>
                </motion.div>

                <motion.div
                    className="hero-visual"
                    initial={{ opacity: 0, scale: 0.97, y: 18 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.28 }}
                >
                    <div className="portrait-frame">
                        <Image
                            src="/images/santoso_portrait_for_business.png"
                            alt="Santoso Nugroho"
                            fill
                            priority
                            sizes="(max-width: 860px) 76vw, 430px"
                        />
                        <div className="portrait-shade" aria-hidden="true" />
                        <div className="availability-pill">
                            <span /> Available for collaboration
                        </div>
                    </div>

                    <GlassCard className="code-preview-card">
                        <div className="code-preview-bar">
                            <span>
                                <Circle size={8} fill="currentColor" />
                            </span>
                            <span>
                                <Circle size={8} fill="currentColor" />
                            </span>
                            <span>
                                <Circle size={8} fill="currentColor" />
                            </span>
                            <small>product-stack.ts</small>
                        </div>
                        <div className="code-preview-body">
                            <div>
                                <Braces size={15} />
                                <span>Interface</span>
                                <strong>React / Next.js</strong>
                            </div>
                            <div>
                                <Server size={15} />
                                <span>Services</span>
                                <strong>Node.js / API</strong>
                            </div>
                            <div>
                                <Database size={15} />
                                <span>Data</span>
                                <strong>SQL / PostgreSQL</strong>
                            </div>
                        </div>
                    </GlassCard>
                </motion.div>
            </div>
        </section>
    );
}
