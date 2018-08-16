import { from } from 'seamless-immutable'
import ActionTypes from './actionType'

const {
  CHANGE_TEST_CONTAINER_TAB,
} = ActionTypes
interface ITestContainerTabAction {
	type: string,
	[key: string]: any
}

export const reducer = (state= from({}), action: ITestContainerTabAction) => {
  switch (action.type) {
	case CHANGE_TEST_CONTAINER_TAB:
		return state
	default:
		return state
  }
}
export default reducer
