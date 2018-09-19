import { Button } from '@blueprintjs/core'
import { server } from '@settingConfig'
import axios from 'axios'
import { createTabContainer } from 'layout/default/createTabContainer'
import * as React from 'react'
import { compose, pure } from 'recompose'

const AuthenticationView = () => (
	<div>
		<Button onClick={() => {
			window.location.href = server.login
		}}>
			LOGIN
		</Button>
		<a href={server.login}>
			Click
		</a>
		<Button onClick={() => {
			axios.get(server.obj)
				.then(data => console.log('DATA', data))
		}}>
			FETCH DIRECT
		</Button>
		<Button onClick={() => {
			axios.get('https://demo.trackitforlife.com/obj/people-members')
				.then(data => console.log('DATA MEMBER', data))
		}}>
			FETCH MEMBER
		</Button>
	</div>
)

export const AuthenticationPage = compose(pure)(AuthenticationView)
