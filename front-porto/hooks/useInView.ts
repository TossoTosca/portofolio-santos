'use client';

import { useEffect, useState, useRef } from 'react';

export default function useInView<T extends HTMLElement>() {
    const ref = useRef<T | null>(null);
    const [isInView, setIsInView] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                setIsInView(entry.isIntersecting);
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
