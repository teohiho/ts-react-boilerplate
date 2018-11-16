import app from 'app/'
import React from 'react'
import { compose, values } from 'ramda'
import { concatPath } from '../util/route'
import { convertRouteComponent } from './router'
import { DashBoardBluePrint } from 'layout/default/layoutDefault'
import { RouteComponentProps, Switch } from 'react-router'


export const DashboardRoute = (props: RouteComponentProps<any>) => {
	const dashboardPath = concatPath(props.match.url)
	const routesRender = compose(values, convertRouteComponent(dashboardPath))(app.route)
	return (
		<DashBoardBluePrint url={props.match.url}>
			<Switch>
				{routesRender}
			</Switch>
		</DashBoardBluePrint>
	)
}
