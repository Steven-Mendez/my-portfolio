"use client";

import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Image from 'next/image';
import { ExternalLink, Github } from 'lucide-react';
import { Card, CardDescription } from '@/components/ui/card';
import { getTechColor } from '@/lib/utils';

interface Project {
    title: string;
    description: string;
    technologies: string[];
    demoUrl?: string;
    githubUrl?: string;
    image?: string;
}

interface LoadMoreProjectsProps {
    projects: Project[];
    loadMoreText: string;
    techStackText: string;
    liveDemoText: string;
    codeText: string;
}

const INITIAL_PROJECTS_COUNT = 2;

export default function LoadMoreProjects({ projects, loadMoreText, techStackText, liveDemoText, codeText }: LoadMoreProjectsProps) {
    const [visibleProjects, setVisibleProjects] = useState(INITIAL_PROJECTS_COUNT);

    const handleLoadMore = () => {
        setVisibleProjects(prev => Math.min(prev + 2, projects.length));
    };

    const hasMoreProjects = visibleProjects < projects.length;
    const displayedProjects = projects.slice(0, visibleProjects);

    return (
        <>
            {/* Projects Grid - Max 2 per row with smart spanning */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8" role="list" aria-label="Portfolio projects">
                {displayedProjects.map((project, idx) => {
                    // Check if this is the last item and if we have an odd number
                    const isLastOdd = idx === displayedProjects.length - 1 && displayedProjects.length % 2 === 1 && displayedProjects.length > 1;

                    return (
                        <Card
                            key={idx}
                            role="listitem"
                            className={`group border-2 border-border bg-card hover:bg-card/90 transition-all duration-300 shadow-sm hover:shadow-lg hover:border-foreground/40 rounded-xl overflow-hidden flex flex-col w-full p-0 ${isLastOdd ? 'sm:col-span-2 sm:max-w-md sm:mx-auto' : ''
                                }`}
                        >
                            {/* Image section - only if image exists */}
                            {project.image && (
                                <figure className="relative w-full aspect-[4/3] overflow-hidden rounded-t-xl">
                                    <Image
                                        src={project.image}
                                        alt={`Screenshot of ${project.title} project`}
                                        fill
                                        className="object-cover group-hover:scale-105 transition-transform duration-300"
                                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 400px"
                                        priority={idx < 2}
                                    />
                                </figure>
                            )}

                            {/* Content section */}
                            <div className="flex-1 flex flex-col p-6">
                                <header className="mb-4">
                                    <h3 className="text-lg font-semibold text-foreground mb-2">
                                        {project.title}
                                    </h3>
                                    <CardDescription className="text-muted-foreground text-sm leading-relaxed">
                                        {project.description}
                                    </CardDescription>
                                </header>

                                <div className="flex-1 flex flex-col justify-between">
                                    <div className="mb-4">
                                        <div className="text-xs text-muted-foreground mb-3 font-medium tracking-wide uppercase">{techStackText}</div>
                                        <div className="flex flex-wrap gap-2" role="list" aria-label={`Technologies used in ${project.title}`}>
                                            {project.technologies.map((tech: string, i: number) => (
                                                <span
                                                    key={i}
                                                    role="listitem"
                                                    className={`inline-block text-xs px-3 py-1.5 border rounded-full font-medium transition-colors ${getTechColor(tech)}`}
                                                >
                                                    {tech}
                                                </span>
                                            ))}
                                        </div>
                                    </div>

                                    <nav className="flex gap-3 mt-auto" aria-label={`Links for ${project.title} project`}>
                                        {project.demoUrl && (
                                            <Button asChild size="sm" className="flex-1 text-sm font-medium bg-primary text-primary-foreground hover:bg-primary/90 transition-colors">
                                                <a href={project.demoUrl} target="_blank" rel="noopener noreferrer" aria-label={`View live demo of ${project.title}`}>
                                                    <ExternalLink className="w-4 h-4 mr-2" aria-hidden="true" /> {liveDemoText}
                                                </a>
                                            </Button>
                                        )}
                                        {project.githubUrl && (
                                            <Button asChild variant="outline" size="sm" className="flex-1 text-sm font-medium border-2 border-border text-foreground hover:bg-foreground/5 dark:hover:bg-foreground/10 hover:border-foreground/40 transition-all">
                                                <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" aria-label={`View source code of ${project.title} on GitHub`}>
                                                    <Github className="w-4 h-4 mr-2" aria-hidden="true" /> {codeText}
                                                </a>
                                            </Button>
                                        )}
                                    </nav>
                                </div>
                            </div>
                        </Card>
                    )
                })}
            </div>

            {/* Load More Button */}
            {hasMoreProjects && (
                <div className="flex justify-center mt-10">
                    <Button
                        onClick={handleLoadMore}
                        variant="outline"
                        size="sm"
                        className="text-sm font-medium min-w-32 px-8 border-2 border-border text-foreground hover:bg-foreground/5 dark:hover:bg-foreground/10 hover:border-foreground/40 transition-all"
                        aria-label={`Load ${Math.min(2, projects.length - visibleProjects)} more projects`}
                    >
                        <ChevronDown className="w-4 h-4 mr-2" aria-hidden="true" />
                        {loadMoreText}
                    </Button>
                </div>
            )}
        </>
    );
} 