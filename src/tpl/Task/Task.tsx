import * as React from 'react'
import {  WithStyles, withStyles, Table, TableBody, TableRow, TableCell, Checkbox, Tooltip, IconButton, TextField, Button } from '@material-ui/core'
import { connect, Dispatch } from 'react-redux'
import { range } from 'ramda'
import { v4 } from 'uuid'
import * as cs from 'classnames'

// @material-ui/icons
import Edit from '@material-ui/icons/Edit'
import Close from '@material-ui/icons/Close'
import Check from '@material-ui/icons/Check'

import taskStyle from './Task.style'
import { TRootState } from 'conf/redux/reducer'
import { TTask } from 'module/todo/logic.redux/initialState'
import { updateTask, addTask, deleteTask } from 'module/todo/logic.redux/action'
import { Link } from 'react-router-dom'
import AppTextField from '../TextField/AppTextField'
import TaskRow from './component/TaskRow'

export interface ITaskStateProps {
  tasksIndex: string[]
}

export interface ITaskDispatchProps {
  updateTask: (id: string, task: TTask) => void,
  newTask: (task:TTask) => void,
  onDeleteTask: (id: string) => void,

}
export interface ITaskProps {
  tasksIndexes?: number[],
  checkedIndexes?: number[],
  tasks: string[],
  tag: string
}
export namespace Task {
  export interface Props extends WithStyles<typeof taskStyle>, ITaskStateProps, ITaskDispatchProps, ITaskProps {

  }

  export interface State {
    // newTaskText: string
  }
}
class Task extends React.Component<Task.Props, Task.State> {
  state = {
    newTaskText: '',
    editTaskId: '',
    editTaskText: '',
  }

  private onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target
    this.setState({
      newTaskText: value,
    })
  }
  private onChangeEdit = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target
    this.setState({
      editTaskText: value,
    })
  }
  private onKeyPressEdit = (event: React.KeyboardEvent<HTMLDivElement>, task: TTask) => {
    const { editTaskText } = this.state
    if (event.key === 'Enter') {
      // Do code here
      this.props.updateTask(task.id, {
        ...task,
        title: editTaskText,
      })
      this.setState({
        editTaskId: '',
      })
      event.preventDefault()
    }
  }
  private onKeyPress = (event: React.KeyboardEvent<HTMLDivElement>, tag: string) => {
    if (event.key === 'Enter') {
      // Do code here
      const { newTaskText } = this.state
      this.props.newTask({
        completed: false,
        title: newTaskText,
        tags: [tag],
        id: v4(),
      })
      this.setState({
        newTaskText: '',
      })
      event.preventDefault()
    }
  }
  private onSubmitNewTask = (text: string) => {
    const { tag } = this.props
    this.props.newTask({
      completed: false,
      title: text,
      tags: [tag],
      id: v4(),
    })
  }
  public render(): JSX.Element {
    const { classes, tasksIndex, tasks, tag } = this.props
    const taskOrder = tasksIndex
    return (
      <div>
        <AppTextField onSubmit={this.onSubmitNewTask} label="New Task" />
        <Table className={classes.table}>
          <TableBody>
            {taskOrder.map(index => (
              <div key={index}>
                <TaskRow taskId={index} />
              </div>
            ))}
          </TableBody>
        </Table>
      </div >
    )
  }
}
const mapStateToProps = (state: TRootState): ITaskStateProps => ({
  // ...mapStateToProps
  tasksIndex: state.todo.tasksIndex,
})

const mapDispatchToProps = (dispatch: Dispatch<any>, props: Task.Props): any => ({
  // ...mapDispatchToProps
  updateTask: (id: string, task: TTask) => dispatch(updateTask(id, task)),
  newTask: (task: TTask) => dispatch(addTask(task)),
  onDeleteTask: (id: string) => dispatch(deleteTask(id)),
})

export default (withStyles(taskStyle)<ITaskProps>(connect(mapStateToProps, mapDispatchToProps)(Task)))
