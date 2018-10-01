import { tifl } from '@nietzsche-client/index'
import { all } from 'redux-saga/effects'

export function* appSaga() {
	yield all([
		tifl.saga(),
	])
}
