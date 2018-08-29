import ActionTypes from './actionType'
const {
  CHANGE_AUTHENTICATION,
  CHANGE_AUTHENTICATION_SAGA,
} = ActionTypes


export const doSomethingAwesome = () => ({
  type: 'CHANGE_AUTHENTICATION',
})
