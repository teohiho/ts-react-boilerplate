import { compose, mapObjIndexed, omit, values } from 'ramda'
import * as React from 'react'
import { Switch } from 'react-router'

import { getRouteList } from 'app/helper'
import { createBrowserHistory } from 'history'
import {
  Link,
  Route,
  Router,
} from 'react-router-dom'
import { compose as recompose, pure } from 'recompose'
import { DashBoardBluePrint } from '../layout/dashboard/DashboardBluePrint'
const hist = createBrowserHistory()

const pages = getRouteList()
console.log('Get Pages, getRouteList', pages)
const convertRouteComponent = mapObjIndexed((page: any, key: string) => (
	<Route
		{...page}
		key={key}
	/>
))
const routesRender = compose(values, convertRouteComponent)(pages)
const AppRouteView = () => (
	<Router history={hist}>
		<DashBoardBluePrint>
			<Switch>
				{routesRender}
			</Switch>
		</DashBoardBluePrint>
	</Router>
)
export const AppRoute = recompose()(AppRouteView)
