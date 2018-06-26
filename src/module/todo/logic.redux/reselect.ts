import { createSelector } from 'reselect'
import { TRootState } from 'conf/redux/reducer'
import { ITabReduxConnectedExtendedProps } from '../page/component/TabRedux'
import { filter, compose, values } from 'ramda'
import { TTask } from './initialState'

export const getTasksIndex = (state: TRootState) => state.todo.tasksIndex
export const getTasks = (state: TRootState) => state.todo.tasks

export const getTags = (state: TRootState) => state.todo.tags
export const getTagsIndex = (state: TRootState) => state.todo.tagsIndex

export const getTagId = (state: TRootState, ownProps: ITabReduxConnectedExtendedProps) => ownProps.tagId
export const getTasksByTag = createSelector(
  [getTasks, getTagId],
  (tasks, tagId) => {
    const filterTask = filter((task:TTask) => task.tags[0] === tagId)
    return compose(values, filterTask)(tasks)
  },
)
// export const getTodoPageProps = createSelector(
//   [
//     getTasaks
//   ]
// )
