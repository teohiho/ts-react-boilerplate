import { Button, Icon } from '@blueprintjs/core'
import * as React from 'react'
import { compose, pure } from 'recompose'
import './UserBox.scss'
const User = () => (
	<>
		<Icon icon="notifications" className="icon"/>
		<img
			className={'avatar-small'}
			// tslint:disable-next-line:max-line-length
			src="https://scontent.fsgn2-3.fna.fbcdn.net/v/t1.0-9/22729181_1413739152078691_8629010665220503559_n.jpg?_nc_cat=0&oh=9c6cb8226354d8123113e2860b474af5&oe=5BC93A82"
		/>
		{/* @tomle */}
	</>
)

export const UserBox = compose(pure)(User)
