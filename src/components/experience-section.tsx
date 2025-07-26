'use client'

import { useState } from 'react'
import { Briefcase, Building, ChevronDown } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Separator } from '@/components/ui/separator'
import { getTechColor } from '@/lib/utils'

const INITIAL_EXPERIENCES_COUNT = 2

interface ExperienceSectionProps {
    data: {
        sections: {
            experience: string;
        };
        projects: {
            loadMore: string;
            showLess: string;
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
    const [visibleExperiences, setVisibleExperiences] = useState(INITIAL_EXPERIENCES_COUNT)

    const { experience } = data;

    const handleLoadMore = () => {
        setVisibleExperiences(prev => Math.min(prev + 2, experience.length))
    }

    const hasMoreExperiences = visibleExperiences < experience.length
    const displayedExperiences = experience.slice(0, visibleExperiences)

    return (
        <section className="mb-12 sm:mb-16" aria-labelledby="experience-heading">
            <header className="flex items-center gap-3 mb-2">
                <Briefcase className="w-6 h-6 sm:w-7 sm:h-7 text-primary" aria-hidden="true" />
                <h2 id="experience-heading" className="text-xl sm:text-2xl font-semibold text-gray-900 dark:text-gray-100">
                    {data.sections.experience}
                </h2>
            </header>
            <Separator className="mb-6 sm:mb-8" />

            <div className="relative" role="list" aria-label="Work experience timeline">
                {/* Timeline Line */}
                <Separator
                    orientation="vertical"
                    className="absolute left-2 top-4 bg-gray-300 dark:bg-gray-600 h-full w-0.5"
                    aria-hidden="true"
                />

                {displayedExperiences.map((exp, index) => (
                    <article key={index} className="relative mb-10 pl-8" role="listitem">
                        {/* Timeline Dot */}
                        <div className="absolute left-0 top-3.5 flex size-4 items-center justify-center rounded-full bg-gray-900 dark:bg-gray-100 ring-4 ring-white dark:ring-gray-900 shadow-sm" aria-hidden="true" />

                        {/* Job Title */}
                        <h3 className="rounded-xl py-2 text-lg sm:text-xl font-bold tracking-tight mb-2 text-gray-900 dark:text-gray-100">
                            {exp.title}
                        </h3>

                        {/* Period */}
                        <time className="text-sm sm:text-md text-gray-600 dark:text-gray-300 rounded-xl tracking-tight mb-2 font-medium block">
                            {exp.period}
                        </time>

                        {/* Company */}
                        <address className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 mb-4 text-sm text-gray-700 dark:text-gray-200 not-italic">
                            <div className="flex items-center gap-2">
                                <Building className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" />
                                <span className="font-medium">{exp.company}</span>
                            </div>
                        </address>

                        {/* Experience Description */}
                        <div className="my-4">
                            <p className="text-gray-700 dark:text-gray-200 text-sm sm:text-base leading-relaxed">
                                {exp.description}
                            </p>
                        </div>

                        {/* Tech Stack */}
                        <div className="mt-4">
                            <div className="text-xs text-gray-500 dark:text-gray-400 mb-3 font-medium tracking-wide uppercase">{data.projects.techStack}</div>
                            <div className="flex flex-wrap gap-2" role="list" aria-label={`Technologies used at ${exp.company}`}>
                                {exp.technologies.map((tech: string, i: number) => (
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
                    </article>
                ))}

                {/* Load More Button */}
                {hasMoreExperiences && (
                    <div className="flex justify-center mt-8">
                        <Button
                            onClick={handleLoadMore}
                            variant="outline"
                            size="sm"
                            className="text-sm font-medium min-w-32 px-8 border-2 border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 hover:border-gray-400 dark:hover:border-gray-500 transition-all"
                            aria-label={`Load ${Math.min(2, experience.length - visibleExperiences)} more experiences`}
                        >
                            <ChevronDown className="w-4 h-4 mr-2" aria-hidden="true" />
                            {data.projects.loadMore}
                        </Button>
                    </div>
                )}
            </div>
        </section>
    )
} 