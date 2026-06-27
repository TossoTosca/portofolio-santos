'use client';

import { useState } from 'react';
import GlassCard from '@/components/ui/GlassCard';
import Image from 'next/image';

const skills = [
    { name: 'React', group: 'Frontend', img: '/icons/react.svg' },
    { name: 'Next.js', group: 'Frontend', img: '/icons/nextjs.svg' },
    { name: 'TypeScript', group: 'Frontend', img: '/icons/typescript.svg' },
    { name: 'Angular', group: 'Frontend', img: '/icons/angular.svg' },

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
];

const tabs = ['Frontend', 'Backend', 'Database', 'Tools'] as const;

type TabType = (typeof tabs)[number];

export default function Skills() {
    const [activeTab, setActiveTab] = useState<TabType>('Frontend');

    const filteredSkills = skills.filter((skill) => skill.group === activeTab);

    return (
        <section
            id="skills"
            style={{
                minHeight: '100vh',
                padding: '120px 24px',
                display: 'flex',
                alignItems: 'center',
            }}
        >
            <div
                style={{
                    maxWidth: '1100px',
                    margin: '0 auto',
                    width: '100%',
                }}
            >
                {/* HEADER */}
                <div style={{ marginBottom: '40px' }}>
                    <div
                        style={{
                            fontSize: '14px',
                            letterSpacing: '2px',
                            color: 'var(--text-secondary)',
                            marginBottom: '12px',
                        }}
                    >
                        SKILLS
                    </div>

                    <h2 style={{ fontSize: '42px', fontWeight: 600 }}>
                        Technologies I work with
                    </h2>
                </div>

                {/* TABS */}
                <div
                    style={{
                        display: 'flex',
                        gap: '10px',
                        marginBottom: '30px',
                        flexWrap: 'wrap',
                    }}
                >
                    {tabs.map((tab) => (
                        <button
                            key={tab}
                            onClick={() => setActiveTab(tab)}
                            style={{
                                padding: '8px 14px',
                                borderRadius: '999px',
                                border: '1px solid var(--border)',
                                background:
                                    activeTab === tab
                                        ? 'var(--accent)'
                                        : 'transparent',
                                color:
                                    activeTab === tab
                                        ? 'white'
                                        : 'var(--text-primary)',
                                cursor: 'pointer',
                                transition: 'all 0.25s ease',
                                fontSize: '14px',
                            }}
                        >
                            {tab}
                        </button>
                    ))}
                </div>

                {/* GRID */}
                <div
                    style={{
                        display: 'grid',
                        gridTemplateColumns:
                            'repeat(auto-fit, minmax(160px, 1fr))',
                        gap: '16px',
                    }}
                >
                    {filteredSkills.map((skill) => (
                        <GlassCard
                            key={skill.name}
                            style={{
                                padding: '18px',
                                borderRadius: '18px',
                                textAlign: 'center',
                                cursor: 'pointer',
                                transition: 'all 0.3s ease',
                            }}
                        >
                            <div
                                style={{
                                    display: 'flex',
                                    justifyContent: 'center',
                                    marginBottom: '10px',
                                }}
                            >
                                <Image
                                    src={skill.img}
                                    alt={skill.name}
                                    width={32}
                                    height={32}
                                />
                            </div>

                            <div
                                style={{
                                    fontSize: '12px',
                                    color: 'var(--text-secondary)',
                                }}
                            >
                                {skill.group}
                            </div>

                            <div
                                style={{
                                    fontSize: '15px',
                                    fontWeight: 600,
                                    marginTop: '6px',
                                }}
                            >
                                {skill.name}
                            </div>
                        </GlassCard>
                    ))}
                </div>
            </div>
        </section>
    );
}
