import ActionTypes from './actionType'
const {
  CHANGE_TEST_TAB,
  CHANGE_TEST_TAB_SAGA,
} = ActionTypes


export const doSomethingAwesome = () => ({
  type: 'CHANGE_TEST_TAB',
})
