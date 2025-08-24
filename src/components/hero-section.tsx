/**
 * HeroSection module.
 * Presentational banner showing identity (name, role), bio paragraphs, location,
 * contact links, curriculum download action, and avatar. Pure UI (no side effects).
 */
import { MapPin, Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import ContactLinks from "./contact-links";

// ----------------- Types -----------------
/** Contact link metadata. */
interface Contact {
    icon: string;
    href: string;
    label: string;
    external: boolean;
}

/** External data shape expected by HeroSection. */
interface HeroSectionProps {
    data: {
        personal: {
            name: string;
            title: string;
            location: string;
            bio: string[];
            contacts: Contact[];
            cv: { fileName: string; downloadText: string };
        };
    };
}

// ----------------- Helpers -----------------
/** Derive up to three uppercase initials for the avatar fallback. */
function getInitials(fullName: string): string {
    const parts = fullName.trim().split(/\s+/);
    if (parts.length === 1) return parts[0].slice(0, 2).toUpperCase();
    return parts.map(p => p.charAt(0)).join("").slice(0, 3).toUpperCase();
}

// ----------------- Private Subcomponents -----------------
/** Props for Header (name + role). */
interface HeaderProps { name: string; title: string; }
/** Heading block (H1 name + H2 role). */
const Header = ({ name, title }: HeaderProps) => (
    <>
        <h1
            id="hero-name"
            className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-foreground tracking-tight leading-tight mb-3"
        >
            {name}
        </h1>
        <h2 className="text-xl md:text-2xl font-semibold text-brand mb-5">
            {title}
        </h2>
    </>
);

/** Props for Bio (paragraph list). */
interface BioProps { bio: string[]; }
/** Bio paragraphs list. */
const Bio = ({ bio }: BioProps) => (
    <div className="space-y-4 max-w-prose md:max-w-none">
        {bio.map((paragraph, index) => (
            <p key={index} className="text-muted-foreground leading-relaxed text-base">
                {paragraph}
            </p>
        ))}
    </div>
);

/** Props for MetaActions (location, contacts, CV metadata). */
interface MetaActionsProps {
    location: string;
    contacts: Contact[];
    cv: { fileName: string; downloadText: string };
}
/** Location, contacts and CV download CTA cluster. */
const MetaActions = ({ location, contacts, cv }: MetaActionsProps) => (
    <div className="mt-8 flex flex-wrap items-center gap-4">
        <address className="flex items-center gap-2 text-muted-foreground text-sm not-italic">
            <MapPin className="w-4 h-4" aria-hidden="true" />
            <span>{location}</span>
        </address>
        <ContactLinks contacts={contacts} />
        <Button
            asChild
            variant="brand"
            size="sm"
            className="shadow-md focus-visible:ring-ring/40"
        >
            <a
                href={`/${cv.fileName}`}
                download={cv.fileName}
                aria-label={`Download ${cv.fileName}`}
            >
                <Download className="w-4 h-4" aria-hidden="true" />
                {cv.downloadText}
            </a>
        </Button>
    </div>
);

/** Props for AvatarBlock (name + derived initials). */
interface AvatarBlockProps { name: string; initials: string; }
/** Portrait avatar with fallback initials. */
const AvatarBlock = ({ name, initials }: AvatarBlockProps) => (
    <div className="flex-shrink-0 self-center">
        <Avatar
            className="w-48 h-48 sm:w-56 sm:h-56 md:w-72 md:h-72 xl:w-80 xl:h-80 dark:shadow-sm dark:ring-1 dark:ring-border/40"
            style={{ backgroundColor: "var(--avatar-background)" }}
        >
            <AvatarImage
                src="/image.png"
                alt={name}
                className="w-full h-full object-cover rounded-2xl"
            />
            <AvatarFallback
                className="text-3xl"
                style={{
                    backgroundColor: "var(--avatar-background)",
                    color: "var(--foreground)",
                }}
            >
                {initials}
            </AvatarFallback>
        </Avatar>
    </div>
);

// ----------------- Main Component -----------------
/** Main exported HeroSection container. */
export default function HeroSection({ data }: HeroSectionProps) {
    const { name, title, location, bio, contacts, cv } = data.personal;
    const initials = getInitials(name);

    return (
        <section
            className="w-full py-6 sm:py-8 mb-6 sm:mb-8"
            aria-labelledby="hero-name"
        >
            <div className="grid grid-cols-[minmax(0,1fr)_auto] gap-10 md:gap-12 items-center">
                <div className="min-w-0 max-w-3xl">
                    <Header name={name} title={title} />
                    <Bio bio={bio} />
                    <MetaActions location={location} contacts={contacts} cv={cv} />
                </div>
                <AvatarBlock name={name} initials={initials} />
            </div>
        </section>
    );
}