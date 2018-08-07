import { Button, Icon } from '@blueprintjs/core'
import * as React from 'react'
import { compose, pure } from 'recompose'
import './UserBox.scss'
const User = () => (
	<>
		<Icon icon="notifications" className="m-l-sm m-r-sm"/>
		Unknown team
		{/* @tomle */}
	</>
)

export const UserBox = compose(pure)(User)
