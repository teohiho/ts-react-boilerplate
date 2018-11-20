import classnames from 'classnames'
import React from 'react'
import { compose, withProps } from 'recompose'
import { concatPath } from 'util/route'
import { connect } from 'react-redux'
import { ITabsProps, Tab, Tabs } from '@blueprintjs/core'
import { Link } from 'react-router-dom'
import { push } from 'connected-react-router'
import { RouteComponentProps, withRouter } from 'react-router'
import { TabPropsCollection } from '../createTabContainer'


type OwnProps = {
	tabs: TabPropsCollection,
	className?: string,
}
type StoreProps = { }
type InjectedProps = RouteComponentProps<null>
type ActionProps = {
	push: typeof push,
}
type Props =  OwnProps & StoreProps & ActionProps & InjectedProps & ITabsProps


const MenuTab = ({ push, tabs, match, selectedTabId, className, history, location }: Props) => {
	console.log('MenuTab', selectedTabId, match)
	return (
		<>
			{Object.keys(tabs).map((path: string) => (
				<Link to={concatPath(match.url)(path)} key={path}>
					<div
						key={path}
						// onClick={() => changeId(tab.path)}
						className={classnames(
							'tab',
							't-color',
							{ 'tab--selected': '/' === path },
							className,
						)}
					>
						{tabs[path].title}
					</div>
				</Link>
			))}
		</>
	)
}
const MenuTab1 = ({ push, tabs, match, selectedTabId }: Props) => {
	console.log(selectedTabId, tabs)
	return (
		<Tabs onChange={(path: string) => push(concatPath(match.url)(path))} selectedTabId={selectedTabId}>
			{Object.keys(tabs).map((key: string) => (
				<Tab id={key} title={tabs[key].title} />
			))}
		</Tabs>
	)
}
const addSelectedTabId = withProps(({ location, tabs }: InjectedProps & OwnProps) => ({
	selectedTabId: location.pathname,
}))

export default compose<Props, OwnProps>(withRouter, addSelectedTabId, connect(undefined, { push }))(MenuTab)
