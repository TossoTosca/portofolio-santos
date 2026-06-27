'use client';

import { useRef, useState } from 'react';
import GlassCard from '@/components/ui/GlassCard';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';

const projects = [
    {
        id: 1,
        title: 'Project 1',
        desc: 'Internal dashboard for monitoring system.',
        tech: 'Next.js • TypeScript • Firebase',
        story: 'This project was built to manage internal company metrics, user tracking, and analytics dashboard with real-time updates.',
        img: '/projects/risk-dashboard.png',
    },
    {
        id: 2,
        title: 'Project 2',
        desc: 'Automation system using WhatsApp Web API.',
        tech: 'Node.js • Express • WhatsApp API',
        story: 'Built automation system for sending bulk messages and managing WhatsApp workflows for business operations.',
        img: '/projects/whatsapp-tool.png',
    },
    {
        id: 3,
        title: 'Project 3',
        desc: 'Management system for internal operations.',
        tech: 'React • Node.js',
        story: 'A scalable admin system designed for handling multi-role access and data visualization.',
        img: '/projects/risk-dashboard.png',
    },
    {
        id: 4,
        title: 'Project 4',
        desc: 'Internal dashboard for monitoring system.',
        tech: 'Next.js • TypeScript • Firebase',
        story: 'This project was built to manage internal company metrics, user tracking, and analytics dashboard with real-time updates.',
        img: '/projects/risk-dashboard.png',
    },
    {
        id: 5,
        title: 'Project 5',
        desc: 'Automation system using WhatsApp Web API.',
        tech: 'Node.js • Express • WhatsApp API',
        story: 'Built automation system for sending bulk messages and managing WhatsApp workflows for business operations.',
        img: '/projects/whatsapp-tool.png',
    },
    {
        id: 6,
        title: 'Project 6',
        desc: 'Management system for internal operations.',
        tech: 'React • Node.js',
        story: 'A scalable admin system designed for handling multi-role access and data visualization.',
        img: '/projects/risk-dashboard.png',
    },
];

const overlayVariant = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { duration: 0.25 } },
    exit: { opacity: 0, transition: { duration: 0.2 } },
};

const modalVariant = {
    hidden: { opacity: 0, scale: 0.92, y: 20 },
    show: {
        opacity: 1,
        scale: 1,
        y: 0,
        transition: { duration: 0.35 },
    },
    exit: { opacity: 0, scale: 0.96, y: 10, transition: { duration: 0.2 } },
};

export default function Projects() {
    const scrollRef = useRef<HTMLDivElement>(null);
    const [selected, setSelected] = useState<any>(null);

    const scroll = (dir: 'left' | 'right') => {
        if (!scrollRef.current) return;

        scrollRef.current.scrollBy({
            left: dir === 'left' ? -420 : 420,
            behavior: 'smooth',
        });
    };

    return (
        <section
            id="projects"
            style={{
                minHeight: '100vh',
                padding: '120px 24px',
                display: 'flex',
                flexDirection: 'column',
            }}
        >
            {/* HEADER */}
            <div style={{ maxWidth: 1100, margin: '0 auto', width: '100%' }}>
                <div style={{ marginBottom: 40 }}>
                    <div
                        style={{
                            fontSize: 14,
                            letterSpacing: 2,
                            color: 'var(--text-secondary)',
                        }}
                    >
                        PROJECTS
                    </div>

                    <h2 style={{ fontSize: 42, fontWeight: 600 }}>
                        Working Experience
                    </h2>
                </div>

                {/* ARROWS */}
                <div
                    style={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        marginBottom: 20,
                    }}
                >
                    <button style={arrowBtn} onClick={() => scroll('left')}>
                        ←
                    </button>

                    <button style={arrowBtn} onClick={() => scroll('right')}>
                        →
                    </button>
                </div>

                {/* SCROLL ROW */}
                <div
                    className="projects-scroll"
                    ref={scrollRef}
                    style={{
                        display: 'flex',
                        gap: 30,
                        overflowX: 'auto',
                        scrollBehavior: 'smooth',
                        paddingBottom: 20,
                    }}
                >
                    {projects.map((p) => (
                        <div
                            key={p.id}
                            style={{
                                minWidth: 360,
                                flex: '0 0 auto',
                                cursor: 'pointer',
                            }}
                            onClick={() => setSelected(p)}
                        >
                            <GlassCard
                                style={{
                                    borderRadius: 24,
                                    overflow: 'hidden',
                                }}
                            >
                                <div
                                    style={{
                                        position: 'relative',
                                        height: 220,
                                    }}
                                >
                                    <Image
                                        src={p.img}
                                        alt={p.title}
                                        fill
                                        style={{ objectFit: 'cover' }}
                                    />
                                </div>

                                <div style={{ padding: 20 }}>
                                    <h3 style={{ fontSize: 20 }}>{p.title}</h3>
                                    <p
                                        style={{
                                            fontSize: 13,
                                            color: 'gray',
                                        }}
                                    >
                                        {p.desc}
                                    </p>
                                    <div style={{ fontSize: 12 }}>{p.tech}</div>
                                </div>
                            </GlassCard>
                        </div>
                    ))}
                </div>
            </div>

            {/* ===================== MODAL ===================== */}
            <AnimatePresence>
                {selected && (
                    <motion.div
                        variants={overlayVariant}
                        initial="hidden"
                        animate="show"
                        exit="exit"
                        style={overlayStyle}
                        onClick={() => setSelected(null)}
                    >
                        <motion.div
                            variants={modalVariant}
                            initial="hidden"
                            animate="show"
                            exit="exit"
                            onClick={(e) => e.stopPropagation()}
                            style={modalWrapper}
                        >
                            <GlassCard
                                style={{
                                    width: 'min(900px, 92vw)',
                                    borderRadius: 24,
                                    overflow: 'hidden',
                                    padding: 0,
                                }}
                            >
                                {/* IMAGE */}
                                <div
                                    style={{
                                        position: 'relative',
                                        height: 420,
                                    }}
                                >
                                    <Image
                                        src={selected.img}
                                        alt={selected.title}
                                        fill
                                        style={{
                                            objectFit: 'cover',
                                            transform: 'scale(1.02)',
                                        }}
                                    />
                                </div>

                                {/* CONTENT */}
                                <div style={{ padding: 30 }}>
                                    <h2 style={{ fontSize: 28 }}>
                                        {selected.title}
                                    </h2>

                                    <p
                                        style={{
                                            marginTop: 10,
                                            color: 'var(--text-secondary)',
                                        }}
                                    >
                                        {selected.desc}
                                    </p>

                                    <p
                                        style={{
                                            marginTop: 18,
                                            lineHeight: 1.6,
                                        }}
                                    >
                                        {selected.story}
                                    </p>

                                    <div
                                        style={{
                                            marginTop: 18,
                                            fontSize: 13,
                                            color: 'var(--text-secondary)',
                                        }}
                                    >
                                        {selected.tech}
                                    </div>

                                    <button
                                        onClick={() => setSelected(null)}
                                        style={closeBtn}
                                    >
                                        Close
                                    </button>
                                </div>
                            </GlassCard>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </section>
    );
}

// ===================== STYLES =====================

const arrowBtn: React.CSSProperties = {
    padding: '10px 16px',
    borderRadius: 999,
    border: '1px solid #ccc',
    background: 'transparent',
    cursor: 'pointer',
};

const overlayStyle: React.CSSProperties = {
    position: 'fixed',
    inset: 0,
    backdropFilter: 'blur(10px)',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 999,
};

const modalWrapper: React.CSSProperties = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
};

const closeBtn: React.CSSProperties = {
    marginTop: 20,
    padding: '10px 16px',
    borderRadius: 999,
    border: '1px solid #ccc',
    background: 'white',
    cursor: 'pointer',
};
