// src/components/Footer.tsx
import Link from "next/link";

const Footer = () => {
	const currentYear = new Date().getFullYear();

	return (
		// O <footer> é full-width, aplicando o fundo de ponta a ponta.
		<footer className="w-full bg-light-secondary mt-8 py-8 text-center text-light-text dark:bg-dark-secondary dark:text-dark-text">
			{/* Este <div> usa a classe 'container' para centralizar e limitar a largura do CONTEÚDO do rodapé. */}
			<div className="container mx-auto px-4 sm:px-6 lg:px-8">
				<div className="mb-4">
					{/* Links para redes sociais ou outras informações */}
					<Link
						href="https_placeholder_linkedin_url"
						target="_blank"
						rel="noopener noreferrer"
						className="mx-2 hover:text-light-accent dark:hover:text-dark-accent transition-colors">
						LinkedIn
					</Link>
					|
					<Link
						href="https_placeholder_github_url"
						target="_blank"
						rel="noopener noreferrer"
						className="mx-2 hover:text-light-accent dark:hover:text-dark-accent transition-colors">
						GitHub
					</Link>
					{/* Adicione mais links conforme necessário */}
				</div>
				<p className="text-sm">&copy; {currentYear} | Rodrigo Carvalho</p>
				<p className="text-sm">
					Repositório deste projeto disponível no&nbsp;
					<Link
						href="https://github.com/rodrigocvmd/portolio"
						target="_blank"
						rel="noopener noreferrer"
						className="hover:text-light-accent dark:hover:text-dark-accent transition-colors text-decoration-line: underline">
						GitHub.
					</Link>
				</p>

				<p className="text-xs mt-2">Desenvolvido com Next.js, React, TypeScript e Tailwind CSS.</p>
			</div>
		</footer>
	);
};

export default Footer;
