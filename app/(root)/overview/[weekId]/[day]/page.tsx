import Header from '@/components/Header'
import LinkCard from '@/components/LinkCard'
import MenuCard from '@/components/MenuCard/MenuCard'
import getCurrentMenuWeek from '@/lib/getCurrentMenuWeek'
import prisma from '@/lib/prisma'

export const revalidate = 60

interface PageProps {
	params: {
		weekId: string
		day: string
	}
}

export default async function Page({ params: { weekId, day } }: PageProps) {
	const today = new Date()

	// today.setDate(today.getDate() - 1)

	let weekDay = day as WeekDay

	const weekDays = [
		'Monday',
		'Tuesday',
		'Wednesday',
		'Thursday',
		'Friday',
		'Saturday',
		'Sunday',
	]

	if (!weekDays.includes(weekDay)) {
		return <>Error</>
	}

	let weekNumber = 0
	try {
		weekNumber = parseInt(weekId)
	} catch (error) {
		return <>Error</>
	}

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
			<Header header={weekDay} subheader={`Week ${weekNumber} menu`} />
			<LinkCard flipped href={`/overview/${weekId}`}>
				Go back
			</LinkCard>
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
