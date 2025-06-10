// src/app/sobre/page.tsx
import { Metadata } from "next";

export const metadata: Metadata = {
	title: "Sobre Mim | Meu Portfólio",
	description: "Conheça mais sobre minha trajetória, habilidades e paixão por tecnologia.",
};

// Seus dados de 'skills' e 'education' mantidos integralmente.
const skills = [
	{
		category: "Linguagens",
		items: ["TypeScript", "JavaScript (ES6+)", "HTML5", "CSS3"],
	},
	{
		category: "Frontend",
		items: ["React", "Next.js", "Tailwind CSS", "Redux (Toolkit)", "Context"],
	},
	{ category: "Backend", items: ["Node.js", "Express.js", "REST APIs"] },
	{ category: "Bancos de Dados", items: ["MongoDB", "PostgreSQL", "Firebase"] },
	{
		category: "Ferramentas & DevOps",
		items: ["Git & GitHub", "Vercel", "Netlify", "CI/CD (GitHub Actions)"],
	},
	{
		category: "Outras Habilidades",
		items: [
			"Metodologias Ágeis (Scrum, Kanban)",
			"UI/UX (Princípios)",
			"Resolução Lógica de Problemas",
		],
	},
];

const education = [
	{
		degree: "Graduação em Ciência da Computação",
		institution: "Universidade Católica de Brasília - UCB",
		period: "2024 - 2027",
		description:
			"Estudo aprofundado dos fundamentos da computação, algoritmos, estruturas de dados e desenvolvimento de software.",
	},
	{
		degree: "Bacharel em Direito",
		institution: "UnB - Universidade de Brasília",
		period: "2013 - 2018",
		description:
			"Formação que desenvolveu alta capacidade analítica, argumentativa e de resolução de problemas complexos.",
	},
	{
		degree: "Pós-Graduação em Direito Empresarial",
		institution: "Universidade Estácio de Sá",
		period: "2019 - 2021",
		description:
			"Especialização focada em regulação de mercados, contratos e estruturas societárias.",
	},
];

export default function SobrePage() {
	return (
		// O div principal agora serve como um container geral para as seções, com espaçamento vertical.
		<div className="space-y-20 sm:space-y-24">
			{/* Cabeçalho da Página */}
			<header className="container mx-auto px-4 text-center sm:px-6 lg:px-8">
				<h1 className="font-heading text-4xl font-bold text-light-text dark:text-dark-text sm:text-5xl md:text-6xl 3xl:text-7xl">
					Sobre Mim
				</h1>
				<p className="mx-auto mt-4 max-w-3xl text-lg text-light-text/80 dark:text-dark-text/80 sm:text-xl 3xl:text-2xl">
					Olá!
				</p>
				<p className="mx-auto mt-4 max-w-3xl text-lg text-light-text/80 dark:text-dark-text/80 sm:text-xl 3xl:text-2xl">
					Este é o meu espaço para compartilhar minha jornada no desenvolvimento de software e os
					projetos que venho construindo.
				</p>
				<p className="mx-auto mt-4 max-w-3xl text-lg text-light-text/80 dark:text-dark-text/80 sm:text-xl 3xl:text-2xl">
					Navegue pelas seções para saber mais.
				</p>
			</header>

			{/* Seção Minha Jornada */}
			{/* O <section> agora é full-width para o fundo; o <div> interno contém o conteúdo. */}
			<section className="w-full bg-light-secondary py-16 shadow-md dark:bg-dark-secondary sm:py-20 3xl:py-24">
				<div className="container mx-auto px-4 sm:px-6 lg:px-8">
					<div className="mx-auto max-w-4xl">
						<h2 className="text-center font-heading text-3xl font-semibold text-light-text dark:text-dark-text sm:text-4xl 3xl:text-5xl">
							Minha Jornada
						</h2>
						{/* A classe 'prose' estiliza o texto, e aumentamos seu tamanho em telas maiores. */}
						<div className="prose prose-lg mx-auto mt-8 max-w-none text-light-text dark:prose-invert dark:text-dark-text sm:prose-xl 3xl:prose-2xl">
							<p>
								Desenvolvedor Full Stack em transição de carreira, apaixonado por transformar ideias
								em soluções web eficientes e intuitivas. Com uma sólida formação em Direito pela
								Universidade de Brasília (UnB), busco trazer para a tecnologia um olhar analítico
								aguçado, habilidade na resolução de problemas complexos e atenção meticulosa aos
								detalhes – competências que agora aplico na construção de software de qualidade.
							</p>
							<p>
								Minha jornada na programação é impulsionada pela curiosidade e pelo desejo de criar.
								Estou focado no desenvolvimento Full Stack, aprofundando meus conhecimentos em
								JavaScript/TypeScript e React.js (com Tailwind CSS) para o frontend; e Node.js,
								Express.js, PostgreSQL | MongoDB para o backend. Tenho aplicado essas tecnologias em
								projetos práticos que demonstram minha evolução e dedicação, disponíveis no meu
								portfólio e GitHub.
							</p>
							<p>
								Fluente em inglês e sempre em busca de novos aprendizados, estou comprometido com as
								boas práticas de desenvolvimento, como Clean Code e testes unitários, e pronto para
								colaborar em ambientes dinâmicos e inovadores. Meu comprometimento com a excelência
								técnica é reforçado pela atual graduação em Ciência da Computação na UCB,
								fundamental para minha jornada de aprendizado e especialização, complementando minha
								base teórica e prática.
							</p>
							<p>
								Busco ativamente minha primeira oportunidade como Desenvolvedor para aplicar minhas
								habilidades, contribuir para projetos desafiadores e crescer junto com uma equipe de
								visão.
							</p>
							<p>
								Aqui apresento meu trabalho e paixão por tecnologia. Espero que encontre o que
								procura e, quem sabe, possamos colaborar.
							</p>
						</div>
					</div>
				</div>
			</section>

			{/* Seção Habilidades e Tecnologias */}
			{/* Esta seção não tem fundo, então o container fica por fora do conteúdo. */}
			<section className="container mx-auto px-4 sm:px-6 lg:px-8">
				<h2 className="text-center font-heading text-3xl font-semibold text-light-text dark:text-dark-text sm:text-4xl 3xl:text-5xl">
					Habilidades & Tecnologias
				</h2>
				<div className="mx-auto mt-12 grid max-w-6xl grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
					{skills.map((skillCategory) => (
						<div
							key={skillCategory.category}
							className="rounded-lg bg-light-secondary p-6 shadow-md dark:bg-dark-secondary">
							<h3 className="mb-4 font-heading text-xl font-semibold text-light-accent dark:text-dark-accent 3xl:text-2xl">
								{skillCategory.category}
							</h3>
							<ul className="space-y-2">
								{skillCategory.items.map((item) => (
									<li
										key={item}
										className="text-base text-light-text dark:text-dark-text 3xl:text-lg">
										✓ {item}
									</li>
								))}
							</ul>
						</div>
					))}
				</div>
			</section>

			{/* Seção Formação Acadêmica e Técnica */}
			<section className="container mx-auto px-4 sm:px-6 lg:px-8">
				<h2 className="text-center font-heading text-3xl font-semibold text-light-text dark:text-dark-text sm:text-4xl 3xl:text-5xl">
					Formação Acadêmica e Técnica
				</h2>
				<div className="mx-auto mt-12 max-w-4xl space-y-8">
					{education.map((edu, index) => (
						<div
							key={index}
							className="rounded-lg bg-light-secondary p-6 shadow-md dark:bg-dark-secondary">
							<h3 className="font-heading text-xl font-semibold text-light-text dark:text-dark-text 3xl:text-2xl">
								{edu.degree}
							</h3>
							<p className="font-medium text-light-accent dark:text-dark-accent 3xl:text-lg">
								{edu.institution}
							</p>
							<p className="mb-2 text-sm text-light-text/80 dark:text-dark-text/80 3xl:text-base">
								{edu.period}
							</p>
							<p className="text-base text-light-text dark:text-dark-text 3xl:text-lg">
								{edu.description}
							</p>
						</div>
					))}
				</div>
			</section>
		</div>
	);
}
