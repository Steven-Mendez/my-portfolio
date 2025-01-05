"use client";

import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { useEffect, useState } from "react";
import Navbar from "@/components/navbar";
import { motion } from "framer-motion";
import { useLanguage } from "@/contexts/LanguageContext";

const content = {
  en: {
    title: "Steven Mendez",
    subtitle: "Designing and delivering reliable software for modern needs",
    cta: "Explore My Code",
    skills: [
      "+2 Years Experience",
      ".NET",
      "REST API",
      "Design Patterns",
      "SQL",
      "React",
    ],
  },
  es: {
    title: "Steven Méndez",
    subtitle:
      "Diseñando y entregando software confiable para necesidades modernas",
    cta: "Explora Mi Código",
    skills: [
      "+2 Años de Experiencia",
      ".NET",
      "API REST",
      "Patrones de Diseño",
      "SQL",
      "React",
    ],
  },
};

export default function Hero() {
  const [text, setText] = useState("");
  const { language } = useLanguage();
  const { title, subtitle, cta, skills } = content[language];

  useEffect(() => {
    let currentIndex = 0;
    const intervalId = setInterval(() => {
      if (currentIndex <= subtitle.length) {
        setText(subtitle.slice(0, currentIndex));
        currentIndex++;
      } else {
        clearInterval(intervalId);
      }
    }, 50);

    return () => clearInterval(intervalId);
  }, [subtitle]);

  return (
    <section
      className="relative w-full min-h-screen hero-gradient"
      aria-labelledby="hero-heading"
    >
      <Navbar />
      <div className="flex items-center justify-center min-h-screen">
        <div className="container px-4 md:px-6 z-10">
          <div className="flex flex-col items-center space-y-8 text-center">
            <motion.div
              className="space-y-4"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <h1
                id="hero-heading"
                className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl/none bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-300 terminal-text text-shadow"
              >
                {title}
              </h1>
              <p className="mx-auto max-w-[700px] text-gray-300 md:text-xl lg:text-2xl terminal-text text-shadow">
                {text}
              </p>
            </motion.div>
            <motion.div
              className="w-full max-w-sm space-y-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <Button
                onClick={() => {
                  window.scrollTo(0, 0);
                  window.location.href = "/projects";
                }}
                className="w-full max-w-md primary-gradient hover:hover-gradient group"
              >
                {cta}
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </motion.div>
            <motion.div
              className="flex flex-wrap justify-center gap-4 text-sm text-gray-400"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.6 }}
            >
              {skills.map((skill, index) => (
                <span key={index}>
                  {skill}
                  {index < skills.length - 1 && (
                    <span className="hidden sm:inline mx-2">•</span>
                  )}
                </span>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
      <div
        className="absolute inset-0 bg-grid-white/[0.02] bg-[size:50px_50px]"
        aria-hidden="true"
      />
    </section>
  );
}
