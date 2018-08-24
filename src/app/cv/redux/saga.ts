import { all, put, takeEvery } from 'redux-saga/effects'
import ActionTypes from './actionType'

const {
  CHANGE_CV,
  CHANGE_CV_SAGA,
} = ActionTypes

function* doFunWithSaga(action: any) {
  try {

  } catch (err) {
	return null
  }
}

export default function* watchSandbox() {
  yield all([
	takeEvery(CHANGE_CV_SAGA, doFunWithSaga),
  ])
}
