const initialState = {
	message: {},
	topic: [],
	offline: false,

}
export const reducer = (state = initialState, actions: any) => {
	switch (actions.type) {
		case 'MQTT/RECEVICE_MESSAGE': {
			console.log('MQTT/RECEVICE_MESSAGE', actions)
			return state
		}
		default: return state
	}
}
