import getCurrentWeekInYear from './getCurrentWeekInYear'

export default function getCurrentMenuWeek() {
	const OFFSET = 2
	const NUMBER_OF_WEEKS = 4

	const weekNumber = getCurrentWeekInYear()

	let menuWeekNumber = (weekNumber % NUMBER_OF_WEEKS) + OFFSET

	if (menuWeekNumber > 4) {
		menuWeekNumber -= 4
	}

	return menuWeekNumber
}
