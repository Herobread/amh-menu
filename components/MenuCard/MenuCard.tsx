import CardSection from './CardSection'

interface MenuCardProps {
	header: string
	time: string
	sections: MenuSection[]
}

export default function MenuCard({ time, header, sections }: MenuCardProps) {
	return (
		<div className="p-5 grid rounded-xl shadow-lg">
			<div className="flex items-baseline">
				<h2 className="flex-grow text-2xl font-bold">{header}</h2>
				<p>{time}</p>
			</div>
			{sections.map((section) => {
				return <CardSection key={section.header} {...section} />
			})}
			{/* <CardSection header="Main" />
			<CardSection header="Side dishes" /> */}
		</div>
	)
}
