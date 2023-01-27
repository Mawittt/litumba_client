/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	swcMinify: true,
	images: {
		domains: ["localhost", "profile-assets.showwcase.com"],
	},
};

module.exports = nextConfig;
