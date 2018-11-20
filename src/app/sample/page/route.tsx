import React from 'react'
import { addContainer } from '../../../layout/default/createContainer'
import { compose } from 'recompose'
import { Link } from 'react-router-dom'
import { Route, Switch } from 'react-router'


const Route1 = () => (<h1> Route 1 </h1>)
const Route2 = () => (<h1> Route 2 </h1>)

const RouteSampleView = () => (
	<div>
		<h1>Sample Route</h1>
		<Link to="/s-r/1">Sample 1</Link>
		<Link to="/s-r/2">Sample 2</Link>
		<Switch>
			<Route path="/s-r/1" component={Route1}/>
			<Route path="/s-r/2" component={Route2}/>
		</Switch>
	</div>
)

export default compose(addContainer(
	{
		breadcrumbItems: ['Sample', 'Route'],
	},
), )(RouteSampleView)
