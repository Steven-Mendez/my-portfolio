import { Experience, Project, Education } from '@/types'

// Datos personales y de contacto
export const personalData = {
    name: "Steven Mendez",
    title: "Software Developer",
    title_es: "Desarrollador de Software",
    location: "Managua, Nicaragua",
    bio: [
        "Soy Desarrollador de Software con 2.5 años de experiencia en Backend e Inteligencia Artificial. Especializado en C#, .NET y Python, con experiencia en APIs RESTful e integración con plataformas de IA.",
        "Me apasiona crear soluciones escalables y eficientes, automatizando procesos críticos y construyendo sistemas robustos que resuelven problemas del mundo real."
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
    sections: {
        projects: "Projects",
        experience: "Experience"
    },
    projects: {
        loadMore: "Load More",
        showLess: "Show Less",
        emptyState: "I'm currently building new things. Check back soon to explore fresh work.",
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
            "I am a Software Developer with 2.5 years of experience specializing in Backend and Artificial Intelligence. Skilled in C#, .NET, and Python, with expertise in RESTful APIs and AI platform integration.",
            "I am passionate about creating scalable and efficient solutions, automating critical processes, and building robust systems that solve real-world problems."
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
        emptyState: "Actualmente estoy construyendo nuevos proyectos. Vuelve pronto para ver más.",
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
            "Soy Desarrollador de Software con 2.5 años de experiencia en Backend e Inteligencia Artificial. Especializado en C#, .NET y Python, con experiencia en APIs RESTful e integración con plataformas de IA.",
            "Me apasiona crear soluciones escalables y eficientes, automatizando procesos críticos y construyendo sistemas robustos que resuelven problemas del mundo real."
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
        description: "Built Django APIs for Aristide, the first AI Copilot for VTP, integrating OpenAI, Anthropic, Claude, Gemini, and DeepSeek.\n\nDesigned features enabling tutors to create reasoning flowcharts to analyze questions, detect misconceptions, and define key objectives.\n\nDeveloped a no-code flowchart builder in React/TypeScript (React Flow) for auditing reasoning flows.\n\nCreated Telegram bots based on Aristide for USMLE, MCAT, and System Design interview practice.\n\nImplemented CI/CD pipelines with GitHub Actions, removing manual deployments and enabling the whole team to deploy via push.\n\nIntegrated Stripe into Telegram bots to manage recurring subscriptions via Webhooks.",
        description_en: "Built Django APIs for Aristide, the first AI Copilot for VTP, integrating OpenAI, Anthropic, Claude, Gemini, and DeepSeek.\n\nDesigned features enabling tutors to create reasoning flowcharts to analyze questions, detect misconceptions, and define key objectives.\n\nDeveloped a no-code flowchart builder in React/TypeScript (React Flow) for auditing reasoning flows.\n\nCreated Telegram bots based on Aristide for USMLE, MCAT, and System Design interview practice.\n\nImplemented CI/CD pipelines with GitHub Actions, removing manual deployments and enabling the whole team to deploy via push.\n\nIntegrated Stripe into Telegram bots to manage recurring subscriptions via Webhooks.",
        description_es: "Implementé APIs en Django para Aristide, el primer AI Copilot de la VTP, integrando OpenAI, Anthropic, Claude, Gemini y DeepSeek.\n\nDiseñé la funcionalidad que permite a tutores crear diagramas de flujo de razonamiento para analizar preguntas, detectar misconceptions y definir objetivos clave.\n\nDesarrollé un builder no-code de flowcharts en React/TypeScript (React Flow) para crear y auditar flujos de razonamiento.\n\nCreé bots en Telegram basados en Aristide para USMLE, MCAT y entrevistas de System Design.\n\nImplementé pipelines de CI/CD con GitHub Actions, eliminando despliegues manuales y permitiendo que todo el equipo pueda desplegar con un simple push.\n\nIntegré Stripe en bots de Telegram para gestionar suscripciones recurrentes mediante Webhooks.",
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
        description: "Developed C# .NET RESTful APIs for HR and Orders systems, including CRUD, validations, security, and authentication.\n\nImplemented HR modules: Attendance, Payroll, Scheduling, and Loans, applying business rules for accurate calculations.\n\nBuilt the Orders system with detail processing, logistics, and automated bank reconciliation.",
        description_en: "Developed C# .NET RESTful APIs for HR and Orders systems, including CRUD, validations, security, and authentication.\n\nImplemented HR modules: Attendance, Payroll, Scheduling, and Loans, applying business rules for accurate calculations.\n\nBuilt the Orders system with detail processing, logistics, and automated bank reconciliation.",
        description_es: "Desarrollé APIs RESTful en C# .NET para sistemas de RRHH y Pedidos, incluyendo CRUD, validaciones, seguridad y autenticación.\n\nImplementé módulos de RRHH: Asistencia, Horarios, Nómina y Préstamos, aplicando reglas de negocio para cálculos precisos.\n\nCreé el sistema de Pedidos con procesamiento de detalle, logística y conciliación bancaria automatizada.",
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
        description: "Developed C# .NET 6 RESTful APIs with Clean Architecture and GitLab CI/CD.\n\nMaintained and improved the Budget and Planning system in .NET Framework 4.7 and WebForms.\n\nMigrated 17 reports from Crystal Reports to iTextSharp, reducing report generation times from ~10 min to <30 s (90% efficiency).\n\nOptimized complex T-SQL procedures, cutting execution time from ~10 min to <10 s.\n\nMentored 4 interns in C#, SQL, and Entity Framework, boosting productivity and best practices.",
        description_en: "Developed C# .NET 6 RESTful APIs with Clean Architecture and GitLab CI/CD.\n\nMaintained and improved the Budget and Planning system in .NET Framework 4.7 and WebForms.\n\nMigrated 17 reports from Crystal Reports to iTextSharp, reducing report generation times from ~10 min to <30 s (90% efficiency).\n\nOptimized complex T-SQL procedures, cutting execution time from ~10 min to <10 s.\n\nMentored 4 interns in C#, SQL, and Entity Framework, boosting productivity and best practices.",
        description_es: "Desarrollé APIs RESTful en C# .NET 6 con Clean Architecture y GitLab CI/CD.\n\nMantuve y mejoré el sistema de Planificación y Presupuesto en .NET Framework 4.7 y WebForms.\n\nMigré 17 reportes de Crystal Reports a iTextSharp, reduciendo tiempos de generación de ~10 min a <30 s (90 % de eficiencia).\n\nOptimicé procedimientos T-SQL complejos, reduciendo consultas de ~10 min a <10 s.\n\nMentor de 4 pasantes en C#, SQL y Entity Framework, mejorando su productividad y buenas prácticas.",
        techStack: ["C#", ".NET 6", "Clean Architecture", "GitLab CI", "Entity Framework", "SQL Server", "WebForms", "Crystal Reports", "iTextSharp", "T-SQL"]
    }
]

export const projects: Project[] = [
    {
        title: "Personal Portfolio Website",
        title_en: "My Portfolio",
        title_es: "Mi Portfolio",
        description: "Personal portfolio to showcase projects and experience. Responsive, bilingual (EN/ES), theme toggle and clean accessible UI. Deployed on Netlify.",
        description_en: "This portfolio demonstrates my modern frontend development skills using Next.js 15, React 18, and TypeScript. Features include server-side rendering, internationalization (EN/ES), dark/light theme toggle, responsive design, and accessibility best practices. Built with modern tooling including Tailwind CSS, shadcn/ui components, and deployed on Netlify with static generation.",
        description_es: "Este portafolio demuestra mis habilidades de desarrollo frontend moderno usando Next.js 15, React 18 y TypeScript. Características incluyen renderizado del lado del servidor, internacionalización (EN/ES), cambio de tema claro/oscuro, diseño responsive y mejores prácticas de accesibilidad. Construido con herramientas modernas incluyendo Tailwind CSS, componentes shadcn/ui y desplegado en Netlify con generación estática.",
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