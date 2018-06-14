import * as React from 'react'
import { connect, Dispatch } from 'react-redux'
import { withStyles, WithStyles } from '@material-ui/core'
import { RouteComponentProps } from 'react-router'
import dashboardStyle from './Dashboard.style'
import { SlideBar, Header } from '../tpl/'
import { imageResource } from '../theme/default'

export interface IDashboardStateProps {
}

export interface IDashboardDispatchProps {

}

export namespace Dashboard {
  export interface Props extends RouteComponentProps<void>, WithStyles<typeof dashboardStyle> {
    renderRouter?: Function,
    routes: any[],
  }

  export interface State {
    drawerOpen: boolean,
  }
}
class Dashboard extends React.Component<Dashboard.Props, Dashboard.State> {
  state = {
    drawerOpen: false,
  }
  public handleDrawerToggle = () => {
    this.setState({
      drawerOpen: !this.state.drawerOpen,
    })
  }
  private renderRouter() {
    if (this.props.renderRouter) return this.props.renderRouter()
    return this.props.children
  }
  public render() {
    const { routes, classes, ...routeHistory } = this.props
    return (
      <div className={classes.wrapper}>
        <SlideBar
          routes={routes}
          logoText={'Track It For Life'}
          // logo={logo}
          image={imageResource.slideBar[1]}
          handleDrawerToggle={this.handleDrawerToggle}
          open={this.state.drawerOpen}
          color="blue"
          {...routeHistory}
        />
        <div className={classes.mainPanel}>
          <Header
              routes={routes}
              handleDrawerToggle={this.handleDrawerToggle}
             {...routeHistory}
          />
          {this.renderRouter()}
        </div>
      </div>
    )
  }
}


const mapStateToProps = (state: any): IDashboardStateProps => {
  return {
    // ...mapStateToProps
  }
}

const mapDispatchToProps = (dispatch: Dispatch<any>): IDashboardDispatchProps => {
  return {
    // ...mapDispatchToProps
  }
}

export default withStyles(dashboardStyle)<Dashboard.Props>(connect(mapStateToProps, mapDispatchToProps)(Dashboard))


