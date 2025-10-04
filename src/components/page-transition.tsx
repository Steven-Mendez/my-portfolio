"use client";

import { useEffect } from "react";

export function PageTransition() {
    useEffect(() => {
        if (typeof window === 'undefined' || !window.location.hash) {
            return;
        }

        const hash = window.location.hash.substring(1);
        const scrollTimeout = window.setTimeout(() => {
            const element = document.getElementById(hash);
            if (element) {
                element.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        }, 200);

        return () => {
            window.clearTimeout(scrollTimeout);
        };
    }, []);

    return null;
}
