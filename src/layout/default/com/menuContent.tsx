import {
	Button,
	Classes,
	Icon,
	IMenuItemProps,
	Menu,
	MenuDivider,
	MenuItem,
	Popover,
	Position,
	Text} from '@blueprintjs/core'
import * as classnames from 'classnames'
import { TRootState } from 'conf/redux/reducer'
import { Location } from 'history'
import * as React from 'react'
import { connect } from 'react-redux'
import { RouteComponentProps, withRouter } from 'react-router'
import { Link, LinkProps } from 'react-router-dom'
import { compose, pure, renderComponent, withStateHandlers } from 'recompose'
import * as Immutable from 'seamless-immutable'
import { v4 } from 'uuid'
const  styles = require('./menuContent.scss')

interface ILinkPropsOut extends IMenuItemProps {
	// isActive: boolean,
	path: string
}
interface ILinkPropsIn extends ILinkPropsOut, RouteComponentProps<any> {}
const isRouteEqualPathname = (location: Location, pathLink: string) => {
	return	(pathLink === '/' && location.pathname === '/' && true)
			|| (pathLink !== '/' && location.pathname.indexOf(pathLink) === 0 && true)
			|| false
}
const LinkItemView = ({ icon, text, path, match, location, history }: ILinkPropsIn) => {
	return (
		<Link
			className={classnames('o-menu__link', { 'o-menu__link--selected': isRouteEqualPathname(location, path) })}
			to={path}
		>
			<MenuItem icon={icon} text={text} />
		</Link>
	)
}
const LinkItem = compose<ILinkPropsIn, ILinkPropsOut>(withRouter)(LinkItemView)
const SlideBar = (
	<Menu className={'o-menu--vertical'}>
		<div>
			<MenuDivider title="NAVIGATION" />
			<LinkItem icon="lock" text="Setting" path="/setting"  />
			<LinkItem icon="lock" text="Dashboard" path="/"  />
		</div>
		<div>
			<MenuDivider title="Test" />
			{/* <LinkItem icon="lock" text="Man" path="/man" />
			<LinkItem icon="lock" text="Hien" path="/hien" /> */}
			<LinkItem icon="lock" text="Test Tab" path="/test" />
		</div>
	</Menu>
)

interface IOpenState {
	isOpen: boolean
}
interface IOpenHandler {
	hide: () => void
	show: () => void
	switch: () => void
}

interface IMenuContentPropOut {}
interface IMenuContentPropIn extends IOpenState, IOpenHandler {}
const addOpenStateHandler = withStateHandlers(
	{
		isOpen: false,
	},
	{
		hide: () => () => ({ isOpen: false }),
		show: () => () => ({ isOpen: true }),
		switchShow: ({ isOpen }) => () => ({ isOpen: !isOpen }),
	},
)
const MenuContentView = ({ isOpen, show, hide }: IMenuContentPropIn) => (
	<>
		<Popover
			content={SlideBar}
			position={Position.BOTTOM}
			// isOpen={isOpen}
		>
			<Button className={Classes.MINIMAL} icon="menu">
				MENU
			</Button>
		</Popover>
	</>
)

 export const MenuContent = compose<IMenuContentPropIn, IMenuContentPropOut>(pure, addOpenStateHandler)(MenuContentView)
