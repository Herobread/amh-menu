export default function CardSection({ header, items }: MenuSection) {
	return (
		<div>
			<h3 className="text-lg font-bold">{header}</h3>
			<ul className="leading-7">
				{items.map((item) => {
					return <li key={item}>{item}</li>
				})}
			</ul>
		</div>
	)
}
