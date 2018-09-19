import ActionTypes from './actionType'
const {
  CHANGE_TEST,
  CHANGE_TEST_SAGA,
} = ActionTypes


export const doSomethingAwesome = () => ({
  type: 'CHANGE_TEST',
})
