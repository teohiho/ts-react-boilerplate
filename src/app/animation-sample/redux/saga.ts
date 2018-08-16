import { all, put, takeEvery } from 'redux-saga/effects'
import ActionTypes from './actionType'

const {
  CHANGE_ANIMATION_SAMPLE,
  CHANGE_ANIMATION_SAMPLE_SAGA,
} = ActionTypes

function* doFunWithSaga(action: any) {
  try {

  } catch (err) {
	return null
  }
}

export default function* watchSandbox() {
  yield all([
	takeEvery(CHANGE_ANIMATION_SAMPLE_SAGA, doFunWithSaga),
  ])
}
