import Link from 'next/link'

interface LinkCardProps {
	children: React.ReactNode
	href: string
	flipped?: boolean
}

export default function LinkCard({ href, children, flipped }: LinkCardProps) {
	return (
		<Link
			href={href}
			className="p-5 flex rounded-xl shadow-md gap-3 hover:shadow-lg transition-shadow"
		>
			{flipped && <div>{'<'}</div>}
			<div className="flex-grow font-bold">{children}</div>
			{!flipped && <div>{'>'}</div>}
		</Link>
	)
}
