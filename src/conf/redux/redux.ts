import createSagaMiddleware from 'redux-saga'
import LogRocket from 'logrocket'
import { applyMiddleware, compose, createStore } from 'redux'
import { appSaga } from './saga'
import { createAppReducer } from './reducer'
import { createBrowserHistory } from 'history'
import { persistStore } from 'redux-persist'
import { routerMiddleware } from 'connected-react-router'


const history = createBrowserHistory()

const composeEnhancers =
	typeof window === 'object' && (<any>window).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
		?	(<any>window).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
			// Specify extension’s options like name, actionsBlacklist, actionsCreators, serialize...
			})
		: compose
const sagaMiddleware = createSagaMiddleware()

const enhancer = composeEnhancers(
  // other store enhancers if any
  applyMiddleware(
	// Add saga, debug...
	LogRocket.reduxMiddleware(),
	sagaMiddleware,
	routerMiddleware(history),
  ),
)

const preloadedState = {}

function configureStore(onComplete?: Function) {
	const store = createStore(
	  createAppReducer(history),
	  preloadedState,
	  enhancer,
	)
	const persistor = persistStore(store)
	sagaMiddleware.run(appSaga)
	return { store, persistor }
}

export {
	history,
}

export default configureStore
