import { Metadata } from "next";

export const infoMetaData: Metadata = {
    metadataBase: new URL("https://stevenmendez.dev"),
    title: {
        default: "Steven Mendez - Backend Developer Portfolio",
        template: "%s | Steven Mendez - Backend Developer",
    },
    description:
        "Steven Mendez is a Full Stack Developer specializing in .NET backend development with +2 years of experience in building scalable and efficient server-side applications.",
    keywords: [
        "Backend Developer",
        ".NET",
        "C#",
        "ASP.NET Core",
        "Full Stack",
        "Web Development",
        "API Development",
        "Database Management",
        "Cloud Computing",
        "Steven Mendez",
    ],
    authors: [{ name: "Steven Mendez", url: "https://stevenmendez.dev" }],
    creator: "Steven Mendez",
    publisher: "Steven Mendez",
    formatDetection: {
        email: false,
        address: false,
        telephone: false,
    },
    openGraph: {
        type: "website",
        locale: "en_US",
        url: "https://stevenmendez.dev",
        siteName: "Steven Mendez - Backend Developer Portfolio",
        title: "Steven Mendez - Expert Backend Developer",
        description:
            "Discover the portfolio of Steven Mendez, a skilled Full Stack Developer specializing in .NET backend development with +2 years of experience.",
        images: [
            {
                url: "https://stevenmendez.dev/og-image.jpg",
                width: 1200,
                height: 630,
                alt: "Steven Mendez - Backend Developer Portfolio",
            },
        ],
    },
    twitter: {
        card: "summary_large_image",
        title: "Steven Mendez - Expert Backend Developer",
        description:
            "Discover the portfolio of Steven Mendez, a skilled Full Stack Developer specializing in .NET backend development.",
        images: ["https://stevenmendez.dev/og-image.jpg"],
        creator: "@StevenMendez",
        site: "@StevenMendez",
    },
    verification: {
        google: "google-site-verification-code",
        yandex: "yandex-verification-code",
        me: ["mailto:stevenampaiz@gmail.com", "https://github.com/Steven-Mendez"],
    },
    alternates: {
        canonical: "https://stevenmendez.dev",
        languages: {
            "en-US": "https://stevenmendez.dev",
            "es-ES": "https://stevenmendez.dev",
        },
    },
    robots: {
        index: true,
        follow: true,
        nocache: true,
        googleBot: {
            index: true,
            follow: true,
            noimageindex: false,
            "max-video-preview": -1,
            "max-image-preview": "large",
            "max-snippet": -1,
        },
    },
    category: "Technology",
};