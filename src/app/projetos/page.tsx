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
		title: "Auto Defesa",
		stack: "Full Stack",
		description:
			"SaaS 'Auto Defesa', focado na automação de recursos de multas via IA. Desenvolvido com Next.js e Firebase, utiliza a API do Gemini para redação jurídica e Stripe para pagamentos. Infraestrutura robusta com Cloudflare e Firebase App Check no seu domínio, unindo engenharia de software moderna e segurança jurídica.",
		imageUrl: "/images/auto-defesa.png",
		technologies: [
			"Next.js",
			"React",
			"Firebase",
			"Hosting",
			"Auth",
			"App Check",
			"Google Gemini API",
			"Stripe API",
			"Cloudflare",
			"DNS",
			"E-mail",
			"Google Cloud Platform",
			"Node.js",
			"Tailwind CSS",
		],
		                        projectSlug: "auto-defesa",
		                        liveUrl: "https://meuautodefesa.com.br",
		                        repoUrl: "https://github.com/rodrigocvmd/auto-defesa",
		                        repoPrivate: true,
		                },	{
		title: "Plataforma de Gestão de Ativos",
		stack: "Backend",
		description:
			"API RESTful robusta para um sistema de agendamento de recursos, construída com Nest.js e TypeScript. A arquitetura modular implementa autenticação com JWT e Passport.js, gerenciamento de dados com Prisma ORM e PostgreSQL, e um ambiente containerizado com Docker, garantindo escalabilidade e segurança da aplicação.",
		imageUrl: "/images/imgPgra.png",
		technologies: [
			"TypeScript",
			"Node.js",
			"Nest.js",
			"Prisma ORM",
			"PostgreSQL",
			"Docker",
			"Docker Compose",
			"RESTful API Design",
			"Autenticação e Autorização",
			"JSON Web Tokens (JWT)",
			"Passport.js",
			"Arquitetura Modular",
			"Test-Driven Development (TDD)",
			"Jest",
			"Supertest (E2E Testing)",
			"Data Validation (class-validator)",
			"Controle de Acesso (Guards)",
			"Dependency Injection",
			"Modelagem de Dados Relacional",
			"Containerização",
		],
		projectSlug: "projeto-reserva-de-recursos",
		liveUrl: "https://pgra-backend.vercel.app/",
		repoUrl: "https://github.com/rodrigocvmd/pgra-backend",
		inDevelopment: false,
	},
	{
		title: "Marketplace de Imóveis",
		stack: "Full Stack",
		description:
			"Plataforma de marketplace imobiliário desenvolvida com React e Firebase, oferecendo uma experiência de usuário completa. A aplicação implementa autenticação segura (email/senha e Google OAuth), operações CRUD para anúncios, e uma interface responsiva e moderna, construída com Tailwind CSS e DaisyUI para garantir usabilidade em qualquer dispositivo.",
		imageUrl: "/images/imgMarketPlaceImoveis.png",
		technologies: [
			"JavaScript (ES6+)",
			"React.js",
			"React Router",
			"React Hooks",
			"Firebase",
			"Firestore",
			"Firebase Authentication",
			"Google OAuth 2.0",
			"Tailwind CSS",
			"DaisyUI",
			"HTML5",
			"CSS3",
			"Single-Page Applications (SPA)",
			"Design Responsivo (Mobile-First)",
			"Component-Based Architecture",
			"Gerenciamento de Estado",
			"CRUD Operations",
			"Swiper.js",
			"Leaflet",
			"Controle de Versão com Git",
		],
		projectSlug: "projeto-marketplace-imoveis",
		liveUrl: "https://marketplace-de-imoveis.vercel.app/",
		repoUrl: "https://github.com/rodrigocvmd/marketplace-de-imoveis",
	},
	{
		title: "Sistema de Suporte ao Usuário",
		stack: "Backend",
		description:
			"Aplicação full-stack de help desk construída com a stack MERN (MongoDB, Express, React, Node.js). O sistema permite a autenticação de usuários com JWT, criação e gerenciamento de tickets de suporte de forma sólida, e a adição de notas. O estado global no frontend é gerenciado de forma eficiente e intuitiva com Redux Toolkit.",
		imageUrl: "/images/imgSuporteUsuario.png",
		technologies: [
			"JavaScript (ES6+)",
			"React.js",
			"React Hooks",
			"Redux Toolkit",
			"React Router",
			"Node.js",
			"Express.js",
			"MongoDB",
			"Mongoose",
			"RESTful API Design",
			"JSON Web Tokens (JWT)",
			"Autenticação e Autorização",
			"Middleware",
			"Gerenciamento de Estado Global",
			"Desenvolvimento Full-Stack (MERN)",
			"Axios",
			"bcryptjs",
			"Component-Based Architecture",
			"Controle de Versão com Git",
		],
		projectSlug: "projeto-suporte-usuario",
		liveUrl: "https://suporte-ao-usuario.onrender.com/",
		repoUrl: "https://github.com/rodrigocvmd/suporte-ao-usuario",
	},
	// {
	// 	title: "Feedback App",
	// 	stack: "Frontend",
	// 	description:
	// 		"Aplicação de Feedback desenvolvida em React, que permite aos usuários adicionar, editar e excluir avaliações em tempo real. Utiliza a Context API para um gerenciamento de estado global eficiente, Framer Motion para animações fluidas e React Router para a navegação, resultando em uma interface dinâmica e responsiva.",
	// 	imageUrl: "/images/feedback.png",
	// 	technologies: [
	// 		"React.js",
	// 		"React Hooks",
	// 		"Context API",
	// 		"State Management",
	// 		"React Router",
	// 		"Framer Motion",
	// 		"JavaScript (ES6+)",
	// 		"HTML5",
	// 		"CSS3",
	// 		"Component-Based Architecture",
	// 		"CRUD Operations",
	// 		"UI/UX Design",
	// 		"Animações de UI",
	// 		"Design Responsivo",
	// 		"JSON Server",
	// 		"React Icons",
	// 		"prop-types",
	// 		"Controle de Versão com Git",
	// 	],
	// 	projectSlug: "feedback-app",
	// 	liveUrl: "https://main--projeto-feedback.netlify.app/",
	// 	repoUrl: "https://github.com/rodrigocvmd/feedback-app",
	// },
];

export default function ProjetosPage() {
	return (
		<div className="space-y-12 sm:space-y-16">
			<header className="container mx-auto px-4 pt-8 text-center sm:px-6 lg:px-8">
				<h1 className="font-heading text-4xl font-bold text-light-text dark:text-dark-text sm:text-5xl md:text-6xl 3xl:text-7xl">
					Meus Projetos
				</h1>
				<p className="mx-auto mt-4 max-w-3xl text-lg text-light-text/80 dark:text-dark-text/80 sm:text-xl 3xl:text-2xl">
					Aqui você encontra uma seleção variada de trabalhos que desenvolvi, demonstrando minhas
					habilidades e capacidade de criar soluções digitais eficientes.
				</p>
			</header>

			{/* TODO: Funcionalidade de Filtros (Planejada) */}

			<section className="container mx-auto px-4 sm:px-6 lg:px-8">
				{allProjects.length > 0 ? (
					// Grid adaptável
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
								                                                                repoPrivate={project.repoPrivate}
								                                                                inDevelopment={project.inDevelopment}
								                                                        />						))}
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
