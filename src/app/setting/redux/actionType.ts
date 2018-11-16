import reduxUtil, { ReturnActionType } from 'redux-packaged'

const make = reduxUtil.actionType.make([
	'CHANGE_THEME',
	'CHANGE_LANGUAGE',
])

export type ActionTypeSetting = ReturnActionType<typeof make>

export default {
	make,
}
