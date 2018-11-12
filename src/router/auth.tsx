import React from 'react'
import { AuthenticationLayout } from 'layout/auth/page/authentication'
import { concatPath } from 'util/route'
import { Login } from 'layout/auth/com/login'
import { RegistrationLayout } from 'layout/auth/com/registration'
import { Route } from 'react-router-dom'
import { Switch } from '@blueprintjs/core'

export const AuthenticationRoute = (props:any) => {
	const authPath = concatPath(props.match.url)
	return (
		<AuthenticationLayout>
			<Switch>
				<Route path={authPath('/login')} component={Login}/>
				<Route path={authPath('/register')} component={RegistrationLayout}/>
				<Route path={authPath('/')} component={Login}/>
			</Switch>
		</AuthenticationLayout>
	)
}
