import CardSection from './CardSection'

export default function MenuCard({ time, header, sections }: MenuCard) {
	return (
		<div className="p-5 grid rounded-xl shadow-lg gap-3">
			<div className="flex items-baseline">
				<h2 className="flex-grow text-2xl font-bold">{header}</h2>
				<p>{time}</p>
			</div>
			{sections.map((section: MenuSection) => {
				return <CardSection key={section.header} {...section} />
			})}
		</div>
	)
}
