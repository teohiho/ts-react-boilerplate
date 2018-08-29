import { all, put, takeEvery } from 'redux-saga/effects'
import ActionTypes from './actionType'

const {
  LOGIN,
} = ActionTypes

function* doFunWithSaga(action: any) {
  try {

  } catch (err) {
	return null
  }
}

export default function* watchSandbox() {
  yield all([
	takeEvery(LOGIN, doFunWithSaga),
  ])
}
