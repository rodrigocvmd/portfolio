// src/app/projetos/page.tsx
import ProjectCard from "@/components/ProjectCard";
import { Metadata } from "next";

export const metadata: Metadata = {
	title: "Meus Projetos | Portfólio de Rodrigo",
	description: "Explore uma coleção dos projetos que desenvolvi.",
};

// Dados para todos os projetos
const allProjects = [
	{
		title: "EM DESENVOLVIMENTO",
		stack: "(Full Stack)",
		description:
			"Plataforma de marketplace imobiliário desenvolvida em React, com sistema completo de CRUD de anúncios e autenticação segura via Firebase (login convencional e Google OAuth). A interface, construída com Tailwind CSS, oferece uma experiência de usuário moderna e totalmente responsiva para a busca e o gerenciamento de imóveis.",
		imageUrl: "/images/imgSuporteUsuario.png",
		technologies: ["Node.js", "Express", "MongoDB", "JWT", "Express", "MongoDB", "JWT", "Express", "MongoDB", "JWT"],
		projectSlug: "projeto-reserva-de-recursos",
		liveUrl: "https://suporte-ao-usuario.onrender.com/",
		repoUrl: "https://github.com/rodrigocvmd/suporte-ao-usuario",
		inDevelopment: true,
	},
	{
		title: "Marketplace de Imóveis",
		stack: "(Full Stack)",
		description:
			"Plataforma de marketplace imobiliário desenvolvida em React, com sistema completo de CRUD de anúncios e autenticação segura via Firebase (login convencional e Google OAuth). A interface, construída com Tailwind CSS, oferece uma experiência de usuário moderna e totalmente responsiva para a busca e o gerenciamento de imóveis.",
		imageUrl: "/images/imgMarketPlaceImoveis.png",
		technologies: [
			"JavaScript (ES6+)",
			"React.js",
			"Node.js",
			"Tailwind CSS",
			"HTML5",
			"CSS3",
			"DaisyUI",
			"Design Responsivo (Mobile-First)",
			"UI/UX Design",
			"Component-Based Architecture",
			"Swiper.js",
			"Custom Hooks",
			"Gerenciamento de Estado Global",
			"Private Routes",
			"Firebase",
			"Google OAuth 2.0",
			"Single-Page Applications (SPA)",
			"Integração de APIs e Serviços Externos",
			"Controle de Versão com Git",
		],
		projectSlug: "projeto-marketplace-imoveis",
		liveUrl: "https://marketplace-de-imoveis.vercel.app/",
		repoUrl: "https://github.com/rodrigocvmd/marketplace-de-imoveis",
	},
	{
		title: "Sistema de Suporte ao Usuário",
		stack: "(Full Stack)",
		description:
			"Backend e API RESTful para um sistema de Help Desk, responsável por gerenciar o ciclo de vida de tickets de suporte. Implementa um sistema de autenticação robusto com JWT e middleware para proteção de rotas e dados sensíveis. A arquitetura garante comunicação segura, escalabilidade e tratamento de erros em tempo real com o frontend.",
		imageUrl: "/images/imgSuporteUsuario.png",
		technologies: [
			"JavaScript (ES6+)",
			"React.js",
			"Node.js",
			"Tailwind CSS",
			"HTML5",
			"CSS3",
			"API RESTful",
			"Design de API",
			"JSON Web Tokens",
			"Middlewares",
			"Proteção de Rotas",
			"Server-Side Logic",
			"Gerenciamento de Estado",
			"Error Handling",
			"Notificações Push",
			"Gestão de Dados Sensíveis",
			"Redux",
			"Gerenciamento de Estado Global",
		],
		projectSlug: "projeto-suporte-usuario",
		liveUrl: "https://suporte-ao-usuario.onrender.com/",
		repoUrl: "https://github.com/rodrigocvmd/suporte-ao-usuario",
	},
	{
		title: "Buscador GitHub",
		stack: "(Frontend)",
		description:
			"Aplicação React que consome a API do GitHub para buscar e exibir perfis de usuários e seus repositórios. Utiliza React Router para navegação e um sistema avançado de gerenciamento de estado com Context API e Reducers. A interface é responsiva e possui tratamento de erros integrado para garantir uma ótima experiência ao usuário.",
		imageUrl: "/images/buscador-github.png",
		technologies: [
			"React.js",
			"JavaScript (ES6+)",
			"HTML5",
			"CSS3",
			"API REST",
			"React Router",
			"React Hooks",
			"Context API",
			"useReducer",
			"useState",
			"useEffect",
			"Gerenciamento de Estado Avançado",
			"Single-Page Application (SPA)",
			"Integração de APIs de Terceiros",
			"Requisições Assíncronas",
			"Promises (async/await)",
			"Design Responsivo",
			"Arquitetura Modular",
			"Error Handling",
			"Controle de Versão com Git/GitHub",
			"Debugging",
		],
		projectSlug: "projeto-suporte-usuario",
		liveUrl: "https://suporte-ao-usuario.onrender.com/",
		repoUrl: "https://github.com/rodrigocvmd/suporte-ao-usuario",
	},
	{
		title: "Feedback App",
		stack: "(Frontend)",
		description:
			"Aplicação interativa em React para um sistema de feedback, permitindo aos usuários realizar operações de CRUD. Utiliza a Context API para um gerenciamento de estado global eficiente e a Framer Motion para animações e micro-interações. O projeto conta com navegação via React Router e um design totalmente responsivo.",
		imageUrl: "/images/feedback.png",
		technologies: [
			"React.js",
			"JavaScript (ES6+)",
			"HTML5",
			"CSS3",
			"React Router",
			"Framer Motion",
			"Context API",
			"React Hooks",
			"Gerenciamento de Estado Global",
			"Single-Page Application (SPA)",
			"Operações CRUD",
			"Design Responsivo",
			"Animações e Micro-interações",
			"Otimização de Performance",
			"Refactoring",
			"Componentização",
			"Clean Code",
			"Debugging",
			"Controle de Versão com Git/GitHub",
		],
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
					Aqui você encontra uma seleção dos trabalhos que desenvolvi, demonstrando minhas
					habilidades e vontade de criar soluções digitais eficientes.
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
								stack={project.stack}
								description={project.description}
								imageUrl={project.imageUrl}
								technologies={project.technologies}
								projectSlug={project.projectSlug}
								liveUrl={project.liveUrl}
								repoUrl={project.repoUrl}
								inDevelopment={project.inDevelopment}
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
