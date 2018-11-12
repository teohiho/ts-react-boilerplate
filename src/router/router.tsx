import {
	Route,
	Router,
} from 'react-router-dom'

import { AuthenticationRoute } from './auth'
import { DashboardRoute } from './dashboard'
import { PanelRoute } from './panel'
import React from 'react'
import { Switch } from 'react-router'
import { compose } from 'recompose'
// import { getRouteList } from 'app/helper'
// import { AppRoute as Route } from  'com/route/AppRoute'
import { createBrowserHistory } from 'history'
import { mapObjIndexed } from 'ramda'

const hist = createBrowserHistory()

export const convertRouteComponent = (_concatPath: (path: string) => string) => mapObjIndexed((page: any, key: string) => {
	const AddBreadCrumb = compose(
		// TODO: Error with connect will force re-rendering and cause error on tab
	)(page.component)
	return (
		<Route
			{...page}
			path={_concatPath(page.path)}
			key={key}
			component={AddBreadCrumb}
		/>
	)
	},
)

const AppRouteView = () => (
	<Router history={hist}>
		<Switch>
			<Route path="/panel" component={PanelRoute} />
			<Route path="/auth" component={AuthenticationRoute} />
			<Route path="/" component={DashboardRoute}  />
		</Switch>
	</Router>
)

export const AppRoute = compose()(AppRouteView)
