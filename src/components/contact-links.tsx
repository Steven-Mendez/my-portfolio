"use client";

import { Github, Linkedin, Mail, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Tooltip, TooltipProvider, TooltipTrigger, TooltipContent } from "@/components/ui/tooltip";

// Map icon names to components
const iconMap = {
    Mail,
    Phone,
    Github,
    Linkedin,
};

interface Contact {
    icon: string;
    href: string;
    label: string;
    external: boolean;
}

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
                                    className="rounded-full border border-border hover:bg-muted/70 transition-colors w-9 h-9 sm:w-10 sm:h-10"
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