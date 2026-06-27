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
            {...props}
            style={{
                background: isScrolled
                    ? 'rgba(255,255,255,0.75)'
                    : 'rgba(255,255,255,0.55)',

                border: '1px solid rgba(255,255,255,0.4)',
                borderRadius: '999px',
                backdropFilter: isScrolled ? 'blur(28px)' : 'blur(18px)',
                WebkitBackdropFilter: isScrolled ? 'blur(28px)' : 'blur(18px)',
                boxShadow: isScrolled
                    ? '0 20px 60px rgba(0,0,0,0.12)'
                    : '0 10px 30px rgba(0,0,0,0.08)',

                transition: 'all 0.35s ease',
                willChange: 'transform, backdrop-filter, box-shadow',

                ...style,
            }}
            {...props}
        >
            {children}
        </div>
    );
}
