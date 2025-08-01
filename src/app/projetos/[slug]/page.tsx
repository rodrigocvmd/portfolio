// src/app/projetos/[slug]/page.tsx
import Image from 'next/image';
import Link from 'next/link';
import TechTag from '@/components/TechTag';

const allProjects = [
  {
    title: "Marketplace de Imóveis (Full Stack)",
    description: "Plataforma completa para listagem de imóveis com CRUD, autenticação de usuários (Email/Senha, Google OAuth) e interface responsiva. O projeto foi desenvolvido com foco na experiência do usuário, oferecendo uma navegação intuitiva e um design limpo. O backend robusto garante a segurança e a integridade dos dados, enquanto o frontend reativo proporciona uma interação fluida.",
    imageUrl: "/images/imgMarketPlaceImoveis.png",
    technologies: ["React", "Node.js", "TailwindCSS", "Git", "DaisyUI", "JavaScript"],
    projectSlug: "projeto-marketplace-imoveis",
    liveUrl: "https://marketplace-de-imoveis.vercel.app/",
    repoUrl: "https://github.com/rodrigocvmd/marketplace-de-imoveis",
  },
  {
    title: "Sistema de Suporte ao Usuário (Full Stack)",
    description: "Aplicação de tickets de suporte com backend robusto (API RESTful) e frontend interativo para gerenciamento de solicitações. A plataforma permite que os usuários criem e acompanhem o status de seus tickets, enquanto os administradores podem gerenciar as solicitações, atribuir responsáveis e se comunicar com os usuários. A autenticação é baseada em JWT, garantindo a segurança das rotas e dos dados.",
    imageUrl: "/images/imgSuporteUsuario.png",
    technologies: ["Node.js", "Express", "MongoDB", "JWT"],
    projectSlug: "projeto-suporte-usuario",
    liveUrl: "https://suporte-ao-usuario.onrender.com/",
    repoUrl: "https://github.com/rodrigocvmd/suporte-ao-usuario",
  },
];

const getProjectDetails = (slug: string) => {
  return allProjects.find(p => p.projectSlug === slug);
};

const BackButton = () => (
  <Link href="/projetos" className="inline-block text-sm text-light-accent dark:text-dark-accent hover:underline mb-6">
    &larr; Voltar aos Projetos
  </Link>
);

interface ProjectPageProps {
  params: {
    slug: string;
  };
}

export default function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = params;
  const project = getProjectDetails(slug);

  if (!project) {
    return <div className="text-center py-10">Projeto não encontrado.</div>;
  }

  return (
    <div className="container mx-auto px-4 py-8 sm:px-6 lg:px-8">
      <BackButton />
      
      <header className="mb-8">
        <h1 className="font-heading text-4xl font-bold text-light-text dark:text-dark-text sm:text-5xl text-center">
          {project.title}
        </h1>
      </header>

      <div className="relative w-full h-64 sm:h-80 md:h-[450px] rounded-lg overflow-hidden mb-8 shadow-lg mx-auto max-w-4xl group">
        <Image
          src={project.imageUrl}
          alt={`Imagem do projeto ${project.title}`}
          fill
          className="object-cover transition-transform duration-300 group-hover:scale-105"
          priority
        />
      </div>

      <div className="flex flex-wrap items-center justify-center gap-4 mb-10">
        {project.liveUrl && (
            <Link href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="inline-block rounded-lg bg-light-accent px-8 py-3 text-center font-semibold text-dark-primary shadow-md transition-transform hover:scale-105 text-lg">
                Ver Online
            </Link>
        )}
        {project.repoUrl && (
            <Link href={project.repoUrl} target="_blank" rel="noopener noreferrer" className="inline-block rounded-lg border-2 border-light-accent px-8 py-3 text-center font-semibold text-light-accent transition-colors hover:bg-light-accent hover:text-dark-primary dark:border-dark-accent dark:text-dark-accent dark:hover:bg-dark-accent dark:hover:text-dark-primary text-lg">
                Repositório
            </Link>
        )}
      </div>

      <section className="mb-12">
        <h2 className="font-heading text-2xl font-bold text-light-text dark:text-dark-text mb-4 text-center">
            Tecnologias Utilizadas
        </h2>
        <div className="flex flex-wrap justify-center gap-3">
            {project.technologies.map((tech) => (
                <TechTag key={tech} name={tech} />
            ))}
        </div>
      </section>

      <div className="prose prose-lg max-w-4xl mx-auto dark:prose-invert text-justify">
        <h2 className="font-heading text-3xl font-bold text-light-text dark:text-dark-text mb-4 text-center">
            Descrição do Projeto
        </h2>
        <p>{project.description}</p>
        <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor. Cras elementum ultrices diam. Maecenas ligula massa, varius a, semper congue, euismod non, mi.
        </p>
      </div>

      <div className="mt-12 pt-8 border-t border-light-secondary dark:border-dark-secondary">
        <BackButton />
      </div>
    </div>
  );
}