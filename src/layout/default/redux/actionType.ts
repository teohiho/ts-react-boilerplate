import reduxUtil, { ReturnActionType } from 'redux-packaged'

export type ActionTypeLayoutDefault = ReturnActionType<typeof make>

const make = reduxUtil.actionType.make([
	'UPDATE_NAV',
])

export default {
	make,
}
