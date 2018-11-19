import React from 'react'
import { addBreadcrumb, addContainer } from 'layout/default/createContainer'
import { compose, pure } from 'recompose'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { push } from 'connected-react-router'

type Props = {
	push: typeof push
}
const DashboardView = ({ push }: Props) => (
	<>
		<h1>Dashboard</h1>
		<h1 onClick={() => push('/setting')}>Move to setting by redux</h1>
		<Link to="/setting" replace>
			MOVE TO SETTING
		</Link>
	</>
)

const addRedux = connect(null, { push })

export const DashboardPage = compose<Props, {}>(
	addContainer(
		{
			breadcrumbItems: ['Setting'],
		},
	),
	addRedux,
	pure,
)(DashboardView)
