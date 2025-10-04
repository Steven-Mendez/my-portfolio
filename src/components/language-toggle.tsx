"use client";

import { Button } from "@/components/ui/button";
import { usePathname, useRouter } from "next/navigation";
import Image from "next/image";
import { useState } from "react";
import { ChevronDown } from "lucide-react";

interface EnhancedLanguageToggleProps {
    variant?: "default" | "compact" | "expanded" | "mobile";
    showLabel?: boolean;
    size?: "sm" | "md" | "lg";
    className?: string;
    texts?: {
        language: string;
    };
}

export function EnhancedLanguageToggle({
    variant = "default",
    showLabel = false,
    size = "md",
    className = "",
    texts
}: EnhancedLanguageToggleProps) {
    const pathname = usePathname();
    const router = useRouter();
    const [isOpen, setIsOpen] = useState(false);

    // Determine current locale from pathname
    const currentLocale = pathname.startsWith('/es') ? 'es' : 'en';
    const targetLocale = currentLocale === 'en' ? 'es' : 'en';

    // Determine target URL
    const targetUrl = currentLocale === 'en' ? '/es' : '/en';

    const handleLanguageChange = () => {
        // Get the current scroll position to determine which section is visible
        const sections = ['hero', 'projects', 'experience'];
        let currentSection = '';

        for (const sectionId of sections) {
            const element = document.getElementById(sectionId);
            if (element) {
                const rect = element.getBoundingClientRect();
                // Check if section is in the viewport (top half of the screen)
                if (rect.top <= window.innerHeight / 2 && rect.bottom >= 0) {
                    currentSection = sectionId;
                    break;
                }
            }
        }

        // Add fade-out animation before navigation
        document.documentElement.style.opacity = '0';
        document.documentElement.style.transition = 'opacity 0.2s ease-out';

        // Navigate to the new locale with the current section hash
        const urlWithHash = currentSection ? `${targetUrl}#${currentSection}` : targetUrl;

        // Small delay for the fade effect, then navigate
        setTimeout(() => {
            router.push(urlWithHash);
        }, 150);
        setIsOpen(false);
    };

    const languages = [
        { code: 'en', name: 'English', flag: '/us.svg' },
        { code: 'es', name: 'Español', flag: '/es.svg' }
    ];

    const currentLanguage = languages.find(lang => lang.code === currentLocale);
    const targetLanguage = languages.find(lang => lang.code === targetLocale);

    const sizeClasses = {
        sm: "w-8 h-8",
        md: "w-12 h-12",
        lg: "w-16 h-16"
    };

    const iconSizes = {
        sm: "h-3 w-3",
        md: "h-4 w-4",
        lg: "h-6 w-6"
    };

    if (variant === "compact") {
        return (
            <Button
                variant="ghost"
                size="icon"
                className={`${sizeClasses[size]} rounded-full p-0 overflow-hidden relative bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-900/20 dark:to-blue-800/20 hover:from-blue-100 hover:to-blue-200 dark:hover:from-blue-800/30 dark:hover:to-blue-700/30 transition-all duration-300 hover:scale-110 hover:shadow-xl hover:ring-4 hover:ring-blue-400/30 active:scale-95 ${className}`}
                onClick={handleLanguageChange}
                aria-label={`Switch to ${targetLanguage?.name}`}
            >
                <div className="relative w-full h-full rounded-full overflow-hidden">
                    <Image
                        src={targetLanguage?.flag || '/us.svg'}
                        alt={targetLanguage?.name || 'Language'}
                        fill
                        className="object-cover rounded-full"
                        aria-hidden="true"
                    />
                </div>
                <div className="absolute inset-0 bg-black/20 opacity-0 hover:opacity-100 transition-opacity rounded-full" />
            </Button>
        );
    }

    if (variant === "expanded") {
        return (
            <div className="relative">
                <Button
                    variant="ghost"
                    className={`${sizeClasses[size]} rounded-full p-0 overflow-hidden relative bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-900/20 dark:to-blue-800/20 hover:from-blue-100 hover:to-blue-200 dark:hover:from-blue-800/30 dark:hover:to-blue-700/30 transition-all duration-200 ${className}`}
                    onClick={() => setIsOpen(!isOpen)}
                    aria-label="Select language"
                >
                    <div className="relative w-full h-full rounded-full overflow-hidden">
                        <Image
                            src={currentLanguage?.flag || '/us.svg'}
                            alt={currentLanguage?.name || 'Language'}
                            fill
                            className="object-cover rounded-full"
                            aria-hidden="true"
                        />
                    </div>
                    <ChevronDown className={`absolute bottom-1 right-1 ${iconSizes[size]} text-white bg-black/30 rounded-full p-0.5`} />
                </Button>

                {isOpen && (
                    <div className="absolute left-0 top-full mt-2 bg-card dark:bg-card border border-border/60 dark:border-border/60 rounded-lg shadow-lg z-50 min-w-[140px]">
                        {languages.map((lang) => (
                            <button
                                key={lang.code}
                                onClick={() => {
                                    if (lang.code !== currentLocale) {
                                        router.push(`/${lang.code}`);
                                    }
                                    setIsOpen(false);
                                }}
                                className={`w-full px-3 py-2 text-left hover:bg-muted/50 dark:hover:bg-muted/50 transition-colors flex items-center gap-2 ${lang.code === currentLocale ? 'bg-primary/10 text-primary' : 'text-foreground'
                                    }`}
                            >
                                <div className="relative w-5 h-5 rounded-full overflow-hidden">
                                    <Image
                                        src={lang.flag}
                                        alt={lang.name}
                                        fill
                                        className="object-cover rounded-full"
                                    />
                                </div>
                                <span className="text-sm">{lang.name}</span>
                            </button>
                        ))}
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
                    className="w-14 h-14 rounded-full p-0 overflow-hidden relative bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-900/20 dark:to-blue-800/20 hover:from-blue-100 hover:to-blue-200 dark:hover:from-blue-800/30 dark:hover:to-blue-700/30 transition-all duration-300 hover:shadow-lg hover:scale-105 hover:ring-1 hover:ring-blue-400/60"
                    onClick={handleLanguageChange}
                    aria-label={`Switch to ${targetLanguage?.name}`}
                >
                    <div className="relative w-full h-full rounded-full overflow-hidden">
                        <Image
                            src={targetLanguage?.flag || '/us.svg'}
                            alt={targetLanguage?.name || 'Language'}
                            fill
                            className="object-cover rounded-full"
                            aria-hidden="true"
                        />
                    </div>
                    <div className="absolute inset-0 bg-black/20 opacity-0 hover:opacity-100 transition-opacity rounded-full" />
                </Button>

                {/* Etiqueta simplificada */}
                <div className="flex-1">
                    <div className="text-sm font-medium text-foreground">
                        {texts?.language || (currentLocale === 'en' ? 'EN' : 'ES')}
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
                className={`${sizeClasses[size]} rounded-full p-0 overflow-hidden relative bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-900/20 dark:to-blue-800/20 hover:from-blue-100 hover:to-blue-200 dark:hover:from-blue-800/30 dark:hover:to-blue-700/30 transition-all duration-200 shadow-md hover:shadow-lg ${className}`}
                onClick={handleLanguageChange}
                aria-label={`Switch to ${targetLanguage?.name}`}
            >
                <div className="relative w-full h-full rounded-full overflow-hidden">
                    <Image
                        src={targetLanguage?.flag || '/us.svg'}
                        alt={targetLanguage?.name || 'Language'}
                        fill
                        className="object-cover rounded-full"
                        aria-hidden="true"
                    />
                </div>
                <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity rounded-full" />
            </Button>

            {showLabel && (
                <div className="absolute left-full ml-2 top-1/2 -translate-y-1/2 bg-foreground text-background px-2 py-1 rounded text-xs font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none whitespace-nowrap">
                    {targetLanguage?.name}
                </div>
            )}
        </div>
    );
}
