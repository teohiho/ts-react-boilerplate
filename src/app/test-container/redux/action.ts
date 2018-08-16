import ActionTypes from './actionType'
const {
  CHANGE_TEST_CONTAINER,
  CHANGE_TEST_CONTAINER_SAGA,
} = ActionTypes


export const doSomethingAwesome = () => ({
  type: 'CHANGE_TEST_CONTAINER',
})
