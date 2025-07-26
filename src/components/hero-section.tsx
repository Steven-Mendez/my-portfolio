import { MapPin, Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import ContactLinks from "./contact-links";

interface Contact {
    icon: string;
    href: string;
    label: string;
    external: boolean;
}

interface HeroSectionProps {
    data: {
        personal: {
            name: string;
            title: string;
            location: string;
            bio: string[];
            contacts: Contact[];
            cv: {
                fileName: string;
                downloadText: string;
            };
        };
    };
}

export default function HeroSection({ data }: HeroSectionProps) {
    const { name, title, location, bio, contacts, cv } = data.personal;
    const initials = name.split(' ').map((n: string) => n[0]).join('');

    return (
        <main className="w-full flex flex-col items-start py-6 sm:py-8 mb-6 sm:mb-8">
            {/* Main Hero Content */}
            <header className="w-full mb-4 sm:mb-6">
                <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-900 dark:text-gray-100 mb-1 tracking-tight leading-tight text-center md:text-left w-full">
                    {name}
                </h1>
                {/* Avatar for mobile only, below h1 */}
                <div className="flex md:hidden w-full justify-center my-3 sm:my-4">
                    <Avatar className="w-32 h-32 sm:w-40 sm:h-40 mx-auto bg-white dark:bg-white">
                        <AvatarImage
                            src="/image.png"
                            alt={`Portrait of ${name}`}
                            className="w-full h-full object-cover rounded-2xl"
                        />
                        <AvatarFallback className="text-2xl sm:text-3xl bg-white dark:bg-white text-gray-900">
                            {initials}
                        </AvatarFallback>
                    </Avatar>
                </div>
                {/* Main content */}
                <div className="w-full flex flex-col md:flex-row items-start gap-4 sm:gap-6">
                    {/* Left: Subtitle and description */}
                    <div className="flex-1 flex flex-col items-center md:items-start text-center md:text-left order-2 md:order-1">
                        <h2 className="text-lg sm:text-xl md:text-2xl font-semibold text-primary dark:text-primary mb-4 sm:mb-6 text-center md:text-left">
                            {title}
                        </h2>
                        {bio.map((paragraph: string, index: number) => (
                            <p key={index} className="text-gray-700 dark:text-gray-300 mb-3 sm:mb-4 leading-relaxed text-sm sm:text-base px-2 sm:px-0">
                                {paragraph}
                            </p>
                        ))}
                    </div>
                    {/* Right: Avatar for desktop */}
                    <div className="hidden md:flex flex-shrink-0 justify-center w-full md:w-auto mt-8 md:mt-0 order-1 md:order-2">
                        <Avatar className="w-56 h-56 md:w-72 md:h-72 mx-auto bg-white dark:bg-white">
                            <AvatarImage
                                src="/image.png"
                                alt={`Portrait of ${name}`}
                                className="w-full h-full object-cover rounded-2xl"
                            />
                            <AvatarFallback className="text-3xl bg-white dark:bg-white text-gray-900">
                                {initials}
                            </AvatarFallback>
                        </Avatar>
                    </div>
                </div>
            </header>

            {/* Contact Information Section */}
            <footer className="w-full">
                {/* Geolocation Section */}
                <address className="flex items-center justify-center md:justify-start gap-2 text-gray-500 dark:text-gray-400 text-xs sm:text-sm mb-4 sm:mb-6 not-italic">
                    <MapPin className="w-3 h-3 sm:w-4 sm:h-4" aria-hidden="true" />
                    <span>{location}</span>
                </address>

                {/* Contact Icons + CV Button Row */}
                <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-4">
                    {/* Contact Icons */}
                    <ContactLinks contacts={contacts} />

                    {/* CV Download Button - All Devices */}
                    <div className="flex justify-center md:justify-end">
                        <Button
                            asChild
                            className="bg-primary hover:bg-primary/90 text-primary-foreground px-6 py-2 text-sm font-medium shadow-lg hover:shadow-xl transition-all duration-200"
                        >
                            <a
                                href={`/${cv.fileName}`}
                                download={cv.fileName}
                                className="flex items-center gap-2"
                                aria-label={`Download ${cv.fileName}`}
                            >
                                <Download className="w-4 h-4" aria-hidden="true" />
                                {cv.downloadText}
                            </a>
                        </Button>
                    </div>
                </div>
            </footer>
        </main>
    );
} 