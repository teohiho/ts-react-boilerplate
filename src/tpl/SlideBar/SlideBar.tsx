import {
  Drawer,
  Hidden,
  List,
  ListItem,
  ListItemText,
  withStyles,
  // ListItemIcon,
  WithStyles,
} from '@material-ui/core'
import * as cx from 'classnames'
import { split } from 'ramda'
import * as React from 'react'
import { FormattedMessage } from 'react-intl'
import { RouteComponentProps } from 'react-router'
import { NavLink } from 'react-router-dom'
import AppLink from './component/AppLink'
import styles from './SlideBar.style'
interface ISlideBarStateProps {

}

interface ISlideBarDispatchProps {}

interface ISlideBarProps extends RouteComponentProps<void>, WithStyles<typeof styles> {
  logo?: string,
  logoText?: string,
  routes: any[],
  color: 'red' | 'orange' | 'green' | 'blue' | 'purple',
  image?: any,
  open?: any,
  handleDrawerToggle?: any,
}

interface ISlideBarState {}


class SlideBar extends React.Component<ISlideBarProps, ISlideBarState> {
  private renderBrand() {
	const { classes,
		// logo,
		logoText,
		} = this.props
	return (
		<div className={classes.logo}>
		<a href="/dashboard" className={classes.logoLink}>
			{logoText}
		</a>
		</div>
	)
  }
  private activeRoute(routeName: string) {
	const { pathname } = this.props.location
	return split('/')(routeName)[1] === split('/')(pathname)[1]
	// return this.props.location.pathname === routeName
	// return true;
  }
  private renderLink() {
	const { classes, routes, color } = this.props
	return (
		<List>
		{routes.map((prop, key) =>
			<AppLink
			color={color}
			isActive={this.activeRoute(prop.path)}
			sidebarI18nId={prop.sidebarI18nId}
			sidebarName={prop.sidebarName}
			path={prop.path}
			key={key}
			/>,
		)}
		</List>
	)
  }
  public render() {
	const { classes, image, open, handleDrawerToggle } = this.props
	return (
		<div className={classes.container} >
		<Hidden mdUp>
		<Drawer
			variant="temporary"
			anchor="left"
			open={open}
			classes={{
			paper: classes.drawerPaper,
			}}
			onClose={handleDrawerToggle}
			ModalProps={{
			keepMounted: true, // Better open performance on mobile.
			}}
		>
			{this.renderBrand()}
			<div className={classes.sidebarWrapper}>{this.renderLink()}</div>
			{image !== undefined ? (
			<div
				className={classes.background}
				style={{ backgroundImage: 'url(' + image + ')' }}
			/>
			) : null}
		</Drawer>
		</Hidden>
		<Hidden smDown>
		<Drawer
			anchor="left"
			variant="permanent"
			open
			classes={{
			paper: classes.drawerPaper,
			}}
		>
			{this.renderBrand()}
			<div className={classes.sidebarWrapper}>{this.renderLink()}</div>
			{image !== undefined ? (
			<div
				className={classes.background}
				style={{ backgroundImage: 'url(' + image + ')' }}
			/>
			) : null}
		</Drawer>
		</Hidden>
		</div>
	)
  }
}

export default (withStyles<'drawerPaper'& 'logo'>(styles)<ISlideBarProps>(SlideBar))

