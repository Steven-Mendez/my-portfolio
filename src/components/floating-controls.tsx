"use client";

import { ThemeToggle } from '@/components/theme-toggle';
import { SimpleLanguageToggle } from '@/components/simple-language-toggle';

export default function FloatingControls() {
    return (
        <aside className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-50 flex flex-col gap-3" aria-label="Page controls">
            {/* Language Toggle */}
            <div className="bg-card dark:bg-card rounded-full shadow-lg w-12 h-12 flex items-center justify-center ring-1 ring-border/60 dark:ring-border/60 transition-shadow duration-200 backdrop-blur-sm hover:shadow-xl">
                <SimpleLanguageToggle />
            </div>
            {/* Theme Toggle */}
            <div className="bg-card dark:bg-card rounded-full shadow-lg ring-1 ring-border/60 dark:ring-border/60 transition-shadow duration-200 backdrop-blur-sm hover:shadow-xl">
                <ThemeToggle />
            </div>
        </aside>
    );
} 