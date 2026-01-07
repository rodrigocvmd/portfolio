// src/components/Footer.tsx
import Link from "next/link";
import { FaLinkedin, FaGithub, FaWhatsapp } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";

const Footer = () => {
	const currentYear = new Date().getFullYear();

	// Links de contato
	const contacts = {
		linkedin: "https://www.linkedin.com/in/rodrigocvmd/",
		github: "https://github.com/rodrigocvmd",
		email: "mailto:rodrigocvmd@gmail.com",
		whatsapp: "https://wa.me/5561999662404",
		repo: "https://github.com/rodrigocvmd/meu-portfolio",
	};

	return (
		<footer className="w-full bg-light-secondary mt-12 py-8 text-center text-light-text dark:bg-dark-secondary dark:text-dark-text">
			<div className="container mx-auto px-4 sm:px-6 lg:px-8">
				{/* Ícones de Redes Sociais e Contato */}
				<div className="flex justify-center items-center space-x-6 mb-6">
					<a
						href={contacts.linkedin}
						target="_blank"
						rel="noopener noreferrer"
						aria-label="LinkedIn de Rodrigo Carvalho"
						className="text-5xl hover:text-light-accent dark:hover:text-dark-accent transition-transform duration-300 hover:scale-110">
						<FaLinkedin />
					</a>
					<a
						href={contacts.github}
						target="_blank"
						rel="noopener noreferrer"
						aria-label="GitHub de Rodrigo Carvalho"
						className="text-5xl hover:text-light-accent dark:hover:text-dark-accent transition-transform duration-300 hover:scale-110">
						<FaGithub />
					</a>
					<a
						href={contacts.email}
						aria-label="Enviar um email para Rodrigo Carvalho"
						className="text-5xl hover:text-light-accent dark:hover:text-dark-accent transition-transform duration-300 hover:scale-110">
						<MdOutlineEmail />
					</a>
					<a
						href={contacts.whatsapp}
						target="_blank"
						rel="noopener noreferrer"
						aria-label="Entrar em contato com Rodrigo Carvalho via WhatsApp"
						className="text-5xl hover:text-light-accent dark:hover:text-dark-accent transition-transform duration-300 hover:scale-110">
						<FaWhatsapp />
					</a>
				</div>

				{/* Informações de Copyright e Repositório */}
				<p className="text-base">&copy; {currentYear} | Rodrigo Carvalho</p>
				<p className="text-base">
					Repositório deste projeto disponível no&nbsp;
					<Link
						href={contacts.repo}
						target="_blank"
						rel="noopener noreferrer"
						className="underline hover:text-light-accent dark:hover:text-dark-accent transition-colors">
						GitHub
					</Link>
					.
				</p>

				{/* Tecnologias Utilizadas */}
				<p className="text-sm mt-4">Desenvolvido com TypeScript, Next.js, React e Tailwind CSS. Hospedado na Vercel.</p>
			</div>
		</footer>
	);
};

export default Footer;
