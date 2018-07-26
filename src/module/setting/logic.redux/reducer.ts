import { cond, T } from 'ramda'
import { IAppAction } from './action'
import actionType from './actionType'
import { initialState, TAppState, TPaletteType } from './initalState'

const isLight = (paletteType: TPaletteType) => paletteType === 'light'
const reducer = (state: TAppState = initialState, action: IAppAction<any>) => {
  switch (action.type) {
	case actionType.CHANGE_THEME: {
		const branchPalette = cond([
			[
				isLight, () => {
				return state.setIn(['theme', 'paletteType'], 'dark')
				},
			],
			[
				T, () => {
					return state.setIn(['theme', 'paletteType'], 'light')
				},
			],
		],
		)
		return branchPalette(state.theme.paletteType)
	}
	case actionType.CHANGE_LANGUAGE: {
		return state.setIn(['lang'], action.lang)
	}
	default: return state
  }
}

export default reducer
