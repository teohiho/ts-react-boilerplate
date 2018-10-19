import resource from '@nietzsche-client/tifl/resource'
import { all } from 'redux-saga/effects'
import app from '../../app'

export function* appSaga() {
	yield all([
		// ...getSaga(tifl),
		...getSaga(app),
	])
}
// export const appSaga = getSaga(tifl)
