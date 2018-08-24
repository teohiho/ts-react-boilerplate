import { createContainer } from 'layout/default/createContainer'
import { createTabContainer } from 'layout/default/createTabContainer'
import * as React from 'react'
import { compose, pure } from 'recompose'

const Tab1 = () => (
	<>
		<h1>Hello I'm Cv</h1>
	</>
)
const Tab2 = () => (
	<>
		<h1>Hello I'm Cv 2</h1>
	</>
)
const TabContainer = createTabContainer({
	tabs: [
		{
			path: '/',
			component: Tab1,
			title: 'Tab 1',
			exact: true,
		},
		{
			path: '/tab2',
			component: Tab2,
			title: 'Tab 2',
		},
	],
})
export const CvPage = compose(
	pure,
	// createContainer({ breadcrumbItems: ['Test', 'Container', 'Tabasdasd'] }),
)(TabContainer)
