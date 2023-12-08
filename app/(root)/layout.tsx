import Footer from '@/components/Footer'
import NavBar from '@/components/NavBar'

interface RootLayoutProps {
	children: React.ReactNode
}

export default function RootLayout({ children }: RootLayoutProps) {
	return (
		<>
			<NavBar />
			<div className="max-w-md mx-auto flex flex-col gap-8 my-6 px-3 min-h-screen">
				{children}
			</div>
			<Footer />
		</>
	)
}
