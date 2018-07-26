import * as React from 'react'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'

import configureStore from 'conf/redux/redux'
import { compose, pure } from 'recompose'
import { AppConfig } from './AppConfig'

const { store, persistor } = configureStore()

const ReduxView = () => (
	<Provider store={store}>
		<PersistGate loading={null} persistor={persistor} >
			<AppConfig />
		</PersistGate>
	</Provider>
)

export const AppRedux = compose(pure)(ReduxView)
