import { createTabContainer } from 'layout/default/createTabContainer'
import * as React from 'react'
import { compose, pure } from 'recompose'

const Tab1 = () => (
	<>
		<h1>Hello I'm Test</h1>
	</>
)
const TestTwoPanel1 = () => (
	<>
		<h1>Panel 1</h1>
	</>
)
const TestTwoPanel2 = () => (
	<>
		<h1>Panel2</h1>
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
			component: TestTwoPanel2,
			title: 'Tab 2',
		},
	],
})
export const TestPage = compose(pure)(TabContainer)
