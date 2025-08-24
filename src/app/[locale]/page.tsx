import HeroSection from '@/components/hero-section'
import ProjectsSection from '@/components/projects-section'
import ExperienceSection from '@/components/experience-section'
import Footer from '@/components/footer'
import FloatingControls from '@/components/floating-controls'
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
  <div className="min-h-screen bg-background transition-colors">
      <div className="max-w-4xl mx-auto px-3 sm:px-4 py-8 sm:py-12">
        <HeroSection data={data} />
      </div>
      <div className="max-w-4xl mx-auto px-3 sm:px-4">
        <ProjectsSection data={data} />
        <ExperienceSection data={data} />
        <Footer />
      </div>

      {/* Floating Controls */}
      <FloatingControls />
    </div>
  )
} 