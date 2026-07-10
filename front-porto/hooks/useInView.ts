'use client';

import { useEffect, useState, useRef } from 'react';

export default function useInView<T extends HTMLElement>() {
    const ref = useRef<T | null>(null);
    const [isInView, setIsInView] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (!entry.isIntersecting) return;
                setIsInView(true);
                observer.disconnect();
            },
            {
                threshold: 0.15,
            }
        );

        const element = ref.current;
        if (element) observer.observe(element);

        return () => {
            if (element) observer.unobserve(element);
        };
    }, []);

    return { ref, isInView };
}
