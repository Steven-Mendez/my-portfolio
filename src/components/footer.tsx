import { Separator } from "@/components/ui/separator";
import FooterLinks from "./footer-links";

export default function Footer() {
    return (
        <footer className="w-full bg-white dark:bg-gray-900 pt-8 transition-colors">
            <Separator className="mb-6" />
            <div className="flex flex-col items-center space-y-4">
                <FooterLinks />
                <div className="text-center text-sm text-gray-500 dark:text-gray-400">
                    <p>&copy; 2025 Steven Mendez. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
} 