import { Experience, Project, Education } from '@/types'

// Datos personales y de contacto
export const personalData = {
    name: "Steven Mendez",
    title: "Backend Developer",
    location: "Managua, Nicaragua",
    bio: [
        "Desarrollador backend con mentalidad de producto; diseño y evoluciono servicios, flujos de datos, colas y tareas programadas que conectan APIs, almacenamiento y terceros con enfoque en claridad y confiabilidad.",
        "Aporto modelos consistentes, límites bien definidos, observabilidad accionable y mejoras pequeñas que reducen incidencias y esfuerzo operativo; me encanta el autoestudio y compartir conocimientos con el equipo."
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
        emptyState: "I'm currently building new things. Check back soon to explore fresh work.",
        techStack: "Tech Stack",
        liveDemo: "Live Demo",
        code: "Code",
        comingSoon: "Coming soon"
    },
    experience: {
        techStack: "Tech Stack"
    },
    hero: {
        downloadCV: "Download CV",
        bio: [
            "Backend developer with a product mindset; I design and evolve services, data flows, queues and scheduled jobs that connect APIs, storage and third parties with a focus on clarity and reliability.",
            "I contribute consistent models, well‑defined boundaries, actionable observability and small improvements that reduce incidents and operational load; I love self‑learning and sharing knowledge with the team."
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
        comingSoon: "Próximamente"
    },
    experience: {
        techStack: "Tecnologías"
    },
    hero: {
        downloadCV: "Descargar CV",
        bio: [
            "Desarrollador backend con mentalidad de producto; diseño y evoluciono servicios, flujos de datos, colas y tareas programadas que conectan APIs, almacenamiento y terceros con enfoque en claridad y confiabilidad.",
            "Aporto modelos consistentes, límites bien definidos, observabilidad accionable y mejoras pequeñas que reducen incidencias y esfuerzo operativo; me encanta el autoestudio y compartir conocimientos con el equipo."
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
        title: "Python Developer – LLM Pipelines",
        title_en: "Python Developer – LLM Pipelines",
        title_es: "Desarrollador Python – LLM Pipelines",
        company: "MILRD",
        duration: "2025 – Present",
        location: "Remote",
        description: "Built and extended Django APIs for Aristide (REST, WebSockets, streaming) and unified OpenAI, Anthropic/Claude, Gemini and DeepSeek behind one abstraction powering a multi‑model tutoring copilot. Delivered a no‑code reasoning flow builder (React + React Flow) that lets tutors model misconception detection and learning goals.\n\nAdded Telegram bots for exam and system design practice, set up CI/CD (GitHub Actions) and automated Stripe subscription billing (webhooks) to trim manual ops and speed releases.",
        description_en: "Built and extended Django APIs for Aristide (REST, WebSockets, streaming) and unified OpenAI, Anthropic/Claude, Gemini and DeepSeek behind one abstraction powering a multi‑model tutoring copilot. Delivered a no‑code reasoning flow builder (React + React Flow) that lets tutors model misconception detection and learning goals.\n\nAdded Telegram bots for exam and system design practice, set up CI/CD (GitHub Actions) and automated Stripe subscription billing (webhooks) to trim manual ops and speed releases.",
        description_es: "Desarrollé y amplié APIs Django para Aristide (REST, WebSockets, streaming) y unifiqué OpenAI, Anthropic/Claude, Gemini y DeepSeek bajo una sola capa que alimenta un copiloto de tutoría multi‑modelo. Entregué un constructor visual (no‑code) de flujos de razonamiento (React + React Flow) que permite a tutores modelar detección de conceptos erróneos y objetivos de aprendizaje.\n\nAñadí bots de Telegram para práctica de exámenes y system design, configuré CI/CD (GitHub Actions) y automatizé la facturación de suscripciones con Stripe (webhooks) reduciendo tareas manuales y acelerando lanzamientos.",
        techStack: ["Python", "Django", "REST API", "WebSockets", "OpenAI", "Anthropic", "Claude", "Gemini", "DeepSeek", "React", "TypeScript", "React Flow", "Telegram Bots", "GitHub Actions", "Stripe", "Webhooks"]
    },
    {
        title: "Backend Developer",
        title_en: "Backend Developer",
        title_es: "Desarrollador Backend",
        company: "Freelance – Joyas Esther",
        duration: "2024 – 2025",
        location: "Remote",
        description: "Built green‑field HR and order platforms in C#/.NET (Entity Framework, SQL Server). Designed secure REST APIs (auth, validation, role access) and modules for attendance, scheduling, payroll foundation, loans, shipping, address management and payment reconciliation.\n\nEncoded business rules and automated routine workflows to cut manual intervention and reduce errors.",
        description_en: "Built green‑field HR and order platforms in C#/.NET (Entity Framework, SQL Server). Designed secure REST APIs (auth, validation, role access) and modules for attendance, scheduling, payroll foundation, loans, shipping, address management and payment reconciliation.\n\nEncoded business rules and automated routine workflows to cut manual intervention and reduce errors.\n\nDelivered a modular HR backend: users/access, organizational units, contracts & events, leave types & requests, time tracking, overtime workflow and initial payroll groundwork.",
        description_es: "Construí plataformas green‑field de RRHH y pedidos en C#/.NET (Entity Framework, SQL Server). Diseñé APIs REST seguras (auth, validación, roles) y módulos de asistencia, horarios, base de nómina, préstamos, envíos, gestión de direcciones y conciliación de pagos.\n\nModelé reglas de negocio y automatizé flujos rutinarios para reducir intervención manual y errores.\n\nEntregué un backend modular de RRHH: usuarios/accesos, unidades organizacionales, contratos y eventos, tipos y solicitudes de permisos, control horario, flujo de horas extra y base inicial de nómina.",
        techStack: ["C#", ".NET", "Entity Framework", "SQL Server", "REST API"]
    },
    {
        title: "Systems Analyst",
        title_en: "Systems Analyst",
        title_es: "Analista de Sistemas",
        company: "Universidad Nacional de Ingeniería – Nic.Ni/DTI",
        duration: "2023 – 2024",
        location: "Nicaragua",
        description: "Improved planning & budgeting platforms (.NET 4.7, WebForms) while shipping new warehouse and helpdesk APIs in .NET 6 (Clean Architecture, GitLab CI). Migrated 17 Crystal Reports to iTextSharp (≈10 min → <30 s) and optimized complex T‑SQL procedures (≈10 min → <10 s).\n\nMentored interns (C#, SQL, Entity Framework) to raise performance and reliability standards.",
        description_en: "Improved planning & budgeting platforms (.NET 4.7, WebForms) while shipping new warehouse and helpdesk APIs in .NET 6 (Clean Architecture, GitLab CI). Migrated 17 Crystal Reports to iTextSharp (≈10 min → <30 s) and optimized complex T‑SQL procedures (≈10 min → <10 s).\n\nMentored interns (C#, SQL, Entity Framework) to raise performance and reliability standards.",
        description_es: "Mejoré plataformas de planificación y presupuesto (.NET 4.7, WebForms) mientras entregaba nuevas APIs de bodega y helpdesk en .NET 6 (Clean Architecture, GitLab CI). Migré 17 reportes de Crystal Reports a iTextSharp (~10 min → <30 s) y optimicé procedimientos T‑SQL complejos (~10 min → <10 s).\n\nMentoricé pasantes (C#, SQL, Entity Framework) elevando estándares de rendimiento y fiabilidad.",
        techStack: ["C#", ".NET 6", "Clean Architecture", "GitLab CI", "Entity Framework", "SQL Server", "WebForms", "Crystal Reports", "iTextSharp", "T-SQL"]
    }
]

export const projects: Project[] = [
    {
        title: "Personal Portfolio Website",
        description: "Personal portfolio to showcase projects and experience. Responsive, bilingual (EN/ES), theme toggle and clean accessible UI. Deployed on Netlify.",
        description_en: "Personal portfolio to showcase projects and experience. Responsive, bilingual (EN/ES), theme toggle and clean accessible UI. Deployed on Netlify.",
        description_es: "Portafolio personal para mostrar proyectos y experiencia. Responsive, bilingüe (EN/ES), con cambio de tema y UI accesible limpia. Desplegado en Netlify.",
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
        period: exp.duration,
        description: locale === 'es' ? (exp.description_es || exp.description) : (exp.description_en || exp.description),
        technologies: exp.techStack,
    }));

    // Mapear proyectos preservando la forma de Project (solo localizando description)
    const mappedProjects: Project[] = projects.map(project => ({
        ...project,
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
        projects: { // mantenemos textos + lista tipada
            ...uiTexts.projects,
            ...uiTexts.experience,
            items: mappedProjects
        },
        education,
        footer: uiTexts.footer
    };
} 