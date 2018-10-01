import { combineReducers } from 'redux'
import { persistReducer } from 'redux-persist'

import { tifl } from '@nietzsche-client/index'
import { getReduxModule } from 'app/helper'
import { TAppState } from 'app/setting/redux/initalState'
import { TLayoutDefault } from 'layout/default/redux/initialState'
import layout from 'layout/default/redux/reducer'
// import { TTodoState } from 'module/todo/logic.redux/initialState'
import { PERSIST_CONFIG } from './persist'

const moduleReducer = getReduxModule('reducer')
const reducer = combineReducers({
  ...moduleReducer,
  layout,
  resource: tifl.reducer,
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
