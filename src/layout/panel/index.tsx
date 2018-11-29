import classnames from 'classnames'
import React, { ComponentClass, memo } from 'react'
import Scrollbars from 'react-custom-scrollbars'
import { compose, lifecycle } from 'recompose'
import { connect } from 'react-redux'
import { Header, SideMenu } from './com'
import { Link, Route, Switch } from 'react-router-dom'
import { push } from 'connected-react-router'
import { RouteComponentProps, withRouter } from 'react-router'


const style = require('./scss/styles.scss')
// Use template
type Component = ((props: any) => JSX.Element) | ComponentClass<{}, any>
type Panel = {
	id: string,
	component: Component,
}

type RightPanelProps = {
	Component: Component,
	push: typeof push,
}
type LeftPanelProps = {
	Component: Component,
}

const _RightPanel = ({ Component, push }: RightPanelProps) => (
	<div className={'u-flex--1 t-background2 panel--right'} style={{ margin: '0.5rem', borderRadius: '0.3rem', overflow: 'hidden' }}>
		<Header onClose={() => {
			push('/tifl/list')
		}} title={'Test'}/>
		<div className="screen screen--right">
			<Component />
		</div>
	</div>
)
const RightPanel = compose<RightPanelProps, {Component: Component}>(connect(undefined, { push }))(_RightPanel)

const LeftPanel  = ({ Component }: LeftPanelProps) => {
	return (
		<div className={'u-flex--1 t-background2'} style={{ margin: '0.5rem', borderRadius: '0.3rem', overflow: 'hidden', height: '100vh' }}>
			<Header title={'Parent'} />
			<div className="screen screen--left">
				<Component />
			</div>
		</div>
	)
}
const makePanel = <P extends {}>(leftPanel: Panel, rightPanel: Panel, params?: P) =>
	withRouter(<P extends RouteComponentProps<null>>(props: P) => {
		return (
			<div className={classnames(['u-flex--1', 'u-flex--row', 't-background4'])}>
				<Route path={`${props.match.url}/${leftPanel.id}`} render={() => <LeftPanel Component={leftPanel.component} />} />
				<Route path={`${props.match.url}/${leftPanel.id}/${rightPanel.id}`} render={() => <RightPanel Component={rightPanel.component}/>} />
			</div>
		)
})

export default makePanel

