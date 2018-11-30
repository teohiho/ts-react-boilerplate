import reduxUtil, { ReturnActionType } from 'redux-packaged'

export type ActionTypeSetting = ReturnActionType<typeof make>

const make = reduxUtil.actionType.make([
	'CHANGE_THEME',
	'CHANGE_LANGUAGE',
])

export default {
	make,
}
