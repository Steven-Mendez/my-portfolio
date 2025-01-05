"use client";

import Link from "next/link";
import { Github, Linkedin, Mail, Menu } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { MobileMenu } from "@/components/mobile-menu";
import SocialLink from "./social-link";
import LanguageSwitcher from "./language-switcher";
import { useLanguage } from "@/contexts/LanguageContext";

const navItems = {
  en: [
    { href: "#about", label: "About" },
    { href: "#skills", label: "Skills" },
    { href: "#projects", label: "Projects" },
    { href: "#experience", label: "Experience" },
    { href: "#education", label: "Education" },
    { href: "#contact", label: "Contact" },
  ],
  es: [
    { href: "#about", label: "Sobre mí" },
    { href: "#skills", label: "Habilidades" },
    { href: "#projects", label: "Proyectos" },
    { href: "#experience", label: "Experiencia" },
    { href: "#education", label: "Educación" },
    { href: "#contact", label: "Contacto" },
  ],
};

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { language } = useLanguage();

  const currentNavItems = navItems[language];

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-primary/10">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <Link href="/" className="flex items-center space-x-2">
              <span className="text-2xl font-bold text-primary">SM</span>
            </Link>

            <div className="hidden md:flex items-center space-x-6">
              {currentNavItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
                  onClick={(e) => {
                    e.preventDefault();
                    const target = document.querySelector(item.href);
                    if (target) {
                      target.scrollIntoView({
                        behavior: "smooth",
                        block: "start",
                      });
                    }
                  }}
                >
                  {item.label}
                </Link>
              ))}
            </div>
            <div className="flex items-center space-x-4">
              <LanguageSwitcher />
              <div className="hidden md:flex items-center space-x-4">
                <SocialLink
                  href="https://www.github.com/Steven-Mendez"
                  icon={Github}
                  label="GitHub"
                />
                <SocialLink
                  href="https://www.linkedin.com/in/steven-mendez-dev"
                  icon={Linkedin}
                  label="LinkedIn"
                />
                <SocialLink
                  href="mailto:stevenampaiz@gmail.com"
                  icon={Mail}
                  label="Email"
                />
              </div>
              <Button
                variant="ghost"
                size="icon"
                className="md:hidden text-primary hover:text-primary/80"
                onClick={() => setIsMobileMenuOpen(true)}
              >
                <Menu className="h-6 w-6" />
                <span className="sr-only">Open mobile menu</span>
              </Button>
            </div>
          </div>
        </div>
      </nav>
      <MobileMenu
        isOpen={isMobileMenuOpen}
        onClose={() => setIsMobileMenuOpen(false)}
        navItems={currentNavItems}
        onLinkClick={(href) => {
          setIsMobileMenuOpen(false);
          const target = document.querySelector(href);
          if (target) {
            target.scrollIntoView({ behavior: "smooth", block: "start" });
          }
        }}
      />
    </>
  );
}
