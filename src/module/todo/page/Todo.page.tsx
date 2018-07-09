import { Button, Dialog, DialogActions, DialogContent, DialogTitle, Grid, Icon, Modal, TextField, Tooltip, Typography, withStyles, WithStyles } from '@material-ui/core'
import { compose, groupBy, indexOf, map, mapObjIndexed, mergeAll, pick, values } from 'ramda'
import * as React from 'react'
import { connect, Dispatch } from 'react-redux'
import { RouteComponentProps } from 'react-router'

import AddIcon from '@material-ui/icons/Add'
import BugReport from '@material-ui/icons/BugReport'
import Cloud from '@material-ui/icons/Cloud'
import Code from '@material-ui/icons/Code'


import { unstable_renderSubtreeIntoContainer } from 'react-dom'
import { Task } from 'tpl'
import AppTab from 'tpl/Tab/AppTab'
import { v4 } from 'uuid'
import { TRootState } from '../../../conf/redux/reducer'
import { addTag } from '../logic.redux/action'
import { TTag, TTags, TTask, TTasks } from '../logic.redux/initialState'
import CardNewTask from './component/CardNewTask'
import TabRedux from './component/TabRedux'
import todoStyle from './Todo.style'

export interface ITodoStateProps {
  // tasks: TTasks,
  tags: TTags,
  // tasksIndex: string[],
  tagsIndex: string[]
}

export interface ITodoDispatchProps {
  addTag: (tag: TTag) => void
}
export namespace Todo {
  export interface Props extends RouteComponentProps<void>, WithStyles<typeof todoStyle>, ITodoStateProps, ITodoDispatchProps {

  }

  export interface State {
  }
}

class Todo extends React.Component<Todo.Props, Todo.State> {
  state = {
	value: 0,
	modalOpen: false,
	tagText: '',
  }
  handleChange = (event: any, value: number) => {
	this.setState({ value })
  }
  private renderTabIcon(tagKey: string) {
	switch (tagKey) {
		case '':
		default: return Code
	}
  }
  // shouldComponentUpdate() {
  //   return false
  // }

  private renderTabData = () => {
	const { tagsIndex, tags } = this.props
	return tagsIndex.map(tagId => ({
		tabName: tags[tagId].title,
		tabIcon: this.renderTabIcon(tagId),
		tabContent: <TabRedux tagId={tagId} />,
	}))
  }
  private showModal = () => {
	this.setState({ modalOpen: true })
  }
  private hideModal = () => {
	this.setState({ modalOpen: false })
  }
  private onChangeTagText = (event: React.ChangeEvent<HTMLInputElement>) => {
	const { value } = event.target
	this.setState({
		tagText: value,
	})
  }
  private onSubmitNewTag = () => {
	const { tagText } = this.state
	this.props.addTag({
		id: v4(),
		title: tagText,
	})
	this.setState({
		tagText: '',
		modalOpen: false,
	})
  }
  private onKeyPressEdit = (event: React.KeyboardEvent<HTMLDivElement>) => {
	const { tagText } = this.state
	if (event.key === 'Enter') {
		this.onSubmitNewTag()
		event.preventDefault()
	}
  }
  public render(): JSX.Element {
	const { classes } = this.props
	const tabs = this.renderTabData()
	return (
		<div className={classes.container}>
		<Dialog
			open={this.state.modalOpen}
			onClose={this.hideModal}
		>
			<DialogTitle id="form-dialog-title">Add tag</DialogTitle>
			<DialogContent>
				<TextField
				id="tag"
				label="Tag"
				className={classes.textField}
				placeholder={'Home'}
				value={this.state.tagText}
				onChange={this.onChangeTagText}
				onKeyPress={this.onKeyPressEdit}
				margin="normal"
				/>
			</DialogContent>
			<DialogActions>
			<Button onClick={this.hideModal} color="primary">
				Cancel
			</Button>
			<Button onClick={this.onSubmitNewTag} color="primary">
				Add
			</Button>
			</DialogActions>
			{/* </div> */}
		</Dialog>
		<Grid container>
			<Grid item xs={12} sm={12} md={6} className={classes.todoContainer}>
			<AppTab
				renderLeft={() => (
				<div className={classes.addButtonContainer}>
					<Button variant="fab" color="primary" className={classes.addButton} onClick={this.showModal}>
					<AddIcon />
					</Button>
				</div>
				)}
				headerColor="info"
				tabs={tabs}
			/>
			</Grid>
		</Grid>
		</div>
	)
  }
}
const mapStateToProps = (state: TRootState): ITodoStateProps => ({
  tags: state.todo.tags,
  tagsIndex: state.todo.tagsIndex,

})

const mapDispatchToProps = (dispatch: Dispatch<any>, props: Todo.Props): any => ({
  // ...mapDispatchToProps
  addTag: (tag: TTag) => dispatch(addTag(tag)),
})

export default (withStyles(todoStyle)<Todo.Props>(connect(mapStateToProps, mapDispatchToProps)(Todo)))
