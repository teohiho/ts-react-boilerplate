import { createTabContainer } from 'layout/default/createTabContainer'
import * as React from 'react'
import { compose, pure } from 'recompose'
import { addBreadcrumb } from '../../../layout/default/createContainer'

const TestContainerView1 = () => {
	console.log('I am createContainer View 1')
	return (
		<>
			<h1>Hello I'm TestContainer 1</h1>
		</>
	)
}
const TestContainerView2 = () => (
	<>
		<h1>Hello I'm TestContainer 2</h1>
	</>
)
const TestContainer1 = compose(
	addBreadcrumb(['Test', 'Container', 'Tab1']),
)(TestContainerView1)
const TestContainer2 = compose(
	addBreadcrumb(['Test', 'Container', 'Tab2']),
)(TestContainerView2)
const TabContainer = createTabContainer({
	tabs: [
		{
			path: '',
			component: TestContainer1,
			title: 'Tab 1',
			exact: true,
		},
		{
			path: '/abc',
			component: TestContainer2,
			title: 'Tab 2',
		},
	],
})

export const TestContainerTabPage = compose(
)(TabContainer)
