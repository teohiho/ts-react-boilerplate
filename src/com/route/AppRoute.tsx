import * as React from 'react'
import { match, Route, RouteProps } from 'react-router'
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
