'use client'

import { useState } from 'react'
import Image from 'next/image'
import { ExternalLink, Github, FolderOpen, ChevronDown, Code2 } from 'lucide-react'
import { Card, CardDescription, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Separator } from '@/components/ui/separator'
import { getTechColor } from '@/lib/utils'

const INITIAL_PROJECTS_COUNT = 2

interface ProjectsSectionProps {
    data: {
        sections: {
            projects: string;
        };
        projects: {
            loadMore: string;
            showLess: string;
            emptyState: string;
            featured: Array<{
                title: string;
                description: string;
                technologies: string[];
                demoUrl?: string;
                githubUrl?: string;
                image?: string;
            }>;
            past: Array<{
                title: string;
                description: string;
                technologies: string[];
                demoUrl?: string;
                githubUrl?: string;
                image?: string;
            }>;
            techStack: string;
            liveDemo: string;
            code: string;
            comingSoon: string;
        };
    };
}

export default function ProjectsSection({ data }: ProjectsSectionProps) {
    const [visibleProjects, setVisibleProjects] = useState(INITIAL_PROJECTS_COUNT)

    const { projects } = data;
    const allProjects = [...projects.featured, ...projects.past];

    const handleLoadMore = () => {
        setVisibleProjects(prev => Math.min(prev + 2, allProjects.length))
    }

    const hasMoreProjects = visibleProjects < allProjects.length
    const displayedProjects = allProjects.slice(0, visibleProjects)

    return (
        <section className="mb-12 sm:mb-16" aria-labelledby="projects-heading">
            <header className="flex items-center gap-3 mb-2">
                <Code2 className="w-6 h-6 sm:w-7 sm:h-7 text-primary" aria-hidden="true" />
                <h2 id="projects-heading" className="text-xl sm:text-2xl font-semibold text-gray-900 dark:text-gray-100">
                    {data.sections.projects}
                </h2>
            </header>
            <Separator className="mb-6 sm:mb-8" />
            {allProjects.length === 0 ? (
                <div className="flex flex-col items-center justify-center py-12 sm:py-16 text-center text-gray-500 dark:text-gray-400" role="status" aria-live="polite">
                    <FolderOpen className="w-10 h-10 sm:w-12 sm:h-12 mb-3 sm:mb-4 text-gray-300 dark:text-gray-600" aria-hidden="true" />
                    <p className="text-lg sm:text-xl font-semibold mb-2 text-gray-700 dark:text-gray-300">{data.projects.comingSoon}</p>
                    <p className="max-w-md text-sm sm:text-base text-gray-500 dark:text-gray-400 px-4">{data.projects.emptyState}</p>
                </div>
            ) : (
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
                                    className={`group border-2 border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 hover:border-gray-300 dark:hover:border-gray-600 hover:bg-gray-50 dark:hover:bg-gray-700/80 transition-all duration-300 shadow-sm hover:shadow-lg dark:shadow-gray-900/20 dark:hover:shadow-xl rounded-xl overflow-hidden flex flex-col w-full p-0 ${isLastOdd ? 'sm:col-span-2 sm:max-w-md sm:mx-auto' : ''
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
                                            <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-2">
                                                {project.title}
                                            </h3>
                                            <CardDescription className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
                                                {project.description}
                                            </CardDescription>
                                        </header>

                                        <div className="flex-1 flex flex-col justify-between">
                                            <div className="mb-4">
                                                <div className="text-xs text-gray-500 dark:text-gray-400 mb-3 font-medium tracking-wide uppercase">{data.projects.techStack}</div>
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
                                                    <Button asChild size="sm" className="flex-1 text-sm font-medium bg-gray-900 dark:bg-gray-100 text-white dark:text-gray-900 hover:bg-gray-800 dark:hover:bg-gray-200 transition-colors">
                                                        <a href={project.demoUrl} target="_blank" rel="noopener noreferrer" aria-label={`View live demo of ${project.title}`}>
                                                            <ExternalLink className="w-4 h-4 mr-2" aria-hidden="true" /> {data.projects.liveDemo}
                                                        </a>
                                                    </Button>
                                                )}
                                                {project.githubUrl && (
                                                    <Button asChild variant="outline" size="sm" className="flex-1 text-sm font-medium border-2 border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 hover:border-gray-400 dark:hover:border-gray-500 transition-all">
                                                        <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" aria-label={`View source code of ${project.title} on GitHub`}>
                                                            <Github className="w-4 h-4 mr-2" aria-hidden="true" /> {data.projects.code}
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
                                className="text-sm font-medium min-w-32 px-8 border-2 border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 hover:border-gray-400 dark:hover:border-gray-500 transition-all"
                                aria-label={`Load ${Math.min(2, allProjects.length - visibleProjects)} more projects`}
                            >
                                <ChevronDown className="w-4 h-4 mr-2" aria-hidden="true" />
                                {data.projects.loadMore}
                            </Button>
                        </div>
                    )}
                </>
            )}
        </section>
    )
} 