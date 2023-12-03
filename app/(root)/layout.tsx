import NavBar from '@/components/NavBar'

interface RootLayoutProps {
	children: React.ReactNode
}

export default function RootLayout({ children }: RootLayoutProps) {
	return (
		<>
			<NavBar />
			<div className="max-w-md mx-auto grid gap-8 my-6 px-3">
				{children}
			</div>
		</>
	)
}
