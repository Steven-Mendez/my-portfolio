import HeroSection from '@/components/hero-section'
import ProjectsSection from '@/components/projects-section'
import ExperienceSection from '@/components/experience-section'
import Footer from '@/components/footer'
import { ThemeToggle } from '@/components/theme-toggle'
import { SimpleLanguageToggle } from '@/components/simple-language-toggle'
import { getPortfolioData } from '@/data/portfolio'

// Generate static params for static export
export function generateStaticParams() {
    return [
        { locale: 'en' },
        { locale: 'es' }
    ];
}

interface PageProps {
  params: Promise<{ locale: string }>
}

export default async function HomePage({ params }: PageProps) {
  const { locale } = await params;
  const data = getPortfolioData(locale);

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors">
      <div className="max-w-4xl mx-auto px-3 sm:px-4 py-8 sm:py-12">
        <HeroSection data={data} />
      </div>
      <div className="max-w-4xl mx-auto px-3 sm:px-4">
        <ProjectsSection data={data} />
        <ExperienceSection data={data} />
        <Footer />
      </div>

      {/* Floating Controls */}
      <div className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-50 flex flex-col gap-3">
        {/* Language Toggle */}
        <div className="bg-white dark:bg-gray-800 rounded-full shadow-lg w-12 h-12 flex items-center justify-center dark:shadow-gray-700/30 ring-1 ring-gray-200 dark:ring-gray-700 transition-shadow duration-200 backdrop-blur-sm hover:shadow-xl">
          <SimpleLanguageToggle />
        </div>
        {/* Theme Toggle */}
        <div className="bg-white dark:bg-gray-800 rounded-full shadow-lg dark:shadow-gray-700/30 ring-1 ring-gray-200 dark:ring-gray-700 transition-shadow duration-200 backdrop-blur-sm hover:shadow-xl">
          <ThemeToggle />
        </div>
      </div>
    </div>
  )
} 