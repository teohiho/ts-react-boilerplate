import { action, ActionType } from 'typesafe-actions'
import { ActionTypeIdtv } from './actionType'
import { IReduxModule } from 'redux-packaged'


export type ActionCollectionIdtv = ReturnType<typeof make>
export type ActionIdtv = ActionType<ActionCollectionIdtv>

export type ActionIdtvType<K extends ActionIdtv['type']> = Extract<ActionIdtv, { type: K }>


const make = (reduxModule: IReduxModule<ActionTypeIdtv, {}>) => {
	const { actionType } = reduxModule
	return {
		startQuery: () => action(actionType.START_QUERY),
	}
}

export default {
	make,
}
