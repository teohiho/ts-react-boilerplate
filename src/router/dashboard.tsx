import { RouteComponentProps, Switch } from 'react-router'
import { compose, values } from 'ramda'

import { DashBoardBluePrint } from 'layout/default/layoutDefault'
import React from 'react'
import { concatPath } from '../util/route'
import { convertRouteComponent } from './router'
import { routeCollection } from 'app/helper'

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
