"use client";

import Image from "next/image";
import Link from "next/link";
import TechTag from "@/components/TechTag";
import { useState } from "react";

const allProjects = [
	{
		title: "Em desenvolvimento",
		stack: "(Backend)",
		description: [
			"Neste projeto, construí o backend completo para um sistema de agendamento de recursos, desenvolvendo uma API RESTful robusta e escalável com Nest.js. Meu principal objetivo foi criar uma arquitetura modular e segura, onde implementei um sistema de autenticação de ponta a ponta utilizando JSON Web Tokens (JWT) e Passport.js. Para garantir a integridade e a segurança das rotas, desenvolvi guards de autorização personalizados, como o OwnerGuard, que assegura que apenas os proprietários de uma reserva possam modificá-la, demonstrando meu cuidado com o controle de acesso e a proteção dos dados do usuário.",
			"A gestão de dados foi um pilar central, onde utilizei o Prisma como ORM para modelar o banco de dados PostgreSQL e realizar consultas de forma type-safe e eficiente. Desenvolvi toda a lógica de negócio para os módulos de autenticação, usuários, recursos e reservas, aplicando validações rigorosas nos DTOs (Data Transfer Objects) com class-validator para garantir a consistência dos dados que entram na aplicação. Um dos desafios técnicos que solucionei foi a implementação de uma lógica para evitar conflitos de agendamento, garantindo que um recurso não possa ser reservado por múltiplos usuários no mesmo intervalo de tempo.",
			"Para otimizar o ambiente de desenvolvimento e garantir a portabilidade da aplicação, utilizei Docker e Docker Compose para containerizar toda a aplicação e o banco de dados. Essa abordagem não apenas simplificou a configuração do ambiente, mas também assegurou a consistência entre as fases de desenvolvimento, teste e produção. A execução deste projeto solidificou minhas competências em desenvolvimento backend com Node.js e Nest.js, design de APIs RESTful, modelagem de dados relacionais e práticas de DevOps, resultando em uma aplicação segura, performática e pronta para integração.",
		],
		imageUrl: "/images/imgTempPgra.png",
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
		liveUrl: "#",
		repoUrl: "https://github.com/rodrigocvmd/pgra-backend",
		inDevelopment: true,
		// progress: 50,
	},
	{
		title: "Marketplace de Imóveis",
		stack: "(Full Stack)",
		description: [
			"Neste projeto, desenvolvi uma plataforma de marketplace imobiliário completa e robusta, utilizando React para construir uma Single-Page Application (SPA) dinâmica e de alta performance. O objetivo central foi criar uma experiência de usuário intuitiva e fluida, desde a busca de imóveis até o gerenciamento de anúncios. Para isso, orquestrei um ecossistema de tecnologias modernas, empregando Tailwind CSS e DaisyUI para criar uma interface responsiva e esteticamente agradável, que garante consistência visual e usabilidade em qualquer dispositivo. A interatividade foi enriquecida com a biblioteca Swiper, implementada para exibir listagens em destaque de forma elegante e engajadora.",
			"Para garantir a segurança e a integridade dos dados, implementei um sistema de autenticação multifacetado com o Firebase Authentication. A solução suporta tanto o cadastro tradicional (email e senha) quanto a autenticação social via Google (OAuth), direcionando os usuários para rotas protegidas através de componentes PrivateRoute customizados, que desenvolvi utilizando hooks para verificar o status da autenticação em tempo real. A persistência e o gerenciamento dos dados dos anúncios foram realizados no Cloud Firestore, o banco de dados NoSQL do Firebase, onde estruturei as informações para permitir operações CRUD (criação, leitura, edição e exclusão) de forma eficiente e escalável.",
			"A execução deste projeto solidificou competências cruciais em arquitetura de front-end e na integração de serviços de Backend-as-a-Service (BaaS). Superar desafios como o gerenciamento de estado complexo durante o ciclo de autenticação e a otimização de consultas ao Firestore aprimorou minhas habilidades em React Hooks, componentização e práticas de desenvolvimento seguro. O resultado é uma aplicação web funcional, escalável e pronta para o mercado, que demonstra minha capacidade de traduzir requisitos de negócio em soluções técnicas eficazes e com foco na experiência do usuário.",
		],
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
		stack: "(Full Stack)",
		description: [
			"Neste projeto, desenvolvi uma aplicação full-stack de suporte ao cliente, utilizando a stack MERN para criar uma solução completa e integrada. No frontend, construí uma interface reativa e intuitiva com React, onde os usuários podem se registrar, autenticar e gerenciar seus tickets de suporte. Utilizei o Redux Toolkit para gerenciar o estado global da aplicação de forma centralizada e previsível, simplificando a comunicação entre componentes e a manipulação de dados assíncronos, como o status dos tickets e as informações do usuário logado. A navegação foi implementada com React Router, incluindo a criação de rotas protegidas que garantem que apenas usuários autenticados possam acessar áreas restritas do sistema.",
			"No backend, desenvolvi uma API RESTful robusta com Node.js e Express, responsável por toda a lógica de negócio. Modelei os dados utilizando Mongoose para interagir com o banco de dados NoSQL MongoDB, definindo schemas para usuários, tickets e notas. O desafio principal foi implementar um sistema de autenticação seguro, que solucionei com JSON Web Tokens (JWT). Criei middlewares de autenticação para proteger as rotas da API, assegurando que apenas usuários autorizados pudessem criar, visualizar e modificar tickets, garantindo a integridade e a segurança dos dados.",
			"A integração entre o frontend e o backend foi um ponto crucial do projeto, onde utilizei o Axios para realizar as requisições HTTP e o Redux Toolkit Thunk para gerenciar as chamadas assíncronas à API. Este projeto solidificou minhas habilidades em desenvolvimento full-stack, desde a criação da interface do usuário com React até a implementação de uma API segura e eficiente com Node.js e Express. O resultado é uma aplicação funcional e coesa, que demonstra minha capacidade de construir sistemas completos e prontos para o uso.",
		],
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
	{
		title: "Feedback Application",
		stack: "(Frontend)",
		description: [
			"Neste projeto, desenvolvi um sistema de feedback interativo e dinâmico, utilizando React para criar uma interface de usuário fluida e responsiva. O objetivo principal foi construir uma aplicação que permitisse o gerenciamento completo de avaliações em tempo real, implementando as funcionalidades de CRUD (Create, Read, Update, Delete) de forma intuitiva. Para enriquecer a experiência do usuário, integrei a biblioteca Framer Motion, que me permitiu adicionar animações elegantes nas transições e interações, tornando a navegação mais envolvente e visualmente agradável.",
			"O maior desafio técnico foi o gerenciamento do estado global da aplicação. Para solucioná-lo, utilizei a Context API do React em conjunto com Hooks para criar um FeedbackContext. Essa abordagem permitiu o compartilhamento de dados e funções entre os componentes de forma eficiente, centralizando a lógica de adicionar, editar e excluir feedbacks sem a necessidade de bibliotecas externas de gerenciamento de estado. Isso garantiu que a interface reagisse de forma consistente às ações do usuário.",
			"A execução deste projeto aprimorou minhas habilidades em arquitetura de componentes React, gerenciamento de estado global e na implementação de interfaces ricas e animadas. Ao superar os desafios de manter a consistência dos dados durante as operações de CRUD e transições de UI, demonstrei minha capacidade de construir aplicações front-end robustas, escaláveis e focadas na experiência do usuário. O resultado é uma aplicação funcional, performática e com um design moderno.",
		],
		imageUrl: "/images/feedback.png",
		technologies: [
			"React.js",
			"React Hooks",
			"Context API",
			"State Management",
			"React Router",
			"Framer Motion",
			"JavaScript (ES6+)",
			"HTML5",
			"CSS3",
			"Component-Based Architecture",
			"CRUD Operations",
			"UI/UX Design",
			"Animações de UI",
			"Design Responsivo",
			"JSON Server",
			"React Icons",
			"prop-types",
			"Controle de Versão com Git",
		],
		projectSlug: "feedback-app",
		liveUrl: "https://main--projeto-feedback.netlify.app/",
		repoUrl: "https://github.com/rodrigocvmd/feedback-app",
	},
	{
		title: "Buscador Github",
		stack: "(Frontend)",
		description: [
			"Desenvolvi uma Single-Page Application (SPA) em React para busca e visualização de perfis do GitHub, orquestrando uma integração direta com a API REST oficial da plataforma. Implementei o React Router para criar uma experiência de navegação fluida e intuitiva, permitindo que os usuários transitem de forma eficiente entre a busca, as páginas de perfil e os detalhes de repositórios. O sistema foi projetado com um robusto mecanismo de tratamento de erros, garantindo que a interface responda de maneira clara a cenários como perfis não encontrados ou falhas na comunicação com a API, o que assegura uma UX consistente e profissional.",
			"O pilar técnico deste projeto foi a construção de um sistema de gerenciamento de estado escalável e desacoplado, utilizando a Context API do React em conjunto com o padrão Reducer (hook useReducer). Criei provedores de contexto específicos, como GithubProvider e AlertProvider, para gerenciar de forma isolada e eficiente o estado da aplicação — um para os dados assíncronos da API e outro para notificações de UI. Essa arquitetura evitou o prop drilling, resultando em um código mais limpo, manutenível e otimizado para lidar com os complexos fluxos de dados de uma aplicação moderna.",
			"Este projeto demonstra minha proficiência na construção de aplicações front-end modulares e na integração com APIs de terceiros. A arquitetura permitiu a integração harmoniosa de bibliotecas de UI e ícones, mantendo um design responsivo e coeso. A implementação bem-sucedida de múltiplos contextos e redutores para gerenciar estados complexos solidificou competências cruciais em gerenciamento de estado avançado em React, componentização e na criação de soluções de software que são ao mesmo tempo elegantes na interface e robustas em sua fundação técnica.",
		],
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
		title: "Feedback App (Frontend)",
		stack: "(Full Stack)",
		description: [
			"Desenvolvi uma aplicação SPA (Single-Page Application) interativa para avaliação de produtos e serviços, focada em uma experiência de usuário rica e dinâmica. Para isso, utilizei React como base, orquestrando tecnologias como o React Router para uma navegação fluida entre páginas, e a Framer Motion para implementar micro-interações e animações sofisticadas que guiam o usuário. A aplicação permite o gerenciamento completo de feedbacks através de operações CRUD (Create, Read, Update, Delete) executadas em tempo real na interface.",
			"O núcleo técnico do projeto reside na implementação de um sistema de gerenciamento de estado global, utilizando a Context API do React em conjunto com hooks como useState e useReducer. Essa arquitetura foi projetada para lidar de forma eficiente e previsível com a complexidade das operações CRUD, garantindo a consistência dos dados em toda a árvore de componentes. Superei o desafio de manter a integridade da UI e do estado durante as transições, refatorando o código de forma iterativa para otimizar a performance e garantir um design totalmente responsivo.",
			"Este projeto demonstra minha proficiência no desenvolvimento de aplicações React completas e modernas. A execução consolidou minha habilidade em aplicar conceitos avançados como hooks e o padrão de Context para criar soluções de front-end escaláveis e de fácil manutenção. O resultado é uma aplicação polida, que evidencia minha capacidade de não apenas implementar funcionalidades complexas, mas também de enriquecer a experiência do usuário com interfaces intuitivas e visualmente atraentes, estando preparado para enfrentar desafios de desenvolvimento de software em maior escala.",
		],
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
		projectSlug: "feedback-app",
		liveUrl: "https://main--projeto-feedback.netlify.app/",
		repoUrl: "https://https://github.com/rodrigocvmd/feedback-app",
	},
];

const getProjectDetails = (slug: string) => {
	return allProjects.find((p) => p.projectSlug === slug);
};

const BackButton = ({ className }: { className?: string }) => (
	<Link
		href="/projetos"
		className={`inline-block text-lg text-light-accent dark:text-dark-accent hover:underline font-semibold ${
			className || ""
		}`}>
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
	const [showAllTech, setShowAllTech] = useState(false);

	if (!project) {
		return <div className="text-center py-10">Projeto não encontrado.</div>;
	}

	const visibleTechnologies = showAllTech
		? project.technologies
		: project.technologies.slice(0, 8);

	return (
		<div className="container mx-auto px-4 py-8 sm:px-6 lg:px-8">
			<BackButton className="mb-8" />

			<header className="mb-8 text-center">
				<h1 className="font-heading text-4xl font-bold text-light-text dark:text-dark-text sm:text-5xl">
					{project.title}
				</h1>
				<p className="text-2xl font-semibold font-heading text-light-text dark:text-dark-text mt-2">
					{project.stack}
				</p>
			</header>

			<div className="relative w-full h-64 sm:h-80 md:h-[450px] rounded-lg overflow-hidden mb-8 shadow-lg mx-auto max-w-4xl group">
				{project.inDevelopment && (
					<div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center z-10">
						<span className="text-white text-lg font-bold px-4 py-2 bg-yellow-500 rounded-md">
							Em Desenvolvimento
						</span>
					</div>
				)}
				<Image
					src={project.imageUrl}
					alt={`Imagem do projeto ${project.title}`}
					fill
					className={`object-cover transition-transform duration-300 group-hover:scale-105 ${
						project.inDevelopment ? "opacity-30" : ""
					}`}
					priority
				/>
			</div>

			<div className="flex flex-wrap items-center justify-center gap-4 mb-10">
				{project.liveUrl &&
					(project.inDevelopment ? (
						<div className="relative group/tooltip">
							<div className="inline-block rounded-lg bg-gray-400 px-10 py-4 text-center font-semibold text-gray-600 shadow-md cursor-not-allowed text-xl">
								Ver Online
							</div>
							<div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 w-max whitespace-nowrap bg-gray-800 text-white text-xs font-semibold rounded-md py-1 px-3 opacity-0 group-hover/tooltip:opacity-100 transition-opacity pointer-events-none">
								Desenvolvimento em curso
							</div>
						</div>
					) : (
						<Link
							href={project.liveUrl}
							target="_blank"
							rel="noopener noreferrer"
							className="inline-block rounded-lg bg-light-accent px-10 py-4 text-center font-semibold text-dark-primary shadow-md transition-transform hover:scale-105 text-xl">
							Ver Online
						</Link>
					))}
				{project.repoUrl && (
					<Link
						href={project.repoUrl}
						target="_blank"
						rel="noopener noreferrer"
						className="inline-block rounded-lg border-2 border-light-accent px-10 py-4 text-center font-semibold text-light-accent transition-colors hover:bg-light-accent hover:text-dark-primary dark:border-dark-accent dark:text-dark-accent dark:hover:bg-dark-accent dark:hover:text-dark-primary text-xl">
						Repositório
					</Link>
				)}
			</div>

			<section className="mb-12">
				<h2 className="font-heading text-2xl font-bold text-light-text dark:text-dark-text mb-4 text-center">
					Tecnologias e Habilidades Aplicadas
				</h2>
				<div className="flex flex-wrap justify-center gap-3">
					{visibleTechnologies.map((tech) => (
						<TechTag key={tech} name={tech} />
					))}
				</div>
				{!showAllTech && project.technologies.length > 8 && (
					<div className="text-center mt-4">
						<button
							onClick={() => setShowAllTech(true)}
							className="text-light-accent dark:text-dark-accent font-semibold hover:underline">
							Ver todas
						</button>
					</div>
				)}
			</section>

			<div className="prose prose-lg max-w-4xl mx-auto dark:prose-invert text-justify space-y-4">
				<h2 className="font-heading text-3xl font-bold text-light-text dark:text-dark-text mb-4 text-center">
					Descrição do Projeto
				</h2>
				{project.description.map((paragraph, index) => (
					<p className="indent-16" key={index}>
						{paragraph}
					</p>
				))}
			</div>

			<div className="mt-8 pt-4 border-t border-light-secondary dark:border-dark-secondary">
				<BackButton />
			</div>
		</div>
	);
}
