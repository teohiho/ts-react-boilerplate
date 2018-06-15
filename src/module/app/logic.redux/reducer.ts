import actionType from './actionType'
import { IAppAction } from './action'

export type TTheme = 'light' | 'dark'

export type TAppState = Readonly<{
  theme: Readonly<{
    readonly paletteType: TTheme,
  }>,
}>

const initialState: TAppState = {
  theme: {
    paletteType: 'light',
  },
}

const reducer = (state: TAppState = initialState, action: IAppAction<any>) => {
  switch (action.type) {
    case actionType.CHANGE_THEME: {
      return {
        ...state,
        theme: {
          ...state.theme,
          paletteType: state.theme.paletteType === 'light' ? 'dark' : 'light',
        },
      }
    }
    default: return state
  }
}

export default reducer
