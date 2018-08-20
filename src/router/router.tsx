import { compose, identity, mapObjIndexed, omit, path, values } from 'ramda'
import * as React from 'react'
import { Switch } from 'react-router'

import { getNavList, getRouteList } from 'app/helper'
import { createBrowserHistory } from 'history'
import { createContainer } from 'layout/default/createContainer'
import { DashBoardBluePrint } from 'layout/default/layoutDefault'
import {
  Link,
  Route,
  Router,
} from 'react-router-dom'
import { compose as recompose, pure } from 'recompose'
import { AuthenticationLayout } from '../layout/auth/page/authentication'
const hist = createBrowserHistory()

const pages = getRouteList()
const navConfList = getNavList()
const convertRouteComponent = mapObjIndexed((page: any, key: string) => {
	const AddBreadCrumb = recompose(
		path([key, 'breadcrumb'])(navConfList) ? createContainer({ breadcrumbItems: navConfList[key].breadcrumb }) : identity,
	)(page.component)
	return (
		<Route
			{...page}
			key={key}
			component={AddBreadCrumb}
		/>
	)
	},
)
const routesRender = compose(values, convertRouteComponent)(pages)
const DashboardRoute = () => (
	<DashBoardBluePrint>
		<Switch>
			{routesRender}
		</Switch>
	</DashBoardBluePrint>
)
const AuthenticationRoute = () => (
	<AuthenticationLayout>

	</AuthenticationLayout>
)
const AppRouteView = () => (
	<Router history={hist}>
		<Switch>
			<Route path="/auth" component={AuthenticationRoute} />
			<Route path="/" component={DashboardRoute} />
		</Switch>
	</Router>
)
export const AppRoute = recompose()(AppRouteView)
