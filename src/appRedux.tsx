import configureStore from 'conf/redux/redux'
import React from 'react'
import { AppConfig } from './appConfig'
import { Loading } from './com/index'
import { PersistGate } from 'redux-persist/integration/react'
import { Provider } from 'react-redux'
import {
	branch,
	compose,
	lifecycle,
	pure,
	renderComponent,
	withStateHandlers,
} from 'recompose'


const { store, persistor } = configureStore()

const ReduxView = () => (
	<Provider store={store}>
		<PersistGate loading={<Loading/>} persistor={persistor} >
			<AppConfig />
		</PersistGate>
	</Provider>
)


const withLoading =	branch(
	({ isLoading }) => isLoading,
	renderComponent(Loading),
)

const LoadingStateHandler = withStateHandlers(
	{
		isLoading: true,
	},
	{
		loadFinished: () => () => ({ isLoading: false }),
	},
)

const withLifeCycle = lifecycle({
	componentDidMount() {
		this.setState({ isLoading: false })
	},
})

export const AppRedux = compose(pure, LoadingStateHandler, withLifeCycle, withLoading)(ReduxView)

