// src/app/contato/page.tsx
import { Metadata } from "next";
import ContatoConteudo from "@/components/ContatoConteudo"; // Ajuste o caminho se necessário

export const metadata: Metadata = {
	title: "Contato | Portfólio de Rodrigo",
	description: "Entre em contato para discutir projetos, oportunidades ou apenas para dizer olá.",
};

// Este agora é um Server Component
export default function ContatoPage() {
	// Renderiza o componente cliente que contém o formulário e o resto do layout
	return <ContatoConteudo />;
}
