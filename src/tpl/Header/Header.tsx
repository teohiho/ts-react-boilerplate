import {
  AppBar,
  Button,
  Hidden,
  IconButton,
  Toolbar,
  withStyles,
  WithStyles,
} from '@material-ui/core'
import * as cx from 'classnames'
import * as React from 'react'
import { connect, Dispatch } from 'react-redux'
import { RouteComponentProps } from 'react-router'

import MenuIcon from '@material-ui/icons/Menu'
import * as pathToExp from 'path-to-regexp'
import { FormattedMessage } from 'react-intl'
import styles from './Header.style'

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
  isPathInRoute(pathname: string, routePath: string) {
	const re = pathToExp(routePath)
	return re.exec(pathname)
  }
  private makeBrand() {
	const { routes, location: { pathname } } = this.props
	for (const prop of routes) {
		if (this.isPathInRoute(pathname, prop.path)) {
		if (prop.navBarI18nId) {
			return <FormattedMessage id={prop.navBarI18nId} />
		}
		return prop.navBarName
		}
	}
	return ''
  }
  public render() {
	// const { classes, image, open, handleDrawerToggle } = this.props;
	const { classes, color, handleDrawerToggle } = this.props
	const appBarClasses = cx({
		[' ' + classes[color]]: color,
	})
	return (
		<AppBar position={'static'}>
		<Toolbar className={classes.container + appBarClasses}>
			<Hidden mdUp>
			<IconButton
				className={classes.appResponsive}
				color="inherit"
				aria-label="open drawer"
				onClick={handleDrawerToggle}
			>
				<MenuIcon />
			</IconButton>
			</Hidden>
			<Button href="#" className={classes.title}>
			{this.makeBrand()}
			</Button>
			<Hidden smDown implementation="css">
			{/* <HeaderLinks /> */}
			</Hidden>

		</Toolbar>
		</AppBar>
	)
  }
}

const mapStateToProps = (state: any): IHeaderStateProps => {
  return {
	// ...mapStateToProps
  }
}

const mapDispatchToProps = (dispatch: Dispatch<any>): IHeaderDispatchProps => {
  return {
	// ...mapDispatchToProps
  }
}

// export default (withStyles((theme) => ({ background: {} }))(connect(mapStateToProps, mapDispatchToProps)(Header)));
export default (withStyles(styles)<Header.Props>(connect(mapStateToProps, mapDispatchToProps)(Header)))

