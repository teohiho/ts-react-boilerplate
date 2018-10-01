
import * as LogRocket from 'logrocket'
import { applyMiddleware, compose, createStore } from 'redux'
import { persistStore } from 'redux-persist'
import createSagaMiddleware from 'redux-saga'
import { appReducer } from './reducer'
import { appSaga } from './saga'

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
	// LogRocket.reduxMiddleware(),
	sagaMiddleware,
  ),
)
const preloadedState = {}

export default function configureStore(onComplete?: Function) {
  const store = createStore(
	appReducer,
	preloadedState,
	enhancer,
  )
  const persistor = persistStore(store)
  sagaMiddleware.run(appSaga)
  return { store, persistor }
}
