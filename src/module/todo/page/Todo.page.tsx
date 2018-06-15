import * as React from 'react'
import { WithStyles, withStyles, Grid } from '@material-ui/core'
import { connect, Dispatch } from 'react-redux'
import { RouteComponentProps } from 'react-router'


import { TRootState } from '../../../conf/redux/reducer'
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
    return (
      <div className={classes.container}>
        <Grid container>
          <Grid xs={12} sm={12} md={6}>
            <TaskCard />
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
