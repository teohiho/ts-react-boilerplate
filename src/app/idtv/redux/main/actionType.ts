import reduxUtil, { ReturnActionType } from 'redux-packaged'

const make = reduxUtil.actionType.make([
	'START_QUERY',
])

export type ActionTypeIdtv = ReturnActionType<typeof make>

export default {
	make,
}
