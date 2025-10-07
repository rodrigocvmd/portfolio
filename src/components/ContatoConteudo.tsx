// src/components/ContatoConteudo.tsx
"use client";

import { useState, ChangeEvent, FormEvent } from "react";
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

interface FormData {
	name: string;
	email: string;
	phone: string;
	message: string;
}

export default function ContatoConteudo() {
	const [copiedStatus, setCopiedStatus] = useState<{ [key: string]: boolean }>({});
	const [phoneLinkText, setPhoneLinkText] = useState("(61) 9 9966-2404");
	const [formData, setFormData] = useState<FormData>({
		name: "",
		email: "",
		phone: "",
		message: "",
	});
	const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
	const [responseMessage, setResponseMessage] = useState("");

	const handleCopy = async (textToCopy: string, key: string) => {
		try {
			await navigator.clipboard.writeText(textToCopy);
			setCopiedStatus((prev) => ({ ...prev, [key]: true }));
			setTimeout(() => {
				setCopiedStatus((prev) => ({ ...prev, [key]: false }));
			}, 2000);
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
				setPhoneLinkText("(61) 9 9966-2404");
			}, 2500);
		} catch (err) {
			console.error("Falha ao copiar telefone: ", err);
			alert("Falha ao copiar telefone.");
		}
	};

	const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
		const { name, value } = e.target;
		setFormData((prev) => ({ ...prev, [name]: value }));
	};

	const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		setStatus("loading");
		setResponseMessage("");

		try {
			const response = await fetch("/api/contato", {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify(formData),
			});

			const data = await response.json();

			if (response.ok) {
				setStatus("success");
				setFormData({ name: "", email: "", phone: "", message: "" }); // Limpa o formulário
			} else {
				setStatus("error");
				setResponseMessage(data.message || "Ocorreu um erro ao enviar a mensagem.");
			}
		} catch (error) {
			setStatus("error");
			setResponseMessage("Não foi possível conectar ao servidor. Tente novamente mais tarde.");
			console.error("Erro de rede ou servidor:", error);
		}
	};

	return (
		<div className="space-y-12 sm:space-y-16">
			<header className="container mx-auto px-4 pt-8 text-center sm:px-6 lg:px-8">
				<h1 className="font-heading text-4xl font-bold text-light-text dark:text-dark-text sm:text-5xl md:text-6xl 3xl:text-7xl">
					Entre em Contato
				</h1>
				<p className="mx-auto mt-4 max-w-3xl text-lg text-light-text/80 dark:text-dark-text/80 sm:text-xl 3xl:text-2xl">
					Seja para uma oportunidade de colaboração, discutir sobre um projeto ou apenas para trocar
					uma ideia.
				</p>
				<p className="mx-auto mt-4 max-w-3xl text-lg text-light-text/80 dark:text-dark-text/80 sm:text-xl 3xl:text-2xl">
					Estou sempre disponível para conversarmos!
				</p>
			</header>

			<section className="secaoContato container mx-auto px-4 sm:px-6 lg:px-8">
				{/* Grid para Contato Direto e Outras Formas de Contato */}
				<div className="contatoDiretoGrid mx-auto grid max-w-6xl grid-cols-1 items-stretch gap-10 md:grid-cols-2 md:gap-x-10 lg:gap-x-12">
					{/* Bloco de Informações Diretas */}
					<div className="contatoDiretoItem h-full space-y-8 rounded-lg bg-light-secondary p-6 shadow-md dark:bg-dark-secondary sm:p-8">
						<h2 className="text-center mb-6 font-heading text-2xl font-semibold text-light-text dark:text-dark-text sm:text-3xl 3xl:text-4xl">
							Contato Direto
						</h2>
						<p className="text-base text-center text-light-text dark:text-dark-text sm:text-lg 3xl:text-xl">
							Melhores formas para me encontrar:
						</p>

						<div className="space-y-6 mx-auto max-w-xs">
							{/* Email */}
							<div>
								<h3 className="flex items-center justify-between text-lg font-medium text-light-accent dark:text-dark-accent 3xl:text-xl">
									<span className="flex items-center">
										<MdOutlineEmail className="mr-2" /> Email:
									</span>
									<div className="flex items-center">
										<div className="relative group">
											<button
												onClick={() => handleCopy("rodrigocvmd@gmail.com", "email")}
												className="mr-2 p-1 rounded-md hover:bg-light-primary dark:hover:bg-dark-primary text-light-text dark:text-dark-text transition-colors">
												{copiedStatus["email"] ? <CheckIcon /> : <CopyIcon />}
											</button>
											<div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 w-max whitespace-nowrap bg-gray-800 text-white text-xs font-semibold rounded-full py-1 px-3 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
												Copiar email
											</div>
										</div>
										<div className="relative group">
											<button
												onClick={() => window.open("mailto:rodrigocvmd@gmail.com", "_blank")}
												className="p-1 rounded-md hover:bg-light-primary dark:hover:bg-dark-primary text-light-text dark:text-dark-text transition-colors">
												<FaArrowRight />
											</button>
											<div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 w-max whitespace-nowrap bg-gray-800 text-white text-xs font-semibold rounded-full py-1 px-3 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
												Enviar email
											</div>
										</div>
									</div>
								</h3>
								<div className="flex items-center">
									<a
										href="mailto:rodrigocvmd@gmail.com"
										title="Enviar email"
										className="alterar text-light-text hover:underline dark:text-dark-text 3xl:text-lg break-all">
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
									<div className="flex items-center">
										<div className="relative group">
											<button
												onClick={() =>
													handleCopy("https://www.linkedin.com/in/rodrigocvmd/", "linkedin")
												}
												className="mr-2 p-1 rounded-md hover:bg-light-primary dark:hover:bg-dark-primary text-light-text dark:text-dark-text transition-colors">
												{copiedStatus["linkedin"] ? <CheckIcon /> : <CopyIcon />}
											</button>
											<div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 w-max whitespace-nowrap bg-gray-800 text-white text-xs font-semibold rounded-full py-1 px-3 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
												Copiar link do LinkedIn
											</div>
										</div>
										<div className="relative group">
											<button
												onClick={() => window.open("https://www.linkedin.com/in/rodrigocvmd/", "_blank")}
												className="p-1 rounded-md hover:bg-light-primary dark:hover:bg-dark-primary text-light-text dark:text-dark-text transition-colors">
												<FaArrowRight />
											</button>
											<div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 w-max whitespace-nowrap bg-gray-800 text-white text-xs font-semibold rounded-full py-1 px-3 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
												Abrir LinkedIn
											</div>
										</div>
									</div>
								</h3>
								<div className="flex items-center">
									<a
										href="https://www.linkedin.com/in/rodrigocvmd/"
										target="_blank"
										rel="noopener noreferrer"
										title="Abrir LinkedIn"
										className="alterar text-light-text hover:underline dark:text-dark-text 3xl:text-lg break-all">
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
									<div className="flex items-center">
										<div className="relative group">
											<button
												onClick={() => handleCopy("+5561999662404", "telefone")}
												className="mr-2 p-1 rounded-md hover:bg-light-primary dark:hover:bg-dark-primary text-light-text dark:text-dark-text transition-colors">
												{copiedStatus["telefone"] ? <CheckIcon /> : <CopyIcon />}
											</button>
											<div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 w-max whitespace-nowrap bg-gray-800 text-white text-xs font-semibold rounded-full py-1 px-3 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
												Copiar telefone
											</div>
										</div>
										<div className="relative group">
											<button
												onClick={() => window.open("tel:+5561999662404", "_self")}
												className="p-1 rounded-md hover:bg-light-primary dark:hover:bg-dark-primary text-light-text dark:text-dark-text transition-colors">
												<FaArrowRight />
											</button>
											<div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 w-max whitespace-nowrap bg-gray-800 text-white text-xs font-semibold rounded-full py-1 px-3 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
												Ligar
											</div>
										</div>
									</div>
								</h3>
								<div className="telefone flex items-center">
									<a
										href="#!"
										onClick={handlePhoneCopyAndTextChange}
										title="Copiar telefone"
										className="alterar text-light-text hover:underline dark:text-dark-text 3xl:text-lg break-all cursor-pointer"
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
							Aproveite para me visitar em outras redes:
						</p>

						<div className="mx-auto max-w-xs space-y-6">
							{/* WhatsApp */}
							<div>
								<h3 className="flex items-center justify-between text-lg font-medium text-light-accent dark:text-dark-accent 3xl:text-xl">
									<span className="flex items-center">
										<FaWhatsapp className="mr-2" /> WhatsApp:
									</span>
									<div className="flex items-center">
										<div className="relative group">
											<button
												onClick={() => handleCopy("5561999662404", "whatsapp")}
												className="mr-2 p-1 rounded-md hover:bg-light-primary dark:hover:bg-dark-primary text-light-text dark:text-dark-text transition-colors">
												{copiedStatus["whatsapp"] ? <CheckIcon /> : <CopyIcon />}
											</button>
											<div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 w-max whitespace-nowrap bg-gray-800 text-white text-xs font-semibold rounded-full py-1 px-3 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
												Copiar número do WhatsApp
											</div>
										</div>
										<div className="relative group">
											<button
												onClick={() => window.open("https://wa.me/5561999662404", "_blank")}
												className="p-1 rounded-md hover:bg-light-primary dark:hover:bg-dark-primary text-light-text dark:text-dark-text transition-colors">
												<FaArrowRight />
											</button>
											<div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 w-max whitespace-nowrap bg-gray-800 text-white text-xs font-semibold rounded-full py-1 px-3 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
												Abrir WhatsApp
											</div>
										</div>
									</div>
								</h3>
								<div className="flex items-center">
									<a
										href="https://wa.me/5561999662404"
										target="_blank"
										rel="noopener noreferrer"
										title="Abrir WhatsApp"
										className="alterar text-light-text hover:underline dark:text-dark-text 3xl:text-lg break-all">
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
									<div className="flex items-center">
										<div className="relative group">
											<button
												onClick={() => handleCopy("https://github.com/rodrigocvmd", "github")}
												className="mr-2 p-1 rounded-md hover:bg-light-primary dark:hover:bg-dark-primary text-light-text dark:text-dark-text transition-colors">
												{copiedStatus["github"] ? <CheckIcon /> : <CopyIcon />}
											</button>
											<div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 w-max whitespace-nowrap bg-gray-800 text-white text-xs font-semibold rounded-full py-1 px-3 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
												Copiar link GitHub
											</div>
										</div>
										<div className="relative group">
											<button
												onClick={() => window.open("https://github.com/rodrigocvmd", "_blank")}
												className="p-1 rounded-md hover:bg-light-primary dark:hover:bg-dark-primary text-light-text dark:text-dark-text transition-colors">
												<FaArrowRight />
											</button>
											<div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 w-max whitespace-nowrap bg-gray-800 text-white text-xs font-semibold rounded-full py-1 px-3 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
												Abrir GitHub
											</div>
										</div>
									</div>
								</h3>
								<div className="flex items-center">
									<a
										href="https://github.com/rodrigocvmd"
										target="_blank"
										rel="noopener noreferrer"
										title="Abrir GitHub"
										className="alterar text-light-text hover:underline dark:text-dark-text 3xl:text-lg break-all">
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
									<div className="flex items-center">
										<div className="relative group">
											<button
												onClick={() => handleCopy("1067993447706931243", "discord")}
												className="mr-2 p-1 rounded-md hover:bg-light-primary dark:hover:bg-dark-primary text-light-text dark:text-dark-text transition-colors">
												{copiedStatus["discord"] ? <CheckIcon /> : <CopyIcon />}
											</button>
											<div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 w-max whitespace-nowrap bg-gray-800 text-white text-xs font-semibold rounded-full py-1 px-3 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
												Copiar Discord ID
											</div>
										</div>
										<div className="relative group">
											<button
												onClick={() => window.open("https://discordapp.com/users/1067993447706931243", "_blank")}
												className="p-1 rounded-md hover:bg-light-primary dark:hover:bg-dark-primary text-light-text dark:text-dark-text transition-colors">
												<FaArrowRight />
											</button>
											<div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 w-max whitespace-nowrap bg-gray-800 text-white text-xs font-semibold rounded-full py-1 px-3 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
												Abrir Discord
											</div>
										</div>
									</div>
								</h3>
								<div className="flex items-center">
									<a
										href="https://discordapp.com/users/1067993447706931243"
										target="_blank"
										rel="noopener noreferrer"
										title="Abrir Discord"
										className="alterar text-light-text hover:underline dark:text-dark-text 3xl:text-lg break-all">
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
						onSubmit={handleSubmit}>
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
								value={formData.name}
								onChange={handleChange}
								className="w-full rounded-md border border-light-primary bg-light-primary px-3 py-2 text-light-text shadow-sm focus:border-light-accent focus:ring-light-accent dark:border-dark-primary dark:bg-dark-primary dark:text-dark-text dark:focus:border-dark-accent dark:focus:ring-dark-accent sm:text-sm placeholder:text-light-text/50 dark:placeholder:text-dark-text/50 focus:placeholder:text-transparent"
								placeholder="Nome Completo"
								onInvalid={(e) =>
									(e.target as HTMLInputElement).setCustomValidity(
										"Por favor, preencha seu nome."
									)
								}
								onInput={(e) => (e.target as HTMLInputElement).setCustomValidity("")}
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
								value={formData.email}
								onChange={handleChange}
								className="w-full rounded-md border border-light-primary bg-light-primary px-3 py-2 text-light-text shadow-sm focus:border-light-accent focus:ring-light-accent dark:border-dark-primary dark:bg-dark-primary dark:text-dark-text dark:focus:border-dark-accent dark:focus:ring-dark-accent sm:text-sm placeholder:text-light-text/50 dark:placeholder:text-dark-text/50 focus:placeholder:text-transparent"
								placeholder="seuemail@gmail.com"
								onInvalid={(e) =>
									(e.target as HTMLInputElement).setCustomValidity(
										"Por favor, insira um email válido."
									)
								}
								onInput={(e) => (e.target as HTMLInputElement).setCustomValidity("")}
							/>
						</div>
						<div>
							<label
								htmlFor="phone"
								className="mb-1 block text-sm font-medium text-light-text dark:text-dark-text">
								Seu Telefone (Opcional)
							</label>
							<input
								type="tel"
								name="phone"
								id="phone"
								value={formData.phone}
								onChange={handleChange}
								className="w-full rounded-md border border-light-primary bg-light-primary px-3 py-2 text-light-text shadow-sm focus:border-light-accent focus:ring-light-accent dark:border-dark-primary dark:bg-dark-primary dark:text-dark-text dark:focus:border-dark-accent dark:focus:ring-dark-accent sm:text-sm placeholder:text-light-text/50 dark:placeholder:text-dark-text/50 focus:placeholder:text-transparent"
								placeholder="(XX) XXXXX-XXXX"
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
								value={formData.message}
								onChange={handleChange}
								className="w-full rounded-md border border-light-primary bg-light-primary px-3 py-2 text-light-text shadow-sm focus:border-light-accent focus:ring-light-accent dark:border-dark-primary dark:bg-dark-primary dark:text-dark-text dark:focus:border-dark-accent dark:focus:ring-dark-accent sm:text-sm placeholder:text-light-text/50 dark:placeholder:text-dark-text/50 focus:placeholder:text-transparent"
								placeholder="Olá, gostaria de falar sobre..."
								onInvalid={(e) =>
									(e.target as HTMLTextAreaElement).setCustomValidity(
										"Por favor, escreva sua mensagem."
									)
								}
								onInput={(e) => (e.target as HTMLTextAreaElement).setCustomValidity("")}></textarea>
						</div>
						<div className="text-center">
							<button
								type="submit"
								disabled={status === "loading"}
								className="w-full rounded-lg bg-light-accent px-6 py-2.5 font-semibold text-dark-primary transition-colors hover:bg-opacity-80 disabled:cursor-not-allowed disabled:opacity-50 sm:w-auto">
								{status === "loading" ? "Enviando..." : "Enviar Mensagem"}
							</button>
						</div>
						{status === "success" && (
							<div className="mt-4 text-center text-sm text-green-500">
								<p>Mensagem enviada com sucesso!</p>
								<p>Responderei assim que possível.</p>
							</div>
						)}
						{status === "error" && (
							<p className="mt-4 text-center text-sm text-red-500">
								{responseMessage}
							</p>
						)}
					</form>
				</div>
			</section>
		</div>
	);
}
