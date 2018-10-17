import { all, put, takeEvery } from 'redux-saga/effects'
import ActionTypes from './actionType'

const {
  CHANGE_TIFL_CLIENT_TEST,
  CHANGE_TIFL_CLIENT_TEST_SAGA,
} = ActionTypes

function* doFunWithSaga(action: any) {
  try {

  } catch (err) {
	return null
  }
}

export default function* watchSandbox() {
  yield all([
	takeEvery(CHANGE_TIFL_CLIENT_TEST_SAGA, doFunWithSaga),
  ])
}
