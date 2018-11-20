import classnames from 'classnames'
import MediaQuery from 'react-responsive'
import React from 'react'
import { addBreadcrumb, addContainer } from 'layout/default/createContainer'
import { compose, pure, withStateHandlers } from 'recompose'
import { Field, FormikProps, withFormik } from 'formik'
import { Link } from 'react-router-dom'
import { makeFormikInput } from '../../../com/formik/input'
// <======================Import========================>
import {
	Button,
	IInputGroupProps,
	InputGroup,
	Intent,
	} from '@blueprintjs/core'

const style = require('../scss/authentication.scss')

const LoginView = () => {
	return (
		<div className={classnames(style.card, `${style.card}__image`, 'u-flex--row', 't-background3', 'u-flex--1', 'u-flex-center')}>
			<Button
				type="submit"
				// disabled={isSubmitting}
				intent={Intent.SUCCESS}
				className={classnames(`${style.card}__btn`, 'm-t-md')}
				large
			>
				SIGN IN
			</Button>
		</div>
	)
}


// <======================Export========================>

export const LoginPage = compose(
	pure,
	addContainer(
		{
			breadcrumbItems: ['Setting'],
		},
	),
)(LoginView)
