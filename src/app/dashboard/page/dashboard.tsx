import { createTab } from 'com/index'
import { addBreadcrumb, addContainer } from 'layout/default/createContainer'
import * as React from 'react'
import { Link } from 'react-router-dom'
import { compose, pure } from 'recompose'
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
	addContainer,
	addBreadcrumb(['Dashboard']),
)(DashboardView)
