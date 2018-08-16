import { from } from 'seamless-immutable'
import ActionTypes from './actionType'

const {
  CHANGE_TEST_TAB,
} = ActionTypes
interface ITestTabAction {
	type: string,
	[key: string]: any
}

export const reducer = (state= from({}), action: ITestTabAction) => {
  switch (action.type) {
	case CHANGE_TEST_TAB:
		return state
	default:
		return state
  }
}
export default reducer
