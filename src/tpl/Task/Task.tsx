import * as React from 'react'
import {  WithStyles, withStyles, Table, TableBody, TableRow, TableCell, Checkbox, Tooltip, IconButton, TextField } from '@material-ui/core'
import { connect, Dispatch } from 'react-redux'
import { range } from 'ramda'
// @material-ui/icons
import Edit from '@material-ui/icons/Edit'
import Close from '@material-ui/icons/Close'
import Check from '@material-ui/icons/Check'

import taskStyle from './Task.style'
import { TRootState } from 'conf/redux/reducer'
import { TTask } from 'module/todo/logic.redux/initialState'
import { updateTask } from 'module/todo/logic.redux/action'

export interface ITaskStateProps {

}

export interface ITaskDispatchProps {
  updateTask: (id: string, task: TTask) => void
}
export interface ITaskProps {
  tasksIndexes?: number[],
  checkedIndexes?: number[],
  tasks: TTask[],
}
export namespace Task {
  export interface Props extends WithStyles<typeof taskStyle>, ITaskStateProps, ITaskDispatchProps, ITaskProps {

  }

  export interface State {
  }
}
class Task extends React.Component<Task.Props, Task.State> {
  state = {
    checked: this.props.checkedIndexes,
  }
  // handleToggle = (value: number) => () => {
  //   const { checked } = this.state
  //   const currentIndex = checked.indexOf(value)
  //   const newChecked = [...checked]

  //   if (currentIndex === -1) {
  //     newChecked.push(value)
  //   } else {
  //     newChecked.splice(currentIndex, 1)
  //   }

  //   this.setState({
  //     checked: newChecked,
  //   })
  // }
  private onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target
    console.log('>>>value', value)
    // if (event.keyCode === 13) {

    // }
  }
  private onKeyPress = (event: React.KeyboardEvent<HTMLDivElement>) {
    if (event.key === 'Enter') {
      // Do code here

      event.preventDefault()
    }
  }
  public render(): JSX.Element {
    const { classes, tasksIndexes, tasks } = this.props
    const taskOrder: number[] = tasksIndexes ? tasksIndexes : range(0, tasks.length)
    return (
      <div>
        <TextField
          className={classes.createTaskField}
          label={'New Task'}
          onChange={this.onChange}
          onKeyPress={this.onKeyPress}/>
        <Table className={classes.table}>
          <TableBody>
            {taskOrder.map(value => (
              <TableRow key={value} className={classes.tableRow}>
                <TableCell className={classes.tableCell}>
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
                    }}
                    />
                </TableCell>
                <TableCell className={classes.tableCell}>
                  {tasks[value].title}
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
  // newTask: task => dispatch()
})

export default (withStyles(taskStyle)<ITaskProps>(connect(mapStateToProps, mapDispatchToProps)(Task)))
