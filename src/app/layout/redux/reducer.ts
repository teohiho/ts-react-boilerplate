import { from } from 'seamless-immutable'
import ActionTypes from './actionType'

const {
  CHANGE_LAYOUT,
} = ActionTypes
interface ILayoutAction {
	type: string,
	[key: string]: any
}

export const reducer = (state= from({}), action: ILayoutAction) => {
  switch (action.type) {
	case CHANGE_LAYOUT:
		return state
	default:
		return state
  }
}
export default reducer
