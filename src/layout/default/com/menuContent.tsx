import {
	Button,
	Classes,
	IMenuItemProps,
	Menu,
	MenuDivider,
	MenuItem,
	Popover,
	Position} from '@blueprintjs/core'
import * as React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { compose, pure } from 'recompose'
import { TRootState } from '../../../conf/redux/reducer'

const  styles = require('./menuContent.scss')

interface ILinkPropsIn extends IMenuItemProps {
	isActive: boolean,
	path: string
}
const LinkItem = ({ isActive, icon, text, path }: ILinkPropsIn) => (
	<div>
		<MenuDivider title="NAVIGATION" />
		<Link className={'o-menu__link'} to="/setting">
			<MenuItem icon={icon} text={text} />
		</Link>
	</div>
)

const SlideBar = (
	<Menu className={'o-menu--vertical'}>
		<div>
			<MenuDivider title="NAVIGATION" />
			<Link className={'o-menu__link'} to="/setting">
				<MenuItem icon="lock" text="Setting" />
			</Link>
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
