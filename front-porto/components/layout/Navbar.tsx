'use client';

import GlassCard from '@/components/ui/GlassCard';
import useScroll from '@/hooks/useScroll';

export default function Navbar() {
    const scrollY = useScroll();

    const isScrolled = scrollY > 20;
    return (
        <div
            style={{
                position: 'fixed',
                top: '18px',
                left: '50%',
                transform: 'translateX(-50%)',
                zIndex: 1000,
            }}
        >
            <GlassCard
                isScrolled={isScrolled}
                style={{
                    padding: '10px 14px',
                    borderRadius: '999px',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '28px',

                    // ✨ iOS glass upgrade
                    background: 'rgba(255,255,255,0.55)',
                    backdropFilter: 'blur(24px)',
                    WebkitBackdropFilter: 'blur(24px)',
                    border: '1px solid rgba(255,255,255,0.4)',
                    boxShadow: '0 10px 40px rgba(0,0,0,0.08)',
                }}
            >
                {/* Logo */}
                <div
                    style={{
                        fontWeight: 700,
                        fontSize: '14px',
                        letterSpacing: '1px',
                        color: 'var(--text-primary)',
                        padding: '6px 10px',
                        borderRadius: '999px',
                        background: 'rgba(255,255,255,0.4)',
                    }}
                >
                    SN
                </div>

                {/* Menu */}
                <div
                    style={{
                        display: 'flex',
                        gap: '18px',
                        fontSize: '13px',
                        color: 'var(--text-secondary)',
                    }}
                >
                    {['Home', 'About', 'Skills', 'Projects', 'Contact'].map(
                        (item) => (
                            <a
                                key={item}
                                href={`#${item.toLowerCase()}`}
                                style={{
                                    padding: '6px 10px',
                                    borderRadius: '999px',
                                    transition: 'all 0.2s ease',
                                }}
                                onMouseEnter={(e) => {
                                    e.currentTarget.style.background =
                                        'rgba(0,122,255,0.1)';
                                    e.currentTarget.style.color =
                                        'var(--accent)';
                                }}
                                onMouseLeave={(e) => {
                                    e.currentTarget.style.background =
                                        'transparent';
                                    e.currentTarget.style.color =
                                        'var(--text-secondary)';
                                }}
                            >
                                {item}
                            </a>
                        )
                    )}
                </div>

                {/* Right side */}
                <div
                    style={{
                        fontSize: '14px',
                        padding: '6px 10px',
                        borderRadius: '999px',
                        background: 'rgba(255,255,255,0.4)',
                        cursor: 'pointer',
                    }}
                >
                    ☀️
                </div>
            </GlassCard>
        </div>
    );
}
