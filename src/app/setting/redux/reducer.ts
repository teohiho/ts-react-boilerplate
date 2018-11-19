import produce from 'immer'
import { ActionSetting } from './action'
import { ActionTypeSetting } from './actionType'
import { initialState, TSettingState } from './initalState'
import { IReduxModuleAction } from 'redux-packaged'


const make = ({ actionType }: IReduxModuleAction<ActionTypeSetting, {}, ActionSetting>) =>
	(state: TSettingState = initialState, action: ActionSetting): TSettingState => {
		return produce(state, (draft) => {
			switch (action.type) {
				case actionType.CHANGE_THEME: {
					draft.theme.paletteType = action.payload.mode || (draft.theme.paletteType === 'dark' ? 'light' : 'dark')
					return
				}
				case actionType.CHANGE_LANGUAGE: {
					draft.lang = action.payload.lang
					return
				}
			}
		})
	}

export default {
	make,
}
