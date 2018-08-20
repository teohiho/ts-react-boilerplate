import * as React from 'react'
import { compose } from 'recompose'

const Authentication = () => (
	<h1>I'm authentication</h1>
)
export const AuthenticationLayout = compose()(Authentication)
