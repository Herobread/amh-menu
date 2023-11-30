import Header from '@/components/Header'
import MenuCard from '@/components/MenuCard/MenuCard'

const lunchMenuSections: MenuSection[] = [
	{
		header: 'Main',
		items: [
			'Flafel burger',
			'Mediterranean vegetable pasta arrabiata',
			'Southern fried chicken burger',
			'Sweet potato and coconut soup',
		],
	},
	{
		header: 'Side dishes',
		items: [
			'Baked/sweet potato',
			'Salad bar',
			'Daily baguette',
			'Fresh fruit',
			'Yoghurt',
		],
	},
]

export default function Home() {
	return (
		<>
			<Header header="Monday" subheader="Week 4" />
			<MenuCard
				header="Lunch"
				time="12:00 - 13:30"
				sections={lunchMenuSections}
			/>
			<MenuCard
				header="Dinner"
				time="17:30 - 19:00"
				sections={lunchMenuSections}
			/>
		</>
	)
}
