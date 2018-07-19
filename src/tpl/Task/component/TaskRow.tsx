import { Button, Checkbox, IconButton, TableCell, TableRow, WithStyles, withStyles } from '@material-ui/core'
import Close from '@material-ui/icons/Close'
import Edit from '@material-ui/icons/Edit'
import { TRootState } from 'conf/redux/reducer'
import { TTask } from 'module/todo/logic.redux/initialState'
import { getTaskById } from 'module/todo/logic.redux/reselect'
import * as React from 'react'
import { connect, Dispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import TaskRowStyle from './TaskRow.style'

import Check from '@material-ui/icons/Check'
import * as cs from 'classnames'
import { deleteTask, updateTask } from 'module/todo/logic.redux/action'
import AppTextField from '../../TextField/AppTextField'

export interface ITaskRowStateProps {
  task: TTask
}

export interface ITaskRowConnectedExtendedProps {
  taskId: string
}

export interface ITaskRowDispatchProps {
  updateTask: (id: string, task: TTask) => void,
  deleteTask: (id: string) => void,
}
export namespace TaskRow {
  export interface Props extends WithStyles<typeof TaskRowStyle>,
  	ITaskRowStateProps, ITaskRowDispatchProps, ITaskRowConnectedExtendedProps {

  }
  export interface State {
  }
}
class TaskRow extends React.Component<TaskRow.Props, TaskRow.State> {
  state = {
	isEdit: false,
  }
  public render(): JSX.Element {
	const { classes, task, updateTask, deleteTask } = this.props
	return (
		<TableRow className={classes.tableRow}>
		<TableCell classes={{
			root: cs(classes.rootCellCheck),
			}}>
			<Checkbox
			checked={task.completed}
			tabIndex={-1}
			onClick={() => updateTask(task.id, {
				...task,
				completed: ! task.completed,
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
			{ !this.state.isEdit
			? (
				<Link to={{
				pathname: `/todo/${task.id}`,
				}}
				>
				{task.title}
				</Link>
				)
			: <AppTextField
				onSubmit={(text= '') => {
					updateTask(task.id, {
					...task,
					title: text,
					})
					this.setState({
					isEdit: false,
					})
				}}
				label="Update Task"
				autoFocus
				value={task.title}
				/>
			}
		</TableCell>
		<TableCell className={classes.tableActions}>
			<IconButton
				aria-label="Edit"
				className={classes.tableActionButton}
				>
				<Edit
				className={
					classes.tableActionButtonIcon + ' ' + classes.edit
				}
				onClick={() => {
					this.setState({
					isEdit: true,
				})
				}}
				/>
			</IconButton>
			<IconButton
				aria-label="Close"
				className={classes.tableActionButton}
				>
				<Close
				className={
					classes.tableActionButtonIcon + ' ' + classes.close
				}
				onClick={() => deleteTask(task.id)}
				/>
			</IconButton>
		</TableCell>
		</TableRow>
	)
  }
}

const mapStateToProps = (state: TRootState, ownProps: ITaskRowConnectedExtendedProps): ITaskRowStateProps => ({
  // ...mapStateToProps
  // task: getTaskById(state, ownProps),
  task: state.todo.tasks[ownProps.taskId],
})

const mapDispatchToProps = (dispatch: Dispatch, ownProps: ITaskRowConnectedExtendedProps): ITaskRowDispatchProps => ({
  // ...mapDispatchToProps
  deleteTask: (id: string) => dispatch(deleteTask(id)),
  updateTask: (id: string, task: TTask) => dispatch(updateTask(id, task)),

})

export default withStyles(TaskRowStyle)(connect(mapStateToProps, mapDispatchToProps)(TaskRow))
