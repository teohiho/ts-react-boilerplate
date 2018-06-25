import * as React from 'react'
import { WithStyles, withStyles, Grid, Tooltip, Button, Modal, Typography } from '@material-ui/core'
import { connect, Dispatch } from 'react-redux'
import { RouteComponentProps } from 'react-router'
import { groupBy, mapObjIndexed, mergeAll, compose, values } from 'ramda'

import BugReport from '@material-ui/icons/BugReport'
import Code from '@material-ui/icons/Code'
import Cloud from '@material-ui/icons/Cloud'
import AddIcon from '@material-ui/icons/Add'


import { TRootState } from '../../../conf/redux/reducer'
import TodoSingleStyle from './TodoSingle.style'
import AppTab from 'tpl/Tab/AppTab'
import { Task } from 'tpl'
import { TTask, TTag, TTags, TTasks } from '../logic.redux/initialState'
import CardNewTask from './component/CardNewTask'
import { unstable_renderSubtreeIntoContainer } from 'react-dom'

export interface ITodoSingleStateProps {
  tasks: TTasks,
  task: TTask,
}

export interface ITodoSingleDispatchProps {

}
export namespace TodoSingle {
  export interface Props extends RouteComponentProps<void>, WithStyles<typeof TodoSingleStyle>, ITodoSingleStateProps, ITodoSingleDispatchProps {

  }

  export interface State {
  }
}


class TodoSingle extends React.Component<TodoSingle.Props, TodoSingle.State> {
  public render(): JSX.Element {
    const { classes } = this.props
    const { task } = this.props
    return (
      <div className={classes.container}>
        <Typography>{`Title: ${task.title}`}</Typography>
        <Typography>{`Completed: ${task.completed}`}</Typography>
        <Typography>{`Id: ${task.id}`}</Typography>
        <Typography>{`Tags: ${task.tags}`}</Typography>
      </div>
    )
  }
}
const mapStateToProps = (state: TRootState, ownProps: RouteComponentProps<{id: string}>): ITodoSingleStateProps => ({
  tasks: state.todo.tasks,
  task: state.todo.tasks[ownProps.match.params.id],
  // ...mapStateToProps
})

const mapDispatchToProps = (dispatch: Dispatch<any>, props: TodoSingle.Props): any => ({
  // ...mapDispatchToProps
})

export default (withStyles(TodoSingleStyle)<TodoSingle.Props>(connect(mapStateToProps, mapDispatchToProps)(TodoSingle)))
