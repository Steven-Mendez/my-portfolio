// src/types/index.ts
export interface Project {
    title: string
    description: string
    description_en?: string
    description_es?: string
    image: string
    status: 'Completed' | 'In Progress' | 'Archived'
    techStack: string[]
    liveUrl?: string
    codeUrl?: string
}

export interface Experience {
    title: string
    title_en?: string
    title_es?: string
    company: string
    duration: string
    location: string
    description: string
    description_en?: string
    description_es?: string
    techStack: string[]
}

export interface Education {
    degree: string
    institution: string
    duration: string
    location: string
} 