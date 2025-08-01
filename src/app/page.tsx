// src/app/page.tsx
'use client';

import Image from 'next/image';
import Link from 'next/link';
import ProjectCard from '@/components/ProjectCard';
import TechTag from '@/components/TechTag';
import { useRef, useState, useEffect } from 'react';

const featuredProjects = [
  {
    title: "Marketplace de Imóveis (Full Stack)",
    description: "Plataforma completa para listagem de imóveis com CRUD, autenticação de usuários (Email/Senha, Google OAuth) e interface responsiva.",
    imageUrl: "/images/imgMarketPlaceImoveis.png",
    technologies: ["React", "Node.js", "TailwindCSS", "Git", "DaisyUI", "JavaScript"],
    projectSlug: "projeto-marketplace-imoveis",
    liveUrl: "https://marketplace-de-imoveis.vercel.app/",
    repoUrl: "https://github.com/rodrigocvmd/marketplace-de-imoveis",
  },
  {
    title: "Sistema de Suporte ao Usuário (Full Stack)",
    description: "Aplicação de tickets de suporte com backend robusto (API RESTful) e frontend interativo para gerenciamento de solicitações.",
    imageUrl: "/images/imgSuporteUsuario.png",
    technologies: ["Node.js", "Express", "MongoDB", "JWT"],
    projectSlug: "projeto-suporte-usuario",
    liveUrl: "https://suporte-ao-usuario.onrender.com/",
    repoUrl: "https://github.com/rodrigocvmd/suporte-ao-usuario",
  },
];

const mainSkills = ["TypeScript", "React", "Next.js", "Node.js", "Tailwind CSS", "MongoDB", "PostgreSQL", "Git", "JavaScript", "HTML5", "CSS3", "Express.js"];

export default function HomePage() {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [isHovering, setIsHovering] = useState(false);

  const handleScroll = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const scrollAmount = direction === 'left' ? -200 : 200;
      scrollContainerRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  return (
    <div className="space-y-12 sm:space-y-16">

      {/* Hero Section */}
      <section className="w-full py-16 sm:py-20 2xl:py-24">
        <div className="container mx-auto px-4 text-center sm:px-6 lg:px-8">
          <div className="mx-auto max-w-4xl">
            <h1 className="font-heading text-4xl font-bold text-light-text dark:text-dark-text sm:text-5xl md:text-6xl 2xl:text-7xl">
              Bem-vindo ao Meu Portfólio
            </h1>
            <p className="mt-5 text-base leading-relaxed text-light-text dark:text-dark-text sm:text-lg 2xl:text-xl">
              Um desenvolvedor Full Stack apaixonado por criar soluções web modernas e funcionais. Explore meus projetos e conheça minhas habilidades.
            </p>
          </div>
        </div>
      </section>

      {/* Seção Sobre Mim */}
      <section id="sobre-mim" className="container mx-auto w-full rounded-lg bg-light-secondary p-8 shadow-md dark:bg-dark-secondary sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="font-heading text-3xl font-bold text-light-text dark:text-dark-text sm:text-4xl">
            Um Pouco Sobre Mim
          </h2>
          <p className="mt-5 text-base leading-relaxed text-light-text dark:text-dark-text sm:text-lg 2xl:text-xl">
            Em transição de carreira do Direito para a tecnologia, sou um desenvolvedor Full Stack focado em criar soluções web eficientes. Minha jornada é movida pela curiosidade e pelo desejo de construir aplicações de qualidade, combinando uma base analítica sólida com a paixão por programação.
          </p>
        </div>
      </section>

      {/* Seção Destaque de Projetos */}
      <section id="destaque-projetos" className="py-12 sm:py-16 2xl:py-20">
        <div className="container mx-auto px-4 text-center sm:px-6 lg:px-8">
          <h2 className="font-heading text-3xl font-bold text-light-text dark:text-dark-text sm:text-4xl 2xl:text-5xl">
            Projetos em Destaque
          </h2>
          <div className="mx-auto mt-10 grid max-w-lg grid-cols-1 gap-8 md:max-w-5xl md:grid-cols-2 lg:gap-10">
            {featuredProjects.length > 0 ? (
              featuredProjects.map((project) => (
                <ProjectCard
                  key={project.projectSlug}
                  title={project.title}
                  description={project.description}
                  imageUrl={project.imageUrl}
                  technologies={project.technologies}
                  projectSlug={project.projectSlug}
                  liveUrl={project.liveUrl}
                  repoUrl={project.repoUrl}
                />
              ))
            ) : (
              <p className="text-light-text dark:text-dark-text">Nenhum projeto em destaque no momento. Volte em breve!</p>
            )}
          </div>
          <div className="mt-10">
            <Link
              href="/projetos"
              className="inline-block rounded-lg border-2 border-light-accent px-7 py-2.5 font-semibold text-light-accent transition-colors hover:bg-light-accent hover:text-dark-primary dark:border-dark-accent dark:text-dark-accent dark:hover:bg-dark-accent dark:hover:text-dark-primary text-base sm:text-lg 2xl:px-8 2xl:py-3 2xl:text-xl"
            >
              Ver Todos os Projetos
            </Link>
          </div>
        </div>
      </section>

      {/* Seção Habilidades */}
      <section id="habilidades" className="container mx-auto w-full rounded-lg bg-light-secondary p-8 shadow-md dark:bg-dark-secondary sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="font-heading text-3xl font-bold text-light-text dark:text-dark-text sm:text-4xl">
            Principais Habilidades
          </h2>
        </div>
        <div 
          className="relative mt-6 flex items-center justify-center"
          onMouseEnter={() => setIsHovering(true)}
          onMouseLeave={() => setIsHovering(false)}
        >
          <button
            onClick={() => handleScroll('left')}
            onMouseEnter={() => handleScroll('left')}
            className="absolute -left-4 z-10 rounded-full bg-white/80 p-2 shadow-md transition-opacity hover:bg-white dark:bg-dark-primary/80 dark:hover:bg-dark-primary"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-light-text dark:text-dark-text" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" /></svg>
          </button>
          <div
            ref={scrollContainerRef}
            className="flex w-full items-center gap-4 overflow-x-hidden"
          >
            <div className={`flex gap-4 ${isHovering ? '' : 'animate-scroll'}`}>
              {mainSkills.map(skill => (
                <div key={skill} className="flex-shrink-0 scale-110">
                  <TechTag name={skill} />
                </div>
              ))}
              {/* Duplicate for seamless scroll */}
              {mainSkills.map(skill => (
                <div key={`${skill}-2`} className="flex-shrink-0 scale-110">
                  <TechTag name={skill} />
                </div>
              ))}
            </div>
          </div>
          <button
            onClick={() => handleScroll('right')}
            onMouseEnter={() => handleScroll('right')}
            className="absolute -right-4 z-10 rounded-full bg-white/80 p-2 shadow-md transition-opacity hover:bg-white dark:bg-dark-primary/80 dark:hover:bg-dark-primary"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-light-text dark:text-dark-text" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
          </button>
        </div>
      </section>

      {/* Seções Currículo e Contato lado a lado */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 md:gap-10">
          
          <section id="curriculo" className="flex h-full min-h-[300px] w-full flex-col justify-center rounded-lg border-2 border-light-secondary p-8 text-center shadow-md dark:border-dark-secondary">
            <h2 className="font-heading text-3xl font-bold text-light-text dark:text-dark-text sm:text-4xl">
              Consulte Meu Currículo
            </h2>
            <p className="mt-4 flex-grow text-base leading-relaxed text-light-text dark:text-dark-text sm:text-lg">
              Acesse meu currículo completo para ver mais detalhes sobre minha formação, experiência e habilidades.
            </p>
            <div className="mt-6">
              <Link
                href="/curriculo.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block rounded-lg border-2 border-light-accent px-7 py-2.5 font-semibold text-light-accent transition-colors hover:bg-light-accent hover:text-dark-primary dark:border-dark-accent dark:text-dark-accent dark:hover:bg-dark-accent dark:hover:text-dark-primary text-base sm:text-lg"
              >
                Veja Meu Currículo
              </Link>
            </div>
          </section>

          <section id="contato" className="flex h-full min-h-[300px] w-full flex-col justify-center rounded-lg bg-light-secondary p-8 text-center shadow-md dark:bg-dark-secondary">
            <h2 className="font-heading text-3xl font-bold text-light-text dark:text-dark-text sm:text-4xl">
              Entre em Contato
            </h2>
            <p className="mt-4 flex-grow text-base leading-relaxed text-light-text dark:text-dark-text sm:text-lg">
              Tem alguma pergunta ou proposta? Sinta-se à vontade para entrar em contato comigo.
            </p>
            <div className="mt-6">
              <Link
                href="/contato"
                className="inline-block rounded-lg bg-light-accent px-7 py-2.5 font-semibold text-dark-primary transition-colors hover:bg-opacity-80 text-base sm:text-lg"
              >
                Fale Comigo
              </Link>
            </div>
          </section>

        </div>
      </div>
    </div>
  );
}
