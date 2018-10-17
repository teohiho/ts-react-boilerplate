import { routeCollection } from 'app/helper'
import { DashBoardBluePrint } from 'layout/default/layoutDefault'
import { TwoPanel } from 'layout/panel/createMultiPanel'
import { compose, join, values } from 'ramda'
import * as React from 'react'
import { Switch } from 'react-router-dom'
import { concatPath } from 'util/route'
import { convertRouteComponent } from './router'

export const PanelRoute = (props: any) => {
	const panelPath = concatPath(props.match.url)
	const panel1Render = compose(values, convertRouteComponent(panelPath))(routeCollection)
	const joinPath = join('~')

	// TODO: Make 2ndRender should flat route
	// Using chain ramda: https://ramdajs.com/docs/#chain
	// 2 panel like this: https://reacttraining.com/react-router/core/guides/philosophy/responsive-routes
	const routes2ndRender = compose(values, convertRouteComponent(path => panelPath(joinPath([path, path]))))(routeCollection)
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
