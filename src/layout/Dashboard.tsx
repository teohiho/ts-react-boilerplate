import * as React from 'react';
import { connect, Dispatch } from 'react-redux';
import { Theme, createStyles, withStyles, WithStyles } from '@material-ui/core';
// import { RouteComponentProps } from 'react-router';
import SlideBar from '../tpl/SlideBar/SlideBar';

export interface StateProps {
}

export interface IDashboardDispatchProps {}

export namespace Dashboard {
  export interface Props extends WithStyles<typeof styles> {
    renderRouter?: Function,
    routes: any[],
  }

  export interface State {}
}
class Dashboard extends React.Component<Dashboard.Props, Dashboard.State> {
  private renderRouter() {
    if (this.props.renderRouter) return this.props.renderRouter()
    return this.props.children
  }
  public render() {
    const { routes } = this.props;
    return (
      <div>
        <SlideBar
          routes={routes}
          logoText={"Creative Tim"}
          // logo={logo}
          // image={image}
          // handleDrawerToggle={this.handleDrawerToggle}
          // open={this.state.mobileOpen}
          color="blue"
          // {...rest}
        />
        <div>
          {this.renderRouter()}
        </div>
      </div>
    );
  }
}

const styles = (theme: Theme) => createStyles({
  root: {
    padding: theme.spacing.unit * 10,
  },
});

const mapStateToProps = (state: any): StateProps => {
  return {
    // ...mapStateToProps
  };
};

const mapDispatchToProps = (dispatch: Dispatch<any>): IDashboardDispatchProps => {
  return {
    // ...mapDispatchToProps
  };
};

export default withStyles(styles)<Dashboard.Props>(connect(mapStateToProps, mapDispatchToProps)(Dashboard));


