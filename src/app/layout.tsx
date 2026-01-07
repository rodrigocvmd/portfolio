// src/app/layout.tsx
import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ThemeProvider } from "next-themes";

// ... (Configuração das fontes Inter e Poppins continua a mesma)
const inter = Inter({
	subsets: ["latin"],
	display: "swap",
	variable: "--font-inter",
	weight: ["400", "500"],
});

const poppins = Poppins({
	subsets: ["latin"],
	display: "swap",
	variable: "--font-poppins",
	weight: ["500", "600", "700"],
});

export const metadata: Metadata = {
	title: "Portfólio de Rodrigo",
	description: "Um portfólio moderno construído com Next.js, TypeScript e Tailwind CSS.",
	icons: {
		icon: "/images/favicon.png",
	},
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html
			lang="pt-BR"
			className={`${inter.variable} ${poppins.variable} scroll-smooth`}
			suppressHydrationWarning>
			{/* ThemeProvider deve envolver o conteúdo que precisa da troca de tema */}
			<ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
				<body className="flex min-h-screen flex-col bg-light-primary text-light-text dark:bg-dark-primary dark:text-dark-text">
					<Navbar />
					<main className="flex-grow">{children}</main>
					<Footer />
				</body>
			</ThemeProvider>
		</html>
	);
}
