import { Button, Tab, Tabs } from '@blueprintjs/core'
import * as classnames from 'classnames'
import * as React from 'react'
import { RouteComponentProps, RouteProps, withRouter } from 'react-router'
import { Link,  Route, Switch } from 'react-router-dom'
import { compose, withStateHandlers } from 'recompose'
import { v4 } from 'uuid'
import { addContainer } from './createContainer'
const styles = require('./creatTabContainer.scss')
interface ITabProps extends RouteProps {
	path: string,
	title: React.ReactNode,
}
interface ICreateTabContainerPropsOut {
	tabs: ITabProps[],
	selectedPath?: string
}
interface IListTabPropsOut {
	tabs: ITabProps[]
}
interface IListTabPropsIn extends IListTabPropsOut, RouteComponentProps<any>,  ITabState, ITabStateHandler {

}

interface ITabState {
	selectedId: string
}
interface ITabStateHandler {
	changeId: (id: string) => void
}

const addLeftHandler = withStateHandlers<ITabState, {}, ICreateTabContainerPropsOut>(
	({ selectedPath, tabs }) => ({
		selectedId: selectedPath ? selectedPath : tabs[0].path,
	}),
	{
		changeId: () => (id: string) => ({ selectedId: id }),
	},
)



const ListTabView = ({ tabs, match, changeId, selectedId }: IListTabPropsIn) => {
	const ListTab = tabs.map((tab, key) => (
		<Link to={`${match.url}${tab.path}`} key={key}>
			<div
				key={tab.path}
				onClick={() => changeId(tab.path)}
				className={classnames('tab', 't-color', 'p-h-sm', { 'tab--selected': selectedId === tab.path })}
			>
				{tab.title}
			</div>
		</Link>
	))
	return (
		<>
			{ListTab}
		</>
	)
}

const ListTab = compose<IListTabPropsIn, IListTabPropsOut>(withRouter, addLeftHandler)(ListTabView)

const renderBodyContent = (tabs: ITabProps[] = []) => {
	return tabs.map((tab, key) => (
		<Route {...tab} key={key} />
	))
}

const BodyView = ({ tabs, match }: IListTabPropsIn) => {
	const ListTab = tabs.map((tab, key) => {
		const AddMargin = tab.component && addContainer(tab.component)
		return (
			<Route {...tab} path={`${match.path}${tab.path}`} component={AddMargin} key={key} />
		)
	})
	return (
		<Switch>
			{ListTab}
		</Switch>
	)
}


const Body = compose<IListTabPropsIn, IListTabPropsOut>(withRouter)(BodyView)

const AppTabView = ({ tabs }: ICreateTabContainerPropsOut) => {
	return (
		<>
			<div className={classnames('tabs',  'p-l-sm', 'p-t-sm', 'p-b-md', 't-background')}>
				<ListTab tabs={tabs} />
			</div>
			<Body tabs={tabs} />
		</>
	)
}

export const createTabContainer = (options: ICreateTabContainerPropsOut) => {
	return () => (
		<AppTabView {...options} />
	)
}
