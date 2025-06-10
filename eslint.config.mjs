// eslint.config.mjs
import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";
// import globals from "globals"; // Importe 'globals'

// Se você precisar do parser do TypeScript explicitamente, embora "next/typescript" deva cuidar disso:
// import tseslint from "typescript-eslint";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
	baseDirectory: __dirname,
});

const eslintConfig = [
	// Configurações base estendidas do Next.js e TypeScript
	...compat.extends("next/core-web-vitals", "next/typescript"),

	// SEU NOVO OBJETO DE CONFIGURAÇÃO COM REGRAS PERSONALIZADAS
	{
		files: ["**/*.{js,mjs,cjs,ts,jsx,tsx}"], // Aplica estas regras aos arquivos especificados
		// languageOptions: { // Muitas opções de linguagem podem ser herdadas das extensões acima
		//   parser: tseslint.parser, // "next/typescript" já deve configurar isso
		//   parserOptions: {
		//     ecmaFeatures: { jsx: true },
		//   },
		//   globals: { // Adicione se precisar de globais específicos não cobertos
		//     ...globals.browser,
		//     ...globals.node,
		//     React: "readonly", // "next/core-web-vitals" geralmente lida com isso
		//   },
		// },
		// settings: { // As extensões do Next.js devem cuidar da versão do React
		//   react: {
		//     version: "detect",
		//   },
		// },
		rules: {
			// REGRAS ESPECÍFICAS DO NEXT.JS (geralmente já vêm das extensões, mas você pode sobrescrever/adicionar)
			// Exemplo: '@next/next/no-img-element': 'warn',

			// SUAS REGRAS PERSONALIZADAS:
			"react/react-in-jsx-scope": "off", // Next.js 17+ não requer importação do React
			"@typescript-eslint/no-unused-vars": ["warn", { argsIgnorePattern: "^_" }], // Avisa sobre vars não usadas, ignora se começar com _
			"@typescript-eslint/no-explicit-any": "warn", // Avisa sobre uso de 'any'
			"no-console": ["warn", { allow: ["warn", "error"] }], // Avisa sobre console.log, mas permite console.warn e console.error

			// Adicione outras regras que desejar aqui
			// Exemplo:
			// "semi": ["error", "always"], // Exigir ponto e vírgula
			// "quotes": ["warn", "double"], // Preferir aspas duplas

			// Se você for usar o plugin do Tailwind CSS e ele for compatível com flat config
			// (precisaria instalar `eslint-plugin-tailwindcss` e importá-lo)
			// Exemplo:
			// "tailwindcss/classnames-order": "warn",
			// "tailwindcss/no-custom-classname": "warn",
		},
	},
	// Você pode adicionar mais objetos de configuração aqui se precisar de
	// regras diferentes para diferentes conjuntos de arquivos.
];

export default eslintConfig;
