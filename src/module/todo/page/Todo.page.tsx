import * as React from 'react'
import { WithStyles, withStyles, Grid, Tooltip, Button, Modal, TextField, Typography } from '@material-ui/core'
import { connect, Dispatch } from 'react-redux'
import { RouteComponentProps } from 'react-router'
import { groupBy, mapObjIndexed, mergeAll, compose, values, map, pick, indexOf } from 'ramda'

import BugReport from '@material-ui/icons/BugReport'
import Code from '@material-ui/icons/Code'
import Cloud from '@material-ui/icons/Cloud'
import AddIcon from '@material-ui/icons/Add'


import { TRootState } from '../../../conf/redux/reducer'
import todoStyle from './Todo.style'
import AppTab from 'tpl/Tab/AppTab'
import { Task } from 'tpl'
import { TTask, TTag, TTags, TTasks } from '../logic.redux/initialState'
import CardNewTask from './component/CardNewTask'
import { unstable_renderSubtreeIntoContainer } from 'react-dom'
import { addTag } from '../logic.redux/action'
import { v4 } from 'uuid'

export interface ITodoStateProps {
  tasks: TTasks,
  tags: TTags,
  tasksIndex: string[],
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
  renderTabData = () => {
    const { tasks, tags, tasksIndex, tagsIndex } = this.props
    const convertTasks = map((key: string) => tasks[key])
    const tagGroup = groupBy<TTask>(task => task.tags[0])
    const addProperties = mapObjIndexed((tasksByGroup: TTask[], key) => {
      switch (tags[key].title) {
        case 'Home': return {
          tabName: tags[key].title,
          tabIcon: BugReport,
          tabContent: (
            <Task tasks={tasksByGroup} tag={key} />
          ),
        }
        case 'Work': return {
          tabName: tags[key].title,
          tabIcon: Code,
          tabContent: (
            <Task tasks={tasksByGroup} tag={key} />
          ),
        }
        default: break
     }
      return {
        tabName: 'Other',
        tabIcon: Code,
        tabContent: (
          <Task tasks={tasksByGroup} tag={'Other'} />
        ),
      }
    })
    const tabObj = compose(pick(tagsIndex), addProperties, tagGroup, convertTasks)(tasksIndex)
    const addTabByTag = map((tagKey: string) => {
      if (!tabObj[tagKey]) {
        return {
          tabName: tags[tagKey].title,
          tabIcon: BugReport,
          tabContent: (
            <Task tasks={[]} tag={tagKey} />
          ),
        }
      }
      return tabObj[tagKey]
    })(tagsIndex)
    return addTabByTag
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
  private onKeyPressEdit = (event: React.KeyboardEvent<HTMLDivElement>) => {
    const { tagText } = this.state
    if (event.key === 'Enter') {
      this.props.addTag({
        id: v4(),
        title: tagText,
      })
      this.setState({
        tagText: '',
        modalOpen: false,
      })
      event.preventDefault()
    }
  }
  public render(): JSX.Element {
    const { classes } = this.props
    const { tasks } = this.props
    const tabs = this.renderTabData()
    return (
      <div className={classes.container}>
        <Modal
          open={this.state.modalOpen}
          onClose={this.hideModal}
        >
          <div className={classes.modal}>
            <>
              {`Add tag\n`}
            </>
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
          </div>
        </Modal>
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
  tasks: state.todo.tasks,
  tasksIndex: state.todo.tasksIndex,
  tags: state.todo.tags,
  tagsIndex: state.todo.tagsIndex,
  // ...mapStateToProps
})

const mapDispatchToProps = (dispatch: Dispatch<any>, props: Todo.Props): any => ({
  // ...mapDispatchToProps
  addTag: (tag: TTag) => dispatch(addTag(tag)),
})

export default (withStyles(todoStyle)<Todo.Props>(connect(mapStateToProps, mapDispatchToProps)(Todo)))
