import * as React from 'react'
import { WithStyles, withStyles, Button } from '@material-ui/core'
import { connect, Dispatch } from 'react-redux'
import { TRootState } from 'conf/redux/reducer'
import { getTasksByTag, getTagId } from '../../logic.redux/reselect'
import { TTask } from 'module/todo/logic.redux/initialState'
import { Task } from 'tpl'

export interface ITabReduxStateProps {
  tasks: string[],
  tag: string
}
export interface ITabReduxConnectedExtendedProps {
  tagId: string
}

export interface ITabReduxDispatchProps {
}


const mapStateToProps = (state: TRootState, ownProps: ITabReduxConnectedExtendedProps): ITabReduxStateProps => ({
  // ...mapStateToProps
  tasks: getTasksByTag(state, ownProps),
  tag: getTagId(state, ownProps),
})

const mapDispatchToProps = (dispatch: Dispatch<any>, ownProps: ITabReduxConnectedExtendedProps) => ({
  // ...mapDispatchToProps
})

// export default connect(mapStateToProps, mapDispatchToProps)(TabRedux)
export default connect(mapStateToProps, mapDispatchToProps)(Task)
