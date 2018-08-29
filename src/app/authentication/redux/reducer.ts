import { from } from 'seamless-immutable'
import ActionTypes from './actionType'

const {
  CHANGE_AUTHENTICATION,
} = ActionTypes
interface IAuthenticationAction {
	type: string,
	[key: string]: any
}

export const reducer = (state= from({}), action: IAuthenticationAction) => {
  switch (action.type) {
	case CHANGE_AUTHENTICATION:
		return state
	default:
		return state
  }
}
export default reducer
