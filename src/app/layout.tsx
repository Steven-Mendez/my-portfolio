import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { env } from "@/lib/env";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "Steven Mendez - Backend & AI Developer",
    description: "Passionate developer specializing in backend systems and artificial intelligence.",
    keywords: ["backend developer", "AI developer", "Python", "Node.js", "full-stack", "software engineer"],
    authors: [{ name: "Steven Mendez" }],
    creator: "Steven Mendez",
    publisher: "Steven Mendez",
    robots: {
        index: true,
        follow: true,
    },
    alternates: {
        canonical: env.NEXT_PUBLIC_SITE_URL,
    },
    openGraph: {
        type: "website",
        url: env.NEXT_PUBLIC_SITE_URL,
        siteName: "Steven Mendez Portfolio",
        title: "Steven Mendez - Backend & AI Developer",
        description: "Passionate developer specializing in backend systems and artificial intelligence.",
        images: [
            {
                url: `${env.NEXT_PUBLIC_SITE_URL}/image.png`,
                width: 1024,
                height: 1024,
                alt: "Steven Mendez",
            },
        ],
    },
    twitter: {
        card: "summary_large_image",
        title: "Steven Mendez - Backend & AI Developer",
        description: "Passionate developer specializing in backend systems and artificial intelligence.",
        images: [`${env.NEXT_PUBLIC_SITE_URL}/image.png`],
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
        "https://github.com/stevenmendez",
        "https://linkedin.com/in/stevenmendez"
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
                {/* Preconnect to external domains for faster loading */}
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
                <link rel="preconnect" href="https://images.pexels.com" />

                {/* DNS prefetch for other domains */}
                <link rel="dns-prefetch" href="https://github.com" />
                <link rel="dns-prefetch" href="https://linkedin.com" />

                {/* Preload critical resources */}
                <link rel="preload" href="/image.png" as="image" type="image/png" />

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
