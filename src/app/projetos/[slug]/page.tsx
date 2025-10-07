"use client";

import Image from "next/image";
import Link from "next/link";
import TechTag from "@/components/TechTag";
import { useState } from "react";

const allProjects = [
	{
		title: "Em desenvolvimento",
		stack: "(Full Stack)",
		description: [
			"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
			"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
			"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
			"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
			"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
		],
		imageUrl: "/images/imgMarketPlaceImoveis.png",
		technologies: [
			"Nest.js",
			"TypeScript",
			"Node.js",
			"PostgreSQL",
			"Prisma",
			"JWT",
			"Docker",
			"Git",
			"GitHub",
			"Jest",
		],
		projectSlug: "projeto-reserva-de-recursos",
		liveUrl: "",
		repoUrl: "https://github.com/rodrigocvmd/marketplace-de-imoveis",
		inDevelopment: true,
		progress: 50,
	},
	{
		title: "Marketplace de Imóveis",
		stack: "(Full Stack)",
		description: [
			"Neste projeto, desenvolvi uma plataforma de marketplace imobiliário completa e robusta, utilizando React para construir uma Single-Page Application (SPA) dinâmica e de alta performance. O objetivo central foi criar uma experiência de usuário intuitiva e fluida, desde a busca de imóveis até o gerenciamento de anúncios. Para isso, orquestrei um ecossistema de tecnologias modernas, empregando Tailwind CSS e DaisyUI para criar uma interface responsiva e esteticamente agradável, que garante consistência visual e usabilidade em qualquer dispositivo. A interatividade foi enriquecida com a biblioteca Swiper, implementada para exibir listagens em destaque de forma elegante e engajadora.",
			"Para garantir a segurança e a integridade dos dados, implementei um sistema de autenticação multifacetado com o Firebase Authentication. A solução suporta tanto o cadastro tradicional (email e senha) quanto a autenticação social via Google (OAuth), direcionando os usuários para rotas protegidas através de componentes PrivateRoute customizados. A persistência e o gerenciamento dos dados dos anúncios foram realizados no Cloud Firestore, o banco de dados NoSQL do Firebase, onde estruturei as informações para permitir operações CRUD (criação, leitura, edição e exclusão) de forma eficiente e escalável.",
			"A execução deste projeto solidificou competências cruciais em arquitetura de front-end e na integração de serviços de Backend-as-a-Service (BaaS). Superar desafios como o gerenciamento de estado complexo durante o ciclo de autenticação e a otimização de consultas ao Firestore aprimorou minhas habilidades em React Hooks, componentização e práticas de desenvolvimento seguro. O resultado é uma aplicação web funcional, escalável e pronta para o mercado, que demonstra minha capacidade de traduzir requisitos de negócio em soluções técnicas eficazes e com foco na experiência do usuário.",
		],
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
		description: [
			"Neste projeto, projetei e implementei a arquitetura de backend completa para um sistema de suporte ao cliente, focando em escalabilidade, segurança e performance. Desenvolvi uma API RESTful como núcleo da aplicação, responsável por orquestrar toda a lógica de negócio, incluindo o ciclo de vida de tickets de suporte — desde a abertura e categorização até o acompanhamento e a resolução. A comunicação entre cliente e servidor foi protegida com um sistema de autenticação baseado em JWT (JSON Web Tokens), garantindo que todas as transações de dados fossem seguras e que o acesso aos recursos da API fosse rigorosamente controlado.",

			"A arquitetura de segurança foi um pilar central, materializada através de um pipeline de middleware customizado. Este pipeline intercepta cada requisição para validar o token de autenticação, verificar permissões e proteger rotas críticas, garantindo a integridade e a confidencialidade dos dados dos usuários. Além da autenticação, construí um sistema robusto de tratamento de erros e logging, projetado para fornecer feedback instantâneo e claro ao frontend. Essa abordagem não só melhora a experiência do usuário com notificações em tempo real, mas também facilita a depuração e a manutenção do sistema no lado do servidor.",

			"Este projeto foi fundamental para consolidar minha expertise em design de sistemas backend e na implementação de padrões de segurança modernos. A experiência demonstra minha proficiência na criação de APIs RESTful eficientes, na gestão de autenticação e autorização em ambientes de produção e na construção de uma lógica de servidor que é ao mesmo tempo confiável e escalável. O resultado é um backend que não apenas funciona como a espinha dorsal da aplicação, mas que também agrega valor ao garantir performance, segurança e uma base sólida para futuras expansões.",
		],
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
		title: "Feedback Application",
		stack: "(Frontend)",
		description: [
			"Este projeto destaca-se pelo desenvolvimento de um backend robusto e eficiente, responsável por gerenciar toda a lógica de suporte ao usuário, abertura e acompanhamento de tickets/ocorrências e seus respectivos estados de resolução.",
			"A criação e integração de uma API RESTful foram essenciais para garantir uma comunicação fluida entre o frontend e o backend, proporcionando operações seguras e em tempo real. O sistema de autenticação foi desenvolvido utilizando JWT (JSON Web Tokens), garantindo que cada solicitação enviada pelos usuários estivesse devidamente autenticada e autorizada.",
			"Além disso, as rotas protegidas, gerenciadas pelo backend, asseguram que apenas usuários autenticados possam acessar áreas sensíveis da aplicação, garantindo a segurança e integridade dos dados. O maior desafio deste projeto foi a implementação de uma lógica sólida no server side para autenticação e autorização de usuários, aliada à gestão do estado global via Redux no frontend.",
			"No backend, foi essencial desenvolver e estruturar um sistema de middleware para verificar tokens de autenticação em cada requisição e proteger as rotas privadas. Também foi fundamental implementar um sistema de registro e tratamento de erros que possibilitasse feedback em tempo real para o usuário, fornecendo respostas claras e imediatas por meio de notificações. Esta abordagem resultou em uma aplicação com um backend confiável, escalável e seguro.",
			"Este projeto foi um marco no meu aprendizado sobre o desenvolvimento de backend, contribuindo significativamente para minha expertise em autenticação e roteamento seguro. A construção de um sistema backend escalável e seguro me ensinou lições valiosas sobre a importância da arquitetura e da proteção de dados sensíveis. O backend não só facilitou a interação do usuário com o sistema, mas também garantiu que as operações fossem realizadas de maneira segura, rápida e eficiente, resultando em uma aplicação que oferece tanto uma experiência de uso otimizada quanto de segurança.",
		],
		imageUrl: "/images/feedback.png",
		technologies: ["Node.js", "Express", "MongoDB", "JWT"],
		projectSlug: "projeto-suporte-usuario",
		liveUrl: "https://suporte-ao-usuario.onrender.com/",
		repoUrl: "https://github.com/rodrigocvmd/suporte-ao-usuario",
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
		liveUrl: "https://suporte-ao-usuario.onrender.com/",
		repoUrl: "https://github.com/rodrigocvmd/suporte-ao-usuario",
	},
];

const getProjectDetails = (slug: string) => {
	return allProjects.find((p) => p.projectSlug === slug);
};

const BackButton = () => (
	<Link
		href="/projetos"
		className="inline-block text-lg text-light-accent dark:text-dark-accent hover:underline mb-8 font-semibold">
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

	const visibleTechnologies = showAllTech ? project.technologies : project.technologies.slice(0, 8);

	return (
		<div className="container mx-auto px-4 py-8 sm:px-6 lg:px-8">
			<BackButton />

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
				{project.liveUrl && !project.inDevelopment && (
					<Link
						href={project.liveUrl}
						target="_blank"
						rel="noopener noreferrer"
						className="inline-block rounded-lg bg-light-accent px-10 py-4 text-center font-semibold text-dark-primary shadow-md transition-transform hover:scale-105 text-xl">
						Ver Online
					</Link>
				)}
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
					Tecnologias Utilizadas
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

			<div className="mt-12 pt-8 border-t border-light-secondary dark:border-dark-secondary">
				<BackButton />
			</div>
		</div>
	);
}
