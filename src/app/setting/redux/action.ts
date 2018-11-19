import { action, ActionType } from 'typesafe-actions'
import { ActionTypeSetting } from './actionType'
import { IReduxModule } from 'redux-packaged'
import { TPaletteType } from './initalState'


export type ActionCollectionSetting = ReturnType<typeof make>
export type ActionSetting = ActionType<ActionCollectionSetting>

const make = (reduxModule: IReduxModule<ActionTypeSetting, {}>) => {
	const { actionType } = reduxModule
	const changeTheme = (mode?: TPaletteType) =>
		action(actionType.CHANGE_THEME, { mode })
	const changeLanguage = (lang: string) => action(actionType.CHANGE_LANGUAGE, { lang })
	return {
		changeTheme,
		changeLanguage,
	}
}

export default {
	make,
}
