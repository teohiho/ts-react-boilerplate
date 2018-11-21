import classnames from 'classnames'
import MediaQuery from 'react-responsive'
import React from 'react'
import { addBreadcrumb, addContainer } from 'layout/default/createContainer'
import { compose, pure, withStateHandlers } from 'recompose'
import { Field, FormikProps, withFormik } from 'formik'
import { Link } from 'react-router-dom'
import { makeFormikInput } from '../../../com/formik/input'
// <======================Import========================>

const style = require('../scss/authentication.scss')

const LoginView = () => {
	return (
		<div className={classnames(style.card, `${style.card}__image`, 't-background3', 'u-flex--1', 'u-flex--center')}>
			<button
				type="submit"
				className={classnames(`${style.card}__btn`, 'm-t-md', 'u-flex--center')}
			>
				SIGN IN
			</button>
		</div>
	)
}


// <======================Export========================>

export const LoginPage = compose(
	pure,
	addContainer(
		{
			breadcrumbItems: ['Login'],
		},
	),
)(LoginView)
