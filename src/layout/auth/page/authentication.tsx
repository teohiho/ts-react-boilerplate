import { compose, pure } from 'recompose'

import { Footer } from '../../default/com/footer'
import React from 'react'
import classnames from 'classnames'

const style = require('../scss/authentication.scss')

const Authentication = (props: any) => {
	return (
		<div className={classnames('u-flex--1', 'u-size--min-vh--full')} >
			<div className={classnames('u-flex--1', style.body)}>
				{props.children}
			</div >
				<Footer/>
		</div >
	)
}

export const AuthenticationLayout = compose(pure)(Authentication)
