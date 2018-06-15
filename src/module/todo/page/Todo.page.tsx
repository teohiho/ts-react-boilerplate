import * as React from 'react'
import { Card, CardHeader, CardContent, WithStyles, withStyles, Tabs, Tab } from '@material-ui/core'
import { connect, Dispatch } from 'react-redux'
import { RouteComponentProps } from 'react-router'
import { BugReport, Code, Cloud } from '@material-ui/icons'


import { TRootState } from '../../../conf/redux/reducer'
import { todo } from '../todo'
import todoStyle from './Todo.style'
import TaskCard from 'tpl/Card/TaskCard'

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
    const data = [
      {
        tags: ['Home'],
        title: 'Play football',
        completed: false,
      },
      {
        tags: ['Home'],
        title: 'Play game',
        completed: false,
      },
      {
        tags: ['Work'],
        title: 'Working typescript',
        completed: false,
      },
      {
        tags: ['Work'],
        title: 'Working test for react',
        completed: false,
      },
      {
        tags: ['Work'],
        title: 'Handle styles',
        completed: false,
      },
    ]
    return (
      <div>
        <TaskCard />
      </div>
  )
  }
}
const mapStateToProps = (state: TRootState): ITodoStateProps => ({
  // ...mapStateToProps
})

const mapDispatchToProps = (dispatch: Dispatch<any>, props: Todo.Props): any => ({
  // ...mapDispatchToProps
})

export default (withStyles(todoStyle)<Todo.Props>(connect(mapStateToProps, mapDispatchToProps)(Todo)))
