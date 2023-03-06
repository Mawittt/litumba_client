/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	swcMinify: true,
	images: {
		domains: ["localhost", "profile-assets.showwcase.com", "ndolocam-object-store.s3.us-east-1.amazonaws.com"],
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
	eslint: {
		ignoreDuringBuilds: true,
	},
};

module.exports = nextConfig;
