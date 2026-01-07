// src/app/contato/page.tsx
import { Metadata } from "next";
import ContatoConteudo from "@/components/ContatoConteudo";

export const metadata: Metadata = {
	title: "Contato | Portfólio de Rodrigo",
	description: "Entre em contato para discutir projetos, oportunidades ou apenas para dizer olá.",
};

export default function ContatoPage() {
	return <ContatoConteudo />;
}
