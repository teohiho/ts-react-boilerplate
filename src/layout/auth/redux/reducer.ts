import { from } from 'seamless-immutable'
import ActionTypes from './actionType'

const {
  LOGIN,
} = ActionTypes
interface IAuthenticationAction {
	type: string,
	[key: string]: any
}

export const reducer = (state= from({}), action: IAuthenticationAction) => {
  switch (action.type) {
	case LOGIN:
		return state
	default:
		return state
  }
}
export default reducer
