"use client";

/**
 * Minimal client component that renders a localized parenthetical string
 * describing the visitor's time difference relative to Managua, Nicaragua.
 * Logic is delegated to `formatRelativeManagua` in `@/lib/timezone`.
 */

import { useEffect, useState } from "react";
import { formatRelativeManagua } from "@/lib/timezone";

/**
 * Props for `TimeOffset`.
 * - baseTimeZone: IANA zone to compare against (defaults to America/Managua)
 * - locale: language hint (auto-falls back to document lang)
 * - className: optional styling container class
 */
interface TimeOffsetProps {
    baseTimeZone?: string;
    locale?: string;
    className?: string;
}

/**
 * Renders the formatted offset string or nothing if it cannot be computed (SSR / no TZ).
 */
export default function TimeOffset({ baseTimeZone = "America/Managua", locale, className }: TimeOffsetProps) {
    const [text, setText] = useState<string>("");

    // Compute after mount so client pathname & document.lang are accurate.
    useEffect(() => {
        const value = formatRelativeManagua(baseTimeZone, locale);
        setText(value);
    }, [baseTimeZone, locale]);

    if (!text) return null; // avoid hydration mismatch by rendering nothing on SSR
    return <span className={className}>{text}</span>;
}
