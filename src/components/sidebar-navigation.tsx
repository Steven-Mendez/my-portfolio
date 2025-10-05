"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ChevronDown, Home, Code, Briefcase } from "lucide-react";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";

interface SidebarNavigationProps {
    isMobile: boolean;
    texts?: {
        title: string;
        home: string;
        projects: string;
        experience: string;
    };
}

export default function SidebarNavigation({ isMobile, texts }: SidebarNavigationProps) {
    const [activeSection, setActiveSection] = useState<string>("hero");

    useEffect(() => {
        const handleScroll = () => {
            const sections = ["hero", "projects", "experience", "footer"];
            const scrollPosition = window.scrollY + 100;

            for (let i = sections.length - 1; i >= 0; i--) {
                const element = document.getElementById(sections[i]);
                if (element && element.offsetTop <= scrollPosition) {
                    setActiveSection(sections[i]);
                    break;
                }
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const scrollToSection = (sectionId: string) => {
        const element = document.getElementById(sectionId);
        if (element) {
            element.scrollIntoView({ behavior: "smooth" });
        }
    };

    const navigationItems = [
        { id: "hero", label: texts?.home || "Inicio", icon: Home, color: "text-slate-400 dark:text-slate-300" },
        { id: "projects", label: texts?.projects || "Proyectos", icon: Code, color: "text-slate-400 dark:text-slate-300" },
        { id: "experience", label: texts?.experience || "Experiencia", icon: Briefcase, color: "text-slate-300" },
    ];

    if (isMobile) {
        return (
            <nav aria-label={texts?.title || "Navigation"} className="space-y-6">
                <div className="flex items-center gap-2 text-[0.65rem] font-semibold uppercase tracking-[0.42em] text-muted-foreground/80">
                    <ChevronDown className="h-3.5 w-3.5" />
                    <span>{texts?.title || "Navegación"}</span>
                </div>

                <div className="space-y-4">
                    {navigationItems.map((item) => {
                        const Icon = item.icon;
                        const isActive = activeSection === item.id;

                        return (
                            <div key={item.id} className="group flex items-center gap-4">
                                <Button
                                    variant={isActive ? "brand" : "ghost"}
                                    size="icon"
                                    className={`h-12 w-12 shrink-0 rounded-full border transition-all duration-300 ${
                                        isActive
                                            ? "border-brand/60 bg-brand text-brand-foreground shadow-md"
                                            : "border-border/40 bg-background/80 text-muted-foreground hover:border-brand/50 hover:text-brand hover:bg-brand/10"
                                    }`}
                                    onClick={() => scrollToSection(item.id)}
                                    aria-current={isActive ? "page" : undefined}
                                >
                                    <Icon className="h-5 w-5" />
                                </Button>
                                <div className="flex-1">
                                    <p className={`text-sm font-medium tracking-tight transition-colors ${
                                        isActive ? "text-foreground" : "text-muted-foreground group-hover:text-foreground"
                                    }`}>
                                        {item.label}
                                    </p>
                                </div>
                                <span
                                    className={`h-2.5 w-2.5 rounded-full bg-brand transition-opacity duration-200 ${
                                        isActive ? "opacity-100" : "opacity-0"
                                    }`}
                                    aria-hidden="true"
                                />
                            </div>
                        );
                    })}
                </div>
            </nav>
        );
    }

    return (
        <div className="space-y-4">
            {navigationItems.map((item) => {
                const Icon = item.icon;
                return (
                    <TooltipProvider key={item.id} delayDuration={300}>
                        <Tooltip>
                            <TooltipTrigger asChild>
                                <div className="relative group">
                                    <Button
                                        variant={activeSection === item.id ? "brand" : "ghost"}
                                        size="icon"
                                        className={`w-10 h-10 rounded-full transition-all duration-300 hover:shadow-lg ${
                                            activeSection === item.id
                                                ? "shadow-md hover:scale-[1.05] active:scale-100 focus-visible:ring-brand/50"
                                                : "text-muted-foreground hover:text-foreground hover:bg-brand/10 dark:hover:bg-brand/15 hover:text-brand hover:scale-105 hover:shadow-md hover:ring-1 hover:ring-brand/40"
                                        }`}
                                        onClick={() => scrollToSection(item.id)}
                                        title={item.label}
                                    >
                                        <Icon className={`h-4 w-4 transition-colors duration-300 ${activeSection === item.id ? 'text-brand-foreground' : item.color}`} />
                                    </Button>
                                    {activeSection === item.id && (
                                        <div className="absolute -right-1 -top-1 w-3 h-3 rounded-full bg-brand animate-pulse shadow-sm" />
                                    )}
                                </div>
                            </TooltipTrigger>
                            <TooltipContent side="right">
                                {item.label}
                            </TooltipContent>
                        </Tooltip>
                    </TooltipProvider>
                );
            })}
        </div>
    );
}
