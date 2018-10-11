import { connect } from 'mqtt'
import { END, eventChannel } from 'redux-saga'
import { all, call, cps, put, take, takeEvery } from 'redux-saga/effects'

const topic = 'tifl'

const createMqttChannel = (url: string, topic: string[]) => {
	return eventChannel((emitter: any) => {
		// init the connection here
		const client  = connect(url)

		// Subscribe topic at here
		client.on('connect', () => {
			console.log('ONLINE MODE')
			client.publish('connection', 'client joined!')
			// sub after pub so we subscribe
			client.subscribe(topic)
		})
		client.on('reconnect', () => {
			console.log('RECONNECT>>>>')
		})
		client.on('offline', () => {
			console.log('OFFLINE MODE')
		})
		client.on('error', (err) => {
			console.log('ERR', err)
		})
		client.on('message', (_topic, message) => {
			// dispatch an action with emitter here
			return emitter({
				type: 'MQTT/RECEVICE_MESSAGE',
				payload: {
					message: message.toString(),
					topic: _topic,
				},
			})
		})
		// unsubscribe function
		return () => {
			// do whatever to interrupt the socket communication here
			console.log('Socket off')
		}
	})
}
function* subscribe() {
	const mqttChannel = yield call(createMqttChannel, 'ws://localhost:9001', ['tifl'])
	while (true) {
		const action = yield take(mqttChannel)
		yield put(action)
	}
}

function* publish(actions: any) {
	console.log('PUBLISH')
	const client  = connect('ws://localhost:9001')
	client.publish(topic, actions.payload.message)
	// TODO: Handle push successfully
	return 1
}

export default function* watchMqtt() {
	yield all([
	  takeEvery('PUBLISH', publish),
	  takeEvery('SUBSCRIBE', subscribe),
	])
  }

