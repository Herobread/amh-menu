import H3 from '../typography/H3'

export default function CardSection({ header, items }: MenuSection) {
	return (
		<div>
			<H3>{header}</H3>
			<ul className="leading-7">
				{items.map((item) => {
					return <li key={item}>{item}</li>
				})}
			</ul>
		</div>
	)
}
