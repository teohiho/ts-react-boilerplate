import {
	Boundary,
	Breadcrumb,
	Card,
	Classes,
	IMenuItemProps,
	ITabProps,
	Menu,
	MenuItem,
	OverflowList,
	Popover,
	Position,
	Tab,
	Tabs,
} from '@blueprintjs/core'
import * as classnames from 'classnames'
import * as React from 'react'
import { compose, pure, withStateHandlers } from 'recompose'
const styles = require('./appTab.scss')
import { v4 } from 'uuid'
type TbreadcrumbItem = {
	href: string;
	text: string;
} | {
	text: string;
}
interface IAppTabPropsOut {
	tabs ? : ITabProps[],
	RenderComponent ? : () => JSX.Element,
	breadcrumbItems: TbreadcrumbItem[]
}
interface IAppTabState {
	selectedTabId: string
}
interface IAppTabHandler {
	changeTab: (tabIndex: string) => void
}
interface IWindowSizeState {
	width: number,
	height: number,
}
interface IWindowsSizeHandler {
	updateWindowDimensions: () => void
}
interface IAppTabPropsIn extends IAppTabPropsOut, IAppTabState, IAppTabHandler {
	children: any
}
const renderEnhanceBreadcrumb = (props: IMenuItemProps, index: number) => {
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
			<Tab {...tab} key={tab.id} />
	),
	)
}
const renderBreadcrumb = (items: TbreadcrumbItem[]) => {
	return (
			<div style={{ width: '50%' }}>
				<div style={{ width: `${100}%` }}>
						<OverflowList
							className={Classes.BREADCRUMBS}
							items={items}
							overflowRenderer={renderOverflow}
							visibleItemRenderer={renderEnhanceBreadcrumb}
						/>
				</div>
			</div>
	)
}
const renderOverflow = (items: TbreadcrumbItem[]) => {
	const orderedItems = items
	const menuItems = orderedItems.map((item, index) => <MenuItem {...item} key={index} />)
	return (
			<li>
					<Popover position={Position.BOTTOM}>
							<span className={Classes.BREADCRUMBS_COLLAPSED} />
							<Menu>
									{menuItems}
							</Menu>
					</Popover>
			</li>
	)
}
const AppTabView = ({ changeTab, selectedTabId, breadcrumbItems, tabs, children }: IAppTabPropsIn) => {
	return (
			<>
					<div>
					<Tabs id={v4()} selectedTabId={selectedTabId} onChange={changeTab} >
						{renderBreadcrumb(breadcrumbItems)}
						<Tabs.Expander />
						{renderChildTabs(tabs)}
					</Tabs>
					{children}
					</div>
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
const addSizeWindowsHandler = withStateHandlers(
	{
			width: 0,
			height: 0,
	},
	{
			updateWindowDimensions: () => () => ({  width: window.innerWidth, height: window.innerHeight  }),
	},
)

export const AppTab = compose<IAppTabPropsIn, IAppTabPropsOut>(
	pure,
	addStateAndHandlers,
)(AppTabView)
export const createTab = ({ breadcrumbItems,  tabs, RenderComponent }: IAppTabPropsOut) => {
	if  (RenderComponent) {
		return (props: any) => (
			<>
				{renderBreadcrumb(breadcrumbItems)}
				<RenderComponent {...props} />
			</>
		)
	}
	if (tabs) {
		return (props: any) => (
			<AppTab {...props} breadcrumbItems={breadcrumbItems} tabs={tabs} />
		)
	}
	console.warn('createTab params have to contains one each tabs or RenderComponent')
	return () => null
}
