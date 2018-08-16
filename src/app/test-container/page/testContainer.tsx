import { createContainer } from 'layout/default/createContainer'
import * as React from 'react'
import { Route, Switch } from 'react-router-dom'
import { compose, pure } from 'recompose'

const NameView = () => (
	<h1>My name is Trii</h1>
)
const AgeView = () => (
	<h1>I'm 24 years ole</h1>
)

const TestContainerView = () => (
	<>
		<h1>Hello I'm TestContainer</h1>
		<Switch>
			<Route path={'/name'} component={NameView}/>
			<Route path={'/age'} component={AgeView}/>
		</Switch>
	</>
)
export const TestContainerPage = compose(createContainer({ breadcrumbItems: ['Test', 'Container'] }))(TestContainerView)
