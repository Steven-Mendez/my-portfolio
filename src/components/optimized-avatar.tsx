"use client";

import Image from "next/image";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { cn } from "@/lib/utils";

interface OptimizedAvatarProps {
	/** Base filename without extension, located under /public */
	name?: string; // person name for alt + fallback initials
	alt: string;
	/** Pixel size (width=height) to render. Responsive handled via sizes prop. */
	size?: number;
	/** Provide explicit blurDataURL to avoid extra generation cost */
	blurDataURL?: string;
	className?: string;
	/** Initials for fallback */
	fallback?: string;
	priority?: boolean;
	/** sizes attribute to guide responsive selection */
	sizes?: string;
}

// Helper to derive initials if not provided
function deriveInitials(fullName?: string) {
	if (!fullName) return "";
	const parts = fullName.trim().split(/\s+/).slice(0, 3);
	return parts.map(p => p[0]).join("").toUpperCase();
}

/**
 * Renders an avatar using next/image with AVIF/WebP/PNG fallbacks by relying on
 * the same base filename placed in /public as .avif, .webp, .png.
 * Next/Image will choose the best format the browser supports automatically when
 * provided the "src" of the most broadly compatible version (PNG); modern formats
 * can be preprocessed into the same path if using next@13+ (automatic). If you want
 * explicit <picture> sources you could extend this, but generally Next handles format
 * negotiation.
 */
export default function OptimizedAvatar({
	name,
	alt,
	size = 256,
	blurDataURL,
	className,
	fallback,
	priority = true,
	sizes = "(min-width: 1280px) 288px, (min-width: 768px) 256px, 160px",
}: OptimizedAvatarProps) {
	const initials = fallback || deriveInitials(name);
	// We'll serve the PNG as src; Next will create optimized variants (including webp/avif) at build.
	// Ensure you have /public/image.avif and /public/image.webp present for best results.
	const src = "/image.png"; // maintain original naming; alt formats share basename.

	return (
		<Avatar
			className={cn(
				"relative overflow-hidden rounded-full ring-1 ring-border/20 dark:ring-border/40",
				// Ensure explicit pixel sizing to reserve layout space
				`w-[${size}px] h-[${size}px]`,
				className
			)}
			style={{ backgroundColor: "var(--avatar-background)" }}
		>
			<Image
				src={src}
				alt={alt}
				fill
				priority={priority}
				sizes={sizes}
				placeholder={blurDataURL ? 'blur' : undefined}
				blurDataURL={blurDataURL}
				className="object-cover select-none"
			/>
			<AvatarFallback
				className="text-3xl"
				style={{
					backgroundColor: "var(--avatar-background)",
					color: "var(--foreground)",
				}}
			>
				{initials}
			</AvatarFallback>
		</Avatar>
	);
}

