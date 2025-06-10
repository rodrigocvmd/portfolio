// src/app/projetos/page.tsx
import ProjectCard from '@/components/ProjectCard';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Meus Projetos | Meu Portfólio',
  description: 'Explore uma coleção dos projetos que desenvolvi.',
};

// Dados mockados para todos os projetos
const allProjects = [
  // Seus projetos virão aqui. Usando placeholders por enquanto.
  {
    title: 'Nome do Projeto Incrível 1',
    description: 'Uma breve descrição do projeto, destacando seus principais objetivos e tecnologias. Este é um placeholder para a listagem completa.',
    imageUrl: 'https://dummyimage.com/600x400/FDBA74/374151.png&text=Projeto+1',
    technologies: ['React', 'Next.js', 'TailwindCSS', 'TypeScript', 'Firebase'],
    projectSlug: 'projeto-incrivel-1',
    liveUrl: '#',
    repoUrl: '#',
  },
  {
    title: 'Outro Projeto Fantástico 2',
    description: 'Descrição concisa deste outro projeto. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Placeholder para a listagem.',
    imageUrl: 'https://dummyimage.com/600x400/FCD3A2/1F2937.png&text=Projeto+2',
    technologies: ['Node.js', 'Express', 'MongoDB', 'JWT', 'Docker'],
    projectSlug: 'projeto-fantastico-2',
    repoUrl: '#',
  },
  {
    title: 'Aplicativo Web Inovador 3',
    description: 'Este projeto resolve um problema X utilizando Y. Foi um grande aprendizado em Z. Placeholder.',
    imageUrl: 'https://dummyimage.com/600x400/a3e635/1e293b.png&text=Projeto+3',
    technologies: ['Vue.js', 'Nuxt.js', 'Supabase', 'SCSS'],
    projectSlug: 'app-inovador-3',
    liveUrl: '#',
  },
  {
    title: 'Ferramenta de Produtividade 4',
    description: 'Uma ferramenta para ajudar usuários a [benefício]. Desenvolvido com foco em performance e usabilidade. Placeholder.',
    imageUrl: 'https://dummyimage.com/600x400/60a5fa/f1f5f9.png&text=Projeto+4',
    technologies: ['SvelteKit', 'PocketBase', 'TypeScript'],
    projectSlug: 'ferramenta-produtividade-4',
    repoUrl: '#',
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
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3 3xl:grid-cols-4 lg:gap-10">
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