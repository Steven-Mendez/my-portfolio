"use client";

import * as React from "react";
import { Moon, Sun, Monitor } from "lucide-react";
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
    const { theme, setTheme } = useTheme();
    const [mounted, setMounted] = React.useState(false);
    const [isOpen, setIsOpen] = useState(false);

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
                    theme === "light"
                        ? "!bg-amber-100 !text-amber-700 shadow-md ring-1 ring-amber-500/40 dark:!bg-amber-800/40 dark:!text-amber-300 hover:!bg-amber-200 dark:hover:!bg-amber-700/60 hover:!ring-amber-500/60"
                        : "!bg-slate-100 !text-slate-700 shadow-md ring-1 ring-slate-500/40 dark:!bg-slate-700/40 dark:!text-slate-300 hover:!bg-slate-200 dark:hover:!bg-slate-600/60 hover:!ring-slate-500/60"
                }`}
                onClick={() => setTheme(theme === "light" ? "dark" : "light")}
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
                    className={`${getSizeClasses(size)} rounded-full ${getThemeColor(theme || "system")} hover:bg-brand/10 dark:hover:bg-brand/15 hover:text-brand hover:ring-1 hover:ring-brand/40 transition-all duration-200 shadow-md hover:shadow-lg ${className}`}
                    onClick={() => setIsOpen(!isOpen)}
                    aria-label="Select theme"
                >
                    {theme === "light" && <Sun className={`${getIconSize(size)} text-muted-foreground`} />}
                    {theme === "dark" && <Moon className={`${getIconSize(size)} text-muted-foreground`} />}
                    {theme === "system" && <Monitor className={`${getIconSize(size)} text-muted-foreground`} />}
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
        return (
            <div className="flex items-center gap-4 group">
                {/* Botón circular principal */}
                <Button
                    variant="ghost"
                    size="icon"
                    className={`w-14 h-14 rounded-full transition-all duration-300 ${
                        theme === "light"
                            ? "!bg-amber-100 !text-amber-700 shadow-lg ring-2 ring-amber-500/40 dark:!bg-amber-800/40 dark:!text-amber-300"
                            : "!bg-slate-100 !text-slate-700 shadow-lg ring-2 ring-slate-500/40 dark:!bg-slate-700/40 dark:!text-slate-300"
                    }`}
                    onClick={() => setTheme(theme === "light" ? "dark" : "light")}
                    aria-label="Toggle theme"
                >
                    <Sun className={`h-5 w-5 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0`} />
                    <Moon className={`absolute h-5 w-5 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100`} />
                </Button>
                
                {/* Etiqueta simplificada */}
                <div className="flex-1">
                    <div className="text-sm font-medium text-foreground">
                        {theme === "light" ? (texts?.light || "Claro") : (texts?.dark || "Oscuro")}
                    </div>
                </div>
            </div>
        );
    }

    // Default variant
    return (
        <div className="group relative">
            <Button
                variant="ghost"
                size="icon"
                className={`${getSizeClasses(size)} rounded-full ${getThemeColor(theme || "system")} hover:bg-brand/10 dark:hover:bg-brand/15 hover:text-brand hover:ring-1 hover:ring-brand/40 transition-all duration-200 shadow-md hover:shadow-lg ${className}`}
                onClick={() => setTheme(theme === "light" ? "dark" : "light")}
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
