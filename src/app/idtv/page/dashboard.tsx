import React from 'react'
import { addContainer } from 'layout/default/createContainer'
import { Chart, Drilldown, Filter } from '../organism/'
import { compose } from 'redux'

const Dashboard = () => (
	<div>
		<Filter />
		<Chart />
		<Drilldown />
	</div>
)

export default compose(addContainer(
	{
		breadcrumbItems: ['IDTV'],
	},
))(Dashboard)
