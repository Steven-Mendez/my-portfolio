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
        techStack: "Tech Stack"
    },
    hero: {
        downloadCV: "Download CV",
        bio: [
            "I'm a Software Developer with over 2 years of experience specializing in Backend Development and Artificial Intelligence. I'm skilled in C#, .NET, and Python, with expertise in building RESTful APIs and integrating AI platforms.",
            "I'm passionate about creating scalable and efficient solutions, automating critical processes, and building robust systems that solve real-world problems."
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
        techStack: "Tecnologías"
    },
    hero: {
        downloadCV: "Descargar CV",
        bio: [
            "Soy un desarrollador de software con más de 2 años de experiencia especializado en desarrollo backend e inteligencia artificial. Me destaco en C#, .NET y Python, con amplia experiencia en APIs RESTful e integración con plataformas de IA.",
            "Me apasiona crear soluciones escalables y eficientes, automatizando procesos críticos y construyendo sistemas robustos que resuelven problemas reales del mundo."
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
        title: "Python Developer",
        title_en: "Python Developer",
        title_es: "Desarrollador Python",
        company: "MILRD",
        duration: "2025 – Present",
        duration_en: "2025 – Present",
        duration_es: "2025 – Presente",
        location: "Remote",
        description: "Developed Django APIs for Aristide, the first AI Copilot for VTP, integrating multiple AI platforms including OpenAI, Anthropic, Claude, Gemini, and DeepSeek.\n\nDesigned and implemented features that enable tutors to create reasoning flowcharts for analyzing questions, detecting misconceptions, and defining key learning objectives.\n\nBuilt a no-code flowchart builder using React/TypeScript and React Flow for creating and auditing reasoning flows.\n\nCreated Telegram bots powered by Aristide for USMLE, MCAT, and System Design interview practice.\n\nImplemented CI/CD pipelines with GitHub Actions, eliminating manual deployments and enabling the entire team to deploy with a simple push.\n\nIntegrated Stripe into Telegram bots to handle recurring subscriptions through webhooks.",
        description_en: "Developed Django APIs for Aristide, the first AI Copilot for VTP, integrating multiple AI platforms including OpenAI, Anthropic, Claude, Gemini, and DeepSeek.\n\nDesigned and implemented features that enable tutors to create reasoning flowcharts for analyzing questions, detecting misconceptions, and defining key learning objectives.\n\nBuilt a no-code flowchart builder using React/TypeScript and React Flow for creating and auditing reasoning flows.\n\nCreated Telegram bots powered by Aristide for USMLE, MCAT, and System Design interview practice.\n\nImplemented CI/CD pipelines with GitHub Actions, eliminating manual deployments and enabling the entire team to deploy with a simple push.\n\nIntegrated Stripe into Telegram bots to handle recurring subscriptions through webhooks.",
        description_es: "Desarrollé APIs en Django para Aristide, el primer AI Copilot de la VTP, integrando múltiples plataformas de IA incluyendo OpenAI, Anthropic, Claude, Gemini y DeepSeek.\n\nDiseñé e implementé funcionalidades que permiten a los tutores crear diagramas de flujo de razonamiento para analizar preguntas, detectar conceptos erróneos y definir objetivos de aprendizaje clave.\n\nConstruí un creador de diagramas de flujo sin código usando React/TypeScript y React Flow para crear y auditar flujos de razonamiento.\n\nCreé bots de Telegram impulsados por Aristide para práctica de entrevistas de USMLE, MCAT y System Design.\n\nImplementé pipelines de CI/CD con GitHub Actions, eliminando despliegues manuales y permitiendo que todo el equipo pueda desplegar con un simple push.\n\nIntegré Stripe en los bots de Telegram para manejar suscripciones recurrentes a través de webhooks.",
        techStack: ["Python", "Django", "REST API", "WebSockets", "OpenAI", "Anthropic", "Claude", "Gemini", "DeepSeek", "React", "TypeScript", "React Flow", "Telegram Bots", "GitHub Actions", "Stripe", "Webhooks"]
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
        description: "Developed C# .NET RESTful APIs for comprehensive HR and Orders management systems, including full CRUD operations, data validation, security measures, and authentication.\n\nImplemented key HR modules covering Attendance tracking, Payroll processing, Scheduling management, and Loans administration, applying business logic for accurate calculations.\n\nBuilt a robust Orders system with detailed processing capabilities, logistics management, and automated bank reconciliation features.",
        description_en: "Developed C# .NET RESTful APIs for comprehensive HR and Orders management systems, including full CRUD operations, data validation, security measures, and authentication.\n\nImplemented key HR modules covering Attendance tracking, Payroll processing, Scheduling management, and Loans administration, applying business logic for accurate calculations.\n\nBuilt a robust Orders system with detailed processing capabilities, logistics management, and automated bank reconciliation features.",
        description_es: "Desarrollé APIs RESTful en C# .NET para sistemas integrales de gestión de RRHH y Pedidos, incluyendo operaciones CRUD completas, validación de datos, medidas de seguridad y autenticación.\n\nImplementé módulos clave de RRHH que cubren seguimiento de asistencia, procesamiento de nómina, gestión de horarios y administración de préstamos, aplicando lógica de negocio para cálculos precisos.\n\nConstruí un sistema robusto de Pedidos con capacidades de procesamiento detallado, gestión logística y funciones automatizadas de conciliación bancaria.",
        techStack: ["C#", ".NET", "Entity Framework", "SQL Server", "REST API"]
    },
    {
        title: "Systems Analyst",
        title_en: "Systems Analyst",
        title_es: "Analista de Sistemas",
        company: "National University of Engineering",
        duration: "2023 – 2024",
        duration_en: "2023 – 2024",
        duration_es: "2023 – 2024",
        location: "Nicaragua",
        description: "Developed C# .NET 6 RESTful APIs following Clean Architecture principles and implemented GitLab CI/CD pipelines.\n\nMaintained and enhanced the Budget and Planning system built on .NET Framework 4.7 and WebForms.\n\nSuccessfully migrated 17 reports from Crystal Reports to iTextSharp, achieving a 90% efficiency improvement by reducing report generation time from approximately 10 minutes to under 30 seconds.\n\nOptimized complex T-SQL stored procedures, dramatically reducing execution time from around 10 minutes to under 10 seconds.\n\nMentored 4 interns in C#, SQL, and Entity Framework, significantly improving their productivity and instilling best practices.",
        description_en: "Developed C# .NET 6 RESTful APIs following Clean Architecture principles and implemented GitLab CI/CD pipelines.\n\nMaintained and enhanced the Budget and Planning system built on .NET Framework 4.7 and WebForms.\n\nSuccessfully migrated 17 reports from Crystal Reports to iTextSharp, achieving a 90% efficiency improvement by reducing report generation time from approximately 10 minutes to under 30 seconds.\n\nOptimized complex T-SQL stored procedures, dramatically reducing execution time from around 10 minutes to under 10 seconds.\n\nMentored 4 interns in C#, SQL, and Entity Framework, significantly improving their productivity and instilling best practices.",
        description_es: "Desarrollé APIs RESTful en C# .NET 6 siguiendo principios de Clean Architecture e implementé pipelines de GitLab CI/CD.\n\nMantuve y mejoré el sistema de Planificación y Presupuesto construido en .NET Framework 4.7 y WebForms.\n\nMigré exitosamente 17 reportes de Crystal Reports a iTextSharp, logrando una mejora del 90% en eficiencia al reducir el tiempo de generación de reportes de aproximadamente 10 minutos a menos de 30 segundos.\n\nOptimicé procedimientos almacenados T-SQL complejos, reduciendo dramáticamente el tiempo de ejecución de alrededor de 10 minutos a menos de 10 segundos.\n\nFui mentor de 4 pasantes en C#, SQL y Entity Framework, mejorando significativamente su productividad e inculcando buenas prácticas.",
        techStack: ["C#", ".NET 6", "Clean Architecture", "GitLab CI", "Entity Framework", "SQL Server", "WebForms", "Crystal Reports", "iTextSharp", "T-SQL"]
    }
]

export const projects: Project[] = [
    {
        title: "Personal Portfolio Website",
        title_en: "My Portfolio",
        title_es: "Mi Portfolio",
        description: "Personal portfolio to showcase projects and experience. Responsive, bilingual (EN/ES), theme toggle and clean accessible UI. Deployed on Netlify.",
        description_en: "This portfolio showcases my modern frontend development skills using Next.js 15, React 18, and TypeScript. It features server-side rendering, internationalization (EN/ES), dark/light theme toggle, responsive design, and accessibility best practices. Built with modern tooling including Tailwind CSS and shadcn/ui components, and deployed on Netlify with static generation for optimal performance.",
        description_es: "Este portafolio demuestra mis habilidades de desarrollo frontend moderno usando Next.js 15, React 18 y TypeScript. Incluye renderizado del lado del servidor, internacionalización (EN/ES), cambio de tema claro/oscuro, diseño responsive y mejores prácticas de accesibilidad. Construido con herramientas modernas incluyendo Tailwind CSS y componentes shadcn/ui, y desplegado en Netlify con generación estática para un rendimiento óptimo.",
        image: "/portofolio-preview.png",
        status: "In Progress",
        techStack: ["Next.js", "React", "TypeScript", "Tailwind CSS", "shadcn/ui", "Netlify"],
        codeUrl: "https://github.com/Steven-Mendez/my-portfolio",
        liveUrl: "https://steven-mendez.netlify.app"
    }
]

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
        experience: mappedExperiences,
        projects: { // mantenemos textos + lista tipada
            ...uiTexts.projects,
            ...uiTexts.experience,
            items: mappedProjects
        },
        education,
        footer: uiTexts.footer
    };
} 