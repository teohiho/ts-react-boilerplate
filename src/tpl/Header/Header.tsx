import * as React from 'react';
import { connect, Dispatch } from 'react-redux';
import {
  withStyles,
  WithStyles,
  AppBar,
  Toolbar,
  Button,
  Hidden,
  IconButton,
} from "@material-ui/core";
import * as cx from 'classnames';
import { RouteComponentProps } from 'react-router';

import styles from './Header.style';

export interface IHeaderStateProps {
}

export interface IHeaderDispatchProps {

}


export namespace Header {
  export interface Props extends RouteComponentProps<void>, WithStyles<typeof styles> {
    color?: any,
    handleDrawerToggle?: any,
    routes: any[],
  }

  export interface State {
  }
}

class Header extends React.Component<Header.Props, Header.State> {
  private makeBrand() {
    return 'abc'
  }
  public render() {
    // const { classes, image, open, handleDrawerToggle } = this.props;
    const { classes, color, handleDrawerToggle } = this.props;
    const appBarClasses = cx({
      [" " + classes[color]]: color
    });
    appBarClasses
    return (
      <AppBar position={'static'}>
        <Toolbar className={classes.container}>
          <Button href="#" className={classes.title}>
            <h1>HelloWorld</h1>
            {this.makeBrand()}
          </Button>
          <Hidden smDown implementation="css">
            {/* <HeaderLinks /> */}
          </Hidden>
          <Hidden mdUp>
            <IconButton
              className={classes.appResponsive}
              color="inherit"
              aria-label="open drawer"
              onClick={handleDrawerToggle}
            >
              {/* <MenuIcon /> */}
            </IconButton>
          </Hidden>
        </Toolbar>
      </AppBar>
    )
  }
}

const mapStateToProps = (state: any): IHeaderStateProps => {
  return {
    // ...mapStateToProps
  };
};

const mapDispatchToProps = (dispatch: Dispatch<any>): IHeaderDispatchProps => {
  return {
    // ...mapDispatchToProps
  };
};

// export default (withStyles((theme) => ({ background: {} }))(connect(mapStateToProps, mapDispatchToProps)(Header)));
export default (withStyles(styles)<Header.Props>(connect(mapStateToProps, mapDispatchToProps)(Header)));

