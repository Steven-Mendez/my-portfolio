"use client";

import * as React from "react";
import { Moon, Sun, Monitor, ArrowRight } from "lucide-react";
import { useTheme } from "next-themes";
import { Button } from "@/components/ui/button";
import { useState } from "react";

interface EnhancedThemeToggleProps {
    variant?: "default" | "compact" | "expanded" | "mobile";
    showLabel?: boolean;
    size?: "sm" | "md" | "lg";
    className?: string;
    themes?: ("light" | "dark" | "system")[];
    texts?: {
        light: string;
        dark: string;
    };
}

export function EnhancedThemeToggle({ 
    variant = "default", 
    showLabel = false, 
    size = "md",
    className = "",
    themes = ["light", "dark", "system"],
    texts
}: EnhancedThemeToggleProps) {
    const { theme, setTheme, resolvedTheme } = useTheme();
    const [mounted, setMounted] = React.useState(false);
    const [isOpen, setIsOpen] = useState(false);

    const effectiveTheme = (theme === "system" ? resolvedTheme : theme) ?? "light";

    React.useEffect(() => {
        setMounted(true);
    }, []);

    const getSizeClasses = (size: string) => {
        switch (size) {
            case "sm": return "w-8 h-8";
            case "lg": return "w-16 h-16";
            default: return "w-12 h-12";
        }
    };

    const getIconSize = (size: string) => {
        switch (size) {
            case "sm": return "h-3 w-3";
            case "lg": return "h-6 w-6";
            default: return "h-4 w-4";
        }
    };

    const getThemeIcon = (themeName: string) => {
        switch (themeName) {
            case "light": return Sun;
            case "dark": return Moon;
            case "system": return Monitor;
            default: return Sun;
        }
    };

    const getThemeColor = (themeName: string) => {
        switch (themeName) {
            case "light": return "bg-muted/20 dark:bg-muted/20";
            case "dark": return "bg-muted/20 dark:bg-muted/20";
            case "system": return "bg-muted/20 dark:bg-muted/20";
            default: return "bg-muted/20 dark:bg-muted/20";
        }
    };

    if (!mounted) {
        return (
            <Button 
                variant="ghost" 
                size="icon" 
                className={`${getSizeClasses(size)} rounded-full bg-gradient-to-br from-amber-50 to-orange-100 dark:from-amber-900/20 dark:to-orange-800/20 ${className}`}
            >
                <div className="h-4 w-4" />
            </Button>
        );
    }

    if (variant === "compact") {
        return (
            <Button
                variant="ghost"
                size="icon"
                className={`${getSizeClasses(size)} rounded-full transition-all duration-300 transform-gpu hover:scale-105 hover:shadow-lg hover:ring-2 hover:ring-brand/30 active:scale-95 ${
                    effectiveTheme === "light"
                        ? "!bg-amber-100 !text-amber-700 shadow-md ring-1 ring-amber-500/40 dark:!bg-amber-800/40 dark:!text-amber-300 hover:!bg-amber-200 dark:hover:!bg-amber-700/60 hover:!ring-amber-500/60"
                        : "!bg-slate-100 !text-slate-700 shadow-md ring-1 ring-slate-500/40 dark:!bg-slate-700/40 dark:!text-slate-300 hover:!bg-slate-200 dark:hover:!bg-slate-600/60 hover:!ring-slate-500/60"
                }`}
                onClick={() => setTheme(effectiveTheme === "light" ? "dark" : "light")}
                aria-label="Toggle theme"
            >
                <Sun className={`${getIconSize(size)} rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0`} />
                <Moon className={`absolute ${getIconSize(size)} rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100`} />
            </Button>
        );
    }

    if (variant === "expanded") {
        return (
            <div className="relative">
                <Button
                    variant="ghost"
                    size="icon"
                    className={`${getSizeClasses(size)} rounded-full ${getThemeColor(effectiveTheme)} hover:bg-brand/10 dark:hover:bg-brand/15 hover:text-brand hover:ring-1 hover:ring-brand/40 transition-all duration-200 shadow-md hover:shadow-lg ${className}`}
                    onClick={() => setIsOpen(!isOpen)}
                    aria-label="Select theme"
                >
                    {theme === "system" ? (
                        <Monitor className={`${getIconSize(size)} text-muted-foreground`} />
                    ) : effectiveTheme === "light" ? (
                        <Sun className={`${getIconSize(size)} text-muted-foreground`} />
                    ) : (
                        <Moon className={`${getIconSize(size)} text-muted-foreground`} />
                    )}
                </Button>

                {isOpen && (
                    <div className="absolute left-0 top-full mt-2 bg-card dark:bg-card border border-border/60 dark:border-border/60 rounded-lg shadow-lg z-50 min-w-[140px]">
                        {themes.map((themeName) => {
                            const Icon = getThemeIcon(themeName);
                            return (
                                <button
                                    key={themeName}
                                    onClick={() => {
                                        setTheme(themeName);
                                        setIsOpen(false);
                                    }}
                                    className={`w-full px-3 py-2 text-left hover:bg-muted/50 dark:hover:bg-muted/50 transition-colors flex items-center gap-2 ${
                                        theme === themeName ? 'bg-primary/10 text-primary' : 'text-foreground'
                                    }`}
                                >
                                    <Icon className="h-4 w-4" />
                                    <span className="text-sm capitalize">{themeName}</span>
                                </button>
                            );
                        })}
                    </div>
                )}
            </div>
        );
    }

    if (variant === "mobile") {
        const nextThemeLabel = effectiveTheme === "light"
            ? (texts?.dark || "Dark Mode")
            : (texts?.light || "Light Mode");

        return (
            <button
                type="button"
                onClick={() => setTheme(effectiveTheme === "light" ? "dark" : "light")}
                className={`group flex w-full items-center gap-4 rounded-2xl border border-border/50 px-3 py-3 text-left transition-all duration-200 hover:border-brand/60 hover:bg-brand/10 hover:text-brand dark:border-border/40 ${className}`}
                aria-label={`Toggle theme. ${nextThemeLabel}`}
            >
                <span className="relative flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-border/50 bg-muted/30 transition-all duration-200 group-hover:border-brand/60 group-hover:bg-brand/15 dark:bg-muted/20">
                    <Sun className={`h-5 w-5 transition-all duration-200 ${
                        effectiveTheme === "light"
                            ? "opacity-100 scale-100"
                            : "-rotate-90 opacity-0 scale-75"
                    }`} />
                    <Moon className={`absolute h-5 w-5 transition-all duration-200 ${
                        effectiveTheme === "light"
                            ? "rotate-90 opacity-0 scale-75"
                            : "rotate-0 opacity-100 scale-100"
                    }`} />
                </span>

                <span className="flex-1 text-sm font-medium tracking-tight text-foreground transition-colors group-hover:text-brand">
                    {nextThemeLabel}
                </span>

                <ArrowRight className="h-4 w-4 text-muted-foreground transition-transform duration-200 group-hover:translate-x-1 group-hover:text-brand" />
            </button>
        );
    }

    return (
        <div className="group relative">
            <Button
                variant="ghost"
                size="icon"
                className={`${getSizeClasses(size)} rounded-full ${getThemeColor(effectiveTheme)} hover:bg-brand/10 dark:hover:bg-brand/15 hover:text-brand hover:ring-1 hover:ring-brand/40 transition-all duration-200 shadow-md hover:shadow-lg ${className}`}
                onClick={() => setTheme(effectiveTheme === "light" ? "dark" : "light")}
                aria-label="Toggle theme"
            >
                <Sun className={`${getIconSize(size)} rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0 text-muted-foreground`} />
                <Moon className={`absolute ${getIconSize(size)} rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100 text-muted-foreground`} />
            </Button>
            
            {showLabel && (
                <div className="absolute left-full ml-2 top-1/2 -translate-y-1/2 bg-foreground text-background px-2 py-1 rounded text-xs font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none whitespace-nowrap">
                    {theme === "light" ? "Dark Mode" : "Light Mode"}
                </div>
            )}
        </div>
    );
}
