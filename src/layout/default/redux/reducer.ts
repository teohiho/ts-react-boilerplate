import actionType from './actionType'
import { initialState } from './initialState'

interface ILayoutAction {
	type: string,
	[key: string]: any
}

const reducer = (state = initialState, actions: ILayoutAction) => {
	switch (actions.type) {
		case actionType.UPDATE_NAV: {
			return state.setIn(['frameworkNavbar', 'breadCrumbItems'], actions.breadCrumbItems)
		}
		default: return state
	}
}

export default reducer

