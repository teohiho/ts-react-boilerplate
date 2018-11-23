import React from 'react'
import { addContainer } from 'layout/default/createContainer'
import { compose } from 'redux'
import {
	Chart,
	Drilldown,
	Filter,
	Header,
} from '../../com/organism/'


const Dashboard = () => (
	<div>
		<Header />
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
