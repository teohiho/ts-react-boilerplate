import '../scss/style.scss'

import {
	Button,
	Classes,
	Icon,
	Menu,
	MenuDivider,
	MenuItem,
	Popover,
	Position
} from '@blueprintjs/core'
import { compose, pure } from 'recompose'

import React from 'react'

const exampleMenu = (
	<Menu>
		<MenuItem icon="lock" text="Lock session" />
		<MenuItem icon="maximize" text="Full screen" />
		<MenuDivider />
		<MenuItem icon="wrench" text="Settings" />
		<MenuItem icon="person" text="Profile" />
		<MenuItem icon="help" text="Help" />
		<MenuDivider />
		<MenuItem icon="power" text="Logout" />
	</Menu>
)

const User = () => (
	<>
		<Popover content={exampleMenu} position={Position.BOTTOM}>
			<Button className={Classes.MINIMAL} icon="notifications" text="Unknown team" />
		</Popover>
	</>
)

export const UserBox = compose(pure)(User)
