import * as React from 'react'
import { WithStyles, withStyles, Grid, Tooltip, Button } from '@material-ui/core'
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
import { TTask } from '../logic.redux/initialState'
import CardNewTask from './component/CardNewTask'

export interface ITodoStateProps {
  tasks: TTask[]
}

export interface ITodoDispatchProps {

}
export namespace Todo {
  export interface Props extends RouteComponentProps<void>, WithStyles<typeof todoStyle>, ITodoStateProps, ITodoDispatchProps {

  }

  export interface State {
  }
}
const addProperties = mapObjIndexed((value: TTask[], key) => {
  switch (key) {
    case 'Home': return {
      tabName: key,
      tabIcon: BugReport,
      tabContent: (
        <Task tasks={value} />
      ),
    }
    case 'Work': return {
      tabName: 'Work',
      tabIcon: Code,
      tabContent: (
        <Task tasks={value} />
      ),
    }
    default: break
 }
  return {
    tabName: 'Other',
    tabIcon: Code,
    tabContent: (
      <Task tasks={value} />
    ),
  }
})

class Todo extends React.Component<Todo.Props, Todo.State> {
  state = {
    value: 0,
  }
  handleChange = (event: any, value: number) => {
    this.setState({ value })
  }
  renderTabData = () => {
    const { tasks } = this.props
    const tagGroup = groupBy<TTask>(task => task.tags[0])
    console.log('Tag group', tagGroup)
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
               title="Tasks:"
               headerColor="info"
               tabs={tabs}
            />
            <Tooltip title="Add new task">
              <Button variant="fab" color="secondary" className={classes.absolute}>
                <AddIcon />
              </Button>
            </Tooltip>
          </Grid>
          <Grid xs={12} sm={12} md={7} className={classes.todoContainer}>
            {/* <AppTab
               title="Add task"
               headerColor="info"
               tabs={tabs}
            /> */}
            <CardNewTask />
          </Grid>
        </Grid>
      </div>
    )
  }
}
const mapStateToProps = (state: TRootState): ITodoStateProps => ({
  tasks: state.todo.tasks,
  // ...mapStateToProps
})

const mapDispatchToProps = (dispatch: Dispatch<any>, props: Todo.Props): any => ({
  // ...mapDispatchToProps
})

export default (withStyles(todoStyle)<Todo.Props>(connect(mapStateToProps, mapDispatchToProps)(Todo)))
