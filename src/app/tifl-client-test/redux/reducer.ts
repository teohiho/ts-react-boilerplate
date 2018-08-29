import { from } from 'seamless-immutable'
import ActionTypes from './actionType'

const {
  CHANGE_TIFL_CLIENT_TEST,
} = ActionTypes
interface ITiflClientTestAction {
	type: string,
	[key: string]: any
}

export const reducer = (state= from({}), action: ITiflClientTestAction) => {
  switch (action.type) {
	case CHANGE_TIFL_CLIENT_TEST:
		return state
	default:
		return state
  }
}
export default reducer
