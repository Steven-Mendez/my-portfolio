import Footer from "@/components/footer";
import Hero from "@/components/hero";
import Navbar from "@/components/navbar";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="flex min-h-screen flex-col items-center justify-between">
        <Hero />
      </main>
      <Footer />
    </>
  );
}
