"use client";

import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { EnhancedThemeToggle } from '@/components/theme-toggle';
import { EnhancedLanguageToggle } from '@/components/language-toggle';
import SidebarNavigation from '@/components/sidebar-navigation';
import { Menu, X } from "lucide-react";
import { UI_TEXTS, type Locale } from '@/data/portfolio';
import { usePathname } from 'next/navigation';
import { useTheme } from "next-themes";
import { Tooltip, TooltipProvider, TooltipTrigger, TooltipContent } from "@/components/ui/tooltip";

interface SidebarProps {
    locale: string;
}

export default function Sidebar({ locale }: SidebarProps) {
    const [isOpen, setIsOpen] = useState(false);
    const pathname = usePathname();
    const candidateLocale = locale || (pathname.startsWith('/es') ? 'es' : 'en');
    const localeKey: Locale = candidateLocale === 'es' ? 'es' : 'en';
    const texts = UI_TEXTS[localeKey];
    const { theme, resolvedTheme } = useTheme();
    const effectiveTheme = (theme === "system" ? resolvedTheme : theme) ?? "light";
    const nextThemeLabel = effectiveTheme === "light" ? texts.configuration.dark : texts.configuration.light;

    const REOPEN_FLAG = 'sidebar:shouldReopen';

    const toggleSidebar = () => setIsOpen(!isOpen);
    const closeSidebar = () => {
        setIsOpen(false);
        if (typeof window !== 'undefined') {
            sessionStorage.removeItem(REOPEN_FLAG);
        }
    };

    useEffect(() => {
        if (typeof window === 'undefined') return;
        const shouldReopen = sessionStorage.getItem(REOPEN_FLAG) === 'true';
        if (shouldReopen) {
            sessionStorage.removeItem(REOPEN_FLAG);
            setIsOpen(true);
        }
    }, []);

    useEffect(() => {
        if (!isOpen && typeof window !== 'undefined') {
            sessionStorage.removeItem(REOPEN_FLAG);
        }
    }, [isOpen]);

    const brandTitle = 'Steven Mendez';

    return (
        <>
            {!isOpen && (
                <Button
                    onClick={toggleSidebar}
                    variant="ghost"
                    size="icon"
                    className="fixed top-4 left-4 z-50 h-12 w-12 rounded-full border border-border/60 dark:border-border/40 bg-background/85 dark:bg-background/75 shadow-md backdrop-blur-md transition-all duration-300 hover:border-brand/70 hover:bg-brand/10 dark:hover:bg-brand/15 hover:text-brand focus-visible:ring-brand/40 focus-visible:border-brand lg:hidden"
                    aria-label="Open navigation drawer"
                >
                    <Menu className="h-5 w-5" />
                </Button>
            )}

            {isOpen && (
                <div
                    className="fixed inset-0 z-40 bg-foreground/10 dark:bg-black/50 backdrop-blur-[2px] lg:hidden"
                    onClick={closeSidebar}
                />
            )}

            <div
                className={`fixed inset-y-0 left-0 z-50 flex w-full max-w-[18.5rem] transform-gpu transition-transform duration-300 ease-in-out lg:hidden ${
                    isOpen ? 'translate-x-0' : '-translate-x-full'
                }`}
            >
                <div
                    className="flex h-full w-full flex-col overflow-hidden rounded-r-[1.75rem] border border-border/50 dark:border-border/40 bg-background/95 dark:bg-background/90 shadow-2xl"
                    style={{
                        paddingTop: "calc(env(safe-area-inset-top, 0px) + 1.5rem)",
                        paddingBottom: "calc(env(safe-area-inset-bottom, 0px) + 2rem)"
                    }}
                >
                    <div className="flex items-center justify-between px-5 pb-4">
                        <h1 className="text-xl font-semibold tracking-tight text-foreground">
                            {brandTitle}
                        </h1>
                        <Button
                            onClick={closeSidebar}
                            variant="ghost"
                            size="icon"
                            className="h-9 w-9 rounded-full border border-border/70 text-muted-foreground transition-all duration-200 hover:border-brand/60 hover:bg-brand/10 hover:text-brand"
                            aria-label="Close sidebar"
                        >
                            <X className="h-4 w-4" />
                        </Button>
                    </div>

                    <div className="px-5">
                        <div className="h-[1px] bg-border/70 dark:bg-border/40" />
                    </div>

                    <div className="flex-1 overflow-y-auto px-5 py-5 space-y-8">
                        <SidebarNavigation isMobile={true} texts={texts.navigation} />

                        <div className="space-y-4 border-t border-border/50 pt-4 dark:border-border/40">
                            <div className="flex items-center gap-2 text-[0.66rem] font-semibold uppercase tracking-[0.4em] text-muted-foreground/80">
                                <span className="h-1.5 w-1.5 rounded-full bg-brand/80" aria-hidden="true" />
                                <span>{texts.configuration.title}</span>
                            </div>
                            <div className="space-y-3">
                                <EnhancedLanguageToggle
                                    variant="mobile"
                                    texts={{ language: texts.configuration.language }}
                                    onBeforeNavigate={() => {
                                        if (typeof window !== 'undefined') {
                                            sessionStorage.setItem(REOPEN_FLAG, 'true');
                                        }
                                    }}
                                    className="border-border/40 bg-background/80"
                                />
                                <EnhancedThemeToggle
                                    variant="mobile"
                                    texts={{ light: texts.configuration.light, dark: texts.configuration.dark }}
                                    className="border-border/40 bg-background/80"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <aside className="fixed left-0 top-0 hidden h-full w-20 bg-background/80 dark:bg-background/80 backdrop-blur-md border-r border-border/40 dark:border-border/40 z-40 lg:flex flex-col items-center justify-between py-8">
                <div className="flex flex-col items-center space-y-6">
                    <SidebarNavigation isMobile={false} texts={texts.navigation} />
                </div>

                <div className="flex flex-col items-center space-y-4">
                    <TooltipProvider delayDuration={300}>
                        <Tooltip>
                            <TooltipTrigger asChild>
                                <div>
                                    <EnhancedLanguageToggle variant="compact" size="md" />
                                </div>
                            </TooltipTrigger>
                            <TooltipContent side="right" sideOffset={12}>
                                {texts.configuration.language}
                            </TooltipContent>
                        </Tooltip>
                    </TooltipProvider>
                    <TooltipProvider delayDuration={300}>
                        <Tooltip>
                            <TooltipTrigger asChild>
                                <div>
                                    <EnhancedThemeToggle variant="compact" size="md" />
                                </div>
                            </TooltipTrigger>
                            <TooltipContent side="right" sideOffset={12} className="min-w-[7.5rem] text-center">
                                {nextThemeLabel}
                            </TooltipContent>
                        </Tooltip>
                    </TooltipProvider>
                </div>
            </aside>
        </>
    );
}
