// src/app/curriculo/page.tsx
import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
	title: "Currículo | Portfólio de Rodrigo",
	description: "Consulte meu currículo completo.",
};

const BackButtons = () => (
	<div className="flex flex-wrap justify-center gap-14 my-6">
		<Link
			href="/"
			className="inline-block text-sm text-light-accent dark:text-dark-accent hover:underline">
			&larr; Voltar à Página Inicial
		</Link>
		<Link
			href="/sobre"
			className="inline-block text-sm text-light-accent dark:text-dark-accent hover:underline">
			Ir à área Sobre Mim &rarr;
		</Link>
	</div>
);

export default function CurriculoPage() {
	return (
		<div className="container mx-auto px-4 py-8 sm:px-6 lg:px-8">
			<h1 className="font-heading text-4xl font-bold text-light-text dark:text-dark-text sm:text-5xl text-center mb-8">
				Meu Currículo
			</h1>
			<BackButtons />
			<div className="relative w-full h-[80vh] rounded-lg overflow-hidden shadow-lg">
				<iframe
					src="/files/curriculo.pdf"
					title="Currículo de Rodrigo Carvalho"
					className="w-full h-full"
					frameBorder="0"
				/>
			</div>
			<BackButtons />
		</div>
	);
}
