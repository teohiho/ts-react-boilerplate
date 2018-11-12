// import { TTodoState } from 'module/todo/logic.redux/initialState'
import { reducerCollection } from 'app/helper'
import { TAppState } from 'app/setting/redux/initalState'
import { TLayoutDefault } from 'layout/default/redux/initialState'
import layout from 'layout/default/redux/reducer'
import { defaultRedux } from 'nietzsche-client/tifl'
import { combineReducers } from 'redux'
import { persistReducer } from 'redux-persist'
import { PERSIST_CONFIG } from './persist'

const reducer = combineReducers({
  ...reducerCollection,
  layout,
  tifl: defaultRedux.reducer,
})

export type TRootState = {
  setting: TAppState,
  layout: TLayoutDefault,
//   todo: TTodoState,
}

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
