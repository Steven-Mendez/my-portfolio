"use client";

import { useEffect } from "react";

export function PageTransition({ children }: { children: React.ReactNode }) {
    useEffect(() => {
        // Fade in on mount with a slight delay for better visual effect
        const fadeIn = setTimeout(() => {
            document.documentElement.style.opacity = '1';
            document.documentElement.style.transition = 'opacity 0.3s ease-in';
        }, 50);

        // Smooth scroll to hash if present in URL
        if (window.location.hash) {
            const hash = window.location.hash.substring(1);
            // Delay to ensure the page is fully loaded and fade-in has started
            const scrollTimeout = setTimeout(() => {
                const element = document.getElementById(hash);
                if (element) {
                    element.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            }, 350);

            return () => {
                clearTimeout(fadeIn);
                clearTimeout(scrollTimeout);
            };
        }

        return () => {
            clearTimeout(fadeIn);
        };
    }, []);

    return <>{children}</>;
}
