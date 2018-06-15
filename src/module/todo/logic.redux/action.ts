import { TTask } from './initialState'
import actionType from './actionType'

export interface ITodoAction<T> {
  type: string,
  payload: T
}

export const updateTask = (id: string, taskUpdated: TTask) => {
  return {
    payload: taskUpdated,
    type: actionType.UPDATE_TASK,
  }
}

export const addTask = (task: TTask) => {
  return {
      type: actionType.ADD_TASK,
      payload: task,
  }
}

export const deleteTask = (task: number) => {
  return {
      type: actionType.DELETE_TASK,
      payload: task,
  }
}
