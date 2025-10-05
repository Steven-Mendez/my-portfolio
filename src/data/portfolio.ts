import type { Contact, Experience, Project } from "@/types";

type Locale = "en" | "es";

const DEFAULT_LOCALE: Locale = "en";
const SUPPORTED_LOCALES = ["en", "es"] as const satisfies readonly Locale[];

const isSupportedLocale = (value: string): value is Locale =>
    SUPPORTED_LOCALES.includes(value as Locale);

const resolveLocale = (value: string): Locale =>
    isSupportedLocale(value) ? value : DEFAULT_LOCALE;

type LocalizedValue<T> = {
    default: T;
    translations?: Partial<Record<Locale, T>>;
};

const resolveLocalizedValue = <T>(value: LocalizedValue<T>, locale: Locale): T =>
    value.translations?.[locale] ?? value.default;

const personalContent = {
    name: "Steven Mendez",
    location: "Managua, Nicaragua",
    title: {
        default: "Software Developer",
        translations: {
            es: "Desarrollador de Software"
        }
    },
    contacts: [
        {
            icon: "Mail",
            href: "mailto:stevenmendezdev@gmail.com",
            label: "Mail",
            external: false
        },
        {
            icon: "Phone",
            href: "tel:+50581587176",
            label: "Phone",
            external: false
        },
        {
            icon: "Github",
            href: "https://github.com/Steven-Mendez",
            label: "GitHub",
            external: true
        },
        {
            icon: "Linkedin",
            href: "https://www.linkedin.com/in/steven-mendez-dev/",
            label: "LinkedIn",
            external: true
        }
    ] satisfies Contact[],
    cvFileName: {
        default: "Steven_Mendez_Resume.pdf",
        translations: {
            es: "Steven_Mendez_CV.pdf"
        }
    }
};

export const UI_TEXTS = {
    en: {
        navigation: {
            title: "Navigation",
            home: "Home",
            projects: "Projects",
            experience: "Experience"
        },
        sections: {
            projects: "Projects",
            experience: "Experience"
        },
        projects: {
            loadMore: "Load More",
            showLess: "Show Less",
            emptyState: "I'm currently working on exciting new projects. Check back soon to see what I've been building!",
            techStack: "Tech Stack",
            liveDemo: "Live Demo",
            code: "Code",
            comingSoon: "Coming soon",
            aboutProject: "About this project"
        },
        experience: {
            loadMore: "Load More",
            techStack: "Tech Stack"
        },
        hero: {
            downloadCV: "Download CV",
            bio: [
                "Software Developer with 3 years of experience specializing in Backend Development and Artificial Intelligence. Proficient in C#, .NET, Python, and modern frontend technologies like React and TypeScript, with strong experience in building RESTful APIs and integrating AI platforms.",
                "Passionate about creating elegant solutions to complex problems—from optimizing system performance to building AI-powered platforms that serve clients worldwide."
            ],
            contacts: {
                email: "Email",
                phone: "Phone",
                github: "GitHub",
                linkedin: "LinkedIn"
            }
        },
        footer: {
            copyright: "© 2025 Steven Mendez",
            rights: "All rights reserved."
        },
        configuration: {
            title: "Preferences",
            light: "Light Mode",
            dark: "Dark Mode",
            language: "Español"
        }
    },
    es: {
        navigation: {
            title: "Navegación",
            home: "Inicio",
            projects: "Proyectos",
            experience: "Experiencia"
        },
        sections: {
            projects: "Proyectos",
            experience: "Experiencia"
        },
        projects: {
            loadMore: "Cargar Más",
            showLess: "Mostrar Menos",
            emptyState: "Actualmente estoy trabajando en proyectos emocionantes. ¡Vuelve pronto para ver lo que he estado construyendo!",
            techStack: "Tecnologías",
            liveDemo: "Demo en Vivo",
            code: "Código",
            comingSoon: "Próximamente",
            aboutProject: "Acerca de este proyecto"
        },
        experience: {
            loadMore: "Cargar más",
            techStack: "Tecnologías"
        },
        hero: {
            downloadCV: "Descargar CV",
            bio: [
                "Desarrollador de Software con 3 años de experiencia especializado en desarrollo backend e inteligencia artificial. Competente en C#, .NET, Python y tecnologías frontend modernas como React y TypeScript, con sólida experiencia en construcción de APIs RESTful e integración con plataformas de IA.",
                "Apasionado por crear soluciones elegantes a problemas complejos—desde optimizar el rendimiento de sistemas hasta construir plataformas potenciadas con IA que sirven a clientes en todo el mundo."
            ],
            contacts: {
                email: "Correo",
                phone: "Teléfono",
                github: "GitHub",
                linkedin: "LinkedIn"
            }
        },
        footer: {
            copyright: "© 2025 Steven Mendez",
            rights: "Todos los derechos reservados."
        },
        configuration: {
            title: "Preferencias",
            light: "Modo Claro",
            dark: "Modo Oscuro",
            language: "English"
        }
    }
} as const;

interface ExperienceEntry {
    company: string;
    location: string;
    techStack: Experience["techStack"];
    title: LocalizedValue<string>;
    period: LocalizedValue<string>;
    description: LocalizedValue<string>;
}

interface ExperienceListItem {
    title: string;
    company: string;
    period: string;
    description: string;
    technologies: string[];
}

const EXPERIENCE_ENTRIES: ExperienceEntry[] = [
    {
        company: "WERN",
        location: "Remote",
        techStack: [
            "Python",
            "Django",
            "React",
            "TypeScript",
            "Prompt Engineering",
            "RAG",
            "FAISS",
            "Embeddings",
            "OpenAI",
            "Claude",
            "Gemini",
            "DeepSeek",
            "React Flow",
            "WebSockets",
            "Telegram Bots",
            "VS Code Extensions"
        ],
        title: {
            default: "Fullstack Developer",
            translations: {
                es: "Desarrollador Fullstack"
            }
        },
        period: {
            default: "2025 – Present",
            translations: {
                es: "2025 – Presente"
            }
        },
        description: {
            default: "Fullstack developer for an international software consulting firm, delivering custom solutions for diverse clients across multiple industries worldwide.\n\nDeveloped AI-powered educational platforms with advanced conversational capabilities using Prompt Engineering, RAG (Retrieval-Augmented Generation), FAISS vector databases, and embeddings—significantly improving response accuracy and contextual understanding.\n\nDesigned and built a fully functional flowchart builder using React, TypeScript, and React Flow, empowering clients to create custom reasoning diagrams independently without developer intervention.\n\nExpanded platform reach by developing Telegram bots and VS Code extensions, creating multi-platform ecosystems. Built flexible AI integration layer supporting OpenAI, Claude, Gemini, and DeepSeek for optimal model selection.",
            translations: {
                es: "Desarrollador fullstack para una consultora internacional de software, entregando soluciones personalizadas para diversos clientes en múltiples industrias alrededor del mundo.\n\nDesarrollé plataformas educativas potenciadas con IA con capacidades conversacionales avanzadas usando Prompt Engineering, RAG (Retrieval-Augmented Generation), bases de datos vectoriales FAISS y embeddings—mejorando significativamente la precisión de respuestas y comprensión contextual.\n\nDiseñé y construí una herramienta completamente funcional de creación de diagramas de flujo usando React, TypeScript y React Flow, permitiendo a clientes crear diagramas de razonamiento personalizados de manera independiente sin intervención de desarrolladores.\n\nExpandí el alcance de plataformas desarrollando bots de Telegram y extensiones de VS Code, creando ecosistemas multiplataforma. Construí una capa flexible de integración de IA con soporte para OpenAI, Claude, Gemini y DeepSeek para selección óptima de modelos."
            }
        }
    },
    {
        company: "Freelance – Joyas Esther",
        location: "Remote",
        techStack: ["C#", ".NET", "Entity Framework", "SQL Server", "REST API"],
        title: {
            default: "Backend Developer",
            translations: {
                es: "Desarrollador Backend"
            }
        },
        period: {
            default: "2024 – 2025",
            translations: {
                es: "2024 – 2025"
            }
        },
        description: {
            default: "Built comprehensive C# .NET RESTful APIs for HR and Orders management systems, featuring full CRUD operations, robust authentication, and enterprise-level security measures.\n\nDelivered complete HR solution including Attendance tracking, automated Payroll processing, intelligent Scheduling, and Loans administration with complex business logic calculations. Developed Orders system with integrated logistics management and automated bank reconciliation, streamlining financial operations.",
            translations: {
                es: "Construí APIs RESTful completas en C# .NET para sistemas de gestión de RRHH y Pedidos, con operaciones CRUD completas, autenticación robusta y medidas de seguridad de nivel empresarial.\n\nEntregué solución completa de RRHH incluyendo seguimiento de asistencia, procesamiento automatizado de nómina, gestión inteligente de horarios y administración de préstamos con cálculos de lógica de negocio complejos. Desarrollé sistema de Pedidos con gestión logística integrada y conciliación bancaria automatizada, optimizando operaciones financieras."
            }
        }
    },
    {
        company: "Universidad Nacional de Ingeniería",
        location: "Nicaragua",
        techStack: [
            "C#",
            ".NET 6",
            "Clean Architecture",
            "GitLab CI/CD",
            "Entity Framework",
            "SQL Server",
            "T-SQL",
            "WebForms",
            "iTextSharp"
        ],
        title: {
            default: "Systems Analyst",
            translations: {
                es: "Analista de Sistemas"
            }
        },
        period: {
            default: "2023 – 2024",
            translations: {
                es: "2023 – 2024"
            }
        },
        description: {
            default: "Led development and maintenance of the university's Budget and Planning system, building scalable backend solutions with C# .NET and implementing automated CI/CD pipelines that streamlined software delivery.\n\nAchieved major performance improvements by modernizing the reporting infrastructure—reducing critical report generation times by 90% and optimizing database operations from minutes to under 10 seconds, dramatically enhancing user productivity.\n\nMentored 4 interns and established comprehensive coding standards that improved code quality and development practices across the IT department.",
            translations: {
                es: "Lideré el desarrollo y mantenimiento del sistema de Planificación y Presupuesto de la universidad, construyendo soluciones backend escalables con C# .NET e implementando pipelines CI/CD automatizados que agilizaron la entrega de software.\n\nLogré mejoras importantes de rendimiento modernizando la infraestructura de reportes—reduciendo los tiempos de generación de reportes críticos en 90% y optimizando operaciones de base de datos de minutos a menos de 10 segundos, mejorando dramáticamente la productividad de usuarios.\n\nFui mentor de 4 pasantes y establecí estándares completos de código que mejoraron la calidad del código y las prácticas de desarrollo en el área de TI."
            }
        }
    }
];

interface ProjectEntry {
    image: string;
    status: Project["status"];
    techStack: Project["techStack"];
    liveUrl?: string;
    codeUrl?: string;
    title: LocalizedValue<string>;
    description: LocalizedValue<string>;
}

const PROJECT_ENTRIES: ProjectEntry[] = [
    {
        image: "/portofolio-preview.png",
        status: "In Progress",
        techStack: ["Next.js", "React", "TypeScript", "Tailwind CSS", "shadcn/ui", "Netlify"],
        liveUrl: "https://steven-mendez.netlify.app",
        codeUrl: "https://github.com/Steven-Mendez/my-portfolio",
        title: {
            default: "My Portfolio",
            translations: {
                es: "Mi Portfolio"
            }
        },
        description: {
            default: "Modern portfolio built with Next.js 15, React 18, and TypeScript, demonstrating expertise in contemporary frontend development. Features server-side rendering, full internationalization (EN/ES), dark/light theme switching, responsive design across all devices, and WCAG accessibility standards. Leverages Tailwind CSS and shadcn/ui for a polished component library, deployed on Netlify with static generation for blazing-fast performance.",
            translations: {
                es: "Portfolio moderno construido con Next.js 15, React 18 y TypeScript, demostrando experiencia en desarrollo frontend contemporáneo. Incluye renderizado del lado del servidor, internacionalización completa (EN/ES), cambio de tema claro/oscuro, diseño responsive en todos los dispositivos y estándares de accesibilidad WCAG. Aprovecha Tailwind CSS y shadcn/ui para una biblioteca de componentes refinada, desplegado en Netlify con generación estática para un rendimiento ultra rápido."
            }
        }
    }
];

const CONTACT_ICON_KEY_MAP = {
    Mail: "email",
    Phone: "phone",
    Github: "github",
    Linkedin: "linkedin"
} as const;

type ContactIcon = keyof typeof CONTACT_ICON_KEY_MAP;

export function getPortfolioData(localeCandidate: string) {
    const locale = resolveLocale(localeCandidate);
    const texts = UI_TEXTS[locale];

    const mappedContacts = personalContent.contacts.map(contact => {
        const iconKey = contact.icon in CONTACT_ICON_KEY_MAP
            ? CONTACT_ICON_KEY_MAP[contact.icon as ContactIcon]
            : undefined;
        const localizedLabel = iconKey ? texts.hero.contacts[iconKey] : undefined;
        return {
            ...contact,
            label: localizedLabel ?? contact.label
        };
    });

    const mappedExperiences: ExperienceListItem[] = EXPERIENCE_ENTRIES.map(entry => ({
        title: resolveLocalizedValue(entry.title, locale),
        company: entry.company,
        period: resolveLocalizedValue(entry.period, locale),
        description: resolveLocalizedValue(entry.description, locale),
        technologies: entry.techStack
    }));

    const mappedProjects: Project[] = PROJECT_ENTRIES.map(project => ({
        title: resolveLocalizedValue(project.title, locale),
        description: resolveLocalizedValue(project.description, locale),
        image: project.image,
        status: project.status,
        techStack: project.techStack,
        liveUrl: project.liveUrl,
        codeUrl: project.codeUrl
    }));

    return {
        personal: {
            name: personalContent.name,
            title: resolveLocalizedValue(personalContent.title, locale),
            location: personalContent.location,
            bio: [...texts.hero.bio],
            contacts: mappedContacts,
            cv: {
                fileName: resolveLocalizedValue(personalContent.cvFileName, locale),
                downloadText: texts.hero.downloadCV
            }
        },
        sections: texts.sections,
        experience: {
            items: mappedExperiences,
            loadMore: texts.experience.loadMore,
            techStack: texts.experience.techStack
        },
        projects: {
            ...texts.projects,
            items: mappedProjects
        },
        footer: texts.footer
    };
}

export type { Locale };
