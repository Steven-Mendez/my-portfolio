// src/types/index.ts
export interface Project {
    title: string
    description: string
    image: string
    status: 'Completed' | 'In Progress' | 'Archived'
    techStack: string[]
    liveUrl?: string
    codeUrl?: string
}

export interface Experience {
    title: string
    company: string
    duration: string
    location: string
    description: string
    techStack: string[]
}

// Reusable contact link metadata used across hero and contact components
export interface Contact {
    icon: string;
    href: string;
    label: string;
    external: boolean;
}
