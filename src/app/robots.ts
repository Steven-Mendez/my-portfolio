import { MetadataRoute } from 'next'
import { env } from '@/lib/env'

// Required for static export
export const dynamic = 'force-static'
export const revalidate = false

export default function robots(): MetadataRoute.Robots {
    const baseUrl = env.NEXT_PUBLIC_SITE_URL

    return {
        rules: {
            userAgent: '*',
            allow: '/',
            disallow: ['/private/', '/admin/'],
        },
        sitemap: `${baseUrl}/sitemap.xml`,
    }
} 