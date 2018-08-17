import { Button, Tab, Tabs } from '@blueprintjs/core'
import * as classnames from 'classnames'
import * as React from 'react'
import { RouteComponentProps, RouteProps, withRouter } from 'react-router'
import { Link,  Route, Switch } from 'react-router-dom'
import { compose, withStateHandlers } from 'recompose'
import { v4 } from 'uuid'
const styles = require('./creatTabContainer.scss')
interface ITabProps extends RouteProps {
	path: string,
	title: string
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
// const renderChildTabs = (tabs: ITabProps[] = []) => {
// 	return tabs.map((tab, key) => (
// 		<Link to={tab.path} key={key}>
// 			{/* <Tab id={tab.path} title={tab.title} /> */}
// 			<Button>
// 				{tab.title}
// 			</Button>
// 		</Link>
// 	))
// }

// interface ITab {
// 	id: string
// 	title: string
// }
// interface ITabPropsOut {
// 	tabs: ITab[]
// }
interface ITabState {
	selectedId: string
}
interface ITabStateHandler {
	changeId: (id: string) => void
}
// interface ITabPropsIn extends ITabPropsOut, ITabState, ITabStateHandler {}
// const TabView = ({ selectedId, changeId, tabs }: ITabPropsIn) => (
// 	<>
// 		{tabs.map(({ title, id }) => (
// 			<Button key={id} onClick={() => changeId(id)} className={classnames('tab', { 'tab--selected': selectedId === id })} >{title}</Button>
// 		))}
// 	</>
// )

const addLeftHandler = withStateHandlers<ITabState, {}, ICreateTabContainerPropsOut>(
	({ selectedPath, tabs }) => ({
		selectedId: selectedPath ? selectedPath : tabs[0].path,
	}),
	{
		changeId: () => (id: string) => ({ selectedId: id }),
	},
)
// const Tab = compose<ITabPropsIn, ITabPropsOut>(addLeftHandler)(TabView)




const ListTabView = ({ tabs, match, changeId, selectedId }: IListTabPropsIn) => {
	const ListTab = tabs.map((tab, key) => (
		<Link to={`${match.url}${tab.path}`} key={key}>
			{/* <Button>
				{tab.title}
			</Button> */}
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
	const ListTab = tabs.map((tab, key) => (
		<Route {...tab} path={`${match.path}${tab.path}`} key={key} />
	))
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
			<div className={'tab'}>
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
