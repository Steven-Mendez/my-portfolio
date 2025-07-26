"use client";

import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { getTechColor } from '@/lib/utils';

interface Experience {
    title: string;
    company: string;
    period: string;
    description: string;
    technologies: string[];
}

interface LoadMoreExperiencesProps {
    experiences: Experience[];
    loadMoreText: string;
    techStackText: string;
}

const INITIAL_EXPERIENCES_COUNT = 2;

export default function LoadMoreExperiences({ experiences, loadMoreText, techStackText }: LoadMoreExperiencesProps) {
    const [visibleExperiences, setVisibleExperiences] = useState(INITIAL_EXPERIENCES_COUNT);

    const handleLoadMore = () => {
        setVisibleExperiences(prev => Math.min(prev + 2, experiences.length));
    };

    const hasMoreExperiences = visibleExperiences < experiences.length;
    const displayedExperiences = experiences.slice(0, visibleExperiences);

    return (
        <>
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
                            <div className="text-xs text-gray-500 dark:text-gray-400 mb-3 font-medium tracking-wide uppercase">{techStackText}</div>
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
            </div>

            {/* Load More Button */}
            {hasMoreExperiences && (
                <div className="flex justify-center mt-8">
                    <Button
                        onClick={handleLoadMore}
                        variant="outline"
                        size="sm"
                        className="text-sm font-medium min-w-32 px-8 border-2 border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 hover:border-gray-400 dark:hover:border-gray-500 transition-all"
                        aria-label={`Load ${Math.min(2, experiences.length - visibleExperiences)} more experiences`}
                    >
                        <ChevronDown className="w-4 h-4 mr-2" aria-hidden="true" />
                        {loadMoreText}
                    </Button>
                </div>
            )}
        </>
    );
} 