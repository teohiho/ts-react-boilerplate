import * as React from 'react'
import { connect, Dispatch } from 'react-redux'
import {
  withStyles,
  WithStyles,
} from '@material-ui/core'
import styles from './Sand.style'
import { RouteComponentProps } from 'react-router'

export interface ISandStateProps {
}

export interface ISandDispatchProps {

}


export namespace Sand {
  export interface Props extends RouteComponentProps<void>, WithStyles<typeof styles> {
  }

  export interface State {
  }
}


class Sand extends React.Component<Sand.Props, Sand.State> {
  public render() {
    // const { classes, image, open, handleDrawerToggle } = this.props;
    return null
  }
}

const mapStateToProps = (state: any): ISandStateProps => {
  return {
    // ...mapStateToProps
  }
}

const mapDispatchToProps = (dispatch: Dispatch<any>): ISandDispatchProps => {
  return {
    // ...mapDispatchToProps
  }
}

// export default (withStyles((theme) => ({ background: {} }))(connect(mapStateToProps, mapDispatchToProps)(Sand)));
export default (withStyles(styles)<Sand.Props>(connect(mapStateToProps, mapDispatchToProps)(Sand)))

