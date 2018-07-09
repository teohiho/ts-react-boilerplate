import { combineReducers } from 'redux'
import { persistReducer } from 'redux-persist'

import { TTodoState } from 'module/todo/logic.redux/initialState'
import { getSpecificModuleRedux } from '../../helper/module'
import { TAppState } from '../../module/app/logic.redux/initalState'
import { PERSIST_CONFIG } from './persist'

const moduleReducer = getSpecificModuleRedux('reducer')
const reducer = combineReducers({
  ...moduleReducer,
})

export type TRootState = {
  app: TAppState,
  todo: TTodoState,
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
