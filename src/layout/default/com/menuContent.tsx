import {
	Button,
	Classes,
	Menu,
	MenuDivider,
	MenuItem,
	Popover,
	Position } from '@blueprintjs/core'
import * as React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { compose, pure } from 'recompose'
import { TRootState } from '../../../conf/redux/reducer'

const  styles = require('./menuContent.scss')

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

 const MenuContentView = ({ breadCrumbItems }: IMenuContentPropsIn) => (
	<>
		<Popover
			content={SlideBar}
			position={Position.BOTTOM}
		>
			<Button className={Classes.MINIMAL} icon="menu" text={breadCrumbItems.join(' > ')} />
		</Popover>
	</>
)

interface IMenuContentStateProps {
	breadCrumbItems: string[]
}
interface IMenuContentPropsOut {}
interface IMenuContentPropsIn  extends IMenuContentPropsOut, IMenuContentStateProps {}
const mapStateToProps = (state: TRootState) => ({
	breadCrumbItems: state.layout.frameworkNavbar.breadCrumbItems,
})

const addRedux = connect(mapStateToProps)


 export const MenuContent = compose<IMenuContentPropsIn, IMenuContentPropsOut>(pure, addRedux)(MenuContentView)
