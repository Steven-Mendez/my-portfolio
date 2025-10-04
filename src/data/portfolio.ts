import { Experience, Project, Education } from '@/types'

// Datos personales y de contacto
export const personalData = {
    name: "Steven Mendez",
    title: "Software Developer",
    title_es: "Desarrollador de Software",
    location: "Managua, Nicaragua",
    bio: [
        "Soy un desarrollador de software con más de 2 años de experiencia en desarrollo backend e inteligencia artificial. Me especializo en C#, .NET y Python, con amplia experiencia en APIs RESTful e integración con plataformas de IA.",
        "Me apasiona crear soluciones escalables y eficientes, automatizando procesos críticos y construyendo sistemas robustos que resuelven problemas reales del mundo."
    ],
    contacts: [
        {
            icon: 'Mail',
            href: 'mailto:stevenmendezdev@gmail.com',
            label: 'Mail',
            external: false
        },
        {
            icon: 'Phone',
            href: 'tel:+50581587176',
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
        // Provide both localized file names; mapping function will expose the right one as cv.fileName
        fileNameEN: "Steven_Mendez_Resume.pdf",
        fileNameES: "Steven_Mendez_CV.pdf",
        downloadText: "Download CV"
    }
};

// Textos de UI en inglés
export const uiTextsEN = {
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
        title: "Configuration",
        light: "Light Mode",
        dark: "Dark Mode",
        language: "Español"
    }
};

// Textos de UI en español
export const uiTextsES = {
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
        title: "Configuración",
        light: "Modo Claro",
        dark: "Modo Oscuro",
        language: "English"
    }
};

export const experiences: Experience[] = [
    {
        title: "Fullstack Developer",
        title_en: "Fullstack Developer",
        title_es: "Desarrollador Fullstack",
        company: "WERN",
        duration: "2025 – Present",
        duration_en: "2025 – Present",
        duration_es: "2025 – Presente",
        location: "Remote",
        description: "Fullstack developer for an international software consulting firm, delivering custom solutions for diverse clients across multiple industries worldwide.\n\nDeveloped AI-powered educational platforms with advanced conversational capabilities using Prompt Engineering, RAG (Retrieval-Augmented Generation), FAISS vector databases, and embeddings—significantly improving response accuracy and contextual understanding.\n\nDesigned and built a fully functional flowchart builder using React, TypeScript, and React Flow, empowering clients to create custom reasoning diagrams independently without developer intervention.\n\nExpanded platform reach by developing Telegram bots and VS Code extensions, creating multi-platform ecosystems. Built flexible AI integration layer supporting OpenAI, Claude, Gemini, and DeepSeek for optimal model selection.",
        description_en: "Fullstack developer for an international software consulting firm, delivering custom solutions for diverse clients across multiple industries worldwide.\n\nDeveloped AI-powered educational platforms with advanced conversational capabilities using Prompt Engineering, RAG (Retrieval-Augmented Generation), FAISS vector databases, and embeddings—significantly improving response accuracy and contextual understanding.\n\nDesigned and built a fully functional flowchart builder using React, TypeScript, and React Flow, empowering clients to create custom reasoning diagrams independently without developer intervention.\n\nExpanded platform reach by developing Telegram bots and VS Code extensions, creating multi-platform ecosystems. Built flexible AI integration layer supporting OpenAI, Claude, Gemini, and DeepSeek for optimal model selection.",
        description_es: "Desarrollador fullstack para una consultora internacional de software, entregando soluciones personalizadas para diversos clientes en múltiples industrias alrededor del mundo.\n\nDesarrollé plataformas educativas potenciadas con IA con capacidades conversacionales avanzadas usando Prompt Engineering, RAG (Retrieval-Augmented Generation), bases de datos vectoriales FAISS y embeddings—mejorando significativamente la precisión de respuestas y comprensión contextual.\n\nDiseñé y construí una herramienta completamente funcional de creación de diagramas de flujo usando React, TypeScript y React Flow, permitiendo a clientes crear diagramas de razonamiento personalizados de manera independiente sin intervención de desarrolladores.\n\nExpandí el alcance de plataformas desarrollando bots de Telegram y extensiones de VS Code, creando ecosistemas multiplataforma. Construí una capa flexible de integración de IA con soporte para OpenAI, Claude, Gemini y DeepSeek para selección óptima de modelos.",
        techStack: ["Python", "Django", "React", "TypeScript", "Prompt Engineering", "RAG", "FAISS", "Embeddings", "OpenAI", "Claude", "Gemini", "DeepSeek", "React Flow", "WebSockets", "Telegram Bots", "VS Code Extensions"]
    },
    {
        title: "Backend Developer",
        title_en: "Backend Developer",
        title_es: "Desarrollador Backend",
        company: "Freelance – Joyas Esther",
        duration: "2024 – 2025",
        duration_en: "2024 – 2025",
        duration_es: "2024 – 2025",
        location: "Remote",
        description: "Built comprehensive C# .NET RESTful APIs for HR and Orders management systems, featuring full CRUD operations, robust authentication, and enterprise-level security measures.\n\nDelivered complete HR solution including Attendance tracking, automated Payroll processing, intelligent Scheduling, and Loans administration with complex business logic calculations. Developed Orders system with integrated logistics management and automated bank reconciliation, streamlining financial operations.",
        description_en: "Built comprehensive C# .NET RESTful APIs for HR and Orders management systems, featuring full CRUD operations, robust authentication, and enterprise-level security measures.\n\nDelivered complete HR solution including Attendance tracking, automated Payroll processing, intelligent Scheduling, and Loans administration with complex business logic calculations. Developed Orders system with integrated logistics management and automated bank reconciliation, streamlining financial operations.",
        description_es: "Construí APIs RESTful completas en C# .NET para sistemas de gestión de RRHH y Pedidos, con operaciones CRUD completas, autenticación robusta y medidas de seguridad de nivel empresarial.\n\nEntregué solución completa de RRHH incluyendo seguimiento de asistencia, procesamiento automatizado de nómina, gestión inteligente de horarios y administración de préstamos con cálculos de lógica de negocio complejos. Desarrollé sistema de Pedidos con gestión logística integrada y conciliación bancaria automatizada, optimizando operaciones financieras.",
        techStack: ["C#", ".NET", "Entity Framework", "SQL Server", "REST API"]
    },
    {
        title: "Systems Analyst",
        title_en: "Systems Analyst",
        title_es: "Analista de Sistemas",
        company: "Universidad Nacional de Ingeniería",
        duration: "2023 – 2024",
        duration_en: "2023 – 2024",
        duration_es: "2023 – 2024",
        location: "Nicaragua",
        description: "Led development and maintenance of the university's Budget and Planning system, building scalable backend solutions with C# .NET and implementing automated CI/CD pipelines that streamlined software delivery.\n\nAchieved major performance improvements by modernizing the reporting infrastructure—reducing critical report generation times by 90% and optimizing database operations from minutes to under 10 seconds, dramatically enhancing user productivity.\n\nMentored 4 interns and established comprehensive coding standards that improved code quality and development practices across the IT department.",
        description_en: "Led development and maintenance of the university's Budget and Planning system, building scalable backend solutions with C# .NET and implementing automated CI/CD pipelines that streamlined software delivery.\n\nAchieved major performance improvements by modernizing the reporting infrastructure—reducing critical report generation times by 90% and optimizing database operations from minutes to under 10 seconds, dramatically enhancing user productivity.\n\nMentored 4 interns and established comprehensive coding standards that improved code quality and development practices across the IT department.",
        description_es: "Lideré el desarrollo y mantenimiento del sistema de Planificación y Presupuesto de la universidad, construyendo soluciones backend escalables con C# .NET e implementando pipelines CI/CD automatizados que agilizaron la entrega de software.\n\nLogré mejoras importantes de rendimiento modernizando la infraestructura de reportes—reduciendo los tiempos de generación de reportes críticos en 90% y optimizando operaciones de base de datos de minutos a menos de 10 segundos, mejorando dramáticamente la productividad de usuarios.\n\nFui mentor de 4 pasantes y establecí estándares completos de código que mejoraron la calidad del código y las prácticas de desarrollo en el área de TI.",
        techStack: ["C#", ".NET 6", "Clean Architecture", "GitLab CI/CD", "Entity Framework", "SQL Server", "T-SQL", "WebForms", "iTextSharp"]
    }
]

export const projects: Project[] = [
    {
        title: "Personal Portfolio Website",
        title_en: "My Portfolio",
        title_es: "Mi Portfolio",
        description: "Modern, responsive portfolio showcasing projects and experience. Features bilingual support (EN/ES), theme toggle, and clean accessible UI. Deployed on Netlify.",
        description_en: "Modern portfolio built with Next.js 15, React 18, and TypeScript, demonstrating expertise in contemporary frontend development. Features server-side rendering, full internationalization (EN/ES), dark/light theme switching, responsive design across all devices, and WCAG accessibility standards. Leverages Tailwind CSS and shadcn/ui for a polished component library, deployed on Netlify with static generation for blazing-fast performance.",
        description_es: "Portfolio moderno construido con Next.js 15, React 18 y TypeScript, demostrando experiencia en desarrollo frontend contemporáneo. Incluye renderizado del lado del servidor, internacionalización completa (EN/ES), cambio de tema claro/oscuro, diseño responsive en todos los dispositivos y estándares de accesibilidad WCAG. Aprovecha Tailwind CSS y shadcn/ui para una biblioteca de componentes refinada, desplegado en Netlify con generación estática para un rendimiento ultra rápido.",
        image: "/portofolio-preview.png",
        status: "In Progress",
        techStack: ["Next.js", "React", "TypeScript", "Tailwind CSS", "shadcn/ui", "Netlify"],
        codeUrl: "https://github.com/Steven-Mendez/my-portfolio",
        liveUrl: "https://steven-mendez.netlify.app"
    }
]

export const education: Education = {
    degree: "Bachelor of Science in Computer Engineering",
    institution: "Universidad Nacional de Ingeniería",
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
        period: locale === 'es' ? (exp.duration_es || exp.duration) : (exp.duration_en || exp.duration),
        description: locale === 'es' ? (exp.description_es || exp.description) : (exp.description_en || exp.description),
        technologies: exp.techStack,
    }));

    // Mapear proyectos preservando la forma de Project (localizando title y description)
    const mappedProjects: Project[] = projects.map(project => ({
        ...project,
        title: locale === 'es' ? (project.title_es || project.title) : (project.title_en || project.title),
        description: locale === 'es' ? (project.description_es || project.description) : (project.description_en || project.description)
    }));

    const experienceContent = {
        items: mappedExperiences,
        loadMore: uiTexts.experience.loadMore,
        techStack: uiTexts.experience.techStack,
    };

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
        // Expose unified shape expected by components (fileName + downloadText)
        fileName: locale === 'es' ? personalData.cv.fileNameES : personalData.cv.fileNameEN,
        // Keep original download text localized
        downloadText: uiTexts.hero.downloadCV
    };

    return {
        personal: {
            ...personalData,
            title: locale === 'es' ? (personalData.title_es || personalData.title) : personalData.title,
            bio: uiTexts.hero.bio,
            contacts: mappedContacts,
            cv: mappedCV
        },
        sections: uiTexts.sections,
        experience: experienceContent,
        projects: { // mantenemos textos + lista tipada
            ...uiTexts.projects,
            items: mappedProjects
        },
        education,
        footer: uiTexts.footer
    };
}
