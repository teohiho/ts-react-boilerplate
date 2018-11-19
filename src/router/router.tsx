import React from 'react'
import { AuthenticationRoute } from './auth'
import { compose } from 'recompose'
import { ConnectedRouter } from 'connected-react-router'
import { DashboardRoute } from './dashboard'
import { history } from 'conf/redux/redux'
import { mapObjIndexed } from 'ramda'
import { PanelRoute } from './panel'
import { Switch } from 'react-router'
import {
	Route,
	Router,
} from 'react-router-dom'


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
	<ConnectedRouter history={history}>
		<div> 
			<Switch>
				<Route path="/panel" component={PanelRoute} />
				<Route path="/auth" component={AuthenticationRoute} />
				<Route path="/" component={DashboardRoute}  />
			</Switch>
		</div>
	</ConnectedRouter>
)

export const AppRoute = compose()(AppRouteView)
