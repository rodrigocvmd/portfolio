// src/app/page.tsx
import Image from 'next/image';
import Link from 'next/link';
import ProjectCard from '@/components/ProjectCard';

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

export default function HomePage() {
  return (
    <div className="space-y-12 sm:space-y-16">

      {/* Seção Projetos */}
      <section id="projetos" className="w-full bg-light-secondary py-12 shadow-md dark:bg-dark-secondary sm:py-16 2xl:py-20">
        <div className="container mx-auto px-4 text-center sm:px-6 lg:px-8">
          <div className="mx-auto max-w-4xl">
            <h2 className="font-heading text-3xl font-bold text-light-text dark:text-dark-text sm:text-4xl 2xl:text-5xl">
              Explore Meus Projetos
            </h2>
            <p className="mt-5 text-base leading-relaxed text-light-text dark:text-dark-text sm:text-lg 2xl:text-xl">
              Veja todos os meus projetos, as tecnologias e os métodos que utilizei para construí-los.
            </p>
            <div className="mt-6">
              <Link
                href="/projetos"
                className="inline-block rounded-lg bg-light-accent px-7 py-2.5 font-semibold text-dark-primary transition-colors hover:bg-opacity-80 text-base sm:text-lg 2xl:px-8 2xl:py-3 2xl:text-xl"
              >
                Veja Meus Projetos
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Seção Currículo */}
      <section id="curriculo" className="w-full py-12 sm:py-16 2xl:py-20">
        <div className="container mx-auto px-4 text-center sm:px-6 lg:px-8">
          <div className="mx-auto max-w-4xl">
            <h2 className="font-heading text-3xl font-bold text-light-text dark:text-dark-text sm:text-4xl 2xl:text-5xl">
              Consulte Meu Currículo
            </h2>
            <p className="mt-5 text-base leading-relaxed text-light-text dark:text-dark-text sm:text-lg 2xl:text-xl">
              Acesse meu currículo completo para ver mais detalhes sobre minha formação, experiência e habilidades.
            </p>
            <div className="mt-6">
              <Link
                href="/curriculo.pdf" // Assumindo que o currículo está em public/curriculo.pdf
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block rounded-lg border-2 border-light-accent px-7 py-2.5 font-semibold text-light-accent transition-colors hover:bg-light-accent hover:text-dark-primary dark:border-dark-accent dark:text-dark-accent dark:hover:bg-dark-accent dark:hover:text-dark-primary text-base sm:text-lg 2xl:px-8 2xl:py-3 2xl:text-xl"
              >
                Veja Meu Currículo
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Seção Contato */}
      <section id="contato" className="w-full bg-light-secondary py-12 shadow-md dark:bg-dark-secondary sm:py-16 2xl:py-20">
        <div className="container mx-auto px-4 text-center sm:px-6 lg:px-8">
          <div className="mx-auto max-w-4xl">
            <h2 className="font-heading text-3xl font-bold text-light-text dark:text-dark-text sm:text-4xl 2xl:text-5xl">
              Entre em Contato
            </h2>
            <p className="mt-5 text-base leading-relaxed text-light-text dark:text-dark-text sm:text-lg 2xl:text-xl">
              Tem alguma pergunta ou proposta? Sinta-se à vontade para entrar em contato comigo.
            </p>
            <div className="mt-6">
              <Link
                href="/contato"
                className="inline-block rounded-lg bg-light-accent px-7 py-2.5 font-semibold text-dark-primary transition-colors hover:bg-opacity-80 text-base sm:text-lg 2xl:px-8 2xl:py-3 2xl:text-xl"
              >
                Fale Comigo
              </Link>
            </div>
          </div>
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
    </div>
  );
}
