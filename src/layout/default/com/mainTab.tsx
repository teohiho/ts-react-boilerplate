import {
	Breadcrumb,
	Card,
	Classes,
	IMenuItemProps,
	OverflowList,
	Tab,
	Tabs,
} from '@blueprintjs/core'
import * as classnames from 'classnames'
import * as React from 'react'
import { compose, pure, withStateHandlers } from 'recompose'
const styles = require('./mainTab.scss')

const renderEnhanceBreadcrumb = (props: IMenuItemProps , index: number) => {
	if (!props.href) {
		return (
			<li className={classnames(Classes.BREADCRUMB, Classes.BREADCRUMB_CURRENT)} key={index}>
				{props.text}
			</li>
		)
	}
	return (
		<li key={index}>
			<Breadcrumb {...props} />
		</li>
	)
}


interface IMainTabPropsOut {

}

interface IMainTabState {
	selectedTabId: string
}

interface IMainTabHandler {
	changeTab: (tabIndex: string) => void
}

interface IMainTabPropsIn extends IMainTabPropsOut, IMainTabState, IMainTabHandler {
	children: any
}

const MainTabView = ({ changeTab, selectedTabId, children }: IMainTabPropsIn) => (
	<Card className={styles.card}>
		<Tabs id="TabsExample" selectedTabId={selectedTabId}  onChange={changeTab}>
			<OverflowList
				className={Classes.BREADCRUMBS}
				items={[
					{ href: '#',  text: 'Grandparent' },
					{ href: '#',  text: 'Parent' },
					{ text: 'Child' },
				]}
				overflowRenderer={item => <>{item}</>}
				visibleItemRenderer={renderEnhanceBreadcrumb}
			/>
			<Tabs.Expander />
			<Tab id="ng" title="Angular" panel={<h1>Angular</h1>} />
			<Tab id="mb" title="Ember" panel={<h1>Ember</h1>} />
			<Tab id="rx" title="React" panel={<h1>React</h1>} />
			<Tab id="vue" title="Vue" panel={<h1>Vue</h1>} />
		</Tabs>
		{children}
	</Card>
)

const addStateAndHandlers = withStateHandlers(
	{
		selectedTabId: 'rx',

	},
	{
		changeTab: () => (tabIndex: string) => ({ selectedTabId: tabIndex }),
	},
)

export const MainTab = compose<IMainTabPropsIn, IMainTabPropsOut>(pure, addStateAndHandlers)(MainTabView)
