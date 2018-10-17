import { routeCollection } from 'app/helper'
import { DashBoardBluePrint } from 'layout/default/layoutDefault'
import { compose, values } from 'ramda'
import * as React from 'react'
import { RouteComponentProps, Switch } from 'react-router'
import { concatPath } from '../util/route'
import { convertRouteComponent } from './router'

export const DashboardRoute = (props: RouteComponentProps<any>) => {
	const dashboardPath = concatPath(props.match.url)
	const routesRender = compose(values, convertRouteComponent(dashboardPath))(routeCollection)
	return (
		<DashBoardBluePrint url={props.match.url}>
			<Switch>
				{routesRender}
			</Switch>
		</DashBoardBluePrint>
	)
}
