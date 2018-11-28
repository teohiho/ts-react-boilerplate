import { ActionCollectionIdtv, ActionIdtvType } from './action'
import { ActionTypeIdtv } from './actionType'
import { all, put, takeLatest } from 'redux-saga/effects'
import { IReduxModuleAction } from 'redux-packaged'


type ReduxResourceIdtv = IReduxModuleAction<ActionTypeIdtv, {}, ActionCollectionIdtv>


function* startQuery(action: ActionIdtvType<'START_QUERY'>) {
	console.log('Life is good')
	yield all([
		// @TODO: Should be use action function.
		yield put({
			type: '@@app/PCPNAME/QUERY',
			payload: {},
		}),
		yield put({
			type: '@@app/PCPREGIONNAME/QUERY',
			payload: {},
		}),
	])
}

const make = (reduxResource: ReduxResourceIdtv) => {
	return function* watchResource() {
		const { actionType } = reduxResource
		yield all([
			yield takeLatest(actionType.START_QUERY, startQuery),
		])
	}
}

export {
	ReduxResourceIdtv,
}
export default {
	make,
}
