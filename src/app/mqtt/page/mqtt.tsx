import { compose, lifecycle, pure } from 'recompose'

import { Button } from '@blueprintjs/core'
import { Dispatch } from 'redux'
import React from 'react'
import { connect } from 'react-redux'
// import { tifl } from '@nietzsche-client/index'
import  { connect as connectMQTT } from 'mqtt'
// import { publish, subscribe } from '../redux/action'

// const client  = connectMQTT('ws://localhost:9001')
// const topic = 'tifl'
// 	client.on('connect', () => {
// 		client.publish(topic, 'client joined!')
// 		// sub after pub so we don't get our own announcement
// 		client.subscribe(topic)
// 	  })
// client.on('message', (_topic, message) => {
// 	console.log('Incoming message:1 ' + _topic, message.toString())
// })
interface IMqttReduxAction {
	publishLocal: (mess: string) => () => void
}
interface IMQTTPropOut {}
interface IMQTTPropIn extends IMQTTPropOut, IMqttReduxAction{}
export const MQTTView = ({ publishLocal }: IMQTTPropIn) => (
	<>
		<h1>Sample abc</h1>
		<Button onClick={publishLocal('ahihi')}>PUSH MESS</Button>
	</>
)

const mqttSubscribeLc = lifecycle<any , {}, {}>({
	componentDidMount() {
		// console.log('>>This props', this.props)
		this.props.subscribeLocal()
	},
})

export const mqttRedux = (dispatch: Dispatch) => ({
	// subscribeLocal: () => dispatch(tifl.mqtt.action.subscribe()),
	// publishLocal: (mess: string) => () => dispatch(tifl.mqtt.action.publish(new Date().toString() + mess)),
})

export const MQTTPage = compose<IMQTTPropIn, IMQTTPropOut>(pure, connect(undefined, mqttRedux), mqttSubscribeLc)(MQTTView)
