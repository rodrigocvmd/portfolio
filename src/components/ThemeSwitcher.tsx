// src/components/ThemeSwitcher.tsx
"use client";

import { useState, useEffect } from "react";
import { useTheme } from "next-themes";

const ThemeSwitcher = () => {
	const [mounted, setMounted] = useState(false);
	const { theme, setTheme, resolvedTheme } = useTheme();

	useEffect(() => {
		setMounted(true);
	}, []);

	if (!mounted) {
		// Renderiza um placeholder ou nada para evitar mismatch de hidratação
		return <div className="h-6 w-6" />; // Placeholder para manter o espaço
	}

	const toggleTheme = () => {
		// Alterna entre 'light' e 'dark'. Se o tema atual for 'system',
		// ele usará o resolvedTheme para decidir qual será o próximo.
		const currentTheme = theme === "system" ? resolvedTheme : theme;
		if (currentTheme === "dark") {
			setTheme("light");
		} else {
			setTheme("dark");
		}
	};

	// Determina qual ícone mostrar baseado no tema efetivo (após resolver 'system')
	const effectiveTheme = theme === "system" ? resolvedTheme : theme;

	return (
		<button
			aria-label={`Mudar para tema ${effectiveTheme === "dark" ? "claro" : "escuro"}`}
			onClick={toggleTheme}
			className="rounded-md p-1.5 text-light-text transition-colors hover:bg-light-secondary focus:outline-none focus:ring-2 focus:ring-light-accent dark:text-dark-text dark:hover:bg-dark-secondary dark:focus:ring-dark-accent">
			{effectiveTheme === "dark" ? (
				// Ícone de Sol (Tema Claro)
				<svg
					xmlns="http://www.w3.org/2000/svg"
					viewBox="0 0 24 24"
					fill="currentColor"
					className="h-5 w-5">
					<path d="M12 2.25a.75.75 0 01.75.75v2.25a.75.75 0 01-1.5 0V3a.75.75 0 01.75-.75zM7.5 12a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0zM18.894 6.166a.75.75 0 00-1.06-1.06l-1.591 1.59a.75.75 0 101.06 1.061l1.591-1.59zM21.75 12a.75.75 0 01-.75.75h-2.25a.75.75 0 010-1.5H21a.75.75 0 01.75.75zM17.834 18.894a.75.75 0 001.06-1.06l-1.59-1.591a.75.75 0 10-1.061 1.06l1.59 1.591zM12 18a.75.75 0 01.75.75V21a.75.75 0 01-1.5 0v-2.25A.75.75 0 0112 18zM7.758 17.303a.75.75 0 00-1.061-1.06l-1.591 1.59a.75.75 0 001.06 1.061l1.591-1.59zM6 12a.75.75 0 01-.75.75H3a.75.75 0 010-1.5h2.25A.75.75 0 016 12zM6.166 7.758a.75.75 0 001.06-1.06l-1.59-1.591a.75.75 0 00-1.061 1.06l1.59 1.591z" />
				</svg>
			) : (
				// Ícone de Lua (Tema Escuro)
				<svg
					xmlns="http://www.w3.org/2000/svg"
					viewBox="0 0 24 24"
					fill="currentColor"
					className="h-5 w-5">
					<path
						fillRule="evenodd"
						d="M9.528 1.718a.75.75 0 01.162.819A8.97 8.97 0 009 6a9 9 0 009 9 8.97 8.97 0 003.463-.69.75.75 0 01.981.98 10.503 10.503 0 01-9.694 6.46c-5.799 0-10.5-4.701-10.5-10.5 0-3.51 1.713-6.625 4.362-8.452a.75.75 0 01.819.161z"
						clipRule="evenodd"
					/>
				</svg>
			)}
		</button>
	);
};

export default ThemeSwitcher;