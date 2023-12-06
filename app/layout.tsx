import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { Analytics } from '@vercel/analytics/react'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
	title: 'AMH menu',
	description: 'Digital version of Andrew Melville menu',
	manifest: '/manifest.json',
}

export default function RootLayout({
	children,
}: {
	children: React.ReactNode
}) {
	return (
		<html lang="en" className="overflow-y-scroll">
			<body className={inter.className}>
				{children}
				<Analytics />
			</body>
		</html>
	)
}
