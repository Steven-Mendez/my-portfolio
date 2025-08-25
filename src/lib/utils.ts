import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"
import { TECH_COLORS } from "@/data/tech-colors"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function getTechColor(tech: string): string {
  return TECH_COLORS[tech] || 'bg-gray-50 dark:bg-gray-950/30 text-gray-700 dark:text-gray-300 border-gray-200 dark:border-gray-800'
}
