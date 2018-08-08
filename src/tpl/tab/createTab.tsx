import {
	Breadcrumb,
	Card,
	Classes,
	IMenuItemProps,
	ITabProps,
	OverflowList,
	Tab,
	Tabs,
} from '@blueprintjs/core'
import * as classnames from 'classnames'
import { addIndex, compose as ramdaCompose, map, mapObjIndexed } from 'ramda'
import * as React from 'react'
import { compose, pure, withStateHandlers } from 'recompose'
const styles = require('./AppTab.scss')


interface IAppTabPropsOut {
	tabs?: ITabProps[]
	breadcrumbItems: ({
		href: string;
		text: string;
	} | {
		text: string;
	})[]
}

interface IAppTabState {
	selectedTabId: string
}

interface IAppTabHandler {
	changeTab: (tabIndex: string) => void
}

interface IAppTabPropsIn extends IAppTabPropsOut, IAppTabState, IAppTabHandler {
	children: any
}

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

const renderChildTabs = (tabs: ITabProps[] = []) => {
	return tabs.map(tab => (
		<Tab {...tab} />
		),
	)
}

const AppTabView = ({ changeTab, selectedTabId, breadcrumbItems, tabs, children }: IAppTabPropsIn) => {
	return (
		<>
			<Tabs id="TabsExample" selectedTabId={selectedTabId}  onChange={changeTab}>
				<OverflowList
					className={Classes.BREADCRUMBS}
					items={breadcrumbItems}
					overflowRenderer={item => <>{item}</>}
					visibleItemRenderer={renderEnhanceBreadcrumb}
				/>
				<Tabs.Expander />
				{renderChildTabs(tabs)}
				{/* <Tab id="bb" disabled title="Backbone" panel={<h1>Backbone</h1>} /> */}
			</Tabs>
			{children}
		</>
	)
}
const addStateAndHandlers = withStateHandlers(
	({ tabs }: IAppTabPropsOut) => ({
			selectedTabId: tabs && tabs[0].id,
	})
	,
	{
		changeTab: () => (tabIndex: string) => ({ selectedTabId: tabIndex }),
	},
)
export const AppTab = compose<IAppTabPropsIn, IAppTabPropsOut>(pure, addStateAndHandlers)(AppTabView)


export const createTab = ({ breadcrumbItems, tabs }: IAppTabPropsOut) => {
		if (!tabs) {
			return () => null
			// const TargetComponent = ComponentTabs[0]
			// // return null
			// // return (props: any) => <div/>
			// return (props: any) => (
			// 	<AppTab breadcrumbItems={breadcrumbItems} tabs={tabs}>
			// 		<TargetComponent {...props} />
			// 	</AppTab>
			// )
		}

		// const addPanel = (props: ITabProps, index: number) => {
		// 	const ComponentSelected = ComponentTabs[index]
		// 	return {
		// 		...props,
		// 		panel: props.panel ? props.panel : <ComponentSelected />,
		// 	}
		// }
		// // const mapIndexed = addIndex(map)
		// const tabEnhance = addIndex<ITabProps>(map)(addPanel)(tabs)
		// console.log('tabEnhance', tabEnhance)
		return () => (
			// <AppTab breadcrumbItems={breadcrumbItems} tabs={tabEnhance}/>
			<AppTab breadcrumbItems={breadcrumbItems} tabs={tabs}/>
		)
}

