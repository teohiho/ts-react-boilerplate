export const publish = (message: string) => ({
	type: 'PUBLISH',
	payload: {
		message,
	},
})
export const subscribe = () => ({
	type: 'SUBSCRIBE',
})
