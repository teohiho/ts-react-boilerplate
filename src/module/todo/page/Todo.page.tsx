import * as React from 'react'
import { WithStyles, withStyles, Grid } from '@material-ui/core'
import { connect, Dispatch } from 'react-redux'
import { RouteComponentProps } from 'react-router'

import BugReport from '@material-ui/icons/BugReport'
import Code from '@material-ui/icons/Code'
import Cloud from '@material-ui/icons/Cloud'

import { TRootState } from '../../../conf/redux/reducer'
import todoStyle from './Todo.style'
import AppTab from 'tpl/Tab/AppTab'
import { Task } from 'tpl'

export interface ITodoStateProps {
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
  public render(): JSX.Element {
    const { classes } = this.props
    return (
      <div className={classes.container}>
        <Grid container>
          <Grid xs={12} sm={12} md={6}>
            <AppTab
               title="Tasks:"
               headerColor="info"
               tabs={[
                {
                  tabName: 'Bugs',
                  tabIcon: BugReport,
                  tabContent: (
                    <Task
                      checkedIndexes={[0, 3]}
                      tasksIndexes={[0, 1, 2, 3]}
                      tasks={['a', 'b']}
                    />
                  ),
                },
                {
                  tabName: 'Website',
                  tabIcon: Code,
                  tabContent: (
                    <Task
                      checkedIndexes={[0]}
                      tasksIndexes={[0, 1]}
                      tasks={['a', 'b']}
                    />
                  ),
                },
                {
                  tabName: 'Server',
                  tabIcon: Cloud,
                  tabContent: (
                    <Task
                      checkedIndexes={[1]}
                      tasksIndexes={[0, 1, 2]}
                      tasks={['a', 'b']}
                    />
                  ),
                },
              ]}
            />
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
