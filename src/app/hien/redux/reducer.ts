import { from } from 'seamless-immutable'
import ActionTypes from './actionType'

const {
  CHANGE_HIEN,
} = ActionTypes
interface IHienAction {
	type: string,
	[key: string]: any
}

export const reducer = (state= from({}), action: IHienAction) => {
  switch (action.type) {
	case CHANGE_HIEN:
		return state
	default:
		return state
  }
}
export default reducer
