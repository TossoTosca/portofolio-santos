'use client';

import { ReactNode, HTMLAttributes } from 'react';

interface GlassCardProps extends HTMLAttributes<HTMLDivElement> {
    children: ReactNode;
    isScrolled?: boolean;
}

export default function GlassCard({
    children,
    isScrolled = false,
    style,
    ...props
}: GlassCardProps) {
    return (
        <div
            style={{
                background: isScrolled
                    ? 'rgba(255,255,255,0.75)'
                    : 'var(--surface)',

                border: '1px solid var(--border)',
                borderRadius: '999px',
                backdropFilter: isScrolled ? 'blur(20px)' : undefined,
                WebkitBackdropFilter: isScrolled ? 'blur(20px)' : undefined,
                boxShadow: isScrolled
                    ? '0 20px 60px rgba(0,0,0,0.12)'
                    : '0 10px 30px rgba(0,0,0,0.08)',

                transition: 'all 0.35s ease',
                ...style,
            }}
            {...props}
        >
            {children}
        </div>
    );
}
