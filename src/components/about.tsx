"use client";

import Image from "next/image";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useLanguage } from "@/contexts/LanguageContext";

const content = {
  es: {
    title: "Sobre Mí",
    name: "Steven Méndez",
    role: "Especialista en Desarrollo Backend",
    description: [
      "Soy un desarrollador backend .NET con más de 2 años de experiencia profesional, y una sólida base construida a partir de varios años de desarrollo práctico no profesional. Me especializo en la creación de aplicaciones escalables y eficientes del lado del servidor, con experiencia en el desarrollo de APIs RESTful robustas, optimización del rendimiento de bases de datos e implementación de principios de arquitectura limpia.",
      "Cuento con un historial comprobado de entregar soluciones que mejoran la eficiencia operativa, como la optimización de consultas, y la capacitación de desarrolladores junior en fundamentos del backend. Mi pasión por resolver problemas complejos y mi compromiso con la mejora continua me impulsan a crear sistemas backend confiables, diseñados para satisfacer las demandas de las aplicaciones modernas.",
      "Siempre en busca de nuevos retos, quiero seguir creciendo como profesional y contribuir a proyectos innovadores.",
    ],
    imageUrl: "/foto.jpeg",
  },
  en: {
    title: "About Me",
    name: "Steven Mendez",
    role: "Backend Development Specialist",
    description: [
      "As a .NET Backend Developer with over 2 years of professional experience, and a solid foundation built over several years of non-professional development, I specialize in building scalable and efficient server-side applications, with expertise in developing robust RESTful APIs, optimizing database performance, and implementing clean architecture principles.",
      "I have a proven track record of delivering solutions that enhance operational efficiency, such as optimizing queries, and mentoring junior developers in backend fundamentals. My passion for solving complex problems and my commitment to continuous improvement drive me to create reliable backend systems tailored to the demands of modern applications.",
      "I am always looking for new challenges that allow me to continue growing as a professional and contribute value to innovative projects.",
    ],
    imageUrl: "/foto.jpeg",
  },
};

export default function About() {
  const { language } = useLanguage();
  const { title, name, role, description, imageUrl } = content[language];

  return (
    <section id="about" className="w-full py-8 md:py-12 lg:py-16 matrix-bg">
      <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-8 text-primary terminal-text">
        {title}
      </h2>
      <div className="container px-4 md:px-6">
        <div className="grid gap-6 lg:grid-cols-2 items-center">
          <div className="flex justify-center lg:justify-end">
            <div className="relative w-64 h-64 md:w-80 md:h-80 overflow-hidden rounded-full border-4 border-primary">
              <Image
                src={imageUrl}
                alt={`Portrait of ${name}`}
                layout="fill"
                objectFit="cover"
                className="transition-transform duration-300 hover:scale-110"
              />
            </div>
          </div>
          <Card className="bg-card/50 backdrop-blur-sm border-primary/20">
            <CardHeader>
              <CardTitle className="text-2xl font-bold text-primary">
                {role}
              </CardTitle>
            </CardHeader>
            <CardContent>
              {description.map((paragraph, index) => (
                <p key={index} className="text-muted-foreground mb-4">
                  {paragraph}
                </p>
              ))}
            </CardContent>
          </Card>
        </div>
      </div>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Person",
            name: name,
            jobTitle: role,
            description: description.join(" "),
            image: imageUrl,
          }),
        }}
      />
    </section>
  );
}
