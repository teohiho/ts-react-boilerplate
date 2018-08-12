import * as React from 'react'
import { Link } from 'react-router-dom'
import { compose, pure } from 'recompose'
import { createTab } from 'tpl/tab'
const DashboardView = () => (
	<>
		<h1>Dashboard</h1>
		<Link to="/setting" replace>
			MOVE TO SETTING
		</Link>
	</>
)

const withTab = createTab({
	breadcrumbItems: [
		{
			href: '#',
			text: 'Grand',
		},
		{
			href: '#',
			text: 'Parent',
		},
	],
	RenderComponent: DashboardView,
})

export const DashboardPage = compose(pure)(withTab)
