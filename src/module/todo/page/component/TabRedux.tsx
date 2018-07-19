import { Button, WithStyles, withStyles } from '@material-ui/core'
import { TRootState } from 'conf/redux/reducer'
import * as React from 'react'
import { connect, Dispatch } from 'react-redux'
import { Task } from 'tpl'
import { TTask } from '../../logic.redux/initialState'
import { getTagId, getTasksByTag } from '../../logic.redux/reselect'

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
