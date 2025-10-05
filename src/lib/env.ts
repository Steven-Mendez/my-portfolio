export const env = {
    NEXT_PUBLIC_SITE_URL: process.env.NEXT_PUBLIC_SITE_URL || "https://steven-mendez.netlify.app",
} as const;

// Validate required environment variables
export function validateEnv() {
    const requiredVars = ['NEXT_PUBLIC_SITE_URL'] as const;

    for (const varName of requiredVars) {
        if (!process.env[varName]) {
            console.warn(`⚠️  Warning: ${varName} is not set. Using default value.`);
        }
    }
}

// Call validation in development
if (process.env.NODE_ENV === 'development') {
    validateEnv();
}
