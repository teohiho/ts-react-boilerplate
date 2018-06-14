import actionType from './actionType'

export enum ActionType {
  CHANGE_THEME,
}

export interface IActionApp<T> {
  type: ActionType
}


export const changeTheme = () => {
  return {
    type: actionType.CHANGE_THEME,
  }
}
