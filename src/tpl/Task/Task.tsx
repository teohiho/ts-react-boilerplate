import * as React from 'react'
import {  WithStyles, withStyles, Table, TableBody, TableRow, TableCell, Checkbox, Tooltip, IconButton, TextField } from '@material-ui/core'
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

export interface ITaskStateProps {

}

export interface ITaskDispatchProps {
  updateTask: (id: string, task: TTask) => void,
  newTask: (task:TTask) => void,
  onDeleteTask: (id: string) => void,

}
export interface ITaskProps {
  tasksIndexes?: number[],
  checkedIndexes?: number[],
  tasks: TTask[],
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

  public render(): JSX.Element {
    const { classes, tasksIndexes, tasks, tag } = this.props
    const taskOrder: number[] = tasksIndexes ? tasksIndexes : range(0, tasks.length)
    return (
      <div>
        <TextField
          inputProps={{
            className: classes.inputNewTask,
          }}
          InputLabelProps={{
            style: {
              color: 'black',
            },
          }}
          className={classes.createTaskField}
          label={'New Task'}
          onChange={this.onChange}
          onKeyPress={event => this.onKeyPress(event, tag)} />
        <Table className={classes.table}>
          <TableBody>
            {taskOrder.map(value => (
              <TableRow key={value} className={classes.tableRow}>
                <TableCell classes={{
                    root: cs(classes.rootCellCheck),
                    }}>
                  <Checkbox
                    checked={tasks[value].completed}
                    tabIndex={-1}
                    onClick={() => this.props.updateTask(tasks[value].id, {
                      ...tasks[value],
                      completed: ! tasks[value].completed,
                    })}
                    checkedIcon={<Check className={classes.checkedIcon} />}
                    icon={<Check className={classes.uncheckedIcon} />}
                    classes={{
                      checked: classes.checked,
                      root: classes.rootCheck,
                    }}
                    />
                </TableCell>
                <TableCell classes={{
                    root: cs(classes.editTextField),
                  }}>
                  { tasks[value].id !== this.state.editTaskId
                    ? tasks[value].title
                    : <TextField
                      value={this.state.editTaskText}
                      onChange={this.onChangeEdit}
                      autoFocus={true}
                      onKeyPress={event => this.onKeyPressEdit(event, tasks[value])}
                      className={classes.editTextField} />
                  }
                </TableCell>
                <TableCell className={classes.tableActions}>
                  <Tooltip
                    id="tooltip-top"
                    title="Edit Task"
                    placement="top"
                    classes={{ tooltip: classes.tooltip }}
                    >
                    <IconButton
                      aria-label="Edit"
                      className={classes.tableActionButton}
                      >
                      <Edit
                        className={
                          classes.tableActionButtonIcon + ' ' + classes.edit
                        }
                        onClick={() => this.setState({
                          editTaskId: tasks[value].id,
                          editTaskText: tasks[value].title,
                        })}
                        />
                    </IconButton>
                  </Tooltip>
                  <Tooltip
                    id="tooltip-top-start"
                    title="Remove"
                    placement="top"
                    classes={{ tooltip: classes.tooltip }}
                    >
                    <IconButton
                      aria-label="Close"
                      className={classes.tableActionButton}
                      >
                      <Close
                        className={
                          classes.tableActionButtonIcon + ' ' + classes.close
                        }
                        onClick={() => this.props.onDeleteTask(tasks[value].id)}
                        />
                    </IconButton>
                  </Tooltip>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    )
  }
}
const mapStateToProps = (state: TRootState): ITaskStateProps => ({
  // ...mapStateToProps
})

const mapDispatchToProps = (dispatch: Dispatch<any>, props: Task.Props): any => ({
  // ...mapDispatchToProps
  updateTask: (id: string, task: TTask) => dispatch(updateTask(id, task)),
  newTask: (task: TTask) => dispatch(addTask(task)),
  onDeleteTask: (id: string) => dispatch(deleteTask(id)),
})

export default (withStyles(taskStyle)<ITaskProps>(connect(mapStateToProps, mapDispatchToProps)(Task)))
