"use client";

/* eslint-disable @next/next/no-img-element */
import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import ProjectDetailModal from './project-detail-modal';
import { getTechColor } from '@/lib/utils';
import { Project } from '@/types';

interface LoadMoreProjectsProps {
    projects: Project[];
    loadMoreText: string;
    techStackText: string;
    liveDemoText: string;
    codeText: string;
    aboutProjectText: string;
}

const INITIAL_PROJECTS_COUNT = 6; // show a fuller grid initially

export default function LoadMoreProjects({ projects, loadMoreText, techStackText, liveDemoText, codeText, aboutProjectText }: LoadMoreProjectsProps) {
    const [visibleProjects, setVisibleProjects] = useState(INITIAL_PROJECTS_COUNT);
    const [activeProject, setActiveProject] = useState<Project | null>(null);
    const [open, setOpen] = useState(false);

    const handleLoadMore = () => {
        setVisibleProjects(prev => Math.min(prev + 6, projects.length));
    };

    const hasMoreProjects = visibleProjects < projects.length;
    const displayedProjects = projects.slice(0, visibleProjects);


    return (
        <>
            {/* Grid estilo ejemplo (1 -> 2 columnas) */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto" role="list" aria-label="Portfolio projects">
                {displayedProjects.map((project, idx) => (
                    <div
                        key={idx}
                        role="listitem"
                        tabIndex={0}
                        aria-label={`Abrir detalles de ${project.title}`}
                        onClick={() => { setActiveProject(project); setOpen(true); }}
                        onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); setActiveProject(project); setOpen(true); } }}
                        className="group bg-white dark:bg-neutral-900 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer overflow-hidden transform-gpu hover:-translate-y-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                    >
                        {/* Imagen */}
                        <div className="relative overflow-hidden h-48">
                            {project.image && (
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                                    loading={idx < 4 ? 'eager' : 'lazy'}
                                />
                            )}
                            {/* Overlay gradiente sólo en hover */}
                            <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                        </div>

                        {/* Contenido */}
                        <div className="p-6">
                            <h3 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-3 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300 leading-snug">
                                {project.title}
                            </h3>
                            <p className="text-gray-600 dark:text-gray-400 mb-4 line-clamp-2 leading-relaxed text-sm">
                                {project.description}
                            </p>
                            {/* Tech stack */}
                            <div className="flex flex-wrap gap-1.5" role="list" aria-label="Tech stack">
                                {project.techStack.map((tech) => (
                                    <span
                                        key={tech}
                                        role="listitem"
                                        className={`inline-block text-xs px-2.5 py-1.5 border rounded-full font-medium transition-colors ${getTechColor(tech)}`}
                                    >
                                        {tech}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {hasMoreProjects && (
                <div className="flex justify-center mt-16">
                    <Button
                        onClick={handleLoadMore}
                        variant="outline"
                        size="sm"
                        className="text-sm font-medium min-w-48 px-10 h-11 border border-border/70 hover:border-foreground/40"
                        aria-label={`Cargar ${Math.min(6, projects.length - visibleProjects)} proyectos más`}
                    >
                        <ChevronDown className="w-4 h-4 mr-2" aria-hidden="true" />
                        {loadMoreText}
                    </Button>
                </div>
            )}

            <ProjectDetailModal
                project={activeProject}
                open={open}
                onClose={() => { setOpen(false); setActiveProject(null); }}
                techStackText={techStackText}
                liveDemoText={liveDemoText}
                codeText={codeText}
                aboutProjectText={aboutProjectText}
            />
        </>
    );
}