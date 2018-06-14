
import { createStore, compose } from 'redux'
import { rootReducer } from './reducer'


const composeEnhancers =
  typeof window === 'object' &&
  (<any>window).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?
  (<any>window).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
      // Specify extension’s options like name, actionsBlacklist, actionsCreators, serialize...
    }) : compose
const enhancer = composeEnhancers(
// other store enhancers if any
)
const preloadedState = {}

export default function configureStore(onComplete?: Function) {
  const store = createStore(
    rootReducer,
    preloadedState,
    enhancer,
  )
  return { store }
}
