// tailwind.config.js (para v3)

/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./src/app/**/*.{js,ts,jsx,tsx,mdx}", "./src/components/**/*.{js,ts,jsx,tsx,mdx}"],
	darkMode: "class", // Podemos reintroduzir o darkMode agora que tudo está estável
	theme: {
		extend: {
			colors: {
				// Suas cores customizadas aqui
				"light-primary": "#F0F9FF",
				"light-secondary": "#E0F2FE",
				"light-text": "#374151",
				"light-accent": "#FDBA74",
				"dark-primary": "#1F2937",
				"dark-secondary": "#374151",
				"dark-text": "#D1D5DB",
				"dark-accent": "#FCD3A2",
			},
			fontFamily: {
				// Suas fontes customizadas aqui
				sans: ["var(--font-inter)", "sans-serif"],
				heading: ["var(--font-poppins)", "serif"],
			},
			// --- INÍCIO DA ADIÇÃO DOS NOVOS BREAKPOINTS ---
			screens: {
				"3xl": "1920px", // Para telas a partir de 1920px de largura
				"4xl": "2560px", // Para telas a partir de 2560px de largura
			},
			// --- FIM DA ADIÇÃO DOS NOVOS BREAKPOINTS ---
		},
	},
	plugins: [],
};
