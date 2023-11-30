import Header from '@/components/Header'
import MenuCard from '@/components/MenuCard/MenuCard'
import getCurrentMenuWeek from '@/lib/getCurrentMenuWeek'
import prisma from '@/lib/prisma'

export default async function Home() {
	const today = new Date()

	// today.setDate(today.getDate() + 1)

	const weekDay = today.toLocaleDateString('en-UK', {
		weekday: 'long',
	}) as WeekDay
	const weekNumber = getCurrentMenuWeek()

	const earliestTime = new Date(today)
	earliestTime.setHours(0, 0, 0, 0)

	const latestTime = new Date(today)
	latestTime.setHours(23, 59, 59, 999)

	const data = await prisma.menu.findMany({
		where: {
			weekNumber,
			weekDay,
		},
	})

	return (
		<>
			<Header header={weekDay} subheader={`Week ${weekNumber} menu`} />
			{data.length !== 0 ? (
				<>
					{data.map((cardContent) => {
						return (
							<MenuCard
								{...cardContent}
								key={cardContent.header}
							/>
						)
					})}
					<i>
						Please be aware that menus can be subject to change at
						short notice due to ongoing supply chain and operational
						issues.
					</i>
				</>
			) : (
				<p className="text-center">No data for this day</p>
			)}
		</>
	)
}
