const prod = process.env.NODE_ENV === 'production'
const withPWA = require('next-pwa')({
	dest: 'public',
	register: true,
	disable: prod ? false : true,
	skipWaiting: true,
})

/** @type {import('next').NextConfig} */
const nextConfig = {
	...withPWA({}),
}

module.exports = nextConfig
