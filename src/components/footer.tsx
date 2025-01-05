"use client";

import { Github, Linkedin, Mail } from "lucide-react";
import Link from "next/link";
import { useLanguage } from "@/contexts/LanguageContext";

export default function Footer() {
  const { language } = useLanguage();

  const content = {
    en: {
      rights: "All rights reserved.",
      github: "GitHub",
      linkedin: "LinkedIn",
      email: "Email",
    },
    es: {
      rights: "Todos los derechos reservados.",
      github: "GitHub",
      linkedin: "LinkedIn",
      email: "Correo",
    },
  };

  const { rights, github, linkedin, email } = content[language];

  return (
    <footer className="w-full py-4 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-t border-primary/10">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center justify-between gap-4 md:h-10 md:flex-row">
          <div className="flex flex-col items-center px-8 md:flex-row md:gap-2 md:px-0">
            <Link href="/" className="flex items-center space-x-2">
              <span className="text-xl font-bold text-primary">SM</span>
            </Link>
          </div>
          <div className="flex flex-col items-center gap-4 px-8 md:flex-row md:gap-2 md:px-0">
            <p className="text-center text-sm text-muted-foreground md:text-left">
              © {new Date().getFullYear()} Steven Mendez. {rights}
            </p>
          </div>
          <div className="flex items-center space-x-4">
            <Link
              href="https://github.com/Steven-Mendez"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              <Github className="h-5 w-5" />
              <span className="sr-only">{github}</span>
            </Link>
            <Link
              href="https://linkedin.com/in/steven-mendez-dev"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              <Linkedin className="h-5 w-5" />
              <span className="sr-only">{linkedin}</span>
            </Link>
            <Link
              href="mailto:stevenampaiz@gmail.com"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              <Mail className="h-5 w-5" />
              <span className="sr-only">{email}</span>
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
