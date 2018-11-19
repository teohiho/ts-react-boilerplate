import app from 'app'
import layout from 'layout/default/redux'
import { combineReducers } from 'redux'
import { PERSIST_CONFIG } from './persist'
import { persistReducer } from 'redux-persist'

// import { defaultRedux } from 'nietzsche-client/tifl'

const reducer = combineReducers({
  ...app.reducerRaw,
  layout: layout.reducer,
//   tifl: defaultRedux.reducer,
})
export type TRootState = ReturnType<typeof reducer>


const rootReducer = (state: any, action: any) => {
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
  return reducer(state, action)
}

export const appReducer = persistReducer(PERSIST_CONFIG.storeConfig, rootReducer)
