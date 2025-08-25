/**
 * Time zone offset utilities.
 * NOTE: User time zone detection (`Intl.DateTimeFormat().resolvedOptions().timeZone`)
 * is only reliable in the browser; on the server it reflects the server's zone.
 * Use these helpers inside client components (or guard usage) when you need
 * the visitor's local time zone.
 */

/**
 * Normalized offset data between the visitor's zone and a base zone.
 * deltaHours > 0 means the visitor is ahead (east) of the base zone.
 */
interface OffsetComputation {
    deltaHours: number;
    userTimeZone: string;
    baseOffsetMin: number;
    userOffsetMin: number;
}

/**
 * Returns the offset minutes for a given IANA timezone relative to UTC at a given Date.
 * Implementation reconstructs the same instant formatted in that timezone and interprets it as UTC.
 */
function getOffsetMinutes(tz: string, date = new Date()): number {
    const dtf = new Intl.DateTimeFormat("en-US", {
        timeZone: tz,
        hour12: false,
        year: "numeric",
        month: "2-digit",
        day: "2-digit",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
    });
    const parts = dtf.formatToParts(date).reduce<Record<string, string>>((acc, p) => {
        if (p.type !== "literal") acc[p.type] = p.value;
        return acc;
    }, {});
    const iso = `${parts.year}-${parts.month}-${parts.day}T${parts.hour}:${parts.minute}:${parts.second}.000Z`;
    const asDate = new Date(iso);
    return (asDate.getTime() - date.getTime()) / 60000; // minutes
}

/**
 * Computes the hour delta between the user's timezone and the provided base timezone.
 * Returns null if the user timezone cannot be resolved (e.g., server-side render).
 */
function computeOffset(baseTimeZone: string): OffsetComputation | null {
    try {
        // Browser-only user TZ detection safeguard
        if (typeof Intl === "undefined") return null;
        const userTimeZone = Intl.DateTimeFormat().resolvedOptions().timeZone;
        if (!userTimeZone) return null;
        const now = new Date();
        const baseOffsetMin = getOffsetMinutes(baseTimeZone, now);
        const userOffsetMin = getOffsetMinutes(userTimeZone, now);
        const deltaMinutes = baseOffsetMin - userOffsetMin;
        const deltaHours = Math.round((deltaMinutes / 60) * 10) / 10;
        return { deltaHours, userTimeZone, baseOffsetMin, userOffsetMin };
    } catch {
        return null;
    }
}

/**
 * Short, localized parenthetical string for the visitor's offset
 * relative to a base time zone (e.g., Managua). Returns "" if it
 * can't be computed on the client.
 *
 * Examples (ES / EN):
 *   (misma hora)           / (same time)
 *   (+1 h adelante)        / (+1 h ahead)
 *   (-30 min atrás)        / (-30 min behind)
 *   (+5 h 45 min adelante) / (+5 h 45 min ahead)
 *   (-2 h atrás)           / (-2 h behind)
 */
export function formatRelativeManagua(baseTimeZone: string, locale?: string): string {
    const result = computeOffset(baseTimeZone);
    if (!result) return "";

    // Language resolution: explicit → <html lang> → URL (/es|/en) → browser
    const urlSeg = (typeof window !== "undefined")
        ? window.location.pathname.split("/")[1]
        : "";
    const docLang = (typeof document !== "undefined" && document.documentElement?.lang) || "";
    const navLang = (typeof navigator !== "undefined" && navigator.language) || "";

    // Order changed to prioritize explicit prop, then URL segment, then <html lang>, then browser.
    const langSource = (locale || (urlSeg === "es" || urlSeg === "en" ? urlSeg : "") || docLang || navLang || "en").toLowerCase();
    const isEs = langSource.startsWith("es");

    // Minutes (handle 30/45-minute time zones); smooth tiny jitter (<5 min)
    let deltaMin = Math.round(result.deltaHours * 60);
    if (Math.abs(deltaMin) < 5) return isEs ? "(misma hora)" : "(same time)";

    const ahead = deltaMin > 0;
    const sign = ahead ? "+" : "-"; // plain ASCII minus for readability
    deltaMin = Math.abs(deltaMin);

    const h = Math.floor(deltaMin / 60);
    const m = deltaMin % 60;

    const parts: string[] = [];
    if (h) parts.push(`${h} h`);
    if (m) parts.push(`${m} min`);

    const amount = parts.join(" ");
    return isEs
        ? `(${sign}${amount} ${ahead ? "adelante" : "atrás"})`
        : `(${sign}${amount} ${ahead ? "ahead" : "behind"})`;
}
