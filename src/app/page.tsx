// src/app/page.tsx
import Image from 'next/image';
import Link from 'next/link';
import ProjectCard from '@/components/ProjectCard'; // Importa o ProjectCard

// Seus dados de projetos, mantidos integralmente.
const featuredProjects = [
  {
    title: "Marketplace de Imóveis (Full Stack)",
    description: "Plataforma completa para listagem de imóveis com CRUD, autenticação de usuários (Email/Senha, Google OAuth) e interface responsiva.",
    imageUrl: "/images/imgMarketPlaceImoveis.png", // Imagem local
    technologies: ["React", "Node.js", "TailwindCSS", "Git", "DaisyUI", "JavaScript"],
    projectSlug: "projeto-marketplace-imoveis", // Slug atualizado para ser mais descritivo
    liveUrl: "https://marketplace-de-imoveis.vercel.app/",
    repoUrl: "https://github.com/rodrigocvmd/marketplace-de-imoveis",
  },
  {
    title: "Sistema de Suporte ao Usuário (Full Stack)",
    description: "Aplicação de tickets de suporte com backend robusto (API RESTful) e frontend interativo para gerenciamento de solicitações.",
    imageUrl: "/images/imgSuporteUsuario.png", // Imagem local
    technologies: ["Node.js", "Express", "MongoDB", "JWT"],
    projectSlug: "projeto-suporte-usuario", // Slug atualizado
    liveUrl: "https://suporte-ao-usuario.onrender.com/",
    repoUrl: "https://github.com/rodrigocvmd/suporte-ao-usuario",
  },
];

export default function HomePage() {
  return (
    // O div principal apenas controla o espaçamento vertical entre as seções.
    // A classe `dark-primary` foi removida daqui pois já está no body.
    <div className="space-y-20 sm:space-y-28">

      {/* Seção Hero */}
      {/* Esta seção não tem um fundo distinto, então o conteúdo fica dentro de um container que se adapta. */}
      <section className="container mx-auto px-4 pt-12 pb-8 text-center sm:px-6 md:pt-16 md:pb-12 lg:px-8">
        <div className="mx-auto max-w-4xl">
          {/* Imagem de perfil com tamanho responsivo para telas maiores */}
          <div className="relative mx-auto mb-6 h-36 w-36 overflow-hidden rounded-full shadow-lg bg-light-secondary dark:bg-dark-secondary sm:h-40 sm:w-40 3xl:h-48 3xl:w-48">
            <Image
              src="/images/fotoPerfil.png" // Sua imagem de perfil
              alt="Foto de Perfil de Rodrigo Carvalho"
              fill
              className="object-cover"
              priority // Adicionar 'priority' à sua imagem principal (LCP) é bom para o SEO e performance.
              sizes="(max-width: 640px) 9rem, 10rem"
            />
          </div>

          {/* Títulos e textos com tamanhos que escalam nos novos breakpoints */}
          <h1 className="font-heading text-4xl font-bold text-light-text dark:text-dark-text sm:text-5xl md:text-6xl 3xl:text-7xl 4xl:text-8xl">
            Rodrigo Carvalho
          </h1>
          <p className="mt-4 font-medium text-xl text-light-accent dark:text-dark-accent sm:text-2xl 3xl:text-3xl">
            Desenvolvedor Web Full-Stack
          </p>
          <p className="mt-2 font-medium text-lg text-light-accent/80 dark:text-dark-accent/80 sm:text-xl 3xl:text-2xl">
            Graduando em Ciência da Computação
          </p>
          <div className="mx-auto mt-6 max-w-2xl space-y-2 text-base text-light-text dark:text-dark-text sm:text-lg 3xl:text-xl">
            <p>
              Bem-vindo(a) ao meu portfólio.
            </p>
            <p>
              Explore meus projetos, conheça minha trajetória, navegue pelas seções para saber mais e sinta-se à vontade para entrar em contato!
            </p>
          </div>

          {/* Botão de CTA com tamanho escalável */}
          <div className="mt-10 flex justify-center">
            <Link
              href="/projetos"
              className="inline-block rounded-lg bg-light-accent px-8 py-3 font-semibold text-dark-primary transition-colors hover:bg-opacity-80 text-base sm:text-lg 3xl:px-10 3xl:py-4 3xl:text-xl"
            >
              Veja Meus Projetos
            </Link>
          </div>
        </div>
      </section>

      {/* Seção Sobre Mim (Resumo) */}
      {/* Esta seção tem um fundo. O <section> é full-width e o <div> interno é o container. */}
      <section id="sobre-resumo" className="w-full bg-light-secondary py-16 shadow-md dark:bg-dark-secondary sm:py-20 3xl:py-24">
        <div className="container mx-auto px-4 text-center sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl">
            <h2 className="font-heading text-3xl font-bold text-light-text dark:text-dark-text sm:text-4xl 3xl:text-5xl">
              Um Pouco Sobre Mim
            </h2>
            <p className="mt-6 text-base leading-relaxed text-light-text dark:text-dark-text sm:text-lg 3xl:text-xl">
              Desenvolvedor Full Stack apaixonado por transformar ideias em soluções web intuitivas e eficientes. Com uma transição de carreira do Direito (UnB) para a Ciência da Computação, trago um olhar analítico e dedicação à construção de software de qualidade, utilizando tecnologias como JavaScript/TypeScript, React e Node.js. Busco ativamente minha primeira oportunidade para aplicar e expandir minhas habilidades em projetos desafiadores.
            </p>
            <div className="mt-8">
              <Link
                href="/sobre"
                className="font-medium text-light-accent hover:underline dark:text-dark-accent text-base sm:text-lg 3xl:text-xl"
              >
                Conheça Minha História &rarr;
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Seção Destaque de Projetos */}
      {/* O container interno limita a largura do conteúdo para uma boa apresentação do grid. */}
      <section id="destaque-projetos" className="py-16 sm:py-20 3xl:py-24">
        <div className="container mx-auto px-4 text-center sm:px-6 lg:px-8">
          <h2 className="font-heading text-3xl font-bold text-light-text dark:text-dark-text sm:text-4xl 3xl:text-5xl">
            Projetos em Destaque
          </h2>
          {/* O grid pode ter um espaçamento maior em telas grandes. */}
          <div className="mx-auto mt-12 grid max-w-lg grid-cols-1 gap-8 md:max-w-none md:grid-cols-2 lg:gap-10">
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
          <div className="mt-12">
            <Link
              href="/projetos"
              className="inline-block rounded-lg border-2 border-light-accent px-8 py-3 font-semibold text-light-accent transition-colors hover:bg-light-accent hover:text-dark-primary dark:border-dark-accent dark:text-dark-accent dark:hover:bg-dark-accent dark:hover:text-dark-primary text-base sm:text-lg 3xl:px-10 3xl:py-4 3xl:text-xl"
            >
              Ver Todos os Projetos
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}