'use client';

import GlassCard from '@/components/ui/GlassCard';

export default function About() {
    return (
        <section
            id="about"
            style={{
                minHeight: '100vh',
                display: 'flex',
                alignItems: 'center',
                padding: '120px 24px',
            }}
        >
            <div
                style={{
                    maxWidth: '1100px',
                    margin: '0 auto',
                    display: 'grid',
                    gridTemplateColumns: '1fr 1fr',
                    gap: '60px',
                    alignItems: 'center',
                }}
            >
                {/* LEFT: TEXT  INI nantinya di ubah lagi , harus lebih menjual dengan menceritakan bahwa suka explor dan lain lain intinya yapping ...*/}
                <div>
                    <div
                        style={{
                            fontSize: '14px',
                            letterSpacing: '2px',
                            color: 'var(--text-secondary)',
                            marginBottom: '12px',
                        }}
                    >
                        ABOUT ME
                    </div>

                    <h2
                        style={{
                            fontSize: '42px',
                            fontWeight: 600,
                            lineHeight: 1.2,
                            marginBottom: '20px',
                        }}
                    >
                        I build clean, scalable, and performant digital
                        experiences.
                    </h2>

                    <p
                        style={{
                            fontSize: '18px',
                            color: 'var(--text-secondary)',
                            lineHeight: 1.7,
                            marginBottom: '16px',
                        }}
                    >
                        I’m a Full Stack Developer focused on modern web
                        technologies like JavaScript, TypeScript, React, and
                        Node.js.
                    </p>

                    <p
                        style={{
                            fontSize: '18px',
                            color: 'var(--text-secondary)',
                            lineHeight: 1.7,
                        }}
                    >
                        I enjoy building interfaces that feel smooth, fast, and
                        intuitive—just like a product, not just a website.
                    </p>
                </div>

                {/* RIGHT: VISUAL */}
                <GlassCard
                    style={{
                        height: '360px',
                        borderRadius: '24px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        color: 'var(--text-secondary)',
                        fontSize: '14px',
                    }}
                >
                    Developer Visual / Photo / Code Preview
                </GlassCard>
            </div>
        </section>
    );
}
