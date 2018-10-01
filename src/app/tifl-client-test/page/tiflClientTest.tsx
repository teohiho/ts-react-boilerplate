import { Alert, Button, InputGroup } from '@blueprintjs/core'
import { getUserInfo1, login1, queryOrganization, queryPatient, searchPatient1 } from '@nietzsche-client/index'
import { createTabContainer } from 'layout/default/createTabContainer'
import * as React from 'react'
import { Link } from 'react-router-dom'
import { compose, pure, withState, withStateHandlers } from 'recompose'

const Test = () => (
	<div>
		<Button onClick={queryPatient}>
			Patient
		</Button>
		<Button onClick={login1}>
			Login
		</Button>
		<Button onClick={getUserInfo1}>
			USER INFO
		</Button>
		<Button onClick={searchPatient1}>
			Search
		</Button>
		<Button onClick={queryOrganization}>
			Org
		</Button>
	</div>
)
export const TiflClientTestPage = compose(pure)(Test)
