import H2 from '../typography/H2'
import CardSection from './CardSection'

export default function MenuCard({ time, header, sections }: MenuCard) {
	return (
		<div className="p-5 grid rounded-xl shadow-md gap-3">
			<div className="flex items-baseline">
				<div className="flex-grow">
					<H2>{header}</H2>
				</div>
				<p>{time}</p>
			</div>
			{sections.map((section: MenuSection) => {
				return <CardSection key={section.header} {...section} />
			})}
		</div>
	)
}
