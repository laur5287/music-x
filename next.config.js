/** @type {import('next').NextConfig} */
const nextConfig = {
	images: {
		remotePatterns: [
			{
				protocol: 'https',
				hostname: 'mosaic.scdn.co',
				pathname: '/640/**',
			},
		],
	},
}

module.exports = nextConfig
