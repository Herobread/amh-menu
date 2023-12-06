import Skeleton from 'react-loading-skeleton'

export default function Loading() {
	return (
		<div className="flex flex-col gap-2">
			<Skeleton height={40} />
			<Skeleton height={20} />
			<Skeleton height={500} />
		</div>
	)
}
