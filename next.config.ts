/** @type {import('next').NextConfig} */
const nextConfig = {
	output: "export", // Necessário para GitHub Pages
	reactStrictMode: true,
	images: {
		unoptimized: true, // Necessário para GitHub Pages (não suporta otimização nativa)
		remotePatterns: [
			{
				protocol: "https",
				hostname: "dummyimage.com",
			},
		],
	},
};

module.exports = nextConfig;
