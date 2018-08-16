import actionType from './actionType'
import { initialState } from './initialState'

interface ILayoutAction {
	type: string,
	[key: string]: any
}

const reducer = (state = initialState, actions: ILayoutAction) => {
	switch (actions.type) {
		case actionType.UPDATE_NAV: {
			return state.setIn(['frameworkNavbar', 'breadcrumbItems'], actions.breadcrumbItems)
		}
		default: return state
	}
}

export default reducer

