'use client';

import { FormEvent, useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import {
    BriefcaseBusiness,
    Code,
    FileText,
    Mail,
    MessageCircle,
    Send,
    X,
} from 'lucide-react';
import { AnimatePresence, motion } from 'framer-motion';
import GlassCard from '@/components/ui/GlassCard';

const email = 'nugrohosantoso454@gmail.com';
const whatsappBaseUrl = 'https://api.whatsapp.com/send/?phone=6281296653845';

type ComposerType = 'email' | 'whatsapp';

const socials = [
    {
        label: 'GitHub',
        href: 'https://github.com/TossoTosca',
        icon: Code,
    },
    {
        label: 'LinkedIn',
        href: 'https://linkedin.com/in/santoso-nugroho-35615b173',
        icon: BriefcaseBusiness,
    },
];

export default function Contact() {
    const [composer, setComposer] = useState<ComposerType | null>(null);
    const [name, setName] = useState('');
    const [subject, setSubject] = useState('');
    const [message, setMessage] = useState('');

    const openComposer = (type: ComposerType) => {
        setComposer(type);
        setName('');
        setSubject('');
        setMessage('');
    };

    useEffect(() => {
        if (!composer) return;

        const previousBodyOverflow = document.body.style.overflow;
        const previousHtmlOverflow = document.documentElement.style.overflow;
        document.body.style.overflow = 'hidden';
        document.documentElement.style.overflow = 'hidden';

        const closeOnEscape = (event: KeyboardEvent) => {
            if (event.key === 'Escape') setComposer(null);
        };

        document.addEventListener('keydown', closeOnEscape);
        return () => {
            document.body.style.overflow = previousBodyOverflow;
            document.documentElement.style.overflow = previousHtmlOverflow;
            document.removeEventListener('keydown', closeOnEscape);
        };
    }, [composer]);

    const sendMessage = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        if (composer === 'whatsapp') {
            const text = `Halo Santoso, saya ${name.trim()}.\n\n${message.trim()}`;
            const url = `${whatsappBaseUrl}&text=${encodeURIComponent(text)}&type=phone_number&app_absent=0`;
            window.open(url, '_blank', 'noopener,noreferrer');
        }

        if (composer === 'email') {
            const emailSubject =
                subject.trim() || `Portfolio inquiry from ${name.trim()}`;
            const body = `Hi Santoso,\n\n${message.trim()}\n\nRegards,\n${name.trim()}`;
            window.location.href = `mailto:${email}?subject=${encodeURIComponent(emailSubject)}&body=${encodeURIComponent(body)}`;
        }

        setComposer(null);
    };

    const contactComposer = composer ? (
        <AnimatePresence>
            <motion.div
                className="contact-composer-overlay"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onMouseDown={() => setComposer(null)}
            >
                <motion.div
                    role="dialog"
                    aria-modal="true"
                    aria-labelledby="contact-composer-title"
                    className="contact-composer-dialog"
                    initial={{ opacity: 0, scale: 0.97, y: 18 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.98, y: 8 }}
                    transition={{ duration: 0.22 }}
                    onMouseDown={(event) => event.stopPropagation()}
                >
                    <GlassCard className="contact-composer-card">
                        <button
                            type="button"
                            className="composer-close"
                            aria-label="Close message form"
                            onClick={() => setComposer(null)}
                        >
                            <X size={19} />
                        </button>
                        <span className="composer-icon">
                            {composer === 'whatsapp' ? (
                                <MessageCircle size={22} />
                            ) : (
                                <Mail size={22} />
                            )}
                        </span>
                        <p className="section-eyebrow">
                            {composer === 'whatsapp'
                                ? 'WHATSAPP MESSAGE'
                                : 'EMAIL MESSAGE'}
                        </p>
                        <h3 id="contact-composer-title">
                            {composer === 'whatsapp'
                                ? 'Start a WhatsApp conversation'
                                : 'Write me an email'}
                        </h3>
                        <p className="composer-intro">
                            Compose your message here. You can review it once
                            more in{' '}
                            {composer === 'whatsapp'
                                ? 'WhatsApp'
                                : 'your email app'}{' '}
                            before sending.
                        </p>

                        <form onSubmit={sendMessage}>
                            <label>
                                Your name
                                <input
                                    value={name}
                                    onChange={(event) =>
                                        setName(event.target.value)
                                    }
                                    placeholder="How should I address you?"
                                    autoComplete="name"
                                    required
                                    autoFocus
                                />
                            </label>

                            {composer === 'email' && (
                                <label>
                                    Subject
                                    <input
                                        value={subject}
                                        onChange={(event) =>
                                            setSubject(event.target.value)
                                        }
                                        placeholder="Project, role, or collaboration"
                                    />
                                </label>
                            )}

                            <label>
                                Message
                                <textarea
                                    value={message}
                                    onChange={(event) =>
                                        setMessage(event.target.value)
                                    }
                                    placeholder="Tell me a little about what you have in mind..."
                                    rows={5}
                                    required
                                />
                            </label>

                            <button
                                type="submit"
                                className="button button-primary composer-submit"
                            >
                                Continue to{' '}
                                {composer === 'whatsapp' ? 'WhatsApp' : 'email'}
                                <Send size={16} />
                            </button>
                        </form>
                    </GlassCard>
                </motion.div>
            </motion.div>
        </AnimatePresence>
    ) : null;

    return (
        <section id="contact" className="contact-section section-shell">
            <div className="section-container contact-container">
                <p className="section-eyebrow">CONTACT</p>
                <h2 className="contact-title">
                    Have an idea worth building?
                    <span> Let&apos;s talk.</span>
                </h2>
                <p className="section-lead">
                    I&apos;m open to thoughtful collaborations, product work,
                    and full stack opportunities.
                </p>

                <GlassCard className="contact-card">
                    <div className="contact-primary">
                        <span className="contact-icon">
                            <Mail size={20} />
                        </span>
                        <div>
                            <small>EMAIL</small>
                            <span className="contact-email-address">
                                {email}
                            </span>
                        </div>
                        <button
                            type="button"
                            onClick={() => openComposer('email')}
                        >
                            <Mail size={17} /> Write email
                        </button>
                    </div>

                    <div className="contact-links">
                        {socials.map(({ label, href, icon: Icon }) => (
                            <a
                                key={label}
                                href={href}
                                target="_blank"
                                rel="noreferrer"
                            >
                                <Icon size={18} /> {label}
                            </a>
                        ))}
                        <button
                            type="button"
                            onClick={() => openComposer('whatsapp')}
                        >
                            <MessageCircle size={18} /> WhatsApp
                        </button>
                        <a
                            href="/resume/Santoso-Nugroho-CV.pdf"
                            target="_blank"
                            rel="noreferrer"
                        >
                            <FileText size={18} /> View Resume
                        </a>
                    </div>
                </GlassCard>

                <footer className="site-footer">
                    <span>Designed and built by Santoso Nugroho.</span>
                    <span>© {new Date().getFullYear()}</span>
                </footer>
            </div>

            {contactComposer
                ? createPortal(contactComposer, document.body)
                : null}
        </section>
    );
}
