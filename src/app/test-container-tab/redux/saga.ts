import { all, put, takeEvery } from 'redux-saga/effects'
import ActionTypes from './actionType'

const {
  CHANGE_TEST_CONTAINER_TAB,
  CHANGE_TEST_CONTAINER_TAB_SAGA,
} = ActionTypes

function* doFunWithSaga(action: any) {
  try {

  } catch (err) {
	return null
  }
}

export default function* watchSandbox() {
  yield all([
	takeEvery(CHANGE_TEST_CONTAINER_TAB_SAGA, doFunWithSaga),
  ])
}
