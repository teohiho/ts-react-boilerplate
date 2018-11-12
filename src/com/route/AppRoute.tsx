import { Route, RouteProps, match } from 'react-router'

import React from 'react'
import { compose } from 'recompose'

interface IAppRoutePropsOut extends RouteProps {
	match?: match<any>
}
interface IAppRoutePropsIn extends IAppRoutePropsOut {}
const getPath = (path?: string, match?: match<any>) => {
	if (match) {
		return `${match.path}${path}`
	}
	return path
}
const AppRouteView = (props: IAppRoutePropsIn) => {
	return (
		<Route {...props} path={getPath(props.path, props.match)} />
	)
}
export const AppRoute = compose<IAppRoutePropsIn, IAppRoutePropsOut>()(AppRouteView)
