import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { env } from "@/lib/env";
import "./globals.css";

const inter = Inter({
    subsets: ["latin"],
    display: 'swap',
    preload: true,
});

export const metadata: Metadata = {
    metadataBase: new URL(env.NEXT_PUBLIC_SITE_URL),
    title: "Steven Mendez - Backend & AI Developer",
    description: "Passionate developer specializing in backend systems and artificial intelligence.",
    openGraph: {
        title: "Steven Mendez - Backend & AI Developer",
        description: "Passionate developer specializing in backend systems and artificial intelligence.",
        type: "website",
        url: env.NEXT_PUBLIC_SITE_URL,
    },
    twitter: {
        card: "summary_large_image",
        title: "Steven Mendez - Backend & AI Developer",
        description: "Passionate developer specializing in backend systems and artificial intelligence.",
    },
    robots: {
        index: true,
        follow: true,
    },
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en" className="scroll-smooth" suppressHydrationWarning>
            <body className={inter.className}>
                {children}
            </body>
        </html>
    );
}
