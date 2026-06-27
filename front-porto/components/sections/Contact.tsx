'use client';

import { useState } from 'react';
import GlassCard from '@/components/ui/GlassCard';
import { motion } from 'framer-motion';

export default function Contact() {
    const [copied, setCopied] = useState(false);

    const email = 'nugrohosantoso454@gmail.com';

    const copyEmail = async () => {
        await navigator.clipboard.writeText(email);
        setCopied(true);

        setTimeout(() => setCopied(false), 1500);
    };

    return (
        <section
            id="contact"
            style={{
                minHeight: '100vh',
                padding: '120px 24px',
                display: 'flex',
                alignItems: 'center',
            }}
        >
            <div
                style={{
                    maxWidth: '900px',
                    margin: '0 auto',
                    width: '100%',
                }}
            >
                {/* HEADER */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.6 }}
                    style={{ marginBottom: 40 }}
                >
                    <div
                        style={{
                            fontSize: 14,
                            letterSpacing: 2,
                            color: 'var(--text-secondary)',
                        }}
                    >
                        CONTACT
                    </div>

                    <h2 style={{ fontSize: 42, fontWeight: 600 }}>
                        Let’s Work Together
                    </h2>

                    <p
                        style={{
                            marginTop: 10,
                            color: 'var(--text-secondary)',
                        }}
                    >
                        Feel free to reach out for collaboration or job
                        opportunities.
                    </p>
                </motion.div>

                {/* CARD */}
                <GlassCard
                    style={{
                        borderRadius: 24,
                        padding: 30,
                    }}
                >
                    {/* EMAIL SECTION */}
                    <div style={{ marginBottom: 30 }}>
                        <div
                            style={{
                                fontSize: 12,
                                color: 'var(--text-secondary)',
                                marginBottom: 8,
                            }}
                        >
                            EMAIL
                        </div>

                        <div
                            style={{
                                display: 'flex',
                                justifyContent: 'space-between',
                                alignItems: 'center',
                                gap: 10,
                            }}
                        >
                            <span style={{ fontSize: 18 }}>{email}</span>

                            <button onClick={copyEmail} style={btnStyle}>
                                {copied ? 'Copied!' : 'Copy'}
                            </button>
                        </div>
                    </div>

                    {/* SOCIALS */}
                    <div style={{ marginBottom: 30 }}>
                        <div
                            style={{
                                fontSize: 12,
                                color: 'var(--text-secondary)',
                                marginBottom: 10,
                            }}
                        >
                            SOCIALS
                        </div>

                        <div
                            style={{
                                display: 'flex',
                                gap: 12,
                                flexWrap: 'wrap',
                            }}
                        >
                            <a
                                href="https://github.com/TossoTosca"
                                target="_blank"
                                style={linkBtn}
                            >
                                GitHub
                            </a>

                            <a
                                href="https://linkedin.com/in/santoso-nugroho-35615b173"
                                target="_blank"
                                style={linkBtn}
                            >
                                LinkedIn
                            </a>

                            <a
                                href="https://wa.me/6285731695548"
                                target="_blank"
                                style={linkBtn}
                            >
                                WhatsApp
                            </a>
                        </div>
                    </div>

                    {/* FOOTER NOTE */}
                    <div
                        style={{
                            fontSize: 12,
                            color: 'var(--text-secondary)',
                        }}
                    >
                        Usually respond within 24–48 hours.
                    </div>
                </GlassCard>
            </div>
        </section>
    );
}

// ===================== STYLES =====================

const btnStyle: React.CSSProperties = {
    padding: '8px 14px',
    borderRadius: 999,
    border: '1px solid #ccc',
    background: 'transparent',
    cursor: 'pointer',
};

const linkBtn: React.CSSProperties = {
    padding: '8px 14px',
    borderRadius: 999,
    border: '1px solid #ccc',
    textDecoration: 'none',
    color: 'inherit',
};
