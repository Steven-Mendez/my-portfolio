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
    alternates: {
        canonical: env.NEXT_PUBLIC_SITE_URL,
    },
};

// Schema markup for the website
const schemaMarkup = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Steven Mendez",
    "jobTitle": "Backend & AI Developer",
    "description": "Passionate developer specializing in backend systems and artificial intelligence.",
    "url": env.NEXT_PUBLIC_SITE_URL,
    "sameAs": [
        "https://github.com/Steven-Mendez",
        "https://www.linkedin.com/in/steven-mendez-dev/"
    ],
    "knowsAbout": [
        "Backend Development",
        "Artificial Intelligence",
        "Python",
        "Node.js",
        "APIs",
        "Databases",
        "Web Development"
    ],
    "email": "stevenampaiz@gmail.com",
    "telephone": "+50586308040",
    "address": {
        "@type": "PostalAddress",
        "addressLocality": "Managua",
        "addressCountry": "Nicaragua"
    }
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en" className="scroll-smooth" suppressHydrationWarning>
            <head>
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{
                        __html: JSON.stringify(schemaMarkup),
                    }}
                />
            </head>
            <body className={inter.className}>
                {children}
            </body>
        </html>
    );
}
