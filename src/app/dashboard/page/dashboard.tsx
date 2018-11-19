import React from 'react'
import { addBreadcrumb, addContainer } from 'layout/default/createContainer'
import { compose, pure } from 'recompose'
import { Link } from 'react-router-dom'


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
