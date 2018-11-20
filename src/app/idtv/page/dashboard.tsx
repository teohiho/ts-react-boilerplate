import React from 'react'
import { addContainer } from 'layout/default/createContainer'
import { compose } from 'redux'

const Dashboard = () => (
	<div>
		<h1>IDTV</h1>
	</div>
)

export default compose(addContainer(
	{
		breadcrumbItems: ['IDTV'],
	},
))(Dashboard)
