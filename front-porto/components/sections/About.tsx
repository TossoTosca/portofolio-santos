import { Compass, Layers3, Sparkles } from 'lucide-react';
import GlassCard from '@/components/ui/GlassCard';

const principles = [
    {
        icon: Compass,
        title: 'Curious by default',
        text: 'I enjoy exploring unfamiliar problems and turning what I learn into practical improvements.',
    },
    {
        icon: Layers3,
        title: 'End-to-end thinking',
        text: 'I connect product intent, interface details, application logic, and data into one coherent experience.',
    },
    {
        icon: Sparkles,
        title: 'Care in the details',
        text: 'Performance, accessibility, and clear interactions are part of the product—not a final polish pass.',
    },
];

export default function About() {
    return (
        <section id="about" className="content-section section-shell">
            <div className="section-container about-layout">
                <div className="about-copy">
                    <p className="section-eyebrow">ABOUT ME</p>
                    <h2 className="section-title">
                        Building with curiosity, clarity, and a product mindset.
                    </h2>
                    <p className="section-lead">
                        I&apos;m a full stack developer who likes to understand
                        how things work—not only enough to ship them, but enough
                        to make them simpler, faster, and easier to maintain.
                    </p>
                    <p className="section-body">
                        My work moves comfortably between frontend experiences,
                        backend services, and databases. I value thoughtful
                        collaboration and products that feel calm and intuitive
                        to the people using them.
                    </p>
                </div>

                <div className="principles-grid">
                    {principles.map(({ icon: Icon, title, text }) => (
                        <GlassCard key={title} className="principle-card">
                            <span className="principle-icon">
                                <Icon size={20} aria-hidden="true" />
                            </span>
                            <div>
                                <h3>{title}</h3>
                                <p>{text}</p>
                            </div>
                        </GlassCard>
                    ))}
                </div>
            </div>
        </section>
    );
}
