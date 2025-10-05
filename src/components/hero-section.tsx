/**
 * HeroSection module.
 * Presentational banner showing identity (name, role), bio paragraphs, location,
 * contact links, curriculum download action, and avatar. Pure UI (no side effects).
 */
import { MapPin, FileDown } from "lucide-react";
import { Tooltip, TooltipTrigger, TooltipContent, TooltipProvider } from "@/components/ui/tooltip";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import ContactLinks from "./contact-links";
import TimeOffset from "./time-offset";
import { Contact } from "@/types";


/** External data shape expected by HeroSection. */
interface HeroSectionProps {
    data: {
        personal: {
            name: string;
            title: string; // role / jobTitle
            location: string;
            bio: string[];
            contacts: Contact[];
            cv: { fileName: string; downloadText: string };
        };
    };
    /** Hide avatar column (e.g. for minimal variants) */
    showAvatar?: boolean;
}

/** Derive up to three uppercase initials for the avatar fallback. */
function getInitials(fullName: string): string {
    if (!fullName || !fullName.trim()) return ""; // safe guard
    const parts = fullName.trim().split(/\s+/);
    if (parts.length === 1) return parts[0].slice(0, 2).toUpperCase();
    return parts.map(p => p.charAt(0)).join("").slice(0, 3).toUpperCase();
}

/** Props for Header (name + role). */
interface HeaderProps { name: string; title: string; }
/** Heading block (H1 name + H2 role). */
const Header = ({ name, title }: HeaderProps) => (
    <>
        <h1
            id="hero-name"
            className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-foreground tracking-tight leading-tight mb-2"
        >
            {name}
        </h1>
        <h2 className="text-xl md:text-2xl font-semibold text-brand mb-4">
            {title}
        </h2>
    </>
);

/** Props for Bio (paragraph list). */
interface BioProps { bio: string[]; }
/** Bio paragraphs list. */
const Bio = ({ bio }: BioProps) => (
    <div className="space-y-3 max-w-prose md:max-w-none">
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
    <div className="mt-6 flex flex-col items-start gap-3">
        <address className="flex items-center gap-2 text-muted-foreground text-sm not-italic">
            <MapPin className="w-4 h-4" aria-hidden="true" />
            <span>
                {location} <TimeOffset className="ml-1 text-xs" />
            </span>
        </address>
        <TooltipProvider>
            <div className="flex flex-row flex-wrap items-center gap-2 sm:gap-2.5">
                <Tooltip>
                    <TooltipTrigger asChild>
                        <Button
                            asChild
                            variant="brand"
                            size="icon"
                            className="rounded-full shadow-md hover:scale-[1.05] active:scale-100 transition-transform focus-visible:ring-brand/50"
                        >
                            <a
                                href={`/${cv.fileName}`}
                                download={cv.fileName}
                                aria-label={cv.downloadText || `Download ${cv.fileName}`}
                            >
                                <FileDown className="w-5 h-5" aria-hidden="true" />
                                <span className="sr-only">{cv.downloadText}</span>
                            </a>
                        </Button>
                    </TooltipTrigger>
                    <TooltipContent side="top">{cv.downloadText}</TooltipContent>
                </Tooltip>
                <ContactLinks contacts={contacts} />
            </div>
        </TooltipProvider>
    </div>
);

/** Props for AvatarBlock (name + derived initials). */
interface AvatarBlockProps { name: string; initials: string; }
/** Portrait avatar with fallback initials. */
const AvatarBlock = ({ name, initials }: AvatarBlockProps) => (
    <figure className="flex-shrink-0 self-center group">
        <Avatar
            /* Smaller base size for better mobile fit; scale up progressively; keep circular shape */
            className="w-40 h-40 sm:w-48 sm:h-48 md:w-64 md:h-64 xl:w-72 xl:h-72 ring-1 ring-border/20 dark:ring-border/40 transition-transform duration-300 ease-out group-hover:scale-[1.02] motion-reduce:transform-none"
            style={{ backgroundColor: "var(--avatar-background)" }}
        >
            <AvatarImage
                src="/image.png"
                alt={`${name} portrait`}
                className="w-full h-full object-cover"
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
        <figcaption className="sr-only">{name}</figcaption>
    </figure>
);

/** Main exported HeroSection container. */
export default function HeroSection({ data, showAvatar = true }: HeroSectionProps) {
    const { name, title, location, bio, contacts, cv } = data.personal;
    const initials = getInitials(name);

    return (
        <section
            id="hero"
            className="w-full"
            aria-labelledby="hero-name"
            aria-label={`${name} profile section`}
        >
            <div className="flex flex-col-reverse md:grid md:grid-cols-[minmax(0,1fr)_auto] items-center md:items-center gap-8 md:gap-10">
                <div className="w-full min-w-0 max-w-3xl px-1 sm:px-0">
                    <Header name={name} title={title} />
                    {bio.length > 0 && <Bio bio={bio} />}
                    <MetaActions location={location} contacts={contacts} cv={cv} />
                </div>
                {showAvatar && (
                    <div className="mb-6 md:mb-0 md:pl-2">
                        <AvatarBlock name={name} initials={initials} />
                    </div>
                )}
            </div>
        </section>
    );
}
