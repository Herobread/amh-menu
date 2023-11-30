interface HeaderProps {
	header: string
	subheader: string
}

export default function Header({ header, subheader }: HeaderProps) {
	return (
		<div className="w-full grid justify-center text-center">
			<h1 className="text-3xl font-bold">{header}</h1>
			<p>{subheader}</p>
		</div>
	)
}
