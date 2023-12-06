import Header from '@/components/Header'
import LinkCard from '@/components/LinkCard'
import MenuCard from '@/components/MenuCard/MenuCard'
import getCurrentMenuWeek from '@/lib/getCurrentMenuWeek'
import prisma from '@/lib/prisma'

export const revalidate = 60

export default async function Home() {
	const today = new Date()

	// today.setDate(today.getDate() - 1)

	const weekDay = today.toLocaleDateString('en-UK', {
		weekday: 'long',
	}) as WeekDay

	const tomorrow = new Date()

	tomorrow.setDate(tomorrow.getDate() + 1)

	const nextWeekDay = tomorrow.toLocaleDateString('en-UK', {
		weekday: 'long',
	}) as WeekDay

	const weekNumber = getCurrentMenuWeek()
	let nextWeekNumber = nextWeekDay == 'Monday' ? weekNumber + 1 : weekNumber
	if (nextWeekNumber > 4) {
		nextWeekNumber -= 1
	}

	const earliestTime = new Date(today)
	earliestTime.setHours(0, 0, 0, 0)

	const latestTime = new Date(today)
	latestTime.setHours(23, 59, 59, 999)

	const data = await prisma.menu.findMany({
		where: {
			weekNumber,
			weekDay,
		},
		orderBy: {
			time: 'asc',
		},
	})

	return (
		<>
			<Header
				header={weekDay}
				subheader={`Today's menu, week ${weekNumber}`}
			/>
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
					<LinkCard
						href={`/overview/${nextWeekNumber}/${nextWeekDay}`}
					>
						Tomorrow&apos;s menu
					</LinkCard>
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
