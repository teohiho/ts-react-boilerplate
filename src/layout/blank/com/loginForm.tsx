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
interface ILoginPropsIn extends FormikProps<ILoginFormPropsIn> {}
const LandscapeView = () => (
	<MediaQuery orientation="landscape">
			<div className={`${style.card}__image`} />
	</MediaQuery>
)
const PortraitView = () => (
	<MediaQuery orientation="portrait">
	</MediaQuery>
)
const LoginView = ({  isSubmitting, handleSubmit }: ILoginPropsIn) => {
	const User = makeFormikInput({ className: 'm-b-none' })({ leftIcon: 'user', placeholder: 'username' })
	const Password = makeFormikInput(
		{ className: 'm-b-none' },
	)({ type: 'password', leftIcon: 'lock', placeholder: 'password' })

	return (
		<div className={classnames(style.card, 'u-flex--row', 't-background3')}>
			<LandscapeView />
			<PortraitView />
			<form
				className={classnames('u-flex--center', 'p-h-sm', 'p-v-sm')}
				onSubmit={handleSubmit}
				>
				<H2 className={classnames(`${style.card}__title`)}>
					LOG IN
				</H2>
				<Field type="user" name="user" render={User} />
				<Field type="password" name="password" render={Password}/>
				{/* <Checkbox
					className={'m-t-md'}
					// checked={isChecked}
					// onClick={isChanged}
					label="Remember password"
				/> */}
				<Button
					type="submit"
					// disabled={isSubmitting}
					loading={isSubmitting}
					intent={Intent.SUCCESS}
					className={classnames(`${style.card}__btn`, 'm-t-md')}
					large
				>
					SIGN IN
				</Button>
				<hr className={'c-hr-blur'}/>
				<Link to="#" className="m-t-sm">
					Forgot username or password
				</Link>
				{/* <Link to="/auth/register">
					<Button intent={Intent.PRIMARY} className={`${style.card}__btn`} large>
						SIGN UP
					</Button>
				</Link> */}
			</form>
		</div>
	)
}

interface ILoginFormPropsIn {
	user: string,
	password: string
}
const validateEmail = (email?: string) => {
	return	 (!email && 'Required')
			|| ((!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(email || '')) && 'Invalid email address')
			|| undefined
}
const validatePass = (pass?: string) => {
	return	 (!pass && 'Required')
			|| ((pass && pass.length < 6) && 'Invalid password')
			|| undefined
}
const getValidate = (name: string, validate?: string) => validate && { [name]: validate }
const addLoginForm = withFormik<{}, ILoginFormPropsIn>({
	mapPropsToValues: props => ({ user: '', password: '' }),
	handleSubmit: (values) => {
		console.log('DATA', values)
		// do submitting things
	},
	validate: ((values) => {
		// Need to return empty if validate without err
		return {
			...getValidate('user', validateEmail(values.user)),
			...getValidate('password', validatePass(values.password)),
		}
	}),
})

// <======================Export========================>
export const LoginForm = compose<ILoginPropsIn, {}>(addLoginForm)(LoginView)
