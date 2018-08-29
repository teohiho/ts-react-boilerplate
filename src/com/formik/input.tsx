import { FormGroup, HTMLInputProps, IFormGroupProps, IInputGroupProps, InputGroup } from '@blueprintjs/core'
import { FieldProps } from 'formik'
import * as React from 'react'

export const makeFormikInput = (formGroupProps: IFormGroupProps = {}) =>
		(inputProps?: IInputGroupProps & HTMLInputProps) =>
		(props: FieldProps) => {
	const { form, field, ...restProps } = props
	const { touched, errors, isSubmitting, submitCount } = form
	const intent = (touched[field.name] && errors[field.name] && 'danger') || 'success'
	const helperText = submitCount > 0 && errors[field.name]
	return (
	<FormGroup
		helperText={helperText}
		labelFor="text-input"
		{...formGroupProps}
		intent={intent}
	>
		<InputGroup
			large
			{...field}
			{...inputProps}
			intent={intent}
		/>
	</FormGroup>
	)
}
