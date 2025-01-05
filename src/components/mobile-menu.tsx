import { X } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { useEffect, useState } from "react";

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
  navItems: Array<{ href: string; label: string }>;
  onLinkClick: (href: string) => void;
}

export function MobileMenu({
  isOpen,
  onClose,
  navItems,
  onLinkClick,
}: MobileMenuProps) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm overflow-y-auto">
      <div className="flex flex-col min-h-screen justify-center items-center py-16">
        <Button
          variant="ghost"
          size="icon"
          onClick={onClose}
          className="absolute top-4 right-4 text-primary hover:text-primary/80"
        >
          <X className="h-6 w-6" />
          <span className="sr-only">{"Close menu"}</span>
        </Button>
        <nav className="w-full max-w-md p-4">
          <ul className="space-y-6 text-center">
            {navItems.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="text-2xl font-medium text-primary hover:text-primary/80 transition-colors block py-2"
                  onClick={(e) => {
                    e.preventDefault();
                    onLinkClick(item.href);
                  }}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </div>
  );
}
