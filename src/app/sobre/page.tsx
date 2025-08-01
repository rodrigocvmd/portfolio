// src/app/sobre/page.tsx
import { Metadata } from "next";
import SobreConteudo from "@/components/SobreConteudo";

export const metadata: Metadata = {
	title: "Sobre Mim | Portfólio de Rodrigo",
	description: "Conheça mais sobre minha trajetória, habilidades e paixão por tecnologia.",
};

export default function SobrePage() {
	return <SobreConteudo />;
}