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
                    ? 'rgba(255, 255, 255, 0.92)'
                    : 'var(--surface)',

                border: '1px solid var(--border)',
                borderRadius: '999px',
                boxShadow: isScrolled
                    ? '0 18px 48px rgba(0, 0, 0, 0.12)'
                    : '0 10px 30px rgba(0, 0, 0, 0.08)',

                transition:
                    'background-color 0.25s ease, box-shadow 0.25s ease, transform 0.25s ease',
                ...style,
            }}
            {...props}
        >
            {children}
        </div>
    );
}
