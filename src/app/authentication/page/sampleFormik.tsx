import { FormGroup, HTMLInputProps, IFormGroupProps, IInputGroupProps, InputGroup } from '@blueprintjs/core'
import * as classnames from 'classnames'
import { Field, FieldProps, Form, FormikProps, FormikValues, withFormik } from 'formik'
import { addContainer } from 'layout/default/createContainer'
import * as React from 'react'
import { compose, withStateHandlers } from 'recompose'
import { makeFormikInput } from '../../../com/formik/input'
interface ILoginFormPropsIn {
	email: string,
	password: string
}
interface ISampelFormikViewPropsIn extends FormikProps<ILoginFormPropsIn> {}

const SampleFormikView = ({ touched, errors, isSubmitting, handleSubmit }: ISampelFormikViewPropsIn) => {
	const Email = makeFormikInput({ disabled: true })({ leftIcon: 'user', placeholder: 'username' })
	const Password = makeFormikInput({ disabled: true })({ type: 'password', leftIcon: 'lock', placeholder: 'password' })
	return (
		<div>
			<form onSubmit={handleSubmit}>
				<Field type="email" name="email" render={Email} />
				<Field type="password" name="password" render={Password}/>
				<button type="submit" disabled={isSubmitting}>
					Submit
				</button>
			</form>
		</div>
	)
}

interface IFormikInputViewPropsIn extends FieldProps {}

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
	mapPropsToValues: props => ({ email: '', password: '' }),
	handleSubmit: (values) => {
		console.log('DATA', values)
		// do submitting things
	},
	validate: ((values) => {
		// Need to return empty if validate without err
		return {
			...getValidate('email', validateEmail(values.email)),
			...getValidate('password', validatePass(values.password)),
		}
	}),
})

export const SampleFormik = compose<ISampelFormikViewPropsIn, {}>(
	addContainer({ breadcrumbItems: ['Formik'] }),
	addLoginForm,
)(SampleFormikView)
