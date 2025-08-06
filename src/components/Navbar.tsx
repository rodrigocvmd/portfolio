'use client';

import Link from "next/link";
import { useState } from "react";
import { usePathname } from 'next/navigation'; // Importar usePathname
import ThemeSwitcher from './ThemeSwitcher';

const Navbar = () => {
	const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
	const pathname = usePathname(); // Obter o caminho atual

	const navLinks = [
		{ href: "/", label: "Início" },
		{ href: "/sobre", label: "Sobre Mim" },
		{ href: "/projetos", label: "Projetos" },
		{ href: "/contato", label: "Contato" },
	];

	const toggleMobileMenu = () => {
		setIsMobileMenuOpen(!isMobileMenuOpen);
	};

	const handleMobileLinkClick = () => {
		setIsMobileMenuOpen(false);
	};

	const isHomePage = pathname === '/';

	return (
		<header className="sticky top-0 z-50 w-full mb-8 bg-light-primary/80 dark:bg-dark-primary/80 backdrop-blur-md shadow-sm">
			<nav className="container mx-auto flex items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
				{/* Logo ou Nome */}
				<Link
					href="/"
					className="text-2xl md:text-3xl font-bold font-heading text-light-text dark:text-dark-text transition-colors hover:text-light-accent dark:hover:text-dark-accent">
					Web Portfólio
				</Link>

				{/* Links de Navegação - Desktop */}
				<div className="hidden items-center space-x-8 md:flex">
					{navLinks.map((link) => (
						<Link
							key={link.href}
							href={link.href}
							className="font-medium text-lg text-light-text transition-colors hover:text-light-accent dark:text-dark-text dark:hover:text-dark-accent">
							{link.label}
						</Link>
					))}
					<ThemeSwitcher />
				</div>

				{/* Botão de Menu Mobile (Hambúrguer) e ThemeSwitcher para mobile */}
				<div className="flex items-center md:hidden">
					<ThemeSwitcher />
					<button
						onClick={toggleMobileMenu}
						aria-label={isMobileMenuOpen ? "Fechar menu" : "Abrir menu"}
						aria-expanded={isMobileMenuOpen}
						className="ml-4 rounded p-1 text-light-text focus:outline-none focus:ring-2 focus:ring-light-accent dark:text-dark-text dark:focus:ring-dark-accent">
						{isMobileMenuOpen ? (
							<svg
								className="h-7 w-7"
								fill="none"
								stroke="currentColor"
								viewBox="0 0 24 24"
								xmlns="http://www.w3.org/2000/svg">
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									strokeWidth="2"
									d="M6 18L18 6M6 6l12 12"></path>
							</svg>
						) : (
							<svg
								className="h-7 w-7"
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
						)}
					</button>
				</div>
			</nav>

			{/* Menu Mobile Dropdown */}
			{isMobileMenuOpen && (
				<div className="absolute w-full bg-light-primary dark:bg-dark-primary shadow-lg md:hidden">
					<nav className="flex flex-col space-y-2 px-4 py-4">
						{navLinks.map((link) => (
							<Link key={`mobile-${link.href}`} href={link.href} onClick={handleMobileLinkClick} className="block rounded px-3 py-2 text-base font-medium text-light-text hover:bg-light-secondary hover:text-light-accent dark:text-dark-text dark:hover:bg-dark-secondary dark:hover:text-dark-accent">
								{link.label}
							</Link>
						))}
					</nav>
				</div>
			)}
		</header>
	);
};

export default Navbar;
