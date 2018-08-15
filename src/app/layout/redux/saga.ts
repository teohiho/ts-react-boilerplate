import { all, put, takeEvery } from 'redux-saga/effects'
import ActionTypes from './actionType'

const {
  CHANGE_LAYOUT,
  CHANGE_LAYOUT_SAGA,
} = ActionTypes

function* doFunWithSaga(action: any) {
  try {

  } catch (err) {
	return null
  }
}

export default function* watchSandbox() {
  yield all([
	takeEvery(CHANGE_LAYOUT_SAGA, doFunWithSaga),
  ])
}
