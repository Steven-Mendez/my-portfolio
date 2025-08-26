import { FolderOpen, Code2 } from 'lucide-react'
import { Separator } from '@/components/ui/separator'
import LoadMoreProjects from './load-more-projects'
import { Project } from '@/types'

interface ProjectsSectionProps {
    data: {
        sections: { projects: string }
        projects: {
            loadMore: string
            emptyState: string
            items: Project[]
            techStack: string
            liveDemo: string
            code: string
            comingSoon: string
            aboutProject: string
        }
    }
}

export default function ProjectsSection({ data }: ProjectsSectionProps) {
    const { projects } = data;
    const allProjects = projects.items;

    return (
        <section className="w-full" aria-labelledby="projects-heading">
            <header className="flex items-center gap-3 mb-2">
                <Code2 className="w-6 h-6 sm:w-7 sm:h-7 text-foreground/80" aria-hidden="true" />
                <h2 id="projects-heading" className="text-xl sm:text-2xl font-semibold text-gray-900 dark:text-gray-100">
                    {data.sections.projects}
                </h2>
            </header>
            <Separator className="my-4 sm:my-5" />
            {allProjects.length === 0 ? (
                <div className="flex flex-col items-center justify-center py-12 sm:py-16 text-center text-muted-foreground" role="status" aria-live="polite">
                    <FolderOpen className="w-10 h-10 sm:w-12 sm:h-12 mb-3 sm:mb-4 text-muted-foreground/60" aria-hidden="true" />
                    <p className="text-lg sm:text-xl font-semibold mb-2 text-foreground">{data.projects.comingSoon}</p>
                    <p className="max-w-md text-sm sm:text-base text-muted-foreground px-4">{data.projects.emptyState}</p>
                </div>
            ) : (
                <LoadMoreProjects
                    projects={allProjects}
                    loadMoreText={data.projects.loadMore}
                    techStackText={data.projects.techStack}
                    liveDemoText={data.projects.liveDemo}
                    codeText={data.projects.code}
                    aboutProjectText={data.projects.aboutProject}
                />
            )}
        </section>
    )
} 