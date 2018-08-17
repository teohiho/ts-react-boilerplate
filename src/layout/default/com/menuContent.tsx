import {
	Button,
	Classes,
	IMenuItemProps,
	Menu,
	MenuDivider,
	MenuItem,
	Popover,
	Position} from '@blueprintjs/core'
import * as classnames from 'classnames'
import { TRootState } from 'conf/redux/reducer'
import { Location } from 'history'
import * as React from 'react'
import { connect } from 'react-redux'
import { RouteComponentProps, withRouter } from 'react-router'
import { Link, LinkProps } from 'react-router-dom'
import { compose, pure } from 'recompose'

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
	console.log('match, location', match, location, history)
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
			<MenuDivider title="Example" />
			<LinkItem icon="lock" text="Man" path="/man" />
			<LinkItem icon="lock" text="Hien" path="/hien" />
			<LinkItem icon="lock" text="Test" path="/test" />
		</div>
	</Menu>
)

 const MenuContentView = ({ breadcrumbItems }: IMenuContentPropsIn) => (
	<>
		<Popover
			content={SlideBar}
			position={Position.BOTTOM}
		>
			<Button className={Classes.MINIMAL} icon="menu" text={breadcrumbItems.join(' > ')} />
		</Popover>
	</>
)

interface IMenuContentStateProps {
	breadcrumbItems: string[]
}
interface IMenuContentPropsOut {}
interface IMenuContentPropsIn  extends IMenuContentPropsOut, IMenuContentStateProps {}
const mapStateToProps = (state: TRootState) => ({
	breadcrumbItems: state.layout.frameworkNavbar.breadcrumbItems,
})

const addRedux = connect(mapStateToProps)


 export const MenuContent = compose<IMenuContentPropsIn, IMenuContentPropsOut>(pure, addRedux)(MenuContentView)
