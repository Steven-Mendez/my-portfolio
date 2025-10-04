"use client";

import { Button } from "@/components/ui/button";
import { usePathname, useRouter } from "next/navigation";
import Image from "next/image";

export function SimpleLanguageToggle() {
  const pathname = usePathname();
  const router = useRouter();

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
  };

  // Local SVGs in public/
  const flagSrc = targetLocale === 'en' ? '/us.svg' : '/es.svg';

  return (
    <div className="relative w-12 h-12 group">
      <Button
        variant="ghost"
        className="h-12 w-12 rounded-full p-0 overflow-hidden relative"
        onClick={handleLanguageChange}
        aria-label={`Switch to ${targetLocale === 'en' ? 'English' : 'Español'}`}
      >
        <div className="relative w-full h-full rounded-full overflow-hidden">
          <Image
            src={flagSrc}
            alt={targetLocale === 'en' ? 'English' : 'Español'}
            fill
            className="object-cover rounded-full"
            aria-hidden="true"
          />
        </div>
        {/* Overlay visible solo en hover */}
        <span className="absolute inset-0 bg-black/30 dark:bg-white/30 opacity-0 group-hover:opacity-100 hover:opacity-100 transition-opacity rounded-full pointer-events-none" />
        <span className="sr-only">Toggle language</span>
      </Button>
    </div>
  );
} 