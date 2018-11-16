import app from 'app/index'
import { all } from 'redux-saga/effects'
// import reduxHelper from 'nietzsche-client/util'
// import { defaultRedux } from 'nietzsche-client/tifl'
export function* appSaga() {
	yield all([
		// ...defaultRedux.saga,
		// ...reduxHelper.getSaga(app),
		...app.saga,
	])
}
