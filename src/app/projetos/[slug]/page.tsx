// src/app/projetos/[slug]/page.tsx
import Image from 'next/image';
import Link from 'next/link';

// Por enquanto, estamos usando dados placeholder.
// No futuro, isso viria de um CMS ou de um arquivo de dados com base no `slug`.
const getProjectDetails = (slug: string) => {
  // Lógica para encontrar os detalhes do projeto com base no slug
  // Retornando um placeholder por enquanto
  return {
    title: `Detalhes do Projeto ${slug}`,
    description: 'Esta é uma descrição detalhada do projeto. Fale sobre os desafios, as soluções implementadas, e o que você aprendeu. (Placeholder)',
    imageUrl: 'https://dummyimage.com/1200x600/cccccc/374151.png&text=Imagem+do+Projeto',
    technologies: ['React', 'TypeScript', 'Node.js', 'CSS Modules'],
    liveUrl: '#',
    repoUrl: '#',
  };
};

interface ProjectPageProps {
  params: {
    slug: string;
  };
}

export default function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = params;
  const project = getProjectDetails(slug);

  if (!project) {
    // Idealmente, você teria uma página 404 mais robusta
    return <div>Projeto não encontrado.</div>;
  }

  return (
    <div className="container mx-auto px-4 py-8 sm:px-6 lg:px-8">
      <header className="mb-8">
        <h1 className="font-heading text-4xl font-bold text-light-text dark:text-dark-text sm:text-5xl">
          {project.title}
        </h1>
      </header>

      <div className="relative w-full h-96 rounded-lg overflow-hidden mb-8">
        <Image
          src={project.imageUrl}
          alt={`Imagem do projeto ${project.title}`}
          fill
          className="object-cover"
        />
      </div>

      <div className="prose prose-lg max-w-none dark:prose-invert">
        <p>{project.description}</p>

        <h2>Tecnologias Utilizadas</h2>
        <ul>
          {project.technologies.map((tech) => (
            <li key={tech}>{tech}</li>
          ))}
        </ul>

        {/* Adicione mais seções conforme necessário: screenshots, vídeos, etc. */}
      </div>

      <div className="mt-12 flex flex-wrap items-center gap-4">
        <Link href="/projetos" className="inline-block rounded-md bg-light-accent px-6 py-3 text-center font-semibold text-dark-primary shadow-sm transition-colors hover:bg-opacity-90">
          &larr; Voltar aos Projetos
        </Link>
        <div className="flex items-center space-x-4">
            {project.liveUrl && (
                <Link href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="text-light-accent dark:text-dark-accent hover:underline">
                    Ver Online
                </Link>
            )}
            {project.repoUrl && (
                <Link href={project.repoUrl} target="_blank" rel="noopener noreferrer" className="text-light-accent dark:text-dark-accent hover:underline">
                    Repositório
                </Link>
            )}
        </div>
      </div>
    </div>
  );
}