import * as React from 'react'
import { WithStyles, withStyles, Grid, Tooltip, Button, Modal } from '@material-ui/core'
import { connect, Dispatch } from 'react-redux'
import { RouteComponentProps } from 'react-router'
import { groupBy, mapObjIndexed, mergeAll, compose, values } from 'ramda'

import BugReport from '@material-ui/icons/BugReport'
import Code from '@material-ui/icons/Code'
import Cloud from '@material-ui/icons/Cloud'
import AddIcon from '@material-ui/icons/Add'


import { TRootState } from '../../../conf/redux/reducer'
import todoStyle from './Todo.style'
import AppTab from 'tpl/Tab/AppTab'
import { Task } from 'tpl'
import { TTask, TTag, TTags } from '../logic.redux/initialState'
import CardNewTask from './component/CardNewTask'
import { unstable_renderSubtreeIntoContainer } from 'react-dom'

export interface ITodoStateProps {
  tasks: TTask[],
  tags: TTags,
}

export interface ITodoDispatchProps {

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
  }
  handleChange = (event: any, value: number) => {
    this.setState({ value })
  }
  renderTabData = () => {
    const { tasks, tags } = this.props
    const tagGroup = groupBy<TTask>(task => task.tags[0])
    console.log('Tag group', tagGroup(tasks), tags)
    const addProperties = mapObjIndexed((value: TTask[], key) => {
      switch (tags[key].title) {
        case 'Home': return {
          tabName: tags[key].title,
          tabIcon: BugReport,
          tabContent: (
            <Task tasks={value} tag={key} />
          ),
        }
        case 'Work': return {
          tabName: tags[key].title,
          tabIcon: Code,
          tabContent: (
            <Task tasks={value} tag={key} />
          ),
        }
        default: break
     }
      return {
        tabName: 'Other',
        tabIcon: Code,
        tabContent: (
          <Task tasks={value} tag={'Other'} />
        ),
      }
    })
    return compose(values, addProperties, tagGroup)(tasks)
  }
  public render(): JSX.Element {
    const { classes } = this.props
    const { tasks } = this.props
    const tabs = this.renderTabData()
    return (
      <div className={classes.container}>
        <Grid container>
          <Grid xs={12} sm={12} md={6} className={classes.todoContainer}>
            <AppTab
              renderLeft={() => (
                <div className={classes.addButtonContainer}>
                  <Button variant="fab" color="primary" className={classes.addButton}>
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
  tags: state.todo.tags,
  // ...mapStateToProps
})

const mapDispatchToProps = (dispatch: Dispatch<any>, props: Todo.Props): any => ({
  // ...mapDispatchToProps
})

export default (withStyles(todoStyle)<Todo.Props>(connect(mapStateToProps, mapDispatchToProps)(Todo)))
