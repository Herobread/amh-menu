import Link from 'next/link'
import RightArrow from '@/public/icons/arrow-right.svg'
import LeftArrow from '@/public/icons/arrow-left.svg'
import Image from 'next/image'

interface LinkCardProps {
	children: React.ReactNode
	href: string
	flipped?: boolean
}

export default function LinkCard({ href, children, flipped }: LinkCardProps) {
	return (
		<Link
			href={href}
			className="p-5 flex rounded-xl shadow-md gap-3 hover:shadow-lg transition-shadow items-center"
		>
			{flipped && <Image alt="" src={LeftArrow} />}
			<div className="flex-grow font-bold">{children}</div>
			{!flipped && <Image alt="" src={RightArrow} />}
		</Link>
	)
}
