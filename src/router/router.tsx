import { compose, identity, join, mapObjIndexed, omit, path, values } from 'ramda'
import * as React from 'react'
import { match, RouteComponentProps, RouterProps, Switch } from 'react-router'

import { getNavList, getRouteList } from 'app/helper'
// import { AppRoute as Route } from  'com/route/AppRoute'
import { createBrowserHistory } from 'history'
import { Login } from 'layout/auth/com/login'
import { RegistrationLayout } from 'layout/auth/com/registration'
import { DashBoardBluePrint } from 'layout/default/layoutDefault'
import { TwoPanel } from 'layout/panel/createMultiPanel'
import {
	Link,
	Route,
	Router,
} from 'react-router-dom'
import { compose as recompose, pure } from 'recompose'
import { AuthenticationLayout } from '../layout/auth/page/authentication'
import { makeUpdatePath } from '../util/route'

const hist = createBrowserHistory()

const pages = getRouteList()
const navConfList = getNavList()
const convertRouteComponent = (updatePath: (path: string) => string) => mapObjIndexed((page: any, key: string) => {
	const AddBreadCrumb = recompose(
		// TODO: Error with connect will force re-rendering and cause error on tab
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
const joinPath = join('~')
const DashboardRoute = (props: RouteComponentProps<any>) => {
	const updatePath = makeUpdatePath(props.match.url)
	const routesRender = compose(values, convertRouteComponent(updatePath))(pages)
	return (
		<DashBoardBluePrint url={props.match.url}>
			<Switch>
				{routesRender}
			</Switch>
		</DashBoardBluePrint>
	)
}

const AuthenticationRoute = (props:any) => {
	const updatePath = makeUpdatePath(props.match.url)
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
const PanelRoute = (props: any) => {
	const updatePath = makeUpdatePath(props.match.url)
	const panel1Render = compose(values, convertRouteComponent(updatePath))(pages)
	// TODO: Make 2ndRender should flat route
	// Using chain ramda: https://ramdajs.com/docs/#chain
	// 2 panel like this: https://reacttraining.com/react-router/core/guides/philosophy/responsive-routes
	const routes2ndRender = compose(values, convertRouteComponent(path => updatePath(joinPath([path, path]))))(pages)



	return (
		<DashBoardBluePrint url={props.match.url}>
			<TwoPanel panel1={<Switch>
					{panel1Render}
			</Switch>}
				panel2={
					<Switch>
					{routes2ndRender}
				</Switch>
				}
			>
			</TwoPanel>
		</DashBoardBluePrint>
	)
}
const AppRouteView = () => (
	<Router history={hist}>
		<Switch>
			<Route path="/panel" component={PanelRoute} />
			<Route path="/auth" component={AuthenticationRoute} />
			<Route path="/" component={DashboardRoute}  />
		</Switch>
	</Router>
)

export const AppRoute = recompose()(AppRouteView)
