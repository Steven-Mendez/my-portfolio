import { Separator } from "@/components/ui/separator";
import FooterLinks from "./footer-links";
interface FooterProps {
    locale: string;
    footer: { copyright: string; rights?: string };
}

export default function Footer({ locale, footer }: FooterProps) {
    const rights = footer.rights || (locale === 'es' ? 'Todos los derechos reservados.' : 'All rights reserved.');
    const needsSeparator = !/[.!?]\s*$/.test(footer.copyright.trim());
    const separator = needsSeparator ? '. ' : ' ';
    return (
        <footer className="w-full bg-background transition-colors">
            <Separator className="my-2" />
            <div className="flex flex-col items-center space-y-3 py-2">
                <FooterLinks />
                <div className="text-center text-sm text-muted-foreground">
                    <p>{footer.copyright}{separator}{rights}</p>
                </div>
            </div>
        </footer>
    );
} 