import React from 'react'
import { addContainer } from 'layout/default/createContainer'
import { compose } from 'recompose'
import { FormGroup, InputGroup } from '@blueprintjs/core'


const Auth = () => (
	<FormGroup
		helperText="Helper text with details..."
		label="Label A"
		labelFor="text-input"
		labelInfo="(required)"
	>
		<InputGroup id="text-input" placeholder="Placeholder text" />
		<InputGroup id="text-input" placeholder="Placeholder text" />
	</FormGroup>
)

export default compose(addContainer(
	{
		breadcrumbItems: ['IDTV'],
	},
))(Auth)
