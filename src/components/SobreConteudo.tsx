"use client";

import { useState } from "react";
import Image from "next/image";
import Modal from "./Modal"; // Importar o Modal
import Link from "next/link";

// --- DADOS ---
const allSkills = [
	// Linguagens
	{ title: "TypeScript", status: "Domínio", type: "Linguagens" },
	{ title: "JavaScript (ES6+)", status: "Domínio", type: "Linguagens" },
	{ title: "HTML5", status: "Domínio", type: "Linguagens" },
	{ title: "CSS3", status: "Domínio", type: "Linguagens" },
	// Frontend
	{ title: "React", status: "Domínio", type: "Frontend" },
	{ title: "Next.js", status: "Domínio", type: "Frontend" },
	{ title: "Tailwind CSS", status: "Domínio", type: "Frontend" },
	{ title: "Redux (Toolkit)", status: "Em desenvolvimento", type: "Frontend" },
	{ title: "Context", status: "Em desenvolvimento", type: "Frontend" },
	// Backend
	{ title: "Node.js", status: "Domínio", type: "Backend" },
	{ title: "Express.js", status: "Domínio", type: "Backend" },
	{ title: "REST APIs", status: "Domínio", type: "Backend" },
	// Bancos de Dados
	{ title: "MongoDB", status: "Em desenvolvimento", type: "Bancos de Dados" },
	{ title: "PostgreSQL", status: "Domínio", type: "Bancos de Dados" },
	{ title: "Firebase", status: "Domínio", type: "Bancos de Dados" },
	// Ferramentas & DevOps
	{ title: "Git & GitHub", status: "Complementar", type: "Ferramentas & DevOps" },
	{ title: "Vercel", status: "Domínio", type: "Ferramentas & DevOps" },
	{ title: "Netlify", status: "Domínio", type: "Ferramentas & DevOps" },
	{ title: "CI/CD (GitHub Actions)", status: "Em desenvolvimento", type: "Ferramentas & DevOps" },
	// Outras Habilidades
	{
		title: "Metodologias Ágeis (Scrum, Kanban)",
		status: "Complementar",
		type: "Outras Habilidades",
	},
	{ title: "UI/UX (Princípios)", status: "Complementar", type: "Outras Habilidades" },
	{ title: "Resolução Lógica de Problemas", status: "Complementar", type: "Outras Habilidades" },
];

const skillCategories = [
	"Linguagens",
	"Frontend",
	"Backend",
	"Bancos de Dados",
	"Ferramentas & DevOps",
	"Outras Habilidades",
];

const education = [
	{
		degree: "Graduação em Ciência da Computação",
		institution: "Universidade Católica de Brasília - UCB",
		period: "2024 - 2027",
		description:
			"Estudo aprofundado dos fundamentos da computação, algoritmos, estruturas de dados e desenvolvimento de software.",
		isCursando: true,
		imageUrl: "",
	},
	{
		degree: "Bacharel em Direito",
		institution: "UnB - Universidade de Brasília",
		period: "2013 - 2018",
		description:
			"Formação que desenvolveu alta capacidade analítica, argumentativa e de resolução de problemas complexos.",
		isCursando: false,
		imageUrl: "/images/unb.png",
	},
	{
		degree: "Pós-Graduação em Direito Empresarial",
		institution: "Universidade Estácio de Sá",
		period: "2019 - 2021",
		description:
			"Especialização focada em regulação de mercados, contratos e estruturas societárias.",
		isCursando: false,
		imageUrl: "/images/pos.png",
	},
	{
		degree: "Inglês Avançado",
		institution: "Casa Thomas Jefferson",
		period: "2007 - 2011",
		description:
			"Inglês avançado com ênfase em comunicação oral e escrita, leitura crítica e compreensão auditiva.",
		isCursando: false,
		imageUrl: "/images/thomas.png",
	},
];

const certifications = [
	{
		title: "Node.js Developer Course",
		institution: "Andrew Mead, Rob Percival",
		isCursando: false,
		imageUrl: "/images/dev/completenode.png",
	},
	{
		title: "Mastering TypeScript",
		institution: "Colt Steele",
		isCursando: false,
		imageUrl: "/images/dev/ts.png",
	},
	{
		title: "React Front To Back",
		institution: "Brad Traversy",
		isCursando: false,
		imageUrl: "/images/dev/react.png",
	},
	{
		title: "Dev Quest Backend",
		institution: "Ricardo Dias, Roberto Dias",
		isCursando: false,
		imageUrl: "/images/dev/devquestb.png",
	},
	{
		title: "Modern Javascript",
		institution: "Brad Traversy",
		isCursando: false,
		imageUrl: "/images/dev/modernjs.png",
	},
	{
		title: "NodeJS: The Complete Guide",
		institution: "Maximilian Schwarzmüller",
		isCursando: false,
		imageUrl: "/images/dev/node.png",
	},
	{
		title: "Dev Quest Frontend",
		institution: "Ricardo Dias, Roberto Dias",
		isCursando: false,
		imageUrl: "/images/dev/devquestf.png",
	},
	{
		title: "Complete Web Dev Bootcamp",
		institution: "Dr. Angela Yu",
		isCursando: false,
		imageUrl: "/images/dev/webdevbootcamp.png",
	},
	{
		title: "Understanding TypeScript",
		institution: "Maximilian Schwarzmüller",
		isCursando: false,
		imageUrl: "/images/dev/understandingts.png",
	},
	{
		title: "Tailwind CSS From Scratch",
		institution: "Brad Traversy",
		isCursando: false,
		imageUrl: "/images/dev/tailwind.png",
	},
];

// --- COMPONENTE PRINCIPAL ---
export default function SobreConteudo() {
	const [hoveredSkill, setHoveredSkill] = useState<string | null>(null);
	const [isTechSectionOpen, setIsTechSectionOpen] = useState(false);
	const [modalOpen, setModalOpen] = useState(false);
	const [modalImage, setModalImage] = useState("");

	const handleOpenModal = (imageUrl: string) => {
		setModalImage(imageUrl);
		setModalOpen(true);
	};

	return (
		<>
			<div className="space-y-12 sm:space-y-16">
				{/* Hero Section */}
				<section className="container mx-auto px-4 pt-10 pb-8 text-center sm:px-6 md:pt-12 md:pb-10 lg:px-8 2xl:pt-16">
					<div className="mx-auto max-w-5xl">
						<div className="relative mx-auto mb-5 h-32 w-32 overflow-hidden rounded-full shadow-lg bg-light-secondary dark:bg-dark-secondary sm:h-36 sm:w-36 2xl:h-40 2xl:w-40">
							<Image
								src="/images/fotoPerfil.png"
								alt="Foto de Perfil de Rodrigo Carvalho"
								fill
								className="object-cover"
								priority
								sizes="(max-width: 640px) 8rem, 9rem, 10rem"
							/>
						</div>

						<h1 className="font-heading text-4xl font-bold text-light-text dark:text-dark-text sm:text-5xl md:text-6xl 2xl:text-7xl">
							Rodrigo Carvalho
						</h1>
						<p className="mt-3 font-medium text-xl text-light-accent dark:text-dark-accent sm:text-2xl 2xl:text-3xl">
							Desenvolvedor Web Full-Stack
						</p>
						<p className="mt-1.5 font-medium text-lg text-light-accent/80 dark:text-dark-accent/80 sm:text-xl 2xl:text-2xl">
							Graduando em Ciência da Computação
						</p>
					</div>
				</section>

				<section className="w-full bg-light-secondary py-12 shadow-md dark:bg-dark-secondary sm:py-16 2xl:py-20">
					<div className="container mx-auto px-4 sm:px-6 lg:px-8">
						<div className="mx-auto max-w-4xl">
							<h2 className="text-center font-heading text-3xl font-semibold text-light-text dark:text-dark-text sm:text-4xl 2xl:text-5xl">
								Minha Jornada
							</h2>
							<div className="textoSobre prose prose-lg mx-auto mt-6 max-w-none text-light-text dark:prose-invert dark:text-dark-text sm:prose-xl 2xl:prose-2xl text-lg">
								<p className="text-justify indent-16 mb-5">
									Desenvolvedor Full Stack em transição de carreira, apaixonado por transformar
									ideias em soluções web eficientes e intuitivas. Com uma sólida formação em Direito
									pela Universidade de Brasília (UnB), busco trazer para a tecnologia um olhar
									analítico aguçado, habilidade na resolução de problemas complexos e atenção
									meticulosa aos detalhes – competências que agora aplico na construção de software
									de qualidade.
								</p>
								<p className="text-justify indent-16 mb-5">
									Minha jornada na programação é impulsionada pela curiosidade e pelo desejo de
									criar. Estou focado no desenvolvimento Full Stack, aprofundando meus conhecimentos
									em TypeScript e React.js (com Tailwind CSS) para o frontend; Node.js, Express.js,
									PostgreSQL | MongoDB para o backend. Tenho aplicado essas tecnologias em projetos
									práticos que demonstram minha evolução e dedicação, disponíveis no meu portfólio e
									GitHub.
								</p>
								<p className="text-justify indent-16 mb-5">
									Fluente em inglês e sempre em busca de novos aprendizados, estou comprometido com
									as boas práticas de desenvolvimento, como Clean Code e testes unitários, e pronto
									para colaborar em ambientes dinâmicos e inovadores. Meu comprometimento com a
									excelência técnica é reforçado pela atual graduação em Ciência da Computação na
									UCB, fundamental para minha jornada de aprendizado e especialização,
									complementando minha base teórica e prática.
								</p>
								<p className="text-justify indent-16 mb-5">
									Busco ativamente minha primeira oportunidade como Desenvolvedor para aplicar
									minhas habilidades, contribuir para projetos desafiadores e crescer junto com uma
									equipe de visão.
								</p>
							</div>
							<div className="mt-8 flex flex-wrap justify-center gap-4">
								<Link
									href="/curriculo"
									className="inline-block rounded-lg bg-light-accent px-8 py-3 text-center font-semibold text-dark-primary shadow-md transition-transform text-lg hover:bg-opacity-80">
									Veja meu Currículo
								</Link>
								<Link
									href="/contato"
									className="inline-block rounded-lg border-2 border-light-accent px-8 py-3 text-center font-semibold text-light-accent transition-colors hover:bg-light-accent hover:text-dark-primary dark:border-dark-accent dark:text-dark-accent dark:hover:bg-dark-accent dark:hover:text-dark-primary text-lg">
									Entre em Contato
								</Link>
							</div>
						</div>
					</div>
				</section>

				{/* Seção Habilidades e Tecnologias */}
				<section className="container mx-auto px-4 sm:px-6 lg:px-8">
					<h2 className="text-center font-heading text-3xl font-semibold text-light-text dark:text-dark-text sm:text-4xl 2xl:text-5xl">
						Habilidades & Tecnologias
					</h2>
					<div className="mx-auto mt-10 grid max-w-7xl grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
						{skillCategories.map((category) => (
							<div
								key={category}
								className="rounded-lg bg-light-secondary p-6 shadow-md dark:bg-dark-secondary">
								<h3 className="mb-4 font-heading text-xl font-semibold text-light-accent dark:text-dark-accent 2xl:text-2xl">
									{category}
								</h3>
								<ul className="space-y-2">
									{allSkills
										.filter((skill) => skill.type === category)
										.map((skill) => {
											const isHovered = hoveredSkill === skill.title;
											const isDeveloping = skill.status === "Em desenvolvimento";
											const isComplementary = skill.status === "Complementar";

											return (
												<li
													key={skill.title}
													onMouseEnter={() => setHoveredSkill(skill.title)}
													onMouseLeave={() => setHoveredSkill(null)}
													className={`group relative cursor-default transition-all duration-300 ease-in-out transform hover:-translate-y-1 hover:shadow-lg rounded-md p-2 ${
														isHovered
															? isDeveloping
																? "bg-orange-200 dark:bg-orange-800"
																: isComplementary
																? "bg-blue-200 dark:bg-blue-800"
																: "bg-green-200 dark:bg-green-800"
															: ""
													}`}>
													<span className="text-base text-light-text dark:text-dark-text 2xl:text-lg">
														✓ {skill.title}
													</span>
													<div
														className={`absolute inset-0 flex items-center justify-center rounded-md text-xs font-bold text-white transition-opacity duration-300 opacity-0 group-hover:opacity-100 ${
															isDeveloping
																? "bg-orange-500"
																: isComplementary
																? "bg-blue-500"
																: "bg-green-500"
														}`}>
														{skill.status}
													</div>
												</li>
											);
										})}
								</ul>
							</div>
						))}
					</div>
				</section>

				{/* Seção Formação Acadêmica */}
				<section className="container mx-auto px-4 sm:px-6 lg:px-8">
					<h2 className="text-center font-heading text-3xl font-semibold text-light-text dark:text-dark-text sm:text-4xl 2xl:text-5xl">
						Formação Acadêmica
					</h2>
					<div className="mx-auto mt-10 max-w-5xl space-y-6">
						{education.map((edu, index) => (
							<div
								key={index}
								className="relative rounded-lg bg-light-secondary p-6 shadow-md dark:bg-dark-secondary">
								<div className="sm:pr-24">
									<h3 className="font-heading text-xl font-semibold text-light-text dark:text-dark-text 2xl:text-2xl">
										{edu.degree}
									</h3>
									<p className="font-medium text-light-accent dark:text-dark-accent 2xl:text-lg">
										{edu.institution}
									</p>
									<p className="mb-2 text-sm text-light-text/80 dark:text-dark-text/80 2xl:text-base">
										{edu.period}
									</p>
									<p className="text-base text-light-text dark:text-dark-text 2xl:text-lg">
										{edu.description}
									</p>
								</div>
								<div className="mt-4 text-center sm:mt-0 sm:absolute sm:top-4 sm:right-4">
									<button
										onClick={() => !edu.isCursando && handleOpenModal(edu.imageUrl)}
										disabled={edu.isCursando}
										className="group relative rounded-md bg-light-accent px-3 py-1.5 text-sm font-semibold text-dark-primary shadow-sm transition-opacity hover:bg-opacity-80 disabled:cursor-not-allowed disabled:opacity-50">
										Diploma
										{edu.isCursando && (
											<span className="absolute -top-8 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-md bg-gray-700 px-2 py-1 text-xs text-white opacity-0 group-hover:opacity-100 transition-opacity">
												Cursando
											</span>
										)}
									</button>
								</div>
							</div>
						))}
					</div>
				</section>

				{/* Seção Formação Técnica e Certificações */}
				<section className="container mx-auto px-4 sm:px-6 lg:px-8">
					<div className="mx-auto max-w-5xl">
						<button
							onClick={() => setIsTechSectionOpen(!isTechSectionOpen)}
							className="flex w-full items-center justify-between rounded-lg bg-light-secondary px-6 py-4 text-left font-heading text-2xl font-semibold text-light-text dark:bg-dark-secondary dark:text-dark-text">
							<span>Formação Técnica e Certificações</span>
							<svg
								className={`h-6 w-6 transform transition-transform ${
									isTechSectionOpen ? "rotate-180" : ""
								}`}
								xmlns="http://www.w3.org/2000/svg"
								fill="none"
								viewBox="0 0 24 24"
								stroke="currentColor">
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									strokeWidth={2}
									d="M19 9l-7 7-7-7"
								/>
							</svg>
						</button>
						{isTechSectionOpen && (
							<div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-2">
								{certifications.map((cert, index) => (
									<div
										key={index}
										className="relative rounded-lg bg-light-secondary p-6 shadow-md dark:bg-dark-secondary">
										<div className="sm:pr-24">
											<h3 className="font-heading text-xl font-semibold text-light-text dark:text-dark-text 2xl:text-2xl">
												{cert.title}
											</h3>
											<p className="font-medium text-light-accent dark:text-dark-accent 2xl:text-lg">
												{cert.institution}
											</p>
										</div>
										<div className="mt-4 text-center sm:mt-0 sm:absolute sm:top-4 sm:right-4">
											<button
												onClick={() => !cert.isCursando && handleOpenModal(cert.imageUrl)}
												disabled={cert.isCursando}
												className="group relative rounded-md bg-light-accent px-3 py-1.5 text-sm font-semibold text-dark-primary shadow-sm transition-opacity hover:bg-opacity-80 disabled:cursor-not-allowed disabled:opacity-50">
												Certificado
												{cert.isCursando && (
													<span className="absolute -top-8 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-md bg-gray-700 px-2 py-1 text-xs text-white opacity-0 group-hover:opacity-100 transition-opacity">
														Cursando
													</span>
												)}
											</button>
										</div>
									</div>
								))}
							</div>
						)}
					</div>
				</section>
			</div>
			<Modal isOpen={modalOpen} onClose={() => setModalOpen(false)} imageUrl={modalImage} />
		</>
	);
}
