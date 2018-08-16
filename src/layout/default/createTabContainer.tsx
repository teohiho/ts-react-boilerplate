import { Button, Tab, Tabs } from '@blueprintjs/core'
import * as React from 'react'
import { RouteComponentProps, RouteProps, withRouter } from 'react-router'
import { Link,  Route, Switch } from 'react-router-dom'
import { compose, withStateHandlers } from 'recompose'
import { v4 } from 'uuid'

interface ITabProps extends RouteProps {
	path: string,
	title: string
}
interface ICreateTabContainerPropsOut {
	tabs: ITabProps[],
}
interface IListTabPropsOut {
	tabs: ITabProps[]
}
interface IListTabPropsIn extends IListTabPropsOut, RouteComponentProps<any> {

}
const renderChildTabs = (tabs: ITabProps[] = []) => {
	return tabs.map((tab, key) => (
		<Link to={tab.path} key={key}>
			{/* <Tab id={tab.path} title={tab.title} /> */}
			<Button>
				{tab.title}
			</Button>
		</Link>
	))
}

const ListTabView = ({ tabs, match }: IListTabPropsIn) => {
	const ListTab = tabs.map((tab, key) => (
		<Link to={`${match.url}${tab.path}`} key={key}>
			<Button>
				{tab.title}
			</Button>
		</Link>
	))
	return (
		<>
			{ListTab}
		</>
	)
}

const ListTab = compose<IListTabPropsIn, IListTabPropsOut>(withRouter)(ListTabView)

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
			<div>
				<ListTab tabs={tabs} />
				<Body tabs={tabs} />
			</div>
		</>
	)
}

export const createTabContainer = (options: ICreateTabContainerPropsOut) => {
	return () => (
		<AppTabView {...options} />
	)
}
