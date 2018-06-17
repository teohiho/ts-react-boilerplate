import { initialState, TTodoState, TTask } from './initialState'
import { ITodoAction } from './action'
import actionType from './actionType'
import * as Immutable from 'seamless-immutable'


const reducer = (state: TTodoState = initialState, action: ITodoAction<TTask>) => {
  switch (action.type) {
    case actionType.UPDATE_TASK: {
      const taskCurrentIndex = state.tasks.findIndex(task => task.id === action.payload.id)
      return state.setIn(['tasks', taskCurrentIndex], action.payload)
    }
    case actionType.ADD_TASK: {
      return state.setIn(['tasks'], state.tasks.concat(action.payload))
    }
    case actionType.DELETE_TASK: {
      const taskCurrentIndex = state.tasks.findIndex(task => task.id === action.payload.id)
      return state.setIn(['tasks'], state.tasks.slice(0, taskCurrentIndex).concat(state.tasks.slice(taskCurrentIndex + 1)))
    }
    default: return state
  }
}

export default reducer
