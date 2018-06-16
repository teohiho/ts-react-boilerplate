import * as React from 'react'
import {  WithStyles, withStyles, Table, TableBody, TableRow, TableCell, Checkbox, Tooltip, IconButton } from '@material-ui/core'
import { connect, Dispatch } from 'react-redux'

// @material-ui/icons
import Edit from '@material-ui/icons/Edit'
import Close from '@material-ui/icons/Close'
import Check from '@material-ui/icons/Check'

import taskStyle from './Task.style'
import { TRootState } from 'conf/redux/reducer'

export interface ITaskStateProps {
}

export interface ITaskDispatchProps {

}
export namespace Task {
  export interface Props extends WithStyles<typeof taskStyle>, ITaskStateProps, ITaskDispatchProps {
    tasksIndexes: number[],
    checkedIndexes: number[],
    tasks: string[],
  }

  export interface State {
  }
}
class Task extends React.Component<Task.Props, Task.State> {
  state = {
    checked: this.props.checkedIndexes,
  }
  handleToggle = (value: number) => () => {
    const { checked } = this.state
    const currentIndex = checked.indexOf(value)
    const newChecked = [...checked]

    if (currentIndex === -1) {
      newChecked.push(value)
    } else {
      newChecked.splice(currentIndex, 1)
    }

    this.setState({
      checked: newChecked,
    })
  }
  public render(): JSX.Element {
    const { classes, tasksIndexes, tasks } = this.props
    return (
      <Table className={classes.table}>
        <TableBody>
          {tasksIndexes.map(value => (
            <TableRow key={value} className={classes.tableRow}>
              <TableCell className={classes.tableCell}>
                <Checkbox
                  checked={this.state.checked.indexOf(value) !== -1}
                  tabIndex={-1}
                  onClick={this.handleToggle(value)}
                  checkedIcon={<Check className={classes.checkedIcon} />}
                  icon={<Check className={classes.uncheckedIcon} />}
                  classes={{
                    checked: classes.checked,
                  }}
                />
              </TableCell>
              <TableCell className={classes.tableCell}>
                {tasks[value]}
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
    )
  }
}
const mapStateToProps = (state: TRootState): ITaskStateProps => ({
  // ...mapStateToProps
})

const mapDispatchToProps = (dispatch: Dispatch<any>, props: Task.Props): any => ({
  // ...mapDispatchToProps
})

export default (withStyles(taskStyle)<Task.Props>(connect(mapStateToProps, mapDispatchToProps)(Task)))
