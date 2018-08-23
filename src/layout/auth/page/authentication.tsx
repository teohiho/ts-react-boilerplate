import { Button, Card, Elevation, InputGroup } from '@blueprintjs/core'
import * as classnames from 'classnames'
import { path } from 'ramda'
import * as React from 'react'
import { Route, Switch } from 'react-router'
import { compose } from 'recompose'
import { RegistrationLayout } from './registration'
const style = require('../scss/authentication.scss')

const Authentication = (props: any) => {
	return (
		<div className={style.body}>
			{props.children}
		</div >
	)
}

export const AuthenticationLayout = compose()(Authentication)
