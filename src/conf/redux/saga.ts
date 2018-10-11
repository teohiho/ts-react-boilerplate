import { getSaga, tifl } from '@nietzsche-client/index'
import { all } from 'redux-saga/effects'
import app from '../../app'

export function* appSaga() {
	yield all([
		...getSaga(tifl),
		...getSaga(app),
	])
}
// export const appSaga = getSaga(tifl)
