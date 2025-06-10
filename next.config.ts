// next.config.js
/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	images: {
		remotePatterns: [
			{
				protocol: "https",
				hostname: "dummyimage.com", // Adicionado para os novos placeholders
			},
			// Adicione outros domínios aqui se precisar
		],
	},
};

module.exports = nextConfig;
