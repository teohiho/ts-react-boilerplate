import { from } from 'seamless-immutable'
import ActionTypes from './actionType'

const {
  CHANGE_CV,
} = ActionTypes
interface ICvAction {
	type: string,
	[key: string]: any
}

export const reducer = (state= from({}), action: ICvAction) => {
  switch (action.type) {
	case CHANGE_CV:
		return state
	default:
		return state
  }
}
export default reducer
