import reduxUtil, { ReturnActionType } from 'redux-packaged'

const make = reduxUtil.actionType.make([
	'ADD',
	'REMOVE',
])

export type ActionTypeTodo = ReturnActionType<typeof make>

export default {
	make,
}
