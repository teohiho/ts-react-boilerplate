import { createTabContainer } from 'layout/default/createTabContainer'
import * as React from 'react'
import { compose, pure, withStateHandlers } from 'recompose'
import { BlueprintView } from '../com/Blueprinttab/BlueprintDemo'
import { TabsDemo } from '../com/tab/Tab'
import { Test } from '../com/Test/Test'
import { Todo } from '../com/Todo/Todo'
const style = require('../scss/man.scss')

// <=====================================================================================>
const addTabView = createTabContainer({
	tabs: [
		{
			path: '',
			component: TabsDemo,
			title: 'TabsDemo',
			exact: true,
		},
		{
			path: '/abc',
			component: Test,
			title: 'TabsDemoTest',
		},
		{
			path: '/blueprint',
			component: BlueprintView,
			title: 'Blueprint css',
		},
		{
			path: '/todo',
			component: Todo,
			title: 'Todo App',
		},
	],
	classes: {
		tab: 'transparent',
		tabs: 'transparent',
		body: 'transparent',
	},
})
export const AddTab = compose()(addTabView)
const Body = () => (
	<div className={style.body} >
		<AddTab />
	</div>
)

export const ManPage = compose()(Body)
