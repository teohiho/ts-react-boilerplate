import { combineReducers } from 'redux'
import { persistReducer } from 'redux-persist'

import { getSpecificModuleRedux } from '../../helper/module'
import { PERSIST_CONFIG } from './persist'
import { TAppState } from '../../module/app/logic.redux/initalState'
import { TTodoState } from 'module/todo/logic.redux/initialState'

const moduleReducer = getSpecificModuleRedux('reducer')
const reducer = combineReducers({
  ...moduleReducer,
})

export type TRootState = {
  app: TAppState,
  todo: TTodoState,
}

const rootReducer = (state: TRootState, action: any) => {
  const { type } = action
  switch (type) {
    case 'RS':
    case 'LOGOUT':
      // state = {}
      return {}
      break
    default:
      break
  }
  return reducer(state, action)
}
export const appReducer = persistReducer(PERSIST_CONFIG.storeConfig, rootReducer)
