// src/app/projetos/[slug]/page.tsx
import Image from "next/image";
import Link from "next/link";
import { Metadata } from "next";
// import { getProjectData, getAllProjectSlugs } from '@/lib/projects'; // Funções para buscar dados de MDX/CMS

// Interface para os dados do projeto
interface ProjectData {
	title: string;
	description: string; // Descrição completa
	problem: string;
	solution: string;
	role: string;
	challenges: string[];
	learnings: string[];
	techStack: { category: string; items: string[] }[];
	imageUrl: string; // Imagem principal ou de capa
	gallery?: string[]; // URLs para galeria de imagens
	liveUrl?: string;
	repoUrl?: string;
	slug: string;
	// Navegação
	prevProject?: { slug: string; title: string };
	nextProject?: { slug: string; title: string };
}

// Placeholder: Função mockada para buscar dados do projeto.
// No futuro, isso buscaria dados de arquivos MDX ou um CMS.
async function getProjectDetails(slug: string): Promise<ProjectData | null> {
	// Simula a busca de dados
	const projects: { [key: string]: ProjectData } = {
		"projeto-incrivel-1": {
			slug: "projeto-incrivel-1",
			title: "Nome do Projeto Incrível 1 (Detalhado)",
			imageUrl: "https://via.placeholder.com/1200x600/FDBA74/374151?text=Capa+Projeto+1",
			description:
				"[Placeholder para a descrição completa e detalhada do Projeto Incrível 1. Este texto será mais extenso, explicando o contexto, os objetivos e o resultado final do projeto. Aproximadamente 2-3 parágrafos.]",
			problem:
				'[Placeholder: Descreva o problema que este projeto buscou solucionar. Seja claro e conciso. Ex: "A empresa X enfrentava dificuldades em gerenciar seus leads de forma eficiente..." ~1 parágrafo]',
			solution:
				'[Placeholder: Detalhe a solução desenvolvida. Quais foram as principais funcionalidades e como elas abordam o problema? Ex: "Desenvolvemos uma plataforma web responsiva que centraliza..." ~1-2 parágrafos]',
			role: '[Placeholder: Seu papel específico no projeto. Ex: "Atuei como Desenvolvedor Full-Stack, responsável desde o design inicial do banco de dados até a implementação do frontend com React e Next.js." ~2-3 linhas]',
			challenges: [
				'[Placeholder: Desafio 1 - Ex: "Integrar a API de terceiros X que possuía documentação limitada."]',
				'[Placeholder: Desafio 2 - Ex: "Otimizar as queries do banco de dados para suportar um grande volume de dados."]',
				'[Placeholder: Desafio 3 - Ex: "Garantir a acessibilidade (a11y) em todos os componentes da interface."]',
			],
			learnings: [
				'[Placeholder: Aprendizado 1 - Ex: "Aprofundei meus conhecimentos em otimização de performance no Next.js."]',
				'[Placeholder: Aprendizado 2 - Ex: "Melhorei minhas habilidades de comunicação trabalhando em equipe com designers."]',
				'[Placeholder: Aprendizado 3 - Ex: "Aprendi a importância de testes unitários e de integração robustos."]',
			],
			techStack: [
				{
					category: "Frontend",
					items: ["React", "Next.js v14", "Tailwind CSS v3", "TypeScript", "Zustand"],
				},
				{ category: "Backend", items: ["Node.js", "Express.js", "Firebase (Auth, Firestore)"] },
				{ category: "Ferramentas", items: ["Git", "GitHub Actions", "Vercel", "ESLint"] },
			],
			gallery: [
				// URLs de placeholders para a galeria
				"https://via.placeholder.com/800x600/E0F2FE/374151?text=Screenshot+1",
				"https://via.placeholder.com/800x600/E0F2FE/374151?text=Screenshot+2",
				"https://via.placeholder.com/800x600/E0F2FE/374151?text=Screenshot+3",
			],
			liveUrl: "#",
			repoUrl: "#",
			prevProject: { slug: "projeto-fantastico-2", title: "Outro Projeto Fantástico 2" }, // Simulação
			nextProject: undefined, // Simulação (sem próximo)
		},
		"projeto-fantastico-2": {
			// ... dados similares para o projeto 2
			slug: "projeto-fantastico-2",
			title: "Outro Projeto Fantástico 2 (Detalhado)",
			imageUrl: "https://via.placeholder.com/1200x600/FCD3A2/1F2937?text=Capa+Projeto+2",
			description: "[Placeholder para a descrição completa do Projeto Fantástico 2.]",
			problem: "[Placeholder: Problema do Projeto 2]",
			solution: "[Placeholder: Solução do Projeto 2]",
			role: "[Placeholder: Seu Papel no Projeto 2]",
			challenges: ["[Placeholder: Desafio A]", "[Placeholder: Desafio B]"],
			learnings: ["[Placeholder: Aprendizado X]", "[Placeholder: Aprendizado Y]"],
			techStack: [
				{ category: "Backend", items: ["Node.js", "Express", "MongoDB", "JWT"] },
				{ category: "Frontend", items: ["Vanilla JS", "HTML", "CSS"] },
			],
			repoUrl: "#",
			prevProject: undefined,
			nextProject: { slug: "projeto-incrivel-1", title: "Nome do Projeto Incrível 1" },
		},
		// Adicione mais projetos aqui para teste
	};
	return projects[slug] || null;
}

// Geração de Metadados Dinâmicos
export async function generateMetadata({
	params,
}: {
	params: { slug: string };
}): Promise<Metadata> {
	const project = await getProjectDetails(params.slug);
	if (!project) {
		return {
			title: "Projeto Não Encontrado",
		};
	}
	return {
		title: `${project.title} | Meu Portfólio`,
		description: project.description.substring(0, 160), // Pegue os primeiros 160 chars da descrição
	};
}

// Geração de Rotas Estáticas (opcional, mas bom para SEO e performance)
// export async function generateStaticParams() {
//   const slugs = await getAllProjectSlugs(); // Função que retorna todos os slugs: ['slug1', 'slug2']
//   return slugs.map((slug) => ({ slug }));
// }

export default async function ProjetoDetalhePage({ params }: { params: { slug: string } }) {
	const project = await getProjectDetails(params.slug);

	if (!project) {
		return (
			<div className="text-center py-20">
				<h1 className="text-3xl font-bold mb-4">Projeto não encontrado</h1>
				<p className="text-lg">O projeto que você está procurando não existe ou foi movido.</p>
				<Link
					href="/projetos"
					className="mt-6 inline-block text-light-accent dark:text-dark-accent hover:underline">
					Voltar para todos os projetos
				</Link>
			</div>
		);
	}

	return (
		<article className="space-y-10 sm:space-y-12">
			{/* Cabeçalho do Projeto */}
			<header className="text-center py-8 sm:py-10 border-b border-light-secondary dark:border-dark-secondary">
				<h1 className="text-4xl sm:text-5xl font-bold font-heading text-light-text dark:text-dark-text">
					{project.title}
				</h1>
				{/* Opcional: um subtítulo ou tagline curto */}
				{/* <p className="mt-3 text-lg text-light-text/80 dark:text-dark-text/80">Um olhar aprofundado sobre o desenvolvimento de {project.title}.</p> */}
			</header>

			{/* Mídia Principal do Projeto (Imagem de Capa) */}
			{project.imageUrl && (
				<section className="relative w-full h-64 sm:h-80 md:h-96 lg:h-[500px] rounded-lg overflow-hidden shadow-lg">
					<Image
						src={project.imageUrl}
						alt={`Imagem de capa do projeto ${project.title}`}
						fill
						className="object-cover"
						priority
						// sizes="100vw" // Para uma imagem de capa que ocupa toda a largura
					/>
				</section>
			)}

			{/* Conteúdo Principal do Projeto (Grid para layout) */}
			<div className="grid grid-cols-1 lg:grid-cols-3 gap-8 sm:gap-10">
				{/* Coluna Principal (Conteúdo) */}
				<div className="lg:col-span-2 space-y-8">
					{/* Descrição Completa */}
					<section>
						<h2 className="text-2xl sm:text-3xl font-semibold font-heading mb-4 text-light-text dark:text-dark-text">
							Visão Geral do Projeto
						</h2>
						<div className="prose prose-lg dark:prose-invert max-w-none text-light-text dark:text-dark-text space-y-4">
							<p>{project.description}</p>
							<h3>O Problema</h3>
							<p>{project.problem}</p>
							<h3>A Solução</h3>
							<p>{project.solution}</p>
						</div>
					</section>

					{/* Seu Papel */}
					<section>
						<h2 className="text-2xl sm:text-3xl font-semibold font-heading mb-4 text-light-text dark:text-dark-text">
							Meu Papel e Contribuições
						</h2>
						<div className="prose dark:prose-invert max-w-none text-light-text dark:text-dark-text">
							<p>{project.role}</p>
						</div>
					</section>

					{/* Desafios e Aprendizados */}
					<section>
						<h2 className="text-2xl sm:text-3xl font-semibold font-heading mb-4 text-light-text dark:text-dark-text">
							Desafios e Aprendizados
						</h2>
						<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
							<div>
								<h3 className="text-xl font-semibold mb-2 text-light-accent dark:text-dark-accent">
									Desafios Enfrentados
								</h3>
								<ul className="list-disc list-inside space-y-1 text-light-text dark:text-dark-text">
									{project.challenges.map((challenge, index) => (
										<li key={index}>{challenge}</li>
									))}
								</ul>
							</div>
							<div>
								<h3 className="text-xl font-semibold mb-2 text-light-accent dark:text-dark-accent">
									Principais Aprendizados
								</h3>
								<ul className="list-disc list-inside space-y-1 text-light-text dark:text-dark-text">
									{project.learnings.map((learning, index) => (
										<li key={index}>{learning}</li>
									))}
								</ul>
							</div>
						</div>
					</section>

					{/* Galeria de Imagens/Vídeo (Opcional) */}
					{project.gallery && project.gallery.length > 0 && (
						<section>
							<h2 className="text-2xl sm:text-3xl font-semibold font-heading mb-6 text-light-text dark:text-dark-text">
								Galeria do Projeto
							</h2>
							<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
								{project.gallery.map((imgSrc, index) => (
									<div
										key={index}
										className="relative aspect-video rounded-md overflow-hidden shadow-md">
										<Image
											src={imgSrc}
											alt={`Screenshot ${index + 1} do projeto ${project.title}`}
											layout="fill"
											objectFit="cover"
										/>
									</div>
								))}
							</div>
						</section>
					)}
				</div>

				{/* Coluna Lateral (Stack, Links) */}
				<aside className="lg:col-span-1 space-y-8 lg:sticky lg:top-24 self-start">
					{" "}
					{/* Sticky sidebar */}
					<section className="bg-light-secondary dark:bg-dark-secondary p-6 rounded-lg shadow-md">
						<h3 className="text-xl font-semibold font-heading mb-4 text-light-text dark:text-dark-text">
							Stack de Tecnologias
						</h3>
						{project.techStack.map((stackCategory) => (
							<div key={stackCategory.category} className="mb-4 last:mb-0">
								<h4 className="text-md font-semibold text-light-accent dark:text-dark-accent mb-1">
									{stackCategory.category}:
								</h4>
								<ul className="flex flex-wrap gap-2">
									{stackCategory.items.map((item) => (
										<li
											key={item}
											className="bg-light-primary dark:bg-dark-primary text-xs px-2 py-1 rounded-full text-light-text dark:text-dark-text">
											{item}
										</li>
									))}
								</ul>
							</div>
						))}
					</section>
					{(project.liveUrl || project.repoUrl) && (
						<section className="bg-light-secondary dark:bg-dark-secondary p-6 rounded-lg shadow-md">
							<h3 className="text-xl font-semibold font-heading mb-4 text-light-text dark:text-dark-text">
								Links Úteis
							</h3>
							<div className="space-y-3">
								{project.liveUrl && (
									<Link
										href={project.liveUrl}
										target="_blank"
										rel="noopener noreferrer"
										className="flex items-center space-x-2 text-light-accent dark:text-dark-accent hover:underline">
										{/* Ícone opcional */}
										<svg
											xmlns="http://www.w3.org/2000/svg"
											className="h-5 w-5"
											viewBox="0 0 20 20"
											fill="currentColor">
											<path
												fillRule="evenodd"
												d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
												clipRule="evenodd"
											/>
										</svg>
										<span>Ver Projeto Online</span>
									</Link>
								)}
								{project.repoUrl && (
									<Link
										href={project.repoUrl}
										target="_blank"
										rel="noopener noreferrer"
										className="flex items-center space-x-2 text-light-accent dark:text-dark-accent hover:underline">
										{/* Ícone opcional */}
										<svg
											xmlns="http://www.w3.org/2000/svg"
											className="h-5 w-5"
											viewBox="0 0 20 20"
											fill="currentColor">
											<path
												fillRule="evenodd"
												d="M12.586 4.586a2 2 0 112.828 2.828l-3 3a2 2 0 01-2.828 0l-4-4a2 2 0 012.828-2.828L8 7.172l1.414-1.414a2 2 0 012.828 0z"
												clipRule="evenodd"
											/>
											<path
												fillRule="evenodd"
												d="M4.086 11.414a2 2 0 000 2.828l4 4a2 2 0 002.828 0l1.414-1.414-1.06-1.06a4.002 4.002 0 01-5.658-5.658l1.06-1.06L4.086 11.414z"
												clipRule="evenodd"
											/>
										</svg>
										<span>Repositório no GitHub</span>
									</Link>
								)}
							</div>
						</section>
					)}
				</aside>
			</div>

			{/* Navegação (Projeto Anterior/Próximo) */}
			<nav className="flex justify-between items-center pt-8 border-t border-light-secondary dark:border-dark-secondary">
				{project.prevProject ? (
					<Link
						href={`/projetos/${project.prevProject.slug}`}
						className="text-light-accent dark:text-dark-accent hover:underline">
						&larr; {project.prevProject.title}
					</Link>
				) : (
					<div /> // Espaçador para manter o layout
				)}
				{project.nextProject ? (
					<Link
						href={`/projetos/${project.nextProject.slug}`}
						className="text-light-accent dark:text-dark-accent hover:underline">
						{project.nextProject.title} &rarr;
					</Link>
				) : (
					<div /> // Espaçador
				)}
			</nav>
		</article>
	);
}
