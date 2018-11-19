import { action, ActionType } from 'typesafe-actions'
import { ActionTypeLayoutDefault } from './actionType'
import { IReduxModule } from 'redux-packaged'


export type ActionCollectionLayoutDefault = ReturnType<typeof make>
export type ActionLayoutDefault = ActionType<ActionCollectionLayoutDefault>


export const make = ({ actionType }: IReduxModule<ActionTypeLayoutDefault, {}>) => {
	const updateNavbar = (breadcrumbItems: string[]) => action(actionType.UPDATE_NAV, {
		breadcrumbItems,
	})
	return {
		updateNavbar,
	}
}

export default {
	make,
}
