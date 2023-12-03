import H1 from './typography/H1'

interface HeaderProps {
	header: string
	subheader: string
}

export default function Header({ header, subheader }: HeaderProps) {
	return (
		<div className="w-full grid justify-center text-center">
			<H1>{header}</H1>
			<p>{subheader}</p>
		</div>
	)
}
