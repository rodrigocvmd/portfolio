import Image from "next/image";
import Link from "next/link";
import TechTag from "@/components/TechTag";

const allProjects = [
	{
		title: "Em desenvolvimento",
		description: [
			"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
			"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
			"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
			"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
			"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
		],
		imageUrl: "/images/imgMarketPlaceImoveis.png",
		technologies: ["React", "Node.js", "TailwindCSS", "Git", "DaisyUI", "JavaScript"],
		projectSlug: "projeto-reserva-de-recursos",
		liveUrl: "",
		repoUrl: "https://github.com/rodrigocvmd/marketplace-de-imoveis",
		inDevelopment: true,
		progress: 50,
	},
	{
		title: "Marketplace de Imóveis (Full Stack)",
		description: [
			"Projeto React de um Marketplace de imóveis completo que permite a autenticação, criação, edição e visualização de anúncios. Foram combinadas diversas tecnologias e práticas modernas para criar uma aplicação web rica e funcional.",
			"Utilizando Tailwind CSS com DaisyUI para estilização, o projeto oferece uma interface limpa e responsiva, adaptável a diferentes dispositivos. A autenticação e o gerenciamento de usuários são realizados através do Firebase Authentication, integrando tanto o login tradicional por email e senha quanto o login via OAuth com Google, além de proteger rotas específicas com componentes customizados como o PrivateRoute.",
			"A exibição dinâmica de conteúdos, como o slider de itens recomendados, é implementada utilizando a biblioteca Swiper, criando uma experiência interativa para o usuário. Os principais desafios enfrentados neste projeto envolveram a integração das funcionalidades de autenticação com o gerenciamento de estados no React, garantindo que a navegação e a proteção de rotas fossem executadas de maneira fluida e segura.",
			"Além disso, foi necessário garantir que o design responsivo funcionasse corretamente com as personalizações do Tailwind CSS e integração do DaisyUI, atendendo a diferentes tamanhos de tela. Já a integração com o Firebase, tanto para autenticação quanto para a manipulação de dados na Firestore, exigiu uma compreensão sólida das práticas recomendadas para garantir segurança e desempenho.",
			"Este projeto proporcionou um aprendizado significativo na construção de aplicações web modernas e escaláveis, destacando a importância de uma arquitetura bem definida e do uso de ferramentas adequadas para cada funcionalidade. A superação dos desafios técnicos reforçou habilidades em gerenciamento de estado, roteamento seguro e design responsivo, resultando em uma aplicação completa que entrega uma experiência de usuário satisfatória, seja na usabilidade, seja no design.",
		],
		imageUrl: "/images/imgMarketPlaceImoveis.png",
		technologies: ["React", "Node.js", "TailwindCSS", "Git", "DaisyUI", "JavaScript"],
		projectSlug: "projeto-marketplace-imoveis",
		liveUrl: "https://marketplace-de-imoveis.vercel.app/",
		repoUrl: "https://github.com/rodrigocvmd/marketplace-de-imoveis",
	},
	{
		title: "Sistema de Suporte ao Usuário (Full Stack)",
		description: [
			"Este projeto destaca-se pelo desenvolvimento de um backend robusto e eficiente, responsável por gerenciar toda a lógica de suporte ao usuário, abertura e acompanhamento de tickets/ocorrências e seus respectivos estados de resolução.",
			"A criação e integração de uma API RESTful foram essenciais para garantir uma comunicação fluida entre o frontend e o backend, proporcionando operações seguras e em tempo real. O sistema de autenticação foi desenvolvido utilizando JWT (JSON Web Tokens), garantindo que cada solicitação enviada pelos usuários estivesse devidamente autenticada e autorizada.",
			"Além disso, as rotas protegidas, gerenciadas pelo backend, asseguram que apenas usuários autenticados possam acessar áreas sensíveis da aplicação, garantindo a segurança e integridade dos dados. O maior desafio deste projeto foi a implementação de uma lógica sólida no server side para autenticação e autorização de usuários, aliada à gestão do estado global via Redux no frontend.",
			"No backend, foi essencial desenvolver e estruturar um sistema de middleware para verificar tokens de autenticação em cada requisição e proteger as rotas privadas. Também foi fundamental implementar um sistema de registro e tratamento de erros que possibilitasse feedback em tempo real para o usuário, fornecendo respostas claras e imediatas por meio de notificações. Esta abordagem resultou em uma aplicação com um backend confiável, escalável e seguro.",
			"Este projeto foi um marco no meu aprendizado sobre o desenvolvimento de backend, contribuindo significativamente para minha expertise em autenticação e roteamento seguro. A construção de um sistema backend escalável e seguro me ensinou lições valiosas sobre a importância da arquitetura e da proteção de dados sensíveis. O backend não só facilitou a interação do usuário com o sistema, mas também garantiu que as operações fossem realizadas de maneira segura, rápida e eficiente, resultando em uma aplicação que oferece tanto uma experiência de uso otimizada quanto de segurança.",
		],
		imageUrl: "/images/imgSuporteUsuario.png",
		technologies: ["Node.js", "Express", "MongoDB", "JWT"],
		projectSlug: "projeto-suporte-usuario",
		liveUrl: "https://suporte-ao-usuario.onrender.com/",
		repoUrl: "https://github.com/rodrigocvmd/suporte-ao-usuario",
	},
	{
		title: "Feedback Application (Frontend)",
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
		title: "Buscador Github (Full Stack)",
		description: [
			"Neste projeto, fiz uso do React Router para permitir uma navegação fluida entre as diferentes páginas, facilitando a busca e exibição de perfis e repositórios do GitHub através de integração com a API oficial.",
			"O backend desempenha um papel crucial ao lidar com requisições assíncronas, possibilitando a recuperação de dados de usuários e suas contribuições, enquanto permite o direcionamento para perfis e repositórios de maneira eficiente. A solução implementada não apenas oferece uma interface amigável, mas também é capaz de lidar com situações de erro, como perfis inexistentes ou páginas não encontradas, garantindo uma experiência completa ao usuário.",
			"Uma das partes mais valiosas deste projeto foi o desenvolvimento de um sistema robusto de gerenciamento de estado, que combinou o uso de contextos e reducers personalizados, como o GithubProvider e o AlertProvider. Ao utilizar a Context API, foi possível fornecer dados e funcionalidades para múltiplos componentes sem depender da passagem manual de propriedades entre diferentes níveis da árvore de componentes, mantendo o código limpo e eficiente. Essa abordagem permitiu um controle dinâmico sobre o fluxo de dados da aplicação, especialmente ao lidar com dados complexos e comunicação assíncrona com a API.",
			"Além da interface, a arquitetura modular e a integração com diversas libs de ícones e componentes foram um desafio para a criação de soluções escaláveis e responsivas. O gerenciamento eficiente de múltiplos contextos e a criação de reducers para alertas e dados do GitHub são exemplos da capacidade técnica aprendida e aplicada no desenvolvimento deste projeto, o que reforça habilidades essenciais na construção de aplicações web modernas.",
		],
		imageUrl: "/images/buscador-github.png",
		technologies: ["Node.js", "Express", "MongoDB", "JWT"],
		projectSlug: "projeto-suporte-usuario",
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

			{project.inDevelopment && project.progress !== undefined && (
				<div className="mb-8 max-w-4xl mx-auto">
					<h3 className="text-center text-xl font-semibold mb-2">Progresso do Projeto</h3>
					<div className="w-full bg-gray-200 rounded-full h-4 dark:bg-gray-700">
						<div
							className="bg-blue-600 h-4 rounded-full"
							style={{ width: `${project.progress}%` }}></div>
					</div>
					<p className="text-center mt-2">{project.progress}% concluído</p>
				</div>
			)}

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
					{project.technologies.map((tech) => (
						<TechTag key={tech} name={tech} />
					))}
				</div>
			</section>

			<div className="prose prose-lg max-w-4xl mx-auto dark:prose-invert text-justify space-y-4">
				<h2 className="font-heading text-3xl font-bold text-light-text dark:text-dark-text mb-4 text-center">
					Descrição do Projeto
				</h2>
				{project.description.map((paragraph, index) => (
					<p key={index}>{paragraph}</p>
				))}
			</div>

			<div className="mt-12 pt-8 border-t border-light-secondary dark:border-dark-secondary">
				<BackButton />
			</div>
		</div>
	);
}
