import classnames from 'classnames'
import React from 'react'
import { Button, MenuDivider } from '@blueprintjs/core'
import { connect } from 'react-redux'
import { push } from 'connected-react-router'
import {
	Route,
	RouteComponentProps,
	RouterProps,
	withRouter,
} from 'react-router'


const style = require('./scss/styles.scss')
// Use template

type Panel = {
	id: string,
	component:  (props: any) => JSX.Element,
}

const wrapPanel = (Component: (props: any) => JSX.Element) => (props: any) => (
	<div className={'u-flex--1 t-background1 screen--right p-h-md'}>
		{/* {Component(props)} */}
		<Component {...props} />
	</div>
)
const wrapPanelRight = (Component: (props: any) => JSX.Element) => connect(undefined, { push })((props: any) => (
	<div className={'u-flex--1 t-background screen--left p-h-md'}>
		{/* <Button onClick={() => {
			props.push('/tifl/list')
		}} text="X" className="button--close" /> */}
		<MenuDivider />
		<Component {...props} />
	</div>
))

const makePanel = <P extends {}>(leftPanel: Panel, rightPanel: Panel, params?: P) =>
	withRouter(<P extends RouteComponentProps<null>>(props: P) => {
		return (
			<div className={classnames(['u-flex--1', 'u-flex--row'])}>
				<Route path={`${props.match.url}/${leftPanel.id}`} component={() => wrapPanel(leftPanel.component)(props)} />
				<Route path={`${props.match.url}/${leftPanel.id}/${rightPanel.id}`} component={() => {
					const RightComponent =  wrapPanelRight(rightPanel.component)
					return <RightComponent {...props} />
				}} />
			</div>
		)
})

export default makePanel
