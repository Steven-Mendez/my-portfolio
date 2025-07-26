import { MetadataRoute } from 'next'
import { env } from '@/lib/env'

// Required for static export
export const dynamic = 'force-static'
export const revalidate = false

export default function sitemap(): MetadataRoute.Sitemap {
    const baseUrl = env.NEXT_PUBLIC_SITE_URL

    return [
        {
            url: baseUrl,
            lastModified: new Date(),
            changeFrequency: 'monthly',
            priority: 1,
        },
        {
            url: `${baseUrl}/en`,
            lastModified: new Date(),
            changeFrequency: 'monthly',
            priority: 1,
        },
        {
            url: `${baseUrl}/es`,
            lastModified: new Date(),
            changeFrequency: 'monthly',
            priority: 1,
        },
    ]
} 