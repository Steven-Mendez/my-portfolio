import { Briefcase } from 'lucide-react'
import { Separator } from '@/components/ui/separator'
import LoadMoreExperiences from './load-more-experiences'

interface ExperienceSectionProps {
    data: {
        sections: {
            experience: string;
        };
        projects: {
            loadMore: string;
            techStack: string;
        };
        experience: Array<{
            title: string;
            company: string;
            period: string;
            description: string;
            technologies: string[];
        }>;
    };
}

export default function ExperienceSection({ data }: ExperienceSectionProps) {
    const { experience } = data;

    return (
        <section className="mb-12 sm:mb-16" aria-labelledby="experience-heading">
            <header className="flex items-center gap-3 mb-2">
                <Briefcase className="w-6 h-6 sm:w-7 sm:h-7 text-foreground/80" aria-hidden="true" />
                <h2 id="experience-heading" className="text-xl sm:text-2xl font-semibold text-foreground">
                    {data.sections.experience}
                </h2>
            </header>
            <Separator className="mb-6 sm:mb-8" />

            <LoadMoreExperiences
                experiences={experience}
                loadMoreText={data.projects.loadMore}
                techStackText={data.projects.techStack}
            />
        </section>
    )
} 