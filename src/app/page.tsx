// src/app/page.tsx
"use client";

import Link from "next/link";
import ProjectCard from "@/components/ProjectCard";
import TechTag from "@/components/TechTag";
import { useRef } from "react";

const featuredProjects = [
	{
		title: "App Auto Defesa - IA",
		description:
			"SaaS jurídico para multas via Gemini AI, com checkout Stripe (Pix/Boleto), segurança App Check e integração total com o Firebase.",
		imageUrl: "/images/auto-defesa.png",
		technologies: ["Next.js", "Firebase", "Stripe API", "Git", "GCP/IA", "TypeScript"],
		projectSlug: "auto-defesa",
		liveUrl: "https://meuautodefesa.com.br/",
		repoUrl: "https://github.com/rodrigocvmd/auto-defesa",
		repoPrivate: true,
		stack: "Full Stack",
	},
	{
		title: "Marketplace de Imóveis",
		description:
			"Plataforma completa para listagem de imóveis com CRUD, autenticação de usuários (Email/Senha, Google OAuth) e interface responsiva.",
		imageUrl: "/images/imgMarketPlaceImoveis.png",
		technologies: ["React", "Node.js", "TailwindCSS", "Git", "DaisyUI", "JavaScript"],
		projectSlug: "projeto-marketplace-imoveis",
		liveUrl: "https://marketplace-de-imoveis.vercel.app/",
		repoUrl: "https://github.com/rodrigocvmd/marketplace-de-imoveis",
		stack: "Full Stack",
	},
	// {
	// 	title: "App Suporte ao Usuário",
	// 	description:
	// 		"Aplicação de tickets de suporte com backend robusto (API RESTful) e frontend interativo para gerenciamento de solicitações.",
	// 	imageUrl: "/images/imgSuporteUsuario.png",
	// 	technologies: ["Node.js", "Express", "MongoDB", "JWT"],
	// 	projectSlug: "projeto-suporte-usuario",
	// 	liveUrl: "https://suporte-ao-usuario.onrender.com/",
	// 	repoUrl: "https://github.com/rodrigocvmd/suporte-ao-usuario",
	// 	stack: "Backend",
	// },
];

const allSkills = [
	"TypeScript",
	"Prisma (ORM)",
	"PostgreSQL",
	"Next.js",
	"Docker",
	"Express.js",
	"CI/CD (GitHub Actions)",
	"Post CSS",
	"React",
	"Postman",
	"Kanban",
	"JavaScript (ES6+)",
	"Context",
	"Node.js",
	"Python",
	"REST APIs",
	"Nest.js",
	"MongoDB",
	"Firebase",
	"Git & GitHub",
	"HTML5",
	"Vercel",
	"Java",
	"Netlify",
	"Tailwind CSS",
	"Redux (RTK)",
	"Scrum",
	"UI/UX (Princípios)",
];

export default function HomePage() {
	const scrollContainerRef = useRef<HTMLDivElement>(null);

	return (
		<div className="space-y-8 sm:space-y-12">
			{/* Hero Section */}
			<section className="section w-full py-4 sm:py-8 2xl:py-12">
				<div className="container mx-auto px-4 text-center sm:px-6 lg:px-8">
					<div className="mx-auto max-w-4xl">
						<h2 className="font-heading text-3xl font-bold text-light-text dark:text-dark-text sm:text-4xl md:text-5xl 2xl:text-6xl py-4">
							Olá!
						</h2>
						<h1 className="font-heading text-3xl font-bold text-light-text dark:text-dark-text sm:text-4xl md:text-5xl 2xl:text-6xl py-4">
							Bem-vindo(a) ao Meu Portfólio
						</h1>
						{/* <h2 className="font-heading text-4xl font-bold text-light-text dark:text-dark-text sm:text-5xl md:text-6xl 2xl:text-7xl py-4">
							&lt;&gt; :) &lt;/&gt;
						</h2> */}
						<p className="mt-5 text-base leading-relaxed text-light-text dark:text-dark-text sm:text-lg 2xl:text-xl">
							Explore meus projetos, conheça minha trajetória e habilidades.
						</p>
						<p className="text-base leading-relaxed text-light-text dark:text-dark-text sm:text-lg 2xl:text-xl">
							Navegue pelas seções para saber mais e sinta-se à vontade para entrar em contato!
						</p>
					</div>
				</div>
			</section>

			{/* Seção Sobre Mim */}
			<section id="sobre-mim" className="container mx-auto px-4 sm:px-6 lg:px-8">
				<div className="mx-auto max-w-6xl rounded-lg bg-light-secondary p-8 text-center shadow-md dark:bg-dark-secondary">
					<div className="mx-auto max-w-5xl space-y-8">
						<h2 className="font-heading text-3xl font-bold text-light-text dark:text-dark-text sm:text-4xl">
							Um Pouco Sobre Mim
						</h2>
						<div className="space-y-4">
							<p className="mt-5 text-base text-center leading-relaxed text-light-text dark:text-dark-text sm:text-lg 2xl:text-xl">
								Desenvolvedor Backend focado na arquitetura e construção de APIs robustas e
								escaláveis. Busco traduzir desafios em soluções de software eficientes utilizando
								Node.js, Nest.js e PostgreSQL para criar a espinha dorsal de aplicações
								performáticas.
							</p>
							<p className="mt-5 text-base text-center leading-relaxed text-light-text dark:text-dark-text sm:text-lg 2xl:text-xl">
								Vindo de uma carreira em Direito, trago uma capacidade analítica apurada e uma
								obsessão por lógica e atenção aos detalhes para o mundo do código. Em busca de
								oportunidades para aplicar todo o conhecimento que venho adquirindo na construção de
								sistemas backend resilientes e bem documentados.
							</p>
						</div>
						<div className="mt-6">
							<Link
								href="/sobre"
								className="inline-block rounded-lg border-2 border-light-accent px-7 py-2.5 font-semibold text-light-accent transition-colors hover:bg-light-accent hover:text-dark-primary dark:border-dark-accent dark:text-dark-accent dark:hover:bg-dark-accent dark:hover:text-dark-primary text-base sm:text-lg 2xl:px-8 2xl:py-3 2xl:text-xl">
								Veja mais sobre mim
							</Link>
						</div>
					</div>
				</div>
			</section>

			{/* Seção Destaque de Projetos */}
			<section id="destaque-projetos" className="py-4 sm:py-6 2xl:py-8">
				<div className="container mx-auto px-4 text-center sm:px-6 lg:px-8">
					<h2 className="font-heading text-3xl font-bold text-light-text dark:text-dark-text sm:text-4xl 2xl:text-5xl">
						Projetos em Destaque
					</h2>
					<div className="mx-auto mt-10 grid max-w-lg grid-cols-1 gap-8 md:max-w-5xl md:grid-cols-2 lg:gap-10">
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
									repoPrivate={project.repoPrivate}
									stack={project.stack}
								/>
							))
						) : (
							<p className="text-light-text dark:text-dark-text">
								Nenhum projeto em destaque no momento. Volte em breve!
							</p>
						)}
					</div>
					<div className="mt-10">
						<Link
							href="/projetos"
							className="inline-block rounded-lg bg-light-accent px-7 py-2.5 font-semibold text-dark-primary transition-colors hover:bg-opacity-80 text-base sm:text-lg">
							Ver mais projetos
						</Link>
					</div>
				</div>
			</section>

			{/* Seção Habilidades */}
			<section
				id="habilidades"
				className="container mx-auto w-full rounded-xl bg-light-secondary py-4 shadow-md dark:bg-dark-secondary">
				<div className="mx-auto max-w-4xl text-center mb-6">
					<h2 className="font-heading text-3xl font-bold text-light-text dark:text-dark-text sm:text-4xl">
						Principais Habilidades
					</h2>
				</div>
				<div
					className="relative flex items-center overflow-x-hidden"
					style={{
						maskImage: "linear-gradient(to right, transparent, black 10%, black 90%, transparent)",
						WebkitMaskImage:
							"linear-gradient(to right, transparent, black 10%, black 90%, transparent)",
					}}>
					<div ref={scrollContainerRef} className="flex w-max gap-4 animate-scroll">
						{[...allSkills, ...allSkills].map((skill, index) => (
							<div key={`${skill}-${index}`} className="flex-shrink-0 text-lg">
								<TechTag name={skill} />
							</div>
						))}
					</div>
				</div>
			</section>

			{/* Seções Currículo e Contato */}
			<div className="container mx-auto px-4 sm:px-6 lg:px-8">
				<div className="grid grid-cols-1 gap-8 md:grid-cols-2 md:gap-10">
					<section
						id="curriculo"
						className="flex h-full min-h-[300px] w-full flex-col justify-center rounded-lg border-2 border-light-secondary p-8 text-center shadow-md dark:border-dark-secondary">
						<h2 className="font-heading text-3xl font-bold text-light-text dark:text-dark-text sm:text-4xl">
							Veja meu Currículo
						</h2>
						<p className="mt-4 flex-grow text-base leading-relaxed text-light-text dark:text-dark-text sm:text-lg">
							Acesse meu currículo completo para ver mais detalhes sobre minha formação, experiência
							e habilidades.
						</p>
						<div className="mt-6">
							<Link
								href="/curriculo"
								className="inline-block rounded-lg border-2 border-light-accent px-7 py-2.5 font-semibold text-light-accent transition-colors hover:bg-light-accent hover:text-dark-primary dark:border-dark-accent dark:text-dark-accent dark:hover:bg-dark-accent dark:hover:text-dark-primary text-base sm:text-lg">
								Ver o Currículo
							</Link>
						</div>
					</section>

					<section
						id="contato"
						className="flex h-full min-h-[300px] w-full flex-col justify-center rounded-lg bg-light-secondary p-8 text-center shadow-md dark:bg-dark-secondary">
						<h2 className="font-heading text-3xl font-bold text-light-text dark:text-dark-text sm:text-4xl">
							Entre em contato
						</h2>
						<p className="mt-4 flex-grow text-base leading-relaxed text-light-text dark:text-dark-text sm:text-lg">
							Tem alguma pergunta ou proposta? Sinta-se à vontade para entrar em contato comigo.
						</p>
						<div className="mt-6">
							<Link
								href="/contato"
								className="inline-block rounded-lg bg-light-accent px-7 py-2.5 font-semibold text-dark-primary transition-colors hover:bg-opacity-80 text-base sm:text-lg">
								Fale comigo
							</Link>
						</div>
					</section>
				</div>
			</div>
		</div>
	);
}
