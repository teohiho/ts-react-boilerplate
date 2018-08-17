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
import * as React from 'react'
import { connect } from 'react-redux'
import { RouteComponentProps, withRouter } from 'react-router'
import { Link, LinkProps } from 'react-router-dom'
import { compose, pure } from 'recompose'

const  styles = require('./menuContent.scss')

interface ILinkPropsOut extends IMenuItemProps {
	isActive: boolean,
	path: string
}
interface ILinkPropsIn extends ILinkPropsOut, RouteComponentProps<any> {}
const LinkItemView = ({ isActive, icon, text, path, match }: ILinkPropsIn) => {
	console.log('match', match)
	return (
		<Link
			className={classnames('o-menu__link', { 'o-menu__link--selected': isActive })}
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
			<LinkItem isActive={true} icon="lock" text="Setting" path="/setting"  />
		</div>
		<div>
			<MenuDivider title="Example" />
			<Link className={'o-menu__link'} to="/man">
				<MenuItem icon="lock" text="Man" />
			</Link>
			<Link className={'o-menu__link'} to="/hien">
				<MenuItem icon="lock" text="Hien" />
			</Link>
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
