"use client";

import { useEffect, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { Github, ExternalLink, X } from 'lucide-react';
import { getTechColor } from '@/lib/utils';
import { Project } from '@/types';

interface ProjectDetailModalProps {
    project: (Project & { // permitimos propiedades mapeadas opcionales pre-existentes
        technologies?: string[]; // compat temporal
    }) | null;
    open: boolean;
    onClose: () => void;
    techStackText: string;
    liveDemoText: string;
    codeText: string;
    aboutProjectText: string;
}

export default function ProjectDetailModal({ project, open, onClose, techStackText, liveDemoText, codeText, aboutProjectText }: ProjectDetailModalProps) {
    const dialogRef = useRef<HTMLDivElement | null>(null);

    // Close on ESC
    useEffect(() => {
        function handleKey(e: KeyboardEvent) {
            if (e.key === 'Escape' && open) onClose();
        }
        window.addEventListener('keydown', handleKey);
        return () => window.removeEventListener('keydown', handleKey);
    }, [open, onClose]);

    // Prevent body scroll when open
    useEffect(() => {
        if (open) {
            const prev = document.body.style.overflow;
            document.body.style.overflow = 'hidden';
            return () => { document.body.style.overflow = prev; };
        }
    }, [open]);

    // Basic focus management
    useEffect(() => {
        if (open && dialogRef.current) {
            const focusable = dialogRef.current.querySelector<HTMLElement>('button, a');
            focusable?.focus();
        }
    }, [open]);

    if (!open || !project) return null;

    return (
        <div
            role="dialog"
            aria-modal="true"
            aria-label={project.title}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-6"
        >
            <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" onClick={onClose} />
            <div
                ref={dialogRef}
                className="relative w-full max-w-5xl h-[92vh] max-h-[92vh] sm:h-[90vh] sm:max-h-[90vh] bg-white dark:bg-neutral-900 rounded-3xl shadow-2xl overflow-hidden flex flex-col animate-in fade-in zoom-in-95"
            >
                {/* Close button (shared for all layouts) */}
                <div className="absolute top-3 right-3 z-20">
                    <Button size="icon" variant="ghost" className="h-8 w-8 sm:h-9 sm:w-9 bg-white/80 dark:bg-neutral-800/80 backdrop-blur-sm hover:bg-white dark:hover:bg-neutral-800" aria-label="Close" onClick={onClose}>
                        <X className="w-4 h-4 sm:w-5 sm:h-5" />
                    </Button>
                </div>
                {/* Unified layout (image always on top) */}
                <div className="flex flex-col flex-1">
                    {/* Header (image optional) */}
                    <div className="relative w-full">
                        {project.image ? (
                            <div className="relative h-52 xs:h-60 sm:h-[40vh] md:h-[45vh] xl:h-[48vh] overflow-hidden">
                                {/* eslint-disable-next-line @next/next/no-img-element */}
                                <img src={project.image} alt={project.title} className="w-full h-full object-cover" loading="lazy" />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/10 to-transparent" />
                                <div className="absolute bottom-3 sm:bottom-4 left-5 sm:left-6 right-24 sm:right-28">
                                    <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-1.5 sm:mb-2 drop-shadow-sm leading-tight">
                                        {project.title}
                                    </h2>
                                </div>
                            </div>
                        ) : (
                            <div className="px-5 sm:px-8 pt-6 sm:pt-8 pb-1.5 sm:pb-2">
                                <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-gray-100 mb-3 sm:mb-4 leading-tight">
                                    {project.title}
                                </h2>
                            </div>
                        )}
                    </div>
                    {/* Body */}
                    <div className="px-5 sm:px-8 pb-6 sm:pb-8 pt-4 sm:pt-6 md:pt-8 overflow-y-auto flex-1" id="project-modal-content">
                        <div className="grid md:grid-cols-3 gap-8 sm:gap-10 md:gap-12">
                            <div className="md:col-span-2">
                                <h3 className="text-sm sm:text-base font-semibold tracking-wide text-gray-900 dark:text-gray-100 mb-3 sm:mb-4">{aboutProjectText}</h3>
                                <p className="text-sm md:text-base leading-relaxed text-gray-600 dark:text-gray-300 mb-6 sm:mb-8 whitespace-pre-line">
                                    {project.description}
                                </p>
                                <div>
                                    <h4 className="text-xs sm:text-sm font-semibold uppercase tracking-wide text-gray-500 dark:text-gray-400 mb-2 sm:mb-3">{techStackText}</h4>
                                    <div className="flex flex-wrap gap-1.5" role="list" aria-label="Tech stack">
                                        {(project.techStack || project.technologies || []).map((t: string, i: number) => (
                                            <span
                                                key={i}
                                                role="listitem"
                                                className={`inline-block text-[10px] sm:text-xs px-2 py-1.5 border rounded-full font-medium transition-colors ${getTechColor(t)}`}
                                            >
                                                {t}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                            <div className="space-y-6 sm:space-y-8">
                                {(project.liveUrl || project.codeUrl) && (
                                    <div className="space-y-3 sm:space-y-4">
                                        {project.liveUrl && (
                                            <Button asChild className="w-full justify-center gap-2 h-10 sm:h-11 text-sm font-medium">
                                                <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                                                    <ExternalLink className="w-4 h-4" /> {liveDemoText}
                                                </a>
                                            </Button>
                                        )}
                                        {project.codeUrl && (
                                            <Button asChild variant="outline" className="w-full justify-center gap-2 h-10 sm:h-11 text-sm font-medium">
                                                <a href={project.codeUrl} target="_blank" rel="noopener noreferrer">
                                                    <Github className="w-4 h-4" /> {codeText}
                                                </a>
                                            </Button>
                                        )}
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
                {/* Desktop-specific larger title sizing handled via responsive classes above. */}
            </div>
        </div>
    );
}
