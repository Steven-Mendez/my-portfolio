"use client";

import { Github, Linkedin, Mail, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Tooltip, TooltipProvider, TooltipTrigger, TooltipContent } from "@/components/ui/tooltip";
import { Contact } from "@/types";

// Map icon names to components
const iconMap = {
    Mail,
    Phone,
    Github,
    Linkedin,
};


interface ContactLinksProps {
    contacts: Contact[];
}

export default function ContactLinks({ contacts }: ContactLinksProps) {
    return (
        <TooltipProvider>
            <nav className="flex gap-2 sm:gap-3 justify-center md:justify-start" aria-label="Contact information">
                {contacts.map((contact) => {
                    const IconComponent = iconMap[contact.icon as keyof typeof iconMap];

                    return (
                        <Tooltip key={contact.href}>
                            <TooltipTrigger asChild>
                                <Button
                                    asChild
                                    variant="ghost"
                                    size="icon"
                                    className="rounded-full w-9 h-9 sm:w-10 sm:h-10 border border-border/60 dark:border-border/40 hover:border-brand/60 hover:bg-brand/10 dark:hover:bg-brand/15 hover:text-brand focus-visible:ring-brand/40 focus-visible:border-brand transition-colors"
                                    aria-label={contact.label}
                                >
                                    <a
                                        href={contact.href}
                                        target={contact.external ? '_blank' : undefined}
                                        rel={contact.external ? 'noopener noreferrer' : undefined}
                                    >
                                        <IconComponent className="w-4 h-4 sm:w-5 sm:h-5" aria-hidden="true" />
                                    </a>
                                </Button>
                            </TooltipTrigger>
                            <TooltipContent>
                                <span>{contact.label}</span>
                            </TooltipContent>
                        </Tooltip>
                    );
                })}
            </nav>
        </TooltipProvider>
    );
} 