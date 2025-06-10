// src/components/Navbar.tsx
import Link from "next/link";
// import ThemeSwitcher from './ThemeSwitcher'; // Descomente se/quando implementar

const Navbar = () => {
	// Links de navegação completos como definido na blueprint
	const navLinks = [
		{ href: "/", label: "Início" },
		{ href: "/sobre", label: "Sobre Mim" },
		{ href: "/projetos", label: "Projetos" },
		{ href: "/contato", label: "Contato" },
	];

	return (
		// O <header> é full-width, aplicando o fundo e sombra na tela inteira.
		<header className="sticky top-0 z-50 w-full mb-8 bg-light-primary/80 dark:bg-dark-primary/80 backdrop-blur-md shadow-sm">
			{/* O <nav> usa a classe 'container' para centralizar e limitar a largura do CONTEÚDO de navegação. */}
			{/* Isso é intencional e bom para usabilidade em telas 3xl/4xl. */}
			<nav className="container mx-auto flex items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
				{/* Logo ou Nome */}
				<Link
					href="/"
					className="text-2xl font-bold font-heading text-light-text dark:text-dark-text transition-colors hover:text-light-accent dark:hover:text-dark-accent">
					Seu Nome
				</Link>

				{/* Links de Navegação - Desktop */}
				<div className="hidden items-center space-x-6 md:flex">
					{navLinks.map((link) => (
						<Link
							key={link.href}
							href={link.href}
							className="font-medium text-light-text transition-colors hover:text-light-accent dark:text-dark-text dark:hover:text-dark-accent">
							{link.label}
						</Link>
					))}
					{/* <ThemeSwitcher /> Opcional: Botão de trocar tema aqui */}
				</div>

				{/* Botão de Menu Mobile (Hambúrguer) - Placeholder */}
				<div className="md:hidden">
					{/* A lógica para abrir/fechar o menu mobile com React viria aqui */}
					<button
						aria-label="Abrir menu"
						className="text-light-text focus:outline-none dark:text-dark-text">
						<svg
							className="h-6 w-6"
							fill="none"
							stroke="currentColor"
							viewBox="0 0 24 24"
							xmlns="http://www.w3.org/2000/svg">
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								strokeWidth="2"
								d="M4 6h16M4 12h16m-7 6h7"></path>
						</svg>
					</button>
				</div>
			</nav>
		</header>
	);
};

export default Navbar;
