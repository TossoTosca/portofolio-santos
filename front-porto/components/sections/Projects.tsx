'use client';

import { useEffect, useRef, useState } from 'react';
import { createPortal } from 'react-dom';
import Image from 'next/image';
import { AnimatePresence, motion } from 'framer-motion';
import {
    ArrowLeft,
    ArrowRight,
    Blocks,
    ExternalLink,
    GalleryHorizontal,
    Images,
    Move,
    Radio,
    Route,
    Wind,
    X,
    Zap,
} from 'lucide-react';
import GlassCard from '@/components/ui/GlassCard';

type TechKind =
    | 'react'
    | 'typescript'
    | 'vue'
    | 'vite'
    | 'tailwind'
    | 'router'
    | 'motion'
    | 'shadcn'
    | 'embla'
    | 'socket';

interface Technology {
    name: string;
    kind: TechKind;
}

interface Project {
    id: number;
    title: string;
    eyebrow: string;
    description: string;
    tech: Technology[];
    story: string;
    images: string[];
    liveUrl: string;
}

const projects: Project[] = [
    {
        id: 1,
        title: 'HVZ Mobilindo',
        eyebrow: 'AUTOMOTIVE MARKETPLACE',
        description:
            'A polished used-car marketplace that makes inventory discovery and selling enquiries feel direct and trustworthy.',
        tech: [
            { name: 'React 19', kind: 'react' },
            { name: 'Vite 8', kind: 'vite' },
            { name: 'TypeScript', kind: 'typescript' },
            { name: 'Tailwind CSS', kind: 'tailwind' },
            { name: 'React Router', kind: 'router' },
            { name: 'Framer Motion', kind: 'motion' },
            { name: 'Shadcn UI', kind: 'shadcn' },
            { name: 'Embla Carousel', kind: 'embla' },
        ],
        story: 'The public experience brings vehicle inventory, services, and selling enquiries into one focused journey. Its dark automotive identity, clear calls to action, and responsive presentation help visitors move from interest to contact without unnecessary friction.',
        images: Array.from(
            { length: 8 },
            (_, index) => `/projects/hvzmobilindo_assets/${index + 1}.jpg`
        ),
        liveUrl: 'https://hvzmobilindo.vercel.app/',
    },
    {
        id: 2,
        title: 'HVZ Mobilindo CMS',
        eyebrow: 'ADMIN DASHBOARD',
        description:
            'An operational dashboard for managing inventory, public content, sales activity, and incoming leads.',
        tech: [
            { name: 'React 19', kind: 'react' },
            { name: 'Vite 8', kind: 'vite' },
            { name: 'TypeScript', kind: 'typescript' },
            { name: 'Tailwind CSS', kind: 'tailwind' },
            { name: 'React Router', kind: 'router' },
            { name: 'Shadcn UI', kind: 'shadcn' },
        ],
        story: 'The CMS turns the public marketplace into a manageable product. It separates inventory, content, and sales workflows into clear operational areas while keeping key business signals visible from the dashboard.',
        images: Array.from(
            { length: 5 },
            (_, index) => `/projects/hvzmobilindo_cms_assets/${index + 1}.jpg`
        ),
        liveUrl: 'https://hvzmobilindo.vercel.app/dashboard',
    },
    {
        id: 3,
        title: 'WhatsApp Automation Reply',
        eyebrow: 'BUSINESS AUTOMATION',
        description:
            'A focused dashboard for configuring automatic replies, contact rules, and recurring WhatsApp workflows.',
        tech: [
            { name: 'Vue 3', kind: 'vue' },
            { name: 'Vite 8', kind: 'vite' },
            { name: 'Socket.IO', kind: 'socket' },
            { name: 'Tailwind CSS', kind: 'tailwind' },
        ],
        story: 'The product helps teams manage repetitive customer conversations through keyword replies, fallback messages, contact rules, and real-time activity. Its interface keeps complex automation controls approachable and easy to review.',
        images: Array.from(
            { length: 4 },
            (_, index) => `/projects/wa_automation_assets/${index + 1}.jpg`
        ),
        liveUrl: 'https://whatsapp-automation-reply.vercel.app/',
    },
];

export default function Projects() {
    const scrollRef = useRef<HTMLDivElement>(null);
    const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
    const [galleryIndex, setGalleryIndex] = useState(0);
    const selected = selectedIndex === null ? null : projects[selectedIndex];

    const scroll = (direction: 'left' | 'right') => {
        scrollRef.current?.scrollBy({
            left: direction === 'left' ? -420 : 420,
            behavior: 'smooth',
        });
    };

    const openProject = (index: number) => {
        setSelectedIndex(index);
        setGalleryIndex(0);
    };

    const moveProject = (direction: -1 | 1) => {
        setSelectedIndex((current) => {
            if (current === null) return 0;
            return (current + direction + projects.length) % projects.length;
        });
        setGalleryIndex(0);
    };

    const moveGallery = (direction: -1 | 1) => {
        if (!selected) return;
        setGalleryIndex(
            (current) =>
                (current + direction + selected.images.length) %
                selected.images.length
        );
    };

    useEffect(() => {
        if (selectedIndex === null) return;

        const previousBodyOverflow = document.body.style.overflow;
        const previousHtmlOverflow = document.documentElement.style.overflow;
        const imageCount = projects[selectedIndex].images.length;
        document.body.style.overflow = 'hidden';
        document.documentElement.style.overflow = 'hidden';

        const handleKeyDown = (event: KeyboardEvent) => {
            if (event.key === 'Escape') setSelectedIndex(null);
            if (event.key === 'ArrowLeft') {
                setGalleryIndex(
                    (current) => (current - 1 + imageCount) % imageCount
                );
            }
            if (event.key === 'ArrowRight') {
                setGalleryIndex((current) => (current + 1) % imageCount);
            }
        };

        document.addEventListener('keydown', handleKeyDown);
        return () => {
            document.body.style.overflow = previousBodyOverflow;
            document.documentElement.style.overflow = previousHtmlOverflow;
            document.removeEventListener('keydown', handleKeyDown);
        };
    }, [selectedIndex]);

    const projectDialog =
        selected && selectedIndex !== null ? (
            <AnimatePresence>
                <motion.div
                    className="project-overlay"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onMouseDown={() => setSelectedIndex(null)}
                >
                    <motion.div
                        role="dialog"
                        aria-modal="true"
                        aria-labelledby="project-dialog-title"
                        className="project-dialog"
                        initial={{ opacity: 0, scale: 0.97, y: 16 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.98, y: 8 }}
                        transition={{ duration: 0.24 }}
                        onMouseDown={(event) => event.stopPropagation()}
                    >
                        <GlassCard className="project-dialog-card">
                            <button
                                type="button"
                                className="dialog-close"
                                aria-label="Close project details"
                                onClick={() => setSelectedIndex(null)}
                                autoFocus
                            >
                                <X size={19} />
                            </button>

                            <div className="project-gallery">
                                <div className="dialog-image-wrap">
                                    <AnimatePresence
                                        mode="wait"
                                        initial={false}
                                    >
                                        <motion.div
                                            key={selected.images[galleryIndex]}
                                            className="dialog-image-motion"
                                            initial={{ opacity: 0 }}
                                            animate={{ opacity: 1 }}
                                            exit={{ opacity: 0 }}
                                            transition={{ duration: 0.18 }}
                                        >
                                            <Image
                                                src={
                                                    selected.images[
                                                        galleryIndex
                                                    ]
                                                }
                                                alt={`${selected.title} screen ${galleryIndex + 1}`}
                                                fill
                                                sizes="(max-width: 820px) 92vw, 56vw"
                                                priority
                                            />
                                        </motion.div>
                                    </AnimatePresence>
                                    <div className="gallery-controls">
                                        <button
                                            type="button"
                                            onClick={() => moveGallery(-1)}
                                            aria-label="Previous project image"
                                        >
                                            <ArrowLeft size={18} />
                                        </button>
                                        <span>
                                            {galleryIndex + 1} /{' '}
                                            {selected.images.length}
                                        </span>
                                        <button
                                            type="button"
                                            onClick={() => moveGallery(1)}
                                            aria-label="Next project image"
                                        >
                                            <ArrowRight size={18} />
                                        </button>
                                    </div>
                                </div>

                                <div className="gallery-thumbnails">
                                    {selected.images.map((image, index) => (
                                        <button
                                            key={image}
                                            type="button"
                                            className={
                                                galleryIndex === index
                                                    ? 'is-active'
                                                    : ''
                                            }
                                            onClick={() =>
                                                setGalleryIndex(index)
                                            }
                                            aria-label={`Show image ${index + 1}`}
                                        >
                                            <Image
                                                src={image}
                                                alt=""
                                                fill
                                                sizes="90px"
                                            />
                                        </button>
                                    ))}
                                </div>
                            </div>

                            <div className="dialog-copy">
                                <p className="section-eyebrow">
                                    {selected.eyebrow}
                                </p>
                                <h2 id="project-dialog-title">
                                    {selected.title}
                                </h2>
                                <p className="dialog-description">
                                    {selected.description}
                                </p>
                                <p className="dialog-story">{selected.story}</p>
                                <div className="project-tech-list">
                                    {selected.tech.map((technology) => (
                                        <TechBadge
                                            key={technology.name}
                                            technology={technology}
                                        />
                                    ))}
                                </div>
                                <a
                                    className="button button-primary"
                                    href={selected.liveUrl}
                                    target="_blank"
                                    rel="noreferrer"
                                >
                                    Visit live project{' '}
                                    <ExternalLink size={16} />
                                </a>
                                <div className="dialog-navigation">
                                    <button
                                        type="button"
                                        onClick={() => moveProject(-1)}
                                    >
                                        <ArrowLeft size={17} /> Previous project
                                    </button>
                                    <button
                                        type="button"
                                        onClick={() => moveProject(1)}
                                    >
                                        Next project <ArrowRight size={17} />
                                    </button>
                                </div>
                            </div>
                        </GlassCard>
                    </motion.div>
                </motion.div>
            </AnimatePresence>
        ) : null;

    return (
        <section id="projects" className="content-section section-shell">
            <div className="section-container">
                <div className="projects-heading-row">
                    <div className="section-heading">
                        <p className="section-eyebrow">SELECTED WORK</p>
                        <h2 className="section-title">Projects with purpose</h2>
                        <p className="section-lead">
                            Product experiences built around real workflows,
                            clear decisions, and practical outcomes.
                        </p>
                    </div>
                    <div
                        className="carousel-controls"
                        aria-label="Project navigation"
                    >
                        <button
                            type="button"
                            onClick={() => scroll('left')}
                            aria-label="Previous projects"
                        >
                            <ArrowLeft size={19} />
                        </button>
                        <button
                            type="button"
                            onClick={() => scroll('right')}
                            aria-label="Next projects"
                        >
                            <ArrowRight size={19} />
                        </button>
                    </div>
                </div>

                <div className="projects-scroll" ref={scrollRef}>
                    {projects.map((project, index) => (
                        <button
                            type="button"
                            className="project-card-button"
                            key={project.id}
                            onClick={() => openProject(index)}
                            aria-label={`View details for ${project.title}`}
                        >
                            <GlassCard className="project-card">
                                <div className="project-image-wrap">
                                    <Image
                                        src={project.images[0]}
                                        alt={`${project.title} project preview`}
                                        fill
                                        sizes="(max-width: 720px) 88vw, 460px"
                                        className="project-image"
                                    />
                                    <span className="project-image-count">
                                        <Images size={14} />
                                        {project.images.length} screens
                                    </span>
                                    <div className="project-tech-float">
                                        {project.tech
                                            .slice(0, 3)
                                            .map((technology) => (
                                                <TechBadge
                                                    key={technology.name}
                                                    technology={technology}
                                                    compact
                                                />
                                            ))}
                                    </div>
                                </div>
                                <div className="project-card-copy">
                                    <p>{project.eyebrow}</p>
                                    <h3>{project.title}</h3>
                                    <span>{project.description}</span>
                                </div>
                            </GlassCard>
                        </button>
                    ))}
                </div>
            </div>

            {projectDialog ? createPortal(projectDialog, document.body) : null}
        </section>
    );
}

function TechBadge({
    technology,
    compact = false,
}: {
    technology: Technology;
    compact?: boolean;
}) {
    return (
        <span
            className={`tech-badge tech-${technology.kind}${compact ? ' is-compact' : ''}`}
        >
            <span className="tech-badge-icon" aria-hidden="true">
                <TechIcon kind={technology.kind} />
            </span>
            <span>{technology.name}</span>
        </span>
    );
}

function TechIcon({ kind }: { kind: TechKind }) {
    if (kind === 'react') {
        return <Image src="/icons/react.svg" alt="" width={16} height={16} />;
    }
    if (kind === 'typescript') {
        return (
            <Image src="/icons/typescript.svg" alt="" width={16} height={16} />
        );
    }
    if (kind === 'vue') return <strong>V</strong>;
    if (kind === 'vite') return <Zap size={14} />;
    if (kind === 'tailwind') return <Wind size={14} />;
    if (kind === 'router') return <Route size={14} />;
    if (kind === 'motion') return <Move size={14} />;
    if (kind === 'shadcn') return <Blocks size={14} />;
    if (kind === 'embla') return <GalleryHorizontal size={14} />;
    return <Radio size={14} />;
}
