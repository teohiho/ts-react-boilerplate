// <======================Import========================>
import { Button, Card, Checkbox, Elevation, H2, H3, IInputGroupProps, InputGroup, Intent, MenuDivider } from '@blueprintjs/core'
import { Field, FormikProps, withFormik } from 'formik'
import { compose, withStateHandlers } from 'recompose'

import { Link } from 'react-router-dom'
import MediaQuery from 'react-responsive'
import React from 'react'
import classnames from 'classnames'
import { makeFormikInput } from '../../../com/formik/input'

const style = require('../scss/authentication.scss')

const Input = (props: IInputGroupProps) => (
	<InputGroup
		className={classnames(`${style.card}__input`, 'm-b-sm')}
		large
		{...props}
	/>
)

interface IChangeChecked {
	isChanged: () => void
}
const addCheckboxStateHandlers = withStateHandlers(
	{
		isChecked: true,
	},
	{
		isChanged: ({ isChecked }) => () => ({ isChecked: !isChecked }),
	},
)
interface ILoginPropsIn {}
const LandscapeView = () => (
	<MediaQuery orientation="landscape">
			<div className={`${style.card}__image`} />
	</MediaQuery>
)
const PortraitView = () => (
	<MediaQuery orientation="portrait">
	</MediaQuery>
)
const LoginView = () => {
	const User = makeFormikInput({ className: 'm-b-none' })({ leftIcon: 'user', placeholder: 'username' })
	const Password = makeFormikInput(
		{ className: 'm-b-none' },
	)({ type: 'password', leftIcon: 'lock', placeholder: 'password' })

	return (
		<div className={classnames(style.card, 'u-flex--row', 't-background3')}>
			<LandscapeView />
			<PortraitView />
			<div
				className={classnames('u-flex--center', 'p-h-sm', 'p-v-sm')}
				>
				<Button
					type="submit"
					// disabled={isSubmitting}
					intent={Intent.SUCCESS}
					className={classnames(`${style.card}__btn`, 'm-t-md')}
					large
				>
					SIGN IN
				</Button>
				<hr className={'c-hr-blur'}/>

			</div>
		</div>
	)
}


// <======================Export========================>
export const Login = compose<ILoginPropsIn, {}>()(LoginView)
