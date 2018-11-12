import app from 'app/index'
import { defaultRedux } from 'nietzsche-client/tifl'
import reduxHelper from 'nietzsche-client/util'
import { all } from 'redux-saga/effects'
export function* appSaga() {
	yield all([
		...defaultRedux.saga,
		...reduxHelper.getSaga(app),
	])
}
