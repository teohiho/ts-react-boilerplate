import * as R from 'ramda'
import app from 'app/'
import BlankLayout from 'layout/blank'
import React from 'react'
import { concatPath } from '../util/route'
import { convertRouteComponent } from './router'
import { RouteComponentProps, Switch } from 'react-router'



export default (props: RouteComponentProps<any>) => {
	const dashboardPath = concatPath(props.match.url)
	const routesRender = R.compose(R.values, convertRouteComponent(dashboardPath), R.pick(['login']))(app.route)
	return (
		<BlankLayout>
			<Switch>
				{routesRender}
			</Switch>
		</BlankLayout>
	)
}
