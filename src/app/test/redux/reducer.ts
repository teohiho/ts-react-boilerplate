import { from } from 'seamless-immutable'
import ActionTypes from './actionType'

const {
  CHANGE_TEST,
} = ActionTypes
interface ITestAction {
	type: string,
	[key: string]: any
}

export const reducer = (state= from({}), action: ITestAction) => {
  switch (action.type) {
	case CHANGE_TEST:
		return state
	default:
		return state
  }
}
export default reducer
