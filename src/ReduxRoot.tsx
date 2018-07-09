import * as React from 'react'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'

import App from './App'
import configureStore from './conf/redux/redux'

const { store, persistor } = configureStore()

const onBeforeLift = () => {
	// take some action before the gate lifts
	console.debug(':onBeforeLift: called')
}
class ReduxRoot extends React.Component {
	render() {
		return (
			<Provider store={store}>
				<PersistGate loading={null} persistor={persistor} onBeforeLift={onBeforeLift}>
					<App />
				</PersistGate>
			</Provider>
		)
	}
}

export default ReduxRoot
