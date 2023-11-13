interface Props {
	userName: string
}

export function GreetingTitle({ userName }: Props) {

	const currentTime = new Date();
	const currentHour = currentTime.getHours()
	let greetings = ''
	if (currentHour >= 5 && currentHour < 12) {
		greetings = 'Good morning'
	} else if (currentHour >= 12 && currentHour < 18) {
		greetings = 'Good afternoon'
	} else {
		greetings = 'Good evening'
	}

	return (
		<>
			<h1 className="text-3xl font-bold">{`${greetings},${userName}`}</h1>
		</>
	)
}