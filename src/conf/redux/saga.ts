import app from 'app/index'
import { defaulResource } from 'nietzsche-client/tifl'
import reduxHelper from 'nietzsche-client/util'
import { all } from 'redux-saga/effects'
export function* appSaga() {
	yield all([
		...defaulResource.saga,
		...reduxHelper.getSaga(app),
	])
}
