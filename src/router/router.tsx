import { compose, identity, mapObjIndexed, omit, path, values } from 'ramda'
import * as React from 'react'
import { match, RouteComponentProps, RouterProps, Switch } from 'react-router'

import { getNavList, getRouteList } from 'app/helper'
// import { AppRoute as Route } from  'com/route/AppRoute'
import { createBrowserHistory } from 'history'
import { createContainer } from 'layout/default/createContainer'
import { DashBoardBluePrint } from 'layout/default/layoutDefault'
import {
  Link,
  Route,
  Router,
} from 'react-router-dom'
import { compose as recompose, pure } from 'recompose'
import { AuthenticationLayout, Login } from '../layout/auth/page/authentication'
import { RegistrationLayout } from '../layout/auth/page/registration'
import { makeUpdatePath } from '../util/route'

const hist = createBrowserHistory()

const pages = getRouteList()
const navConfList = getNavList()
const convertRouteComponent = (updatePath: (path: string) => string) => mapObjIndexed((page: any, key: string) => {
	const AddBreadCrumb = recompose(
		path([key, 'breadcrumb'])(navConfList) ? createContainer({ breadcrumbItems: navConfList[key].breadcrumb }) : identity,
	)(page.component)
	return (
		<Route
			{...page}
			path={updatePath(page.path)}
			key={key}
			component={AddBreadCrumb}
		/>
	)
	},
)

const DashboardRoute = (props: RouteComponentProps<any>) => {
	const updatePath = makeUpdatePath(props.match)
	const routesRender = compose(values, convertRouteComponent(updatePath))(pages)
	return (
		<DashBoardBluePrint {...props}>
			<Switch>
				{routesRender}
			</Switch>
		</DashBoardBluePrint>
	)
}

const AuthenticationRoute = (props:any) => {
	const updatePath = makeUpdatePath(props.match)
	return (
		<AuthenticationLayout>
			<Switch>
				<Route path={updatePath('/login')} component={Login}/>
				<Route path={updatePath('/register')} component={RegistrationLayout}/>
				<Route path={updatePath('/')} component={Login}/>
			</Switch>
		</AuthenticationLayout>
	)
}

const AppRouteView = () => (
	<Router history={hist}>
		<Switch>
			<Route path="/auth" component={AuthenticationRoute} />
			<Route path="/" component={DashboardRoute}  />
		</Switch>
	</Router>
)

export const AppRoute = recompose()(AppRouteView)
