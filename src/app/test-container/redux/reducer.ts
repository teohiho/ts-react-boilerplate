import { from } from 'seamless-immutable'
import ActionTypes from './actionType'

const {
  CHANGE_TEST_CONTAINER,
} = ActionTypes
interface ITestContainerAction {
	type: string,
	[key: string]: any
}

export const reducer = (state= from({}), action: ITestContainerAction) => {
  switch (action.type) {
	case CHANGE_TEST_CONTAINER:
		return state
	default:
		return state
  }
}
export default reducer
