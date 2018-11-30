import * as R from 'ramda'
import app from 'app/'
import DashboardBluePrint from 'layout/default/'
import React from 'react'
import { concatPath } from '../util/route'
import { convertRouteComponent } from './router'
import { RouteComponentProps, Switch } from 'react-router'



export const DashboardRoute = (props: RouteComponentProps<any>) => {
	const dashboardPath = concatPath(props.match.url)
	const routesRender = R.compose(R.values, convertRouteComponent(dashboardPath), R.omit(['login']))(app.route)
	return (
		<DashboardBluePrint url={props.match.url}>
			<Switch>
				{routesRender}
			</Switch>
		</DashboardBluePrint>
	)
}
