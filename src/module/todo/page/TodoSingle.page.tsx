import {
	Typography,
	WithStyles,
	withStyles,
	} from '@material-ui/core'
import { TRootState } from 'conf/redux/reducer'
import {
	compose,
	groupBy,
	mapObjIndexed,
	mergeAll,
	values,
	} from 'ramda'
import * as React from 'react'
import { connect, Dispatch } from 'react-redux'
import { RouteComponentProps } from 'react-router'
import {
	TTask,
	TTasks,
	} from '../logic.redux/initialState'
import TodoSingleStyle from './TodoSingle.style'




export interface ITodoSingleStateProps {
  tasks: TTasks,
  task: TTask,
}

export interface ITodoSingleDispatchProps {

}
export namespace TodoSingle {
  export interface Props extends RouteComponentProps<void>,
  	WithStyles<typeof TodoSingleStyle>, ITodoSingleStateProps, ITodoSingleDispatchProps {

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
