import app from 'app'
import layout from 'layout/default/redux'
import { combineReducers } from 'redux'
import { connectRouter } from 'connected-react-router'
import { History } from 'history'
import { PERSIST_CONFIG } from './persist'
import { persistReducer } from 'redux-persist'

const reducer = (history: History) => combineReducers({
  ...app.reducerRaw,
  layout: layout.reducer,
  router: connectRouter(history),
//   tifl: defaultRedux.reducer,
})
export type TRootReducer = ReturnType<typeof reducer>
export type TRootState = ReturnType<TRootReducer>

// const mapStateToProps = (state: TRootState) => ({
// 	test: state.tifl.practitioner
// })
const makeRootReducer = (history: History) => (state: any, action: any) => {
  const { type } = action
  switch (type) {
	case 'RS':
	case 'LOGOUT':
		// tslint:disable-next-line:no-parameter-reassignment
		state = undefined
		// return {}
		break
	default:
		break
  }
  return reducer(history)(state, action)
}

export const createAppReducer = (history: History) => persistReducer(PERSIST_CONFIG.storeConfig, makeRootReducer(history))
