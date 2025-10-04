import type { Metadata } from "next";
import { ThemeProvider } from "@/components/theme-provider";
import { env } from "@/lib/env";
import "../globals.css";

// Generate static params for static export
export function generateStaticParams() {
    return [
        { locale: 'en' },
        { locale: 'es' }
    ];
}

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
    const { locale } = await params;
    const isSpanish = locale === 'es';
    const currentUrl = `${env.NEXT_PUBLIC_SITE_URL}/${locale}`;
    const ogImage = `${env.NEXT_PUBLIC_SITE_URL}/image.png`;

    return {
        title: isSpanish ? "Steven Mendez - Desarrollador Backend & IA" : "Steven Mendez - Backend & AI Developer",
        description: isSpanish
            ? "Desarrollador apasionado especializado en sistemas backend e inteligencia artificial. Creando soluciones eficientes y escalables."
            : "Passionate developer specializing in backend systems and artificial intelligence. Creating efficient, scalable solutions.",
        keywords: isSpanish
            ? ["desarrollador backend", "inteligencia artificial", "python", "node.js", "apis", "bases de datos", "desarrollo web"]
            : ["backend developer", "artificial intelligence", "python", "node.js", "apis", "databases", "web development"],
        authors: [{ name: "Steven Mendez" }],
        creator: "Steven Mendez",
        openGraph: {
            type: "website",
            locale: locale,
            url: currentUrl,
            siteName: "Steven Mendez Portfolio",
            title: isSpanish ? "Steven Mendez - Desarrollador Backend & IA" : "Steven Mendez - Backend & AI Developer",
            description: isSpanish
                ? "Desarrollador apasionado especializado en sistemas backend e inteligencia artificial."
                : "Passionate developer specializing in backend systems and artificial intelligence.",
            images: [
                {
                    url: ogImage,
                    width: 1200,
                    height: 630,
                    alt: "Steven Mendez Portfolio",
                },
            ],
        },
        twitter: {
            card: "summary_large_image",
            title: isSpanish ? "Steven Mendez - Desarrollador Backend & IA" : "Steven Mendez - Backend & AI Developer",
            description: isSpanish
                ? "Desarrollador apasionado especializado en sistemas backend e inteligencia artificial."
                : "Passionate developer specializing in backend systems and artificial intelligence.",
            images: [ogImage],
        },
        robots: {
            index: true,
            follow: true,
            googleBot: {
                index: true,
                follow: true,
                'max-video-preview': -1,
                'max-image-preview': 'large',
                'max-snippet': -1,
            },
        },
        alternates: {
            canonical: currentUrl,
            languages: {
                'en': '/en',
                'es': '/es',
            },
        },
    };
}

// Schema markup for the portfolio
function generateSchemaMarkup(locale: string) {
    const isSpanish = locale === 'es';

    return {
        "@context": "https://schema.org",
        "@type": "Person",
        "name": "Steven Mendez",
        "jobTitle": isSpanish ? "Desarrollador Backend & IA" : "Backend & AI Developer",
        "description": isSpanish
            ? "Desarrollador apasionado especializado en sistemas backend e inteligencia artificial."
            : "Passionate developer specializing in backend systems and artificial intelligence.",
        "url": `${env.NEXT_PUBLIC_SITE_URL}/${locale}`,
        "sameAs": [
            "https://github.com/Steven-Mendez",
            "https://www.linkedin.com/in/steven-mendez-dev/"
        ],
        "knowsAbout": isSpanish
            ? [
                "Desarrollo Backend",
                "Inteligencia Artificial",
                "Python",
                "Node.js",
                "APIs",
                "Bases de Datos",
                "Desarrollo Web"
            ]
            : [
                "Backend Development",
                "Artificial Intelligence",
                "Python",
                "Node.js",
                "APIs",
                "Databases",
                "Web Development"
            ],
        "worksFor": {
            "@type": "Organization",
            "name": "Freelance"
        },
        "hasOccupation": {
            "@type": "Occupation",
            "name": isSpanish ? "Desarrollador de Software" : "Software Developer",
            "occupationLocation": {
                "@type": "Place",
                "name": "Remote"
            }
        },
        "email": "stevenampaiz@gmail.com",
        "telephone": "+50581587176",
        "address": {
            "@type": "PostalAddress",
            "addressLocality": "Managua",
            "addressCountry": "Nicaragua"
        }
    };
}

export default async function LocaleLayout({
    children,
    params,
}: {
    children: React.ReactNode;
    params: Promise<{ locale: string }>;
}) {
    const { locale } = await params;
    const schemaMarkup = generateSchemaMarkup(locale);

    return (
        <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
        >
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify(schemaMarkup),
                }}
            />
            {children}
        </ThemeProvider>
    );
} 
