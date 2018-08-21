import { path } from 'ramda'
import * as React from 'react'
import { Switch } from 'react-router'
import { Route } from 'react-router-dom'
import { compose } from 'recompose'
import { LoginLayout } from './login'
import { RegistrationLayout } from './registration'
const style = require('../scss/authentication.scss')

const Authentication = (props: any) => {
	console.log('>>>>', props)
	return (
		<div className={style.body}>
			<Switch>
				<Route path="/auth/login" component={LoginLayout}/>
				<Route path="/auth/register" component={RegistrationLayout}/>
				<Route path="/" component={LoginLayout}/>
			</Switch>
		</div >
	)
}

export const AuthenticationLayout = compose()(Authentication)
