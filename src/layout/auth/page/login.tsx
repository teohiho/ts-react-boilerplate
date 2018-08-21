import { Button, Card, Elevation, InputGroup } from '@blueprintjs/core'
import * as classnames from 'classnames'
import * as React from 'react'
import { compose } from 'recompose'
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
		</Card>
	)
}
export const LoginLayout = compose()(Login)
