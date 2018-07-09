import {
  Button,
  List,
  ListItem,
  ListItemText,
  WithStyles,
  withStyles,
  } from '@material-ui/core'
import * as cx from 'classnames'
import * as React from 'react'
import { FormattedMessage } from 'react-intl'
import { NavLink } from 'react-router-dom'
import AppLinkStyle from './AppLink.style'


export interface IAppLinkConnectedExtendedProps {
  color: 'red' | 'orange' | 'green' | 'blue' | 'purple',
  isActive: boolean
  redirect?: boolean
  sidebarI18nId: string
  sidebarName: string
  path: string
}

export namespace AppLink {
  export interface Props extends WithStyles<typeof AppLinkStyle>, IAppLinkConnectedExtendedProps {

  }
  export interface State {
  }
}
class AppLink extends React.PureComponent<AppLink.Props, AppLink.State> {
  state = {

  }

  public render() {
	const {  classes, color, isActive, redirect, sidebarI18nId, sidebarName, path } = this.props
	if (redirect) return null
	const listItemClasses = cx({
		[' ' + classes[color]]: isActive,
	})
	const whiteFontClasses = cx({
		[' ' + classes.whiteFont]: isActive,
	})
	const sidebarNameUpdated = sidebarI18nId
		? <FormattedMessage id={sidebarI18nId} />
		: sidebarName
	if (!sidebarName) return null
	return (
		<NavLink
		to={path}
		className={classes.item}
		activeClassName="active"
		>
		<ListItem button className={classes.itemLink + listItemClasses}>
			<ListItemText
			primary={sidebarNameUpdated}
			className={classes.itemText + whiteFontClasses}
			disableTypography={true}
			/>
		</ListItem>
		</NavLink>
	)
  }
}

export default withStyles(AppLinkStyle)(AppLink)
