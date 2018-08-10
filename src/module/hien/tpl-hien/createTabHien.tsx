import {
	Breadcrumb,
	Classes,
	IMenuItemProps,
	OverflowList,
	Tabs,
} from '@blueprintjs/core'
import * as classnames from 'classnames'
import * as React from 'react'
import { compose, pure, withStateHandlers } from 'recompose'
import { v4 } from 'uuid'
type TbreadCrumbItem = {
	text: string;
	href: string;
}| {
	text: string;
}

interface IAppTabPropsOut {
	RenderComponent?: () => JSX.Element,
	breadcrumbItems: TbreadCrumbItem[]
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

				{renderOverFlowList(breadcrumbItems)}
				<Tabs.Expander />

		</>
	)
}


export const AppTab = compose<IAppTabPropsIn, IAppTabPropsOut>(pure)(AppTabView)

export const createTabHien = ({ breadcrumbItems, RenderComponent }: IAppTabPropsOut) => {
	if (RenderComponent) {
		return (props: any) => (
			<>
				{renderOverFlowList(breadcrumbItems)}
				<RenderComponent {...props} />
			</>
		)
	}
	return () => null
}


