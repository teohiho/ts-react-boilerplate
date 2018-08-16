import { from } from 'seamless-immutable'
import ActionTypes from './actionType'

const {
  CHANGE_ANIMATION_SAMPLE,
} = ActionTypes
interface IAnimationSampleAction {
	type: string,
	[key: string]: any
}

export const reducer = (state= from({}), action: IAnimationSampleAction) => {
  switch (action.type) {
	case CHANGE_ANIMATION_SAMPLE:
		return state
	default:
		return state
  }
}
export default reducer
