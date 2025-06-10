// src/app/contato/page.tsx
import { Metadata } from "next";

export const metadata: Metadata = {
	title: "Contato | Meu Portfólio",
	description: "Entre em contato para discutir projetos, oportunidades ou apenas para dizer olá.",
};

export default function ContatoPage() {
	return (
		<div className="space-y-12 sm:space-y-16">
			<header className="container mx-auto px-4 pt-8 text-center sm:px-6 lg:px-8">
				<h1 className="font-heading text-4xl font-bold text-light-text dark:text-dark-text sm:text-5xl md:text-6xl 3xl:text-7xl">
					Entre em Contato
				</h1>
				<p className="mx-auto mt-4 max-w-3xl text-lg text-light-text/80 dark:text-dark-text/80 sm:text-xl 3xl:text-2xl">
					Adoraria ouvir de você! Seja para discutir um projeto, uma oportunidade de colaboração, ou
					apenas para trocar uma ideia.
				</p>
			</header>

			<section className="container mx-auto px-4 sm:px-6 lg:px-8">
				<div className="mx-auto grid max-w-6xl grid-cols-1 items-start gap-10 md:grid-cols-2 lg:gap-12">
					{/* Coluna de Informações Diretas */}
					<div className="space-y-8 rounded-lg bg-light-secondary p-6 shadow-md dark:bg-dark-secondary sm:p-8">
						<h2 className="font-heading text-2xl font-semibold text-light-text dark:text-dark-text sm:text-3xl 3xl:text-4xl">
							Informações Diretas
						</h2>
						<p className="text-base text-light-text dark:text-dark-text sm:text-lg 3xl:text-xl">
							Prefere um contato mais direto? Aqui estão algumas formas de me encontrar:
						</p>

						<div className="space-y-6">
							{/* Email */}
							<div>
								<h3 className="flex items-center text-lg font-medium text-light-accent dark:text-dark-accent 3xl:text-xl">
									📧 Email:
								</h3>
								<a
									href="mailto:seu.email@example.com"
									className="text-light-text hover:underline dark:text-dark-text 3xl:text-lg">
									seu.email.profissional@example.com
								</a>
							</div>

							{/* LinkedIn */}
							<div>
								<h3 className="flex items-center text-lg font-medium text-light-accent dark:text-dark-accent 3xl:text-xl">
									🔗 LinkedIn:
								</h3>
								<a
									href="#"
									target="_blank"
									rel="noopener noreferrer"
									className="text-light-text hover:underline dark:text-dark-text 3xl:text-lg">
									[Seu Nome no LinkedIn]
								</a>
							</div>
						</div>
						<p className="border-t border-light-primary pt-4 text-sm text-light-text/70 dark:border-dark-primary dark:text-dark-text/70">
							Normalmente respondo em até 24-48 horas durante dias úteis.
						</p>
					</div>

					{/* Coluna do Formulário */}
					{/* <form className="space-y-6 rounded-lg bg-light-secondary p-6 shadow-md dark:bg-dark-secondary sm:p-8" onSubmit={(e) => { e.preventDefault(); alert('Simulação de envio!'); }}>
            <div>
              <label htmlFor="name" className="mb-1 block text-sm font-medium text-light-text dark:text-dark-text">
                Seu Nome
              </label>
              <input type="text" name="name" id="name" required className="w-full rounded-md border border-light-primary bg-light-primary px-3 py-2 shadow-sm focus:border-light-accent focus:ring-light-accent dark:border-dark-primary dark:bg-dark-primary dark:focus:border-dark-accent dark:focus:ring-dark-accent sm:text-sm" placeholder="Nome Completo" />
            </div>
            <div>
              <label htmlFor="email" className="mb-1 block text-sm font-medium text-light-text dark:text-dark-text">
                Seu Email
              </label>
              <input type="email" name="email" id="email" required className="w-full rounded-md border border-light-primary bg-light-primary px-3 py-2 shadow-sm focus:border-light-accent focus:ring-light-accent dark:border-dark-primary dark:bg-dark-primary dark:focus:border-dark-accent dark:focus:ring-dark-accent sm:text-sm" placeholder="voce@example.com" />
            </div>
            <div>
              <label htmlFor="message" className="mb-1 block text-sm font-medium text-light-text dark:text-dark-text">
                Sua Mensagem
              </label>
              <textarea name="message" id="message" required rows={4} className="w-full rounded-md border border-light-primary bg-light-primary px-3 py-2 shadow-sm focus:border-light-accent focus:ring-light-accent dark:border-dark-primary dark:bg-dark-primary dark:focus:border-dark-accent dark:focus:ring-dark-accent sm:text-sm" placeholder="Olá, gostaria de falar sobre..."></textarea>
            </div>
            <div>
              <button type="submit" className="w-full rounded-lg bg-light-accent px-6 py-2.5 font-semibold text-dark-primary transition-colors hover:bg-opacity-80 sm:w-auto">
                Enviar Mensagem
              </button>
            </div>
          </form> */}
				</div>
			</section>
		</div>
	);
}
