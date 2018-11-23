import classnames from 'classnames'
import React, { memo } from 'react'
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
export type TabPropsCollection = {[path: string]: ITabProps}
interface ITabProps extends RouteProps {
	title: React.ReactNode,
	component: React.ComponentType<RouteComponentProps<any>> | React.ComponentType<any>
}

interface ICreateTabContainerPropsOut {
	tabs: TabPropsCollection,
	selectedPath?: string
	classes?: {
		tabs?: string,
		tab?: string,
		body?: string,
	}
}

interface IListTabPropsOut {
	tabs: TabPropsCollection,
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
	const ListTab = Object.keys(tabs).map((path: string) => (
		<Link to={concatPath(match.url)(path)} key={path}>
			<div
				key={path}
				onClick={() => changeId(path)}
				className={classnames(
					'tab',
					't-color',
					'p-h-sm',
					{ 'tab--selected': selectedId === path },
					className,
				)}
			>
				{tabs[path].title}
			</div>
		</Link>
	))
	return (
		<>
			{ListTab}
		</>
	)
}

const ListTab = compose<IListTabPropsIn, IListTabPropsOut>(memo, withRouter, idStateHandler)(ListTabView)


const BodyView = ({ tabs, match, className }: IListTabPropsIn) => {
	const ListTab = Object.keys(tabs).map((path: string) => {
		const AddMargin = tabs[path].component && compose(addContainerClassName(className))(tabs[path].component)
		return (
			<Route {...tabs[path]} path={`${match.path}${path}`} component={AddMargin} key={path} />
		)
	})
	return (
		<Switch>
			{ListTab}
		</Switch>
	)
}


const Body = compose<IListTabPropsIn, IListTabPropsOut>(withRouter, memo)(BodyView)

const AppTabView = ({ tabs, classes= {} }: ICreateTabContainerPropsOut) => {
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
	compose<ICreateTabContainerPropsOut, ICreateTabContainerPropsOut>(memo, mapProps(() => options))(AppTabView)
