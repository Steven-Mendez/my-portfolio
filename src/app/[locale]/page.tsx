import HeroSection from '@/components/hero-section'
import ProjectsSection from '@/components/projects-section'
import ExperienceSection from '@/components/experience-section'
import Footer from '@/components/footer'
import Sidebar from '@/components/sidebar'
import Chatbot from '@/components/chatbot'
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
      <main className="max-w-4xl mx-auto px-3 sm:px-4 py-6 sm:py-10 space-y-12 sm:space-y-14">
        <HeroSection data={data} />
        <ProjectsSection data={data} />
        <ExperienceSection data={data} />
        <Footer locale={locale} footer={data.footer} />
      </main>
      <Sidebar locale={locale} />
      <Chatbot locale={locale} />
    </div>
  )
} 