import { combineReducers } from 'redux'

import { getSpecificModuleRedux } from '../../helper/module'
import { TAppState } from '../../module/app/logic.redux/reducer'

const moduleReducer = getSpecificModuleRedux('reducer')
const reducer = combineReducers({
  ...moduleReducer,
})

export type TRootState = {
  app: TAppState,
}

export const rootReducer = (state: TRootState, action: any) => {
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
