import React from 'react'
import { compose, pure } from 'recompose'
import {
	Button,
	Classes,
	Menu,
	MenuDivider,
	MenuItem,
	Popover,
	Position,
} from '@blueprintjs/core'


const documentRef = document as any
const UserMenu = (
	<Menu>
		{/* <MenuItem icon="lock" text="Lock session" /> */}
		<MenuItem icon="maximize" text="Full screen" onClick={() => documentRef.documentElement.webkitRequestFullscreen()} />
	</Menu>
)

const User = () => (
	<>
		<Popover content={UserMenu} position={Position.BOTTOM}>
			<Button className={Classes.MINIMAL} icon="notifications" text="User" />
		</Popover>
	</>
)

export default compose(pure)(User)
