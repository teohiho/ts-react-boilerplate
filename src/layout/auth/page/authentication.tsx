import { Button, Card, Elevation, InputGroup } from '@blueprintjs/core'
import * as classnames from 'classnames'
import * as React from 'react'
import { Switch } from 'react-router'
import { Route } from 'react-router-dom'
import { compose } from 'recompose'
import { RegistrationLayout } from './registration'
const style = require('../scss/authentication.scss')

const Login = () => {
	console.log('>>>>>>>>')
	return (
	<Card className={classnames(style.card, 'u-flex--center')} interactive={true} elevation={Elevation.TWO}>
		<h1 >LOGIN</h1>
		hello
		<InputGroup
				className={style.input}
				leftIcon="user"
				placeholder="User name"
			/>
		<InputGroup
				className={style.input}
				leftIcon="lock"
				placeholder="Password"
			/>
		<Button className={style.btn}>LOGIN</Button>
		<h3><a href="/auth/register">Create an account</a></h3>
	</Card>)
}

const Authentication = (props: any) => {
	console.log('>>>>', props)
	return (
		<div className={style.body}>
			<Switch>
				<Route path="/login" component={Login}/>
				<Route path="/register" component={RegistrationLayout}/>
				<Route path="/" component={RegistrationLayout}/>
			</Switch>
		</div >
	)
}

export const AuthenticationLayout = compose()(Authentication)
