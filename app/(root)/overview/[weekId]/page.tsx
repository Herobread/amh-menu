import Header from '@/components/Header'
import LinkCard from '@/components/LinkCard'

interface PageProps {
	params: {
		weekId: string
	}
}

export default function Page({ params: { weekId } }: PageProps) {
	return (
		<>
			<Header header={`Week ${weekId} menu`} subheader="" />

			<div className="grid gap-4">
				<LinkCard flipped href={`/overview/`}>
					Go back to overview
				</LinkCard>
				<LinkCard href={`/overview/${weekId}/Monday`}>Monday</LinkCard>
				<LinkCard href={`/overview/${weekId}/Tuesday`}>
					Tuesday
				</LinkCard>
				<LinkCard href={`/overview/${weekId}/Wednesday`}>
					Wednesday
				</LinkCard>
				<LinkCard href={`/overview/${weekId}/Thursday`}>
					Thursday
				</LinkCard>
				<LinkCard href={`/overview/${weekId}/Friday`}>Friday</LinkCard>
				<LinkCard href={`/overview/${weekId}/Saturday`}>
					Saturday
				</LinkCard>
				<LinkCard href={`/overview/${weekId}/Sunday`}>Sunday</LinkCard>
			</div>
		</>
	)
}
