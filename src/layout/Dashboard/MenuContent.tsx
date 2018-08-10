import {
	Button,
	Classes,
	Menu,
	MenuDivider,
	MenuItem,
	Popover,
	Position } from '@blueprintjs/core'
import * as React from 'react'
import { compose, pure } from 'recompose'
const  styles = require('./MenuContent.scss')

const SlideBar = (
	// <>
	// 	<div>
	// 		NAVIGATION
	// 	</div>

	// 	{/* <Button icon={'refresh'}>
	// 		Dashboard
	// 	</Button> */}

	// </>
	<Menu className={styles.menu}>
		<MenuDivider title="NAVIGATION" />
		<MenuItem icon="lock" text="Dashboard" />
		<MenuItem icon="maximize" text="Menber Lookup" />
		<MenuDivider title="APPLICATION" />
		<MenuItem icon="style" text="Mail-merge">
			<MenuItem text="Templates" />
		</MenuItem>
		<MenuItem icon="search-around" text="Routers">
		</MenuItem>
		<MenuItem icon="rotate-document" text="Documents">
			<MenuItem text="IPA files" />
			<MenuItem text="Facility files" />
		</MenuItem>
		<MenuDivider title="NAVIGATION" />
		<MenuItem icon="lock" text="Dashboard" />
		<MenuItem icon="maximize" text="Menber Lookup" />
	</Menu >
)

 const MenuContentView = () => (
	<>
		<Popover content={SlideBar}
			position={Position.BOTTOM}
		>
			<Button className={Classes.MINIMAL} icon="menu" text="Menu" />
		</Popover>
	</>
)

 export const MenuContent = compose(pure)(MenuContentView)
