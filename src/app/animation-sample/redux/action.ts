import ActionTypes from './actionType'
const {
  CHANGE_ANIMATION_SAMPLE,
  CHANGE_ANIMATION_SAMPLE_SAGA,
} = ActionTypes


export const doSomethingAwesome = () => ({
  type: 'CHANGE_ANIMATION_SAMPLE',
})
