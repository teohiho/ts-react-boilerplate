import { combineReducers } from 'redux'
import { persistReducer } from 'redux-persist'

import { getReduxModule } from 'app/helper'
import { getSpecificModuleRedux } from 'module/helper/module'
import { TAppState } from 'module/setting/logic.redux/initalState'
// import { TTodoState } from 'module/todo/logic.redux/initialState'
import { PERSIST_CONFIG } from './persist'

const moduleReducer = getReduxModule('reducer')
console.log('REducer', moduleReducer)
const reducer = combineReducers({
  ...moduleReducer,
})

export type TRootState = {
  setting: TAppState,
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
