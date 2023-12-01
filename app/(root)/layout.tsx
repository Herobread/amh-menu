interface RootLayoutProps {
	children: React.ReactNode
}

export default function RootLayout({ children }: RootLayoutProps) {
	return (
		<>
			<div className="max-w-md mx-auto pt-3 grid gap-8 my-8 px-3">
				{children}
			</div>
		</>
	)
}
