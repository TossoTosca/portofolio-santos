'use client';

import { motion } from 'framer-motion';
import useInView from '@/hooks/useInView';
import { ReactNode } from 'react';

export default function RevealSection({ children }: { children: ReactNode }) {
    const { ref, isInView } = useInView<HTMLDivElement>();

    return (
        <div ref={ref}>
            <motion.div
                initial={{ opacity: 0, y: 40 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{
                    duration: 1.2,
                    ease: [0.16, 1, 0.3, 1],
                }}
            >
                {children}
            </motion.div>
        </div>
    );
}
