import { ActionCollectionIdtv, ActionIdtvType } from './action'
import { ActionTypeIdtv } from './actionType'
import { IReduxModuleAction } from 'redux-packaged'
import {
	all,
	put,
	race,
	take,
	takeLatest,
} from 'redux-saga/effects'


type ReduxResourceIdtv = IReduxModuleAction<ActionTypeIdtv, {}, ActionCollectionIdtv>


function* startQuery(action: ActionIdtvType<'START_QUERY'>) {
	console.log('Life is good')
	const data =  yield all([
		// @TODO: Should be use action function.
		yield put({
			type: '@@app/PCPNAME/QUERY',
			payload: {},
		}),
		yield put({
			type: '@@app/PCPREGIONNAME/QUERY',
			payload: {},
		}),
		yield put({
			type: '@@app/PCPGROUPNAME/QUERY',
			payload: {},
		}),
		yield put({
			type: '@@app/SERVICETYPE/QUERY',
			payload: {},
		}),
		yield put({
			type: '@@app/PCPPRIMARYSPECIALTY/QUERY',
			payload: {},
		}),
	])
	console.log('DATA >>>', data)
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
