import { addBreadcrumb, addContainer } from 'layout/default/createContainer'
import { compose, pure } from 'recompose'

import { Link } from 'react-router-dom'
import React from 'react'
import { createTab } from 'com/index'
const DashboardView = () => (
	<>
		<h1>Dashboard</h1>
		<Link to="/setting" replace>
			MOVE TO SETTING
		</Link>
	</>
)

export const DashboardPage = compose(
	pure,
	addContainer(
		{
			breadcrumbItems: ['Setting'],
		},
	),
)(DashboardView)
