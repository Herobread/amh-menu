import moment from 'moment'

export default function getCurrentWeekInYear() {
	const now = new Date()

	return moment(now).format('W')
}
