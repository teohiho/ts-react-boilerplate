import { action, ActionType } from 'typesafe-actions'
import { ActionTypeSetting } from './actionType'
import { IReduxModule } from 'redux-packaged'


// import { SelectorTodo } from './selector'


export type ActionCollectionSetting = ReturnType<typeof make>
export type ActionSetting = ActionType<ActionCollectionSetting>

const make = (reduxModule: IReduxModule<ActionTypeSetting, {}>) => {
	const { actionType } = reduxModule
	const changeTheme = (title: string, status = 'idle') =>
		action(actionType.CHANGE_THEME)
	const changeLanguage = (id: string) => action(actionType.CHANGE_LANGUAGE, { id })
	return {
		changeTheme,
		changeLanguage,
	}
}

export default {
	make,
}
