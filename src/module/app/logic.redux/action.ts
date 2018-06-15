import actionType from './actionType'

// export enum ActionType {
//   CHANGE_THEME,
// }

export interface IAppAction<T> {
  type: 'CHANGE_THEME'
}


export const changeTheme = () => {
  return {
    type: actionType.CHANGE_THEME,
  }
}
