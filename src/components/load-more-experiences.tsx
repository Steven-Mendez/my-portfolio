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
    description: string | string[]; // can be multi-paragraph
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
                    className="absolute left-2 top-4 bg-border/60 h-full w-0.5"
                    aria-hidden="true"
                />

                {displayedExperiences.map((exp, index) => (
                    <article key={index} className="relative mb-8 pl-8" role="listitem">
                        {/* Timeline Dot */}
                        <div className="absolute left-0 top-3.5 flex size-4 items-center justify-center rounded-full bg-foreground ring-4 ring-background shadow-sm" aria-hidden="true" />

                        {/* Job Title */}
                        <h3 className="rounded-xl py-1.5 text-lg sm:text-xl font-bold tracking-tight mb-1.5 text-foreground">
                            {exp.title}
                        </h3>

                        {/* Period */}
                        <time className="text-sm sm:text-md text-muted-foreground rounded-xl tracking-tight mb-1.5 font-medium block">
                            {exp.period}
                        </time>

                        {/* Company */}
                        <address className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 mb-3 text-sm text-muted-foreground not-italic">
                            <div className="flex items-center gap-2">
                                <span className="font-medium">{exp.company}</span>
                            </div>
                        </address>

                        {/* Experience Description (supports multiple paragraphs separated by blank lines) */}
                        <div className="my-3 space-y-3">
                            {(() => {
                                const paragraphs = Array.isArray(exp.description)
                                    ? exp.description
                                    : exp.description.split(/\n{2,}/).map(p => p.trim()).filter(Boolean);
                                return paragraphs.map((p, i) => (
                                    <p key={i} className="text-muted-foreground text-sm sm:text-base leading-relaxed">
                                        {p}
                                    </p>
                                ));
                            })()}
                        </div>

                        {/* Tech Stack */}
                        <div className="mt-3">
                            <div className="text-xs text-muted-foreground mb-2.5 font-medium tracking-wide uppercase">{techStackText}</div>
                            <div className="flex flex-wrap gap-1.5" role="list" aria-label={`Technologies used at ${exp.company}`}>
                                {exp.technologies.map((tech: string, i: number) => (
                                    <span
                                        key={i}
                                        role="listitem"
                                        className={`inline-block text-xs px-2.5 py-1.5 border rounded-full font-medium transition-colors ${getTechColor(tech)}`}
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
                <div className="flex justify-center mt-6">
                    <Button
                        onClick={handleLoadMore}
                        variant="outline"
                        size="sm"
                        className="text-sm font-medium min-w-32 px-8 border-2 border-border text-foreground hover:bg-foreground/5 dark:hover:bg-foreground/10 hover:border-foreground/40 transition-all"
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