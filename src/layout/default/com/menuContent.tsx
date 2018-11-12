import * as Immutable from 'seamless-immutable'

import {
	Button,
	Classes,
	H5,
	IMenuItemProps,
	Icon,
	Intent,
	Menu,
	MenuDivider,
	MenuItem,
	Popover,
	Position,
	Text
} from '@blueprintjs/core'
import { Link, LinkProps } from 'react-router-dom'
import { RouteComponentProps, match, withRouter } from 'react-router'
import { compose, pure, renderComponent, withStateHandlers } from 'recompose'

import { Location } from 'history'
import React from 'react'
import { TRootState } from 'conf/redux/reducer'
import classnames from 'classnames'
import { concatPath } from 'util/route'
import { connect } from 'react-redux'
import { v4 } from 'uuid'

const  styles = require('../scss/style.scss')

interface ILinkPropsOut extends IMenuItemProps {
	// isActive: boolean,
	path: string
}
interface ILinkPropsIn extends ILinkPropsOut, RouteComponentProps<any> {}
const isRouteEqualPathname = (location: Location, pathLink: string) => {
	return	(pathLink === location.pathname && true)
			|| (location.pathname === pathLink && true)
			|| false
}
const LinkItemView = ({ icon, text, path, match, location, history }: ILinkPropsIn) => {
	const updatePath = concatPath(match.url)
	const fullPath = updatePath(path)
	return (
		<Link
			className={
				classnames(
					'o-menu__link',
					Classes.POPOVER_DISMISS,
					{ 'o-menu__link--selected': isRouteEqualPathname(location, fullPath) },
				)
			}
			to={fullPath}
		>
			<MenuItem icon={icon} text={text} className={Classes.POPOVER_DISMISS}/>
		</Link>
	)
}

const LinkItem = compose<ILinkPropsIn, ILinkPropsOut>(withRouter)(LinkItemView)
const SlideBar = () => (
	<Menu className={'o-menu--vertical'}>
		<div>
			<MenuDivider title="NAVIGATION" />
			<LinkItem icon="lock" text="Setting" path="/setting"  />
			<LinkItem icon="lock" text="Dashboard" path="/"  />
		</div>
		<div>
			<MenuDivider title="Test" />
			<LinkItem icon="lock" text="Organization" path="/t-test/auth" />
			<LinkItem icon="lock" text="Login" path="/auth" />
		</div>
		<div>
			<MenuDivider title="Example" />
			<LinkItem icon="lock" text="Man" path="/man" />
			<LinkItem icon="lock" text="Hien" path="/hien" />
		</div>

	</Menu>
)

interface IOpenState {
	isOpen: boolean
}
interface IOpenHandler {
	hide: () => void
	show: () => void
	toggle: () => void
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
		toggle: ({ isOpen }) => () => ({ isOpen: !isOpen }),
	},
)
const MenuContentView = ({ isOpen, show, hide, toggle }: IMenuContentPropIn) => (
	<>
		<Popover
			position={Position.BOTTOM}
		>
			<Button className={Classes.MINIMAL} icon="menu">
				MENU
			</Button>
			<SlideBar />
		</Popover>
	</>
)

 export const MenuContent = compose<IMenuContentPropIn, IMenuContentPropOut>(pure, addOpenStateHandler)(MenuContentView)
