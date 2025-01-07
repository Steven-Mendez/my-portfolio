import About from "@/components/about";
import AnimatedSection from "@/components/animated-section";
import Footer from "@/components/footer";
import Hero from "@/components/hero";
import Navbar from "@/components/navbar";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="flex min-h-screen flex-col items-center justify-between">
        <Hero />
        <AnimatedSection
          id="about"
          className="w-full py-8 md:py-12 lg:py-16 matrix-bg"
        >
          <About />
        </AnimatedSection>
      </main>
      <Footer />
    </>
  );
}
