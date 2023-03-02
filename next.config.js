/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	swcMinify: true,
	images: {
		domains: ["localhost", "profile-assets.showwcase.com"],
	},
	async headers() {
		return [
			{
				source: "/",
				headers: [
					{
						key: "Cross-Origin-Opener-Policy",
						value: "same-origin-allow-popups",
					},
				],
			},
		];
	},
};

module.exports = nextConfig;
