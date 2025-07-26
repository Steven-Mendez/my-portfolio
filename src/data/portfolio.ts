// src/data/portfolio.ts
import { Experience, Project, Education } from '@/types'

// Datos personales y de contacto
export const personalData = {
    name: "Steven Mendez",
    title: "Backend & AI Developer",
    location: "Managua, Nicaragua",
    bio: [
        "🚀 Backend & AI Developer apasionado por crear soluciones que marcan la diferencia. Especializado en sistemas escalables y tecnologías de IA que transforman ideas en realidades.",
        "💡 Experto en integración de LLMs y arquitecturas cloud modernas. Construyo sistemas que no solo funcionan, sino que superan expectativas. Comparto conocimiento con otros desarrolladores y me mantengo actualizado con las últimas tendencias tecnológicas."
    ],
    contacts: [
        {
            icon: 'Mail',
            href: 'mailto:stevenampaiz@gmail.com',
            label: 'Email',
            external: true
        },
        {
            icon: 'Phone',
            href: 'tel:+50586308040',
            label: 'Phone',
            external: false
        },
        {
            icon: 'Github',
            href: 'https://github.com/Steven-Mendez',
            label: 'GitHub',
            external: true
        },
        {
            icon: 'Linkedin',
            href: 'https://www.linkedin.com/in/steven-mendez-dev/',
            label: 'LinkedIn',
            external: true
        }
    ],
    cv: {
        fileName: "Steven_Mendez_CV.pdf",
        downloadText: "Download CV"
    }
};

// Textos de UI en inglés
export const uiTextsEN = {
    sections: {
        projects: "Projects",
        experience: "Experience"
    },
    projects: {
        loadMore: "Load More",
        showLess: "Show Less",
        emptyState: "Currently working on new projects. Check back soon for updates on my latest work.",
        techStack: "Tech Stack",
        liveDemo: "Live Demo",
        code: "Code",
        comingSoon: "Projects coming soon"
    },
    experience: {
        techStack: "Tech Stack"
    },
    hero: {
        downloadCV: "Download CV",
        bio: [
            "🚀 Backend & AI Developer passionate about creating solutions that make a real difference. Specialized in scalable systems and AI technologies that transform ideas into reality.",
            "💡 Expert in LLM integration and modern cloud architectures. I build systems that don't just work—they exceed expectations. I share knowledge with other developers and stay current with the latest tech trends."
        ],
        contacts: {
            email: "Email",
            phone: "Phone",
            github: "GitHub",
            linkedin: "LinkedIn"
        }
    },
    footer: {
        copyright: "© 2025 Steven Mendez"
    }
};

// Textos de UI en español
export const uiTextsES = {
    sections: {
        projects: "Proyectos",
        experience: "Experiencia"
    },
    projects: {
        loadMore: "Cargar Más",
        showLess: "Mostrar Menos",
        emptyState: "Trabajando en nuevos proyectos. Pronto tendrás noticias de mis trabajos más recientes.",
        techStack: "Tecnologías",
        liveDemo: "Demo en Vivo",
        code: "Código",
        comingSoon: "Próximamente"
    },
    experience: {
        techStack: "Tecnologías"
    },
    hero: {
        downloadCV: "Descargar CV",
        bio: [
            "🚀 Backend & AI Developer apasionado por crear soluciones que marcan la diferencia. Especializado en sistemas escalables y tecnologías de IA que transforman ideas en realidades.",
            "💡 Experto en integración de LLMs y arquitecturas cloud modernas. Construyo sistemas que no solo funcionan, sino que superan expectativas. Comparto conocimiento con otros desarrolladores y me mantengo actualizado con las últimas tendencias tecnológicas."
        ],
        contacts: {
            email: "Correo",
            phone: "Teléfono",
            github: "GitHub",
            linkedin: "LinkedIn"
        }
    },
    footer: {
        copyright: "© 2025 Steven Mendez"
    }
};

export const experiences: Experience[] = [
    {
        title: "Python Developer – LLM Pipelines",
        title_en: "Python Developer – LLM Pipelines",
        title_es: "Desarrollador Python – LLM Pipelines",
        company: "MILRD",
        duration: "2025 – Present",
        location: "Remote",
        description: "Implemented Django APIs for Aristide, MILRD's AI tutor copilot, integrating REST endpoints, WebSockets, streaming, and SDKs for OpenAI, Anthropic, Claude, Gemini, and DeepSeek. Built a no‑code reasoning flowchart builder in React/TypeScript (React Flow) for tutors to design and audit AI reasoning flows. Created Telegram bots for USMLE, MCAT, and System Design interviews; configured CI/CD with GitHub Actions; managed subscription billing via Stripe and Webhooks.",
        description_en: "Developed the AI Agent Aristide, an intelligent educational mentor that combines multiple AI models. Built Django APIs with REST, WebSockets and real-time streaming. Integrated 5+ AI providers (OpenAI, Anthropic, Claude, Gemini, DeepSeek) into a unified system. Created a no-code tool with React Flow to design AI reasoning patterns. Developed Telegram bots for medical exams (USMLE, MCAT) and system design interviews. Set up CI/CD and subscription management with Stripe.",
        description_es: "Desarrollé el AI Agent Aristide, un mentor educativo inteligente que combina múltiples modelos de IA. Implementé APIs Django con REST, WebSockets y streaming en tiempo real. Integré 5+ proveedores de IA (OpenAI, Anthropic, Claude, Gemini, DeepSeek) en un sistema unificado. Construí una herramienta no-code con React Flow para diseñar patrones de razonamiento de IA. Desarrollé bots de Telegram para exámenes médicos (USMLE, MCAT) y entrevistas de system design. Configuré CI/CD y gestión de suscripciones con Stripe.",
        techStack: ["Python", "Django", "REST API", "WebSockets", "OpenAI", "Anthropic", "Claude", "Gemini", "DeepSeek", "React", "TypeScript", "React Flow", "Telegram Bots", "GitHub Actions", "Stripe", "Webhooks"]
    },
    {
        title: "Backend Developer",
        title_en: "Backend Developer",
        title_es: "Desarrollador Backend",
        company: "Freelance – Joyas Esther",
        duration: "2024 – 2025",
        location: "Remote",
        description: "Developed RESTful APIs in C#/.NET (Entity Framework, SQL Server) for HR and order systems, implementing CRUD operations, validation, security, and authentication. Built HR modules (attendance, scheduling, payroll, loans) with complex business rules; implemented order processing, logistics (shipping, addresses, costs), and payment reconciliation.",
        description_en: "Built enterprise HR and order management systems from scratch. Created solid RESTful APIs in C#/.NET with Entity Framework and SQL Server, implementing robust validation, security, and authentication. Built HR modules (attendance tracking, scheduling, payroll, loan management) with complex business logic and automated workflows. Made a complete order processing system with shipping management, address tracking, and payment reconciliation.",
        description_es: "Construí sistemas empresariales de RRHH y gestión de pedidos desde cero. Creé APIs RESTful sólidas en C#/.NET con Entity Framework y SQL Server, implementando validación robusta, seguridad y autenticación. Hice módulos de RRHH (seguimiento de asistencia, programación, nómina, gestión de préstamos) con lógica de negocio compleja y flujos de trabajo automatizados. Creé un sistema completo de procesamiento de pedidos con gestión de envíos, seguimiento de direcciones y conciliación de pagos.",
        techStack: ["C#", ".NET", "Entity Framework", "SQL Server", "REST API"]
    },
    {
        title: "Systems Analyst",
        title_en: "Systems Analyst",
        title_es: "Analista de Sistemas",
        company: "Universidad Nacional de Ingeniería – Nic.Ni/DTI",
        duration: "2023 – 2024",
        location: "Nicaragua",
        description: "Developed RESTful APIs for warehouse and helpdesk systems in C#/.NET 6 using Clean Architecture and GitLab CI/CD, integrating inventory and ticket modules. Maintained and enhanced planning & budgeting system (C#/.NET 4.7 & WebForms), ensuring stability and adaptability to regulatory changes. Migrated 17 Crystal Reports to iTextSharp, reducing report generation time from ~10 min to < 30 s. Optimized complex T‑SQL procedures, cutting execution times from ~10 min to < 10 s and improving query performance. Mentored four interns in C#, SQL, and Entity Framework, establishing best practices and accelerating their productivity.",
        description_en: "Developed new features and fixed bugs in the planning, budgeting and institutional monitoring system used by senior administrative staff at the university. Built RESTful APIs for warehouse and helpdesk systems using C#/.NET 6 and Clean Architecture. Replaced 17 Crystal Reports with iTextSharp, reducing report generation time from 10 minutes to under 30 seconds (95% improvement). Optimized T-SQL procedures, reducing execution times from 10 minutes to under 10 seconds (98% improvement). Mentored 4 interns in C#, SQL and Entity Framework.",
        description_es: "Desarrollé nuevas features y corregí bugs en el sistema de planificación, presupuesto y seguimiento institucional usado por altos cargos administrativos de la universidad. Construí APIs RESTful para sistemas de almacén y mesa de ayuda usando C#/.NET 6 y Clean Architecture. Reemplacé 17 Crystal Reports con iTextSharp, reduciendo el tiempo de generación de reportes de 10 minutos a menos de 30 segundos (95% de mejora). Optimicé procedimientos T-SQL, reduciendo tiempos de ejecución de 10 minutos a menos de 10 segundos (98% de mejora). Mentoricé a 4 pasantes en C#, SQL y Entity Framework.",
        techStack: ["C#", ".NET 6", "Clean Architecture", "GitLab CI", "Entity Framework", "SQL Server", "WebForms", "Crystal Reports", "iTextSharp", "T-SQL"]
    }
]

export const featuredProjects: Project[] = []

export const pastProjects: Project[] = []

export const education: Education = {
    degree: "Bachelor of Science in Computer Engineering",
    institution: "National University of Engineering (Universidad Nacional de Ingeniería)",
    duration: "2019-2023",
    location: "Managua, Nicaragua"
}

// Función para obtener todos los datos según el idioma
export function getPortfolioData(locale: string) {
    const uiTexts = locale === 'es' ? uiTextsES : uiTextsEN;

    // Mapear experiencias para compatibilidad con componentes
    const mappedExperiences = experiences.map(exp => ({
        title: locale === 'es' ? (exp.title_es || exp.title) : (exp.title_en || exp.title),
        company: exp.company,
        period: exp.duration,
        description: locale === 'es' ? (exp.description_es || exp.description) : (exp.description_en || exp.description),
        technologies: exp.techStack,
    }));

    // Mapear proyectos para compatibilidad con componentes
    const mappedFeaturedProjects = featuredProjects.map(project => ({
        title: project.title,
        description: locale === 'es' ? (project.description_es || project.description) : (project.description_en || project.description),
        technologies: project.techStack,
        demoUrl: project.liveUrl,
        githubUrl: project.codeUrl,
        image: project.image,
    }));

    const mappedPastProjects = pastProjects.map(project => ({
        title: project.title,
        description: locale === 'es' ? (project.description_es || project.description) : (project.description_en || project.description),
        technologies: project.techStack,
        demoUrl: project.liveUrl,
        githubUrl: project.codeUrl,
        image: project.image,
    }));

    // Mapear contactos para usar labels internacionalizados
    const contactLabelMap: Record<string, keyof typeof uiTexts.hero.contacts> = {
        Mail: 'email',
        Phone: 'phone',
        Github: 'github',
        Linkedin: 'linkedin',
    };
    const mappedContacts = personalData.contacts.map(contact => ({
        ...contact,
        label: uiTexts.hero.contacts[contactLabelMap[contact.icon]] || contact.label
    }));

    // CV download text internacionalizado
    const mappedCV = {
        ...personalData.cv,
        downloadText: uiTexts.hero.downloadCV
    };

    return {
        personal: {
            ...personalData,
            bio: uiTexts.hero.bio,
            contacts: mappedContacts,
            cv: mappedCV
        },
        sections: uiTexts.sections,
        experience: mappedExperiences,
        projects: {
            ...uiTexts.projects,
            ...uiTexts.experience,
            featured: mappedFeaturedProjects,
            past: mappedPastProjects
        },
        education
    };
} 