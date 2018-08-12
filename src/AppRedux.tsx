import * as React from 'react'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'

import configureStore from 'conf/redux/redux'
import { branch, compose, lifecycle, pure, renderComponent, withStateHandlers } from 'recompose'
import { AppConfig } from './AppConfig'
import { Loading } from './tpl/tab'
const { store, persistor } = configureStore()
interface IAppReduxPropsOut {

}
interface IAppReduxState {
	isLoading: boolean
}

interface IAppReduxPropsIn extends IAppReduxPropsOut, IAppReduxState {

}

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
		loadSuccessful: () => () => ({ isLoading: false }),
	},
)

const withLifeCycle = lifecycle({
	componentDidMount() {
		// this.setState({ isLoading: false })
		setTimeout(() => this.setState({ isLoading: false }), 500)
	},
})


export const AppRedux = compose(pure, LoadingStateHandler, withLifeCycle, withLoading)(ReduxView)
