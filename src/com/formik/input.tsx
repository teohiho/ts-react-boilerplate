import { Button, FormGroup, HTMLInputProps,
	Icon, IconName, IFormGroupProps, IIconProps, IInputGroupProps,
	IIntentProps, InputGroup, Intent, ITooltipProps, Tag, Tooltip } from '@blueprintjs/core'
import { FieldProps } from 'formik'
import * as React from 'react'

export const makeFormikInput = (formGroupProps: IFormGroupProps = {}) =>
		(inputProps?: IInputGroupProps & HTMLInputProps) =>
		(props: FieldProps) => {
	const { form, field, ...restProps } = props
	const { touched, errors, isSubmitting, submitCount } = form
	const helperText = submitCount > 0 && errors[field.name]
	const renderIcon = (btnProps?: IIconProps) =>
		<div className={'u-flex--center bp3-tag transparent'} style={{ width: '40px' }}>
			<Icon
				icon={undefined}
				// minimal={true}
				{...btnProps}
			/>
		</div>
	const renderRightElement =
		(touched[field.name]
			&& (
				(errors[field.name] && renderIcon({ icon: 'error', intent: 'danger' }))
				|| renderIcon({ icon: 'tick-circle', intent: 'success' })
			))
		|| renderIcon()

	return (
	<FormGroup
		helperText={helperText}
		labelFor="text-input"
		{...formGroupProps}
		// intent={intent}
	>
		<InputGroup
			large
			rightElement={renderRightElement}
			{...field}
			{...inputProps}
			// intent={intent}
		/>
	</FormGroup>
	)
}
