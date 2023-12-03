import Header from '@/components/Header'
import LinkCard from '@/components/LinkCard'

export default async function Page() {
	return (
		<>
			<Header header="Overview" subheader="All stored menus" />
			<div className="grid gap-4">
				<LinkCard href="/overview/1">Week 1</LinkCard>
				<LinkCard href="/overview/2">Week 2</LinkCard>
				<LinkCard href="/overview/3">Week 3</LinkCard>
				<LinkCard href="/overview/4">Week 4</LinkCard>
				<LinkCard href="/">Today&apos;s menu</LinkCard>
			</div>
		</>
	)
}
