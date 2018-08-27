import { Button, Tab, Tabs } from '@blueprintjs/core'
import * as classnames from 'classnames'
import { path } from 'ramda'
import * as React from 'react'
import { RouteComponentProps, RouteProps, withRouter } from 'react-router'
import { Link,  Route, Switch } from 'react-router-dom'
import { compose, mapProps, pure, withStateHandlers } from 'recompose'
import { v4 } from 'uuid'
import { withPropsChecker } from '../../util/react'
import { makeUpdatePath } from '../../util/route'
import { addContainer } from './createContainer'
const styles = require('./scss/style.scss')
interface ITabProps extends RouteProps {
	path: string,
	title: React.ReactNode,
}
interface ICreateTabContainerPropsOut {
	tabs: ITabProps[],
	selectedPath?: string
	classes?: {
		tabs?: string,
		tab?: string,
		body?: string,
	}
}
interface IListTabPropsOut {
	tabs: ITabProps[],
	className?: string,
}
interface IListTabPropsIn extends IListTabPropsOut, RouteComponentProps<null>,  ITabState, ITabStateHandler {

}

interface ITabState {
	selectedId: string
}
interface ITabStateHandler {
	changeId: (id: string) => void
}
interface ILeftHandlerProps extends ICreateTabContainerPropsOut, RouteComponentProps<any>{}
const idHandler = withStateHandlers<ITabState, {}, ILeftHandlerProps >(
	({ selectedPath, tabs, match, location }) => {
		return {
			// selectedId: selectedPath ? selectedPath : tabs[0].path,
			selectedId: selectedPath ? selectedPath : location.pathname.replace(match.path, ''),
		}
	},
	{
		changeId: () => (id: string) => ({ selectedId: id }),
	},
)



const ListTabView = ({ tabs, match, changeId, selectedId, className }: IListTabPropsIn) => {
	const ListTab = tabs.map((tab, key) => (
		<Link to={makeUpdatePath(match.url)(tab.path)} key={key}>
			<div
				key={tab.path}
				onClick={() => changeId(tab.path)}
				className={classnames(
					'tab',
					't-color',
					'p-h-sm',
					{ 'tab--selected': selectedId === tab.path },
					className,
				)}
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

const ListTab = compose<IListTabPropsIn, IListTabPropsOut>(pure, withRouter, idHandler)(ListTabView)

const renderBodyContent = (tabs: ITabProps[] = []) => {
	return tabs.map((tab, key) => (
		<Route {...tab} key={key} />
	))
}

const BodyView = ({ tabs, match, className }: IListTabPropsIn) => {
	const ListTab = tabs.map((tab, key) => {
		const AddMargin = tab.component && addContainer(tab.component, className)
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

const AppTabView = ({ tabs, classes }: ICreateTabContainerPropsOut) => {
	console.log('APPTAB')
	return (
		<>
			<div className={classnames(
					'tabs',
					'p-l-sm',
					'p-t-sm',
					'p-b-md',
					't-background',
					path(['tabs'])(classes),
				)}>
				<ListTab tabs={tabs} className={classes && classes.tab} />
			</div>
			<Body tabs={tabs} className={classes && classes.body} />
		</>
	)
}
export const createTabContainer = (options: ICreateTabContainerPropsOut) =>
	compose<ICreateTabContainerPropsOut, ICreateTabContainerPropsOut>(mapProps(() => options))(AppTabView)
