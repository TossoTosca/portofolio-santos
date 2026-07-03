'use client';

import { useState } from 'react';
import Image from 'next/image';
import GlassCard from '@/components/ui/GlassCard';

const skills = [
    { name: 'React', group: 'Frontend', img: '/icons/react.svg' },
    { name: 'Next.js', group: 'Frontend', img: '/icons/nextjs.svg' },
    { name: 'TypeScript', group: 'Frontend', img: '/icons/typescript.svg' },
    { name: 'Angular', group: 'Frontend', img: '/icons/angular.svg' },
    { name: 'Vue', group: 'Frontend' },
    { name: 'Node.js', group: 'Backend', img: '/icons/nodejs.svg' },
    { name: 'Express', group: 'Backend', img: '/icons/express.svg' },
    { name: 'Python', group: 'Backend', img: '/icons/python.svg' },
    { name: 'Kotlin', group: 'Backend', img: '/icons/kotlin.svg' },
    { name: 'MySQL', group: 'Database', img: '/icons/mysql.svg' },
    { name: 'PostgreSQL', group: 'Database', img: '/icons/postgresql.svg' },
    { name: 'SQL Server', group: 'Database', img: '/icons/mssql.svg' },
    { name: 'VS Code', group: 'Tools', img: '/icons/vscode.svg' },
    {
        name: 'Android Studio',
        group: 'Tools',
        img: '/icons/android-studio.svg',
    },
    { name: 'Postman', group: 'Tools', img: '/icons/postman.svg' },
    { name: 'DBeaver', group: 'Tools', img: '/icons/dbeaver.svg' },
    { name: 'Docker', group: 'Tools', img: '/icons/docker.svg' },
] as const;

const tabs = ['Frontend', 'Backend', 'Database', 'Tools'] as const;
type TabType = (typeof tabs)[number];

export default function Skills() {
    const [activeTab, setActiveTab] = useState<TabType>('Frontend');
    const filteredSkills = skills.filter((skill) => skill.group === activeTab);

    return (
        <section id="skills" className="content-section section-shell">
            <div className="section-container">
                <div className="section-heading">
                    <p className="section-eyebrow">SKILLS</p>
                    <h2 className="section-title">Technologies I work with</h2>
                    <p className="section-lead">
                        A practical toolkit shaped by building across the full
                        product stack.
                    </p>
                </div>

                <div
                    className="skill-tabs"
                    role="tablist"
                    aria-label="Skill categories"
                >
                    {tabs.map((tab) => (
                        <button
                            key={tab}
                            id={`tab-${tab}`}
                            type="button"
                            role="tab"
                            aria-selected={activeTab === tab}
                            aria-controls="skills-panel"
                            className={activeTab === tab ? 'is-active' : ''}
                            onClick={() => setActiveTab(tab)}
                        >
                            {tab}
                        </button>
                    ))}
                </div>

                <div
                    id="skills-panel"
                    className="skills-grid"
                    role="tabpanel"
                    aria-labelledby={`tab-${activeTab}`}
                >
                    {filteredSkills.map((skill) => (
                        <GlassCard key={skill.name} className="skill-card">
                            {'img' in skill ? (
                                <Image
                                    src={skill.img}
                                    alt=""
                                    width={34}
                                    height={34}
                                />
                            ) : (
                                <span
                                    className="skill-monogram"
                                    aria-hidden="true"
                                >
                                    {skill.name.charAt(0)}
                                </span>
                            )}
                            <span>{skill.name}</span>
                        </GlassCard>
                    ))}
                </div>
            </div>
        </section>
    );
}
