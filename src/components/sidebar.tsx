"use client";

import { useState } from "react";
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

    const toggleSidebar = () => setIsOpen(!isOpen);
    const closeSidebar = () => setIsOpen(false);

    return (
        <>
            <Button
                onClick={toggleSidebar}
                variant="ghost"
                size="icon"
                className="fixed top-4 left-4 z-50 h-12 w-12 rounded-full bg-background/95 dark:bg-background/95 shadow-lg border border-border/60 dark:border-border/40 hover:border-brand/60 hover:bg-brand/10 dark:hover:bg-brand/15 hover:text-brand focus-visible:ring-brand/40 focus-visible:border-brand transition-all duration-300 backdrop-blur-sm hover:shadow-xl hover:scale-105 md:hidden"
                aria-label="Toggle sidebar"
                aria-expanded={isOpen}
            >
                {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>

            {isOpen && (
                <div
                    className="fixed inset-0 bg-black/20 dark:bg-black/40 z-40 md:hidden"
                    onClick={closeSidebar}
                />
            )}

            <div
                className={`fixed left-0 top-0 h-full w-80 bg-background/95 dark:bg-background/95 backdrop-blur-md border-r border-border/40 dark:border-border/40 z-50 transform transition-transform duration-300 ease-in-out md:hidden ${
                    isOpen ? 'translate-x-0' : '-translate-x-full'
                }`}
            >
                <div className="flex flex-col h-full">
                    <div className="flex items-center justify-between p-6 pb-4 border-b border-border/40 dark:border-border/40">
                        <h2 className="text-xl font-semibold text-foreground">
                            Portfolio
                        </h2>
                        <Button
                            onClick={closeSidebar}
                            variant="ghost"
                            size="icon"
                            className="h-8 w-8 hover:bg-muted/50 hover:text-foreground rounded-full transition-all duration-200 hover:scale-105"
                            aria-label="Close sidebar"
                        >
                            <X className="h-4 w-4" />
                        </Button>
                    </div>

                    <div className="flex-1 p-6">
                        <SidebarNavigation isMobile={true} texts={texts.navigation} />
                    </div>

                    <div className="p-6 pt-4 border-t border-border/40 dark:border-border/40">
                        <h3 className="text-sm font-medium text-muted-foreground text-center mb-4">
                            {texts.configuration.title}
                        </h3>
                        <div className="space-y-4">
                            <TooltipProvider>
                                <Tooltip>
                                    <TooltipTrigger asChild>
                                        <EnhancedLanguageToggle variant="mobile" texts={{ language: texts.configuration.language }} />
                                    </TooltipTrigger>
                                    <TooltipContent side="right" sideOffset={12}>
                                        {texts.configuration.language}
                                    </TooltipContent>
                                </Tooltip>
                            </TooltipProvider>
                            <TooltipProvider>
                                <Tooltip>
                                    <TooltipTrigger asChild>
                                        <EnhancedThemeToggle variant="mobile" texts={{ light: texts.configuration.light, dark: texts.configuration.dark }} />
                                    </TooltipTrigger>
                                    <TooltipContent side="right" sideOffset={12} className="min-w-[7.5rem] text-center">
                                        {nextThemeLabel}
                                    </TooltipContent>
                                </Tooltip>
                            </TooltipProvider>
                        </div>
                    </div>
                </div>
            </div>

            <aside className="fixed left-0 top-0 hidden h-full w-20 bg-background/80 dark:bg-background/80 backdrop-blur-md border-r border-border/40 dark:border-border/40 z-40 md:flex flex-col items-center justify-between py-8">
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
