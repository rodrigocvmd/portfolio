// src/app/projetos/page.tsx
import ProjectCard from '@/components/ProjectCard';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Meus Projetos | Meu Portfólio',
  description: 'Explore uma coleção dos projetos que desenvolvi.',
};

// Dados para todos os projetos
const allProjects = [
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

export default function ProjetosPage() {
  return (
    <div className="space-y-12 sm:space-y-16">
      <header className="container mx-auto px-4 pt-8 text-center sm:px-6 lg:px-8">
        <h1 className="font-heading text-4xl font-bold text-light-text dark:text-dark-text sm:text-5xl md:text-6xl 3xl:text-7xl">
          Meus Projetos
        </h1>
        <p className="mx-auto mt-4 max-w-3xl text-lg text-light-text/80 dark:text-dark-text/80 sm:text-xl 3xl:text-2xl">
          Aqui você encontra uma seleção dos trabalhos que desenvolvi, demonstrando minhas habilidades e paixão por criar soluções digitais.
        </p>
      </header>

      {/* TODO: Funcionalidade de Filtros (Planejada) */}

      <section className="container mx-auto px-4 sm:px-6 lg:px-8">
        {allProjects.length > 0 ? (
          // Grid adaptável que pode crescer para mais colunas em telas muito grandes
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:gap-10">
            {allProjects.map((project) => (
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
            ))}
          </div>
        ) : (
          <p className="text-center text-lg text-light-text dark:text-dark-text">
            Ainda não adicionei projetos aqui. Volte em breve para novidades!
          </p>
        )}
      </section>
    </div>
  );
}