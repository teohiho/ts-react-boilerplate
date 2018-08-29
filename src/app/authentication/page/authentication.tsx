import { Button } from '@blueprintjs/core'
import { createTabContainer } from 'layout/default/createTabContainer'
import * as React from 'react'
import { compose, pure } from 'recompose'

const AuthenticationView = () => (
	<div>
		<Button onClick={() => {
			window.location.href = `https://demo.trackitforlife.com/oauth/login?next=http://localhost:3000`
		}}>
			LOGIN
		</Button>
		<a href="https://demo.trackitforlife.com/oauth/login">
			Click
		</a>
	</div>
)

export const AuthenticationPage = compose(pure)(AuthenticationView)
