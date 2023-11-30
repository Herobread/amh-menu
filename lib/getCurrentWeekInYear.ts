export default function getCurrentWeekInYear() {
	const oneDay = 1000 * 60 * 60 * 24

	const now = new Date()
	const start = new Date(now.getFullYear(), 0, 0)

	const diff = now.getTime() - start.getTime()
	const day = Math.floor(diff / oneDay)

	return day
}
