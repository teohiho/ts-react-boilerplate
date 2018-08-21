import { Button, Card, Elevation, InputGroup } from '@blueprintjs/core'
import * as classnames from 'classnames'
import * as React from 'react'
import { compose } from 'recompose'
const Logo = require('img/photo-man--1.jpg')
const style = require('../scss/registration.scss')

const Registration = () => (
	<div className={style.body}>
		<div className={classnames(style.container, 'u-flex--row')}>
			<div className={style.left}>
				<img src={Logo}/>
			</div>
			<div className={style.right}>
				<Card className={classnames(style.card, 'u-flex--center')} interactive={true} elevation={Elevation.TWO}>
					<h1>SIGN UP</h1>
					hello
					<InputGroup
							className={style.input}
							leftIcon="people"
							placeholder="Name"
						/>
					<InputGroup
						className={style.input}
						leftIcon="box"
						placeholder="Email"
					/>
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
					<Button className={style.btn}>OK</Button>
				</Card>
			</div>
		</div>
	</div>
)
export const RegistrationLayout = compose()(Registration)
