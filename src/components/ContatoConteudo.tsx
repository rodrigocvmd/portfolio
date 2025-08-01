// src/components/ContatoConteudo.tsx
"use client";

import { useState } from "react";
import {
	FaWhatsapp,
	FaLinkedin,
	FaCopy,
	FaGithub,
	FaDiscord,
	FaPhoneAlt,
	FaArrowRight,
} from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";

// Ícones SVG simples para copiar e verificado
const CopyIcon = () => (
	<svg
		xmlns="http://www.w3.org/2000/svg"
		width="16"
		height="16"
		viewBox="0 0 24 24"
		fill="none"
		stroke="currentColor"
		strokeWidth="2"
		strokeLinecap="round"
		strokeLinejoin="round">
		<rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect>
		<path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
	</svg>
);

const CheckIcon = () => (
	<svg
		xmlns="http://www.w3.org/2000/svg"
		width="16"
		height="16"
		viewBox="0 0 24 24"
		fill="none"
		stroke="currentColor"
		strokeWidth="3"
		strokeLinecap="round"
		strokeLinejoin="round">
		<polyline points="20 6 9 17 4 12"></polyline>
	</svg>
);

export default function ContatoConteudo() {
	const [copiedStatus, setCopiedStatus] = useState<{ [key: string]: boolean }>({});
	const [phoneLinkText, setPhoneLinkText] = useState("(61) 9 99966-2404");

	const handleCopy = async (textToCopy: string, key: string, successMessage?: string) => {
		try {
			await navigator.clipboard.writeText(textToCopy);
			setCopiedStatus((prev) => ({ ...prev, [key]: true }));
			if (successMessage) {
				alert(successMessage);
			}
			setTimeout(() => {
				setCopiedStatus((prev) => ({ ...prev, [key]: false })); // Reseta o ícone
			}, 2000); // Reset status after 2 seconds
		} catch (err) {
			console.error("Falha ao copiar: ", err);
			alert("Falha ao copiar texto.");
		}
	};

	const handlePhoneCopyAndTextChange = async () => {
		try {
			await navigator.clipboard.writeText("61999662404");
			setPhoneLinkText("Telefone copiado!");
			setTimeout(() => {
				setPhoneLinkText("(61) 9 99966-2404");
			}, 2500);
		} catch (err) {
			console.error("Falha ao copiar telefone: ", err);
			alert("Falha ao copiar telefone.");
		}
	};

	return (
		<div className="space-y-12 sm:space-y-16">
			<header className="container mx-auto px-4 pt-8 text-center sm:px-6 lg:px-8">
				<h1 className="font-heading text-4xl font-bold text-light-text dark:text-dark-text sm:text-5xl md:text-6xl 3xl:text-7xl">
					Entre em Contato
				</h1>
				<p className="mx-auto mt-4 max-w-3xl text-lg text-light-text/80 dark:text-dark-text/80 sm:text-xl 3xl:text-2xl">
					Seja para uma oportunidade de colaboração, discutir sobre um projeto ou apenas para
					trocar uma ideia.
				</p>
				<p className="mx-auto mt-4 max-w-3xl text-lg text-light-text/80 dark:text-dark-text/80 sm:text-xl 3xl:text-2xl">
					Estou sempre disponível para conversarmos!
				</p>
			</header>

			<section className="secaoContato container mx-auto px-4 sm:px-6 lg:px-8">
				{/* Grid para Contato Direto e Outras Formas de Contato (lado a lado em telas maiores) */}
				<div className="contatoDiretoGrid mx-auto grid max-w-6xl grid-cols-1 items-stretch gap-10 md:grid-cols-2 md:gap-x-10 lg:gap-x-12">
					{/* Bloco de Informações Diretas */}
					<div className="contatoDiretoItem h-full space-y-8 rounded-lg bg-light-secondary p-6 shadow-md dark:bg-dark-secondary sm:p-8">
						<h2 className="text-center mb-6 font-heading text-2xl font-semibold text-light-text dark:text-dark-text sm:text-3xl 3xl:text-4xl">
							Contato Direto
						</h2>
						<p className="text-base text-center text-light-text dark:text-dark-text sm:text-lg 3xl:text-xl">
							Melhores formas para me encontrar
						</p>

						<div className="space-y-6">
							{/* Email */}
							<div>
								<h3 className="flex items-center justify-between text-lg font-medium text-light-accent dark:text-dark-accent 3xl:text-xl">
									<span className="flex items-center">
										<MdOutlineEmail className="mr-2" /> Email:
									</span>
									<button
										onClick={() => handleCopy("rodrigocvmd@gmail.com", "email")}
										title="Copiar email"
										className="ml-2 p-1 rounded-md hover:bg-light-primary dark:hover:bg-dark-primary text-light-text dark:text-dark-text transition-colors">
										{copiedStatus["email"] ? <CheckIcon /> : <CopyIcon />}
									</button>
								</h3>
								<div className="flex items-center">
									<a
										href="mailto:rodrigocvmd@gmail.com"
										className="text-light-text hover:underline dark:text-dark-text 3xl:text-lg break-all">
										rodrigocvmd@gmail.com
									</a>
								</div>
							</div>

							{/* LinkedIn */}
							<div>
								<h3 className="flex items-center justify-between text-lg font-medium text-light-accent dark:text-dark-accent 3xl:text-xl">
									<span className="flex items-center">
										<FaLinkedin className="mr-2" /> LinkedIn:
									</span>
									<button
										onClick={() =>
											handleCopy("https://www.linkedin.com/in/rodrigocvmd/", "linkedin")
										}
										title="Copiar link do LinkedIn"
										className="ml-2 p-1 rounded-md hover:bg-light-primary dark:hover:bg-dark-primary text-light-text dark:text-dark-text transition-colors">
										{copiedStatus["linkedin"] ? <CheckIcon /> : <CopyIcon />}
									</button>
								</h3>
								<div className="flex items-center">
									<a
										href="https://www.linkedin.com/in/rodrigocvmd/"
										target="_blank"
										rel="noopener noreferrer"
										className="text-light-text hover:underline dark:text-dark-text 3xl:text-lg break-all">
										/in/rodrigocvmd
									</a>
								</div>
							</div>
							{/* Telefone */}
							<div>
								<h3 className="flex items-center justify-between text-lg font-medium text-light-accent dark:text-dark-accent 3xl:text-xl">
									<span className="flex items-center">
										<FaPhoneAlt className="mr-2" /> Telefone:
									</span>
									<button
										onClick={() => handleCopy("+5561999662404", "telefone")}
										title="Copiar telefone"
										className="ml-2 p-1 rounded-md hover:bg-light-primary dark:hover:bg-dark-primary text-light-text dark:text-dark-text transition-colors">
										{copiedStatus["telefone"] ? <CheckIcon /> : <CopyIcon />}
									</button>
								</h3>
								<div className="telefone flex items-center">
									<a
										href="#!" // Previne navegação, comportamento de botão
										onClick={handlePhoneCopyAndTextChange}
										className="text-light-text hover:underline dark:text-dark-text 3xl:text-lg break-all cursor-pointer"
										role="button"
										tabIndex={0}>
										{phoneLinkText}
									</a>
								</div>
							</div>
						</div>
						<p className="border-t text-center border-light-primary pt-4 text-sm text-light-text/70 dark:border-dark-primary dark:text-dark-text/70">
							Responderei ao contato assim que possível.
						</p>
					</div>

					{/* Outras Redes */}
					<div className="outrasFormasContatoItem h-full space-y-8 rounded-lg bg-light-secondary p-6 shadow-md dark:bg-dark-secondary sm:p-8">
						<h2 className="text-center mb-6 font-heading text-2xl font-semibold text-light-text dark:text-dark-text sm:text-3xl 3xl:text-4xl">
							Outras Redes
						</h2>
						<p className="text-base text-center text-light-text dark:text-dark-text sm:text-lg 3xl:text-xl">
							Aproveite para me visitar em outras redes
						</p>

						<div className="space-y-6">
							{/* WhatsApp */}
							<div>
								<h3 className="flex items-center justify-between text-lg font-medium text-light-accent dark:text-dark-accent 3xl:text-xl">
									<span className="flex items-center">
										<FaWhatsapp className="mr-2" /> WhatsApp:
									</span>
									<a
										href="https://wa.me/5561999662404"
										target="_blank"
										rel="noopener noreferrer"
										title="Abrir WhatsApp"
										className="ml-2 p-1 rounded-md hover:bg-light-primary dark:hover:bg-dark-primary text-light-text dark:text-dark-text transition-colors">
										<FaArrowRight />
									</a>
								</h3>
								<div className="flex items-center">
									<a
										href="https://wa.me/5561999662404"
										target="_blank"
										rel="noopener noreferrer"
										className="text-light-text hover:underline dark:text-dark-text 3xl:text-lg break-all">
										Abrir uma conversa
									</a>
								</div>
							</div>

							{/* GitHub */}
							<div>
								<h3 className="flex items-center justify-between text-lg font-medium text-light-accent dark:text-dark-accent 3xl:text-xl">
									<span className="flex items-center">
										<FaGithub className="mr-2" /> GitHub:
									</span>
									<button
										onClick={() => handleCopy("https://github.com/rodrigocvmd", "github")}
										title="Copiar link GitHub"
										className="ml-2 p-1 rounded-md hover:bg-light-primary dark:hover:bg-dark-primary text-light-text dark:text-dark-text transition-colors">
										{copiedStatus["github"] ? <CheckIcon /> : <CopyIcon />}
									</button>
								</h3>
								<div className="flex items-center">
									<a
										href="https://github.com/rodrigocvmd"
										target="_blank"
										rel="noopener noreferrer"
										className="text-light-text hover:underline dark:text-dark-text 3xl:text-lg break-all">
										/rodrigocvmd
									</a>
								</div>
							</div>

							{/* Discord */}
							<div>
								<h3 className="flex items-center justify-between text-lg font-medium text-light-accent dark:text-dark-accent 3xl:text-xl">
									<span className="flex items-center">
										<FaDiscord className="mr-2" /> Discord:
									</span>
									<button
										onClick={() => handleCopy("1067993447706931243", "discord")}
										title="Copiar Discord ID"
										className="ml-2 p-1 rounded-md hover:bg-light-primary dark:hover:bg-dark-primary text-light-text dark:text-dark-text transition-colors">
										{copiedStatus["discord"] ? <CheckIcon /> : <CopyIcon />}
									</button>
								</h3>
								<div className="flex items-center">
									<a
										href="https://discordapp.com/users/1067993447706931243"
										target="_blank"
										rel="noopener noreferrer"
										className="text-light-text hover:underline dark:text-dark-text 3xl:text-lg break-all">
										&lt;@rodrigocvmd&gt;
									</a>
								</div>
							</div>
						</div>
						<p className="border-t text-center border-light-primary pt-4 text-sm text-light-text/70 dark:border-dark-primary dark:text-dark-text/70">
							Sinta-se à vontade para se conectar!
						</p>
					</div>
				</div>

				{/* Formulário agora abaixo do grid de contatos diretos */}
				<div className="mx-auto mt-10 max-w-4xl md:mt-12">
					<form
						className="formulario space-y-6 rounded-lg bg-light-secondary p-6 shadow-md dark:bg-dark-secondary sm:p-8"
						onSubmit={(e) => {
							e.preventDefault();
							alert("Simulação de envio!");
						}}>
						<div>
							<h2 className="text-center mb-6 font-heading text-2xl font-semibold text-light-text dark:text-dark-text sm:text-3xl 3xl:text-4xl">
								Via Formulário
							</h2>
							<label
								htmlFor="name"
								className="mb-1 block text-sm font-medium text-light-text dark:text-dark-text">
								Seu Nome
							</label>
							<input
								type="text"
								name="name"
								id="name"
								required
								className="w-full rounded-md border border-light-primary bg-light-primary px-3 py-2 text-light-text shadow-sm focus:border-light-accent focus:ring-light-accent dark:border-dark-primary dark:bg-dark-primary dark:text-dark-text dark:focus:border-dark-accent dark:focus:ring-dark-accent sm:text-sm placeholder:text-light-text/50 dark:placeholder:text-dark-text/50 focus:placeholder:text-transparent"
								placeholder="Nome Completo"
							/>
						</div>
						<div>
							<label
								htmlFor="email"
								className="mb-1 block text-sm font-medium text-light-text dark:text-dark-text">
								Seu Email
							</label>
							<input
								type="email"
								name="email"
								id="email"
								required
								className="w-full rounded-md border border-light-primary bg-light-primary px-3 py-2 text-light-text shadow-sm focus:border-light-accent focus:ring-light-accent dark:border-dark-primary dark:bg-dark-primary dark:text-dark-text dark:focus:border-dark-accent dark:focus:ring-dark-accent sm:text-sm placeholder:text-light-text/50 dark:placeholder:text-dark-text/50 focus:placeholder:text-transparent"
								placeholder="seuemail@gmail.com"
							/>
						</div>
						<div>
							<label
								htmlFor="message"
								className="mb-1 block text-sm font-medium text-light-text dark:text-dark-text">
								Sua Mensagem
							</label>
							<textarea
								name="message"
								id="message"
								required
								rows={4}
								className="w-full rounded-md border border-light-primary bg-light-primary px-3 py-2 text-light-text shadow-sm focus:border-light-accent focus:ring-light-accent dark:border-dark-primary dark:bg-dark-primary dark:text-dark-text dark:focus:border-dark-accent dark:focus:ring-dark-accent sm:text-sm placeholder:text-light-text/50 dark:placeholder:text-dark-text/50 focus:placeholder:text-transparent"
								placeholder="Olá, gostaria de falar sobre..."></textarea>
						</div>
						<div className="text-center">
							<button
								type="submit"
								className="w-full rounded-lg bg-light-accent px-6 py-2.5 font-semibold text-dark-primary transition-colors hover:bg-opacity-80 sm:w-auto">
								Enviar Mensagem
							</button>
						</div>
					</form>
				</div>
			</section>
		</div>
	);
}
