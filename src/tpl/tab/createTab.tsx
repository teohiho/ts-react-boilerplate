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

type TbreadCrumbItem = {
	href: string;
	text: string;
} | {
	text: string;
}
interface IAppTabPropsOut {
	tabs?: ITabProps[],
	RenderComponent?: () => JSX.Element,
	breadcrumbItems: TbreadCrumbItem[]
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
		<Tab {...tab} key={tab.id}/>
		),
	)
}
const renderOverFlowList = (items: TbreadCrumbItem[]) => (
	<OverflowList
		className={Classes.BREADCRUMBS}
		items={items}
		overflowRenderer={item => <>{item}</>}
		visibleItemRenderer={renderEnhanceBreadcrumb}
	/>
)
const AppTabView = ({ changeTab, selectedTabId, breadcrumbItems, tabs, children }: IAppTabPropsIn) => {
	return (
		<>
			<Tabs id="TabsExample" selectedTabId={selectedTabId}  onChange={changeTab}>
				{/* {renderOverFlowList(breadcrumbItems)} */}
				{/* <Tabs.Expander /> */}
				{/* <div className={styles.tab}> */}
					{renderChildTabs(tabs)}
				{/* </div> */}
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


export const createTab = ({ breadcrumbItems, tabs, RenderComponent }: IAppTabPropsOut) => {
	if (RenderComponent) {
		return (props:any) => (
		<>
			{renderOverFlowList(breadcrumbItems)}
			<RenderComponent {...props} />
		</>
		)
	}
	if (tabs) {
		return (props: any) => (
			<AppTab {...props} breadcrumbItems={breadcrumbItems} tabs={tabs}/>
		)
	}
	console.warn('createTab params have to contains one each tabs or RenderComponent')
	return () => null
}

