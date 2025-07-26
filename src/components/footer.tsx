import { Github, Linkedin, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

const contacts = [
    {
        name: 'GitHub',
        href: 'https://github.com/Steven-Mendez',
        icon: Github,
    },
    {
        name: 'LinkedIn',
        href: 'https://www.linkedin.com/in/steven-mendez-dev/',
        icon: Linkedin,
    },
    {
        name: 'Email',
        href: 'mailto:stevenampaiz@gmail.com',
        icon: Mail,
    },
];

export default function Footer() {
    return (
        <footer className="w-full bg-white dark:bg-gray-900 pt-8 transition-colors">
            <Separator className="mb-6" />
            <div className="flex flex-col items-center space-y-4">
                <nav className="flex gap-4" aria-label="Social media and contact links">
                    {contacts.map(({ name, href, icon: Icon }) => (
                        <Button
                            key={name}
                            asChild
                            variant="ghost"
                            size="icon"
                            className="rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                            aria-label={`Visit ${name}`}
                        >
                            <a
                                href={href}
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <Icon className="w-5 h-5" aria-hidden="true" />
                            </a>
                        </Button>
                    ))}
                </nav>
                <div className="text-center text-sm text-gray-500 dark:text-gray-400">
                    <p>&copy; 2025 Steven Mendez. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
} 