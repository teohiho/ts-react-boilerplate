import classnames from 'classnames'
import React from 'react'
import { addContainerClassName } from './createContainer'
import { Button, Tab, Tabs } from '@blueprintjs/core'
import { concatPath } from '../../util/route'
import { Link, Route, Switch } from 'react-router-dom'
import { path } from 'ramda'
import { RouteComponentProps, RouteProps, withRouter } from 'react-router'
import { v4 } from 'uuid'
import { withPropsChecker } from '../../util/react'
import {
	compose,
	mapProps,
	pure,
	withStateHandlers,
} from 'recompose'


const styles = require('./scss/style.scss')

// TYPE 1ST

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

// RUNTIME CODE

const idStateHandler = withStateHandlers<ITabState, {}, ILeftHandlerProps >(
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
		<Link to={concatPath(match.url)(tab.path)} key={key}>
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

const ListTab = compose<IListTabPropsIn, IListTabPropsOut>(withRouter, idStateHandler)(ListTabView)

const renderBodyContent = (tabs: ITabProps[] = []) => {
	return tabs.map((tab, key) => (
		<Route {...tab} key={key} />
	))
}

const BodyView = ({ tabs, match, className }: IListTabPropsIn) => {
	const ListTab = tabs.map((tab, key) => {
		const AddMargin = tab.component && compose(addContainerClassName(className))(tab.component)
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

const AppTabView = ({ tabs, classes= {} }: ICreateTabContainerPropsOut) => {
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
