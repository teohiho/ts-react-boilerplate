import {
	Button,
	Classes,
	Menu,
	MenuDivider,
	MenuItem,
	Popover,
	Position } from '@blueprintjs/core'
import * as React from 'react'
import { Link } from 'react-router-dom'
import { compose, pure } from 'recompose'

const  styles = require('./MenuContent.scss')

const SlideBar = (
	<Menu className={'o-menu--vertical'}>
		<div>
			<MenuDivider title="NAVIGATION" />
			<Link className={'o-menu__link'} to="/setting">
				<MenuItem icon="lock" text="Setting" />
			</Link>
			<MenuItem icon="maximize" text="Menber Lookup" />
		</div>
		<div>
			<MenuDivider title="APPLICATION" />
			<MenuItem text="Templates" />
			<MenuItem icon="search-around" text="Routers"/>
		</div>
		<div>
			<MenuDivider title="NAVIGATION" />
			<MenuItem icon="lock" text="Dashboard" />
			<MenuItem icon="maximize" text="Menber Lookup" />
		</div>
	</Menu >
)

 const MenuContentView = () => (
	<>
		<Popover
			content={SlideBar}
			position={Position.BOTTOM}
		>
			<Button className={Classes.MINIMAL} icon="menu" text="Menu" />
		</Popover>
	</>
)

 export const MenuContent = compose(pure)(MenuContentView)
