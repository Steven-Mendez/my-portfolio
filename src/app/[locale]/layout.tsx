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
            url: `${env.NEXT_PUBLIC_SITE_URL}/${locale}`,
            siteName: "Steven Mendez Portfolio",
            title: isSpanish ? "Steven Mendez - Desarrollador Backend & IA" : "Steven Mendez - Backend & AI Developer",
            description: isSpanish
                ? "Desarrollador apasionado especializado en sistemas backend e inteligencia artificial."
                : "Passionate developer specializing in backend systems and artificial intelligence.",
            images: [
                {
                    url: "/og-image.jpg",
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
            images: ["/og-image.jpg"],
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
            languages: {
                'en': '/en',
                'es': '/es',
            },
        },
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
    return (
        <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
        >
            {children}
        </ThemeProvider>
    );
} 