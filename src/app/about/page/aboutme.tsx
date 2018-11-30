import React from 'react'
import { addContainer } from 'layout/default/'
import { compose } from 'recompose'

const AboutMe = () => (
	<div>
		<h1>About Me</h1>
	</div>
)

export default compose<{}, {}>(
	addContainer(
		{
			breadcrumbItems: ['About'],
		},
	),
)(AboutMe)
