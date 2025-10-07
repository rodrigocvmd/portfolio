// tailwind.config.js (para v3)

/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./src/app/**/*.{js,ts,jsx,tsx,mdx}", "./src/components/**/*.{js,ts,jsx,tsx,mdx}"],
	darkMode: "class", // Podemos reintroduzir o darkMode agora que tudo está estável
	theme: {
		extend: {
			colors: {
        light: {
          primary: "#F0F9FF",
          secondary: "#E0F2FE",
          text: "#374151",
          accent: "#F29430",
        },
        dark: {
          primary: "#1F2937",
          secondary: "#374151",
          text: "#D1D5DB",
          accent: "#FCD3A2",
        },
        "pastel-green": "#A7F3D0",
        "pastel-orange": "#FED7AA",
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
