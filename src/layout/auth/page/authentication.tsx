import { Button, Card, Elevation, InputGroup } from '@blueprintjs/core'
import * as classnames from 'classnames'
import * as React from 'react'
import { compose } from 'recompose'
const style = require('./authentication.scss')

const Authentication = () => (
	<div className={style.body}>
		<Card className={classnames(style.card, 'u-flex--center')} interactive={true} elevation={Elevation.TWO}>
			<h1 className="">LOGIN</h1>
			hello
			<InputGroup
					leftIcon="user"
					placeholder="User name"
				/>
			<InputGroup
					leftIcon="lock"
					placeholder="Password"
				/>
			<Button className={style.btn}>LOGIN</Button>
			<h3><a href="#">Create an account</a></h3>
		</Card>
	</div>
)
export const AuthenticationLayout = compose()(Authentication)
