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
    router.push(targetUrl);
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