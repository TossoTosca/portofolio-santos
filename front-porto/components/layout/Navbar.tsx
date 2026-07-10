'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import { Menu, X } from 'lucide-react';
import GlassCard from '@/components/ui/GlassCard';

const navigation = ['Home', 'About', 'Skills', 'Projects', 'Contact'];

export default function Navbar() {
    const [activeSection, setActiveSection] = useState('home');
    const [menuOpen, setMenuOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const nextState = window.scrollY > 20;
            setIsScrolled((current) =>
                current === nextState ? current : nextState
            );
        };

        handleScroll();
        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    useEffect(() => {
        const sections = navigation
            .map((item) => document.getElementById(item.toLowerCase()))
            .filter((section): section is HTMLElement => Boolean(section));

        const observer = new IntersectionObserver(
            (entries) => {
                const visible = entries
                    .filter((entry) => entry.isIntersecting)
                    .sort(
                        (a, b) => b.intersectionRatio - a.intersectionRatio
                    )[0];

                if (visible) setActiveSection(visible.target.id);
            },
            { rootMargin: '-25% 0px -60% 0px', threshold: [0, 0.2, 0.5] }
        );

        sections.forEach((section) => observer.observe(section));
        return () => observer.disconnect();
    }, []);

    useEffect(() => {
        if (!menuOpen) return;

        const closeOnEscape = (event: KeyboardEvent) => {
            if (event.key === 'Escape') setMenuOpen(false);
        };

        document.addEventListener('keydown', closeOnEscape);
        return () => document.removeEventListener('keydown', closeOnEscape);
    }, [menuOpen]);

    return (
        <header className="navbar-shell">
            <GlassCard
                isScrolled={isScrolled || menuOpen}
                className="navbar-card"
                aria-label="Primary navigation"
            >
                <a
                    className="navbar-logo"
                    href="#home"
                    aria-label="Santoso Nugroho — back to home"
                    onClick={() => setMenuOpen(false)}
                >
                    <Image
                        src="/icons/SN_Favicon/android-chrome-192x192.png"
                        alt=""
                        width={34}
                        height={34}
                        priority
                    />
                    <span>Santoso</span>
                </a>

                <nav className="navbar-links" aria-label="Page sections">
                    {navigation.map((item) => {
                        const id = item.toLowerCase();
                        return (
                            <a
                                key={item}
                                href={`#${id}`}
                                className={
                                    activeSection === id ? 'is-active' : ''
                                }
                                aria-current={
                                    activeSection === id
                                        ? 'location'
                                        : undefined
                                }
                            >
                                {item}
                            </a>
                        );
                    })}
                </nav>

                <button
                    className="navbar-menu-button"
                    type="button"
                    aria-label={menuOpen ? 'Close menu' : 'Open menu'}
                    aria-expanded={menuOpen}
                    aria-controls="mobile-navigation"
                    onClick={() => setMenuOpen((open) => !open)}
                >
                    {menuOpen ? <X size={19} /> : <Menu size={19} />}
                </button>
            </GlassCard>

            {menuOpen && (
                <GlassCard
                    id="mobile-navigation"
                    className="mobile-navigation"
                    isScrolled
                >
                    {navigation.map((item) => {
                        const id = item.toLowerCase();
                        return (
                            <a
                                key={item}
                                href={`#${id}`}
                                className={
                                    activeSection === id ? 'is-active' : ''
                                }
                                onClick={() => setMenuOpen(false)}
                            >
                                {item}
                            </a>
                        );
                    })}
                </GlassCard>
            )}
        </header>
    );
}
