import { combineReducers } from 'redux';

import { getSpecificModuleRedux } from '../../helper/module'

const rootModule = getSpecificModuleRedux('reducer')

const reducer = combineReducers({
  ...rootModule,
})

export interface RootState {
  
}

export const rootReducer = (state: RootState, action: any) => {
  const { type } = action;
  switch (type) {
    case 'RS':
    case 'LOGOUT':
      state = {}
      break;
    default:
      break;
  }
  return reducer(state, action);
};
