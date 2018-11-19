import produce from 'immer'
import { ActionLayoutDefault } from './action'
import { ActionTypeLayoutDefault } from './actionType'
import { initialState, TLayoutDefault } from './initialState'
import { IReduxModuleAction } from 'redux-packaged'


const make = ({ actionType }: IReduxModuleAction<ActionTypeLayoutDefault, {}, ActionLayoutDefault>) =>
	(state: TLayoutDefault = initialState, action: ActionLayoutDefault): TLayoutDefault => {
		return produce(state, (draft) => {
			switch (action.type) {
				case actionType.UPDATE_NAV:
					draft.frameworkNavbar.breadcrumbItems = action.payload.breadcrumbItems
					return draft
			}
		})
	}

export default {
	make,
}

