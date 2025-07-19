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

      {/* Seção Hero */}
      <section className="container mx-auto px-4 pt-10 pb-8 text-center sm:px-6 md:pt-12 md:pb-10 lg:px-8 2xl:pt-16">
        <div className="mx-auto max-w-5xl">
          <div className="relative mx-auto mb-5 h-32 w-32 overflow-hidden rounded-full shadow-lg bg-light-secondary dark:bg-dark-secondary sm:h-36 sm:w-36 2xl:h-40 2xl:w-40">
            <Image
              src="/images/fotoPerfil.png"
              alt="Foto de Perfil de Rodrigo Carvalho"
              fill
              className="object-cover"
              priority
              sizes="(max-width: 640px) 8rem, 9rem, 10rem"
            />
          </div>

          <h1 className="font-heading text-4xl font-bold text-light-text dark:text-dark-text sm:text-5xl md:text-6xl 2xl:text-7xl">
            Rodrigo Carvalho
          </h1>
          <p className="mt-3 font-medium text-xl text-light-accent dark:text-dark-accent sm:text-2xl 2xl:text-3xl">
            Desenvolvedor Web Full-Stack
          </p>
          <p className="mt-1.5 font-medium text-lg text-light-accent/80 dark:text-dark-accent/80 sm:text-xl 2xl:text-2xl">
            Graduando em Ciência da Computação
          </p>
          <div className="mx-auto mt-5 max-w-3xl space-y-1.5 text-base text-light-text dark:text-dark-text sm:text-lg 2xl:text-xl">
            <p>
              Bem-vindo(a) ao meu portfólio.
            </p>
            <p>
              Explore meus projetos, conheça minha trajetória e sinta-se à vontade para entrar em contato!
            </p>
          </div>

          <div className="mt-8 flex justify-center">
            <Link
              href="/projetos"
              className="inline-block rounded-lg bg-light-accent px-7 py-2.5 font-semibold text-dark-primary transition-colors hover:bg-opacity-80 text-base sm:text-lg 2xl:px-8 2xl:py-3 2xl:text-xl"
            >
              Veja Meus Projetos
            </Link>
          </div>
        </div>
      </section>

      {/* Seção Sobre Mim (Resumo) */}
      <section id="sobre-resumo" className="w-full bg-light-secondary py-12 shadow-md dark:bg-dark-secondary sm:py-16 2xl:py-20">
        <div className="container mx-auto px-4 text-center sm:px-6 lg:px-8">
          <div className="mx-auto max-w-4xl">
            <h2 className="font-heading text-3xl font-bold text-light-text dark:text-dark-text sm:text-4xl 2xl:text-5xl">
              Um Pouco Sobre Mim
            </h2>
            <p className="mt-5 text-base leading-relaxed text-light-text dark:text-dark-text sm:text-lg 2xl:text-xl">
              Desenvolvedor Full Stack apaixonado por transformar ideias em soluções web intuitivas e eficientes. Com uma transição de carreira do Direito (UnB) para a Ciência da Computação, trago um olhar analítico e dedicação à construção de software de qualidade, utilizando tecnologias como JavaScript/TypeScript, React e Node.js. Busco ativamente minha primeira oportunidade para aplicar e expandir minhas habilidades em projetos desafiadores.
            </p>
            <div className="mt-6">
              <Link
                href="/sobre"
                className="font-medium text-light-accent hover:underline dark:text-dark-accent text-base sm:text-lg 2xl:text-xl"
              >
                Conheça Minha História &rarr;
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
