import * as R from 'ramda'
import app from 'app/'
import DashboardLayout from 'layout/default/'
import React from 'react'
import { concatPath } from '../util/route'
import { convertRouteComponent } from './router'
import { RouteComponentProps, Switch } from 'react-router'



export const DashboardRoute = (props: RouteComponentProps<any>) => {
	const dashboardPath = concatPath(props.match.url)
	const routesRender = R.compose(R.values, convertRouteComponent(dashboardPath), R.omit(['login']))(app.route)
	return (
		<DashboardLayout url={props.match.url}>
			<Switch>
				{routesRender}
			</Switch>
		</DashboardLayout>
	)
}
