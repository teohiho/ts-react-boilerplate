import * as React from 'react'
import { WithStyles, withStyles, Button, Typography } from '@material-ui/core'
import { connect, Dispatch } from 'react-redux'
import { RouteComponentProps } from 'react-router'
import dashboardStyle from './Dashboard.style'
import { TRootState } from 'conf/redux/reducer'

export interface IDashboardStateProps {
}

export interface IDashboardDispatchProps {

}
export namespace Dashboard {
  export interface Props extends RouteComponentProps<void>, WithStyles<typeof dashboardStyle>, IDashboardStateProps, IDashboardDispatchProps {

  }

  export interface State {
  }
}
class Dashboard extends React.Component<Dashboard.Props, Dashboard.State> {
  public render(): JSX.Element {
    return (
      <div>
       <Typography>Dashboard</Typography>

      </div>
  )
  }
}
const mapStateToProps = (state: TRootState): IDashboardStateProps => ({
  // ...mapStateToProps
})

const mapDispatchToProps = (dispatch: Dispatch<any>, props: Dashboard.Props): any => ({
  // ...mapDispatchToProps
})

export default (withStyles(dashboardStyle)<Dashboard.Props>(connect(mapStateToProps, mapDispatchToProps)(Dashboard)))
