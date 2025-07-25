import Image from 'next/image'
import { ExternalLink, Github, FolderOpen, Code2 } from 'lucide-react'
import { Card, CardDescription } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Separator } from '@/components/ui/separator'
import { getTechColor } from '@/lib/utils'
import LoadMoreProjects from './load-more-projects'

interface ProjectsSectionProps {
    data: {
        sections: {
            projects: string;
        };
        projects: {
            loadMore: string;
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
    const { projects } = data;
    const allProjects = [...projects.featured, ...projects.past];

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
                <LoadMoreProjects
                    projects={allProjects}
                    loadMoreText={data.projects.loadMore}
                    techStackText={data.projects.techStack}
                    liveDemoText={data.projects.liveDemo}
                    codeText={data.projects.code}
                />
            )}
        </section>
    )
} 