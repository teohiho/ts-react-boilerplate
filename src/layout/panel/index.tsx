import classnames from 'classnames'
import React from 'react'
import Scrollbars from 'react-custom-scrollbars'
import { connect } from 'react-redux'
import { Header, SideMenu } from './com'
import { push } from 'connected-react-router'
import {
	Button,
	H3,
	MenuDivider,
} from '@blueprintjs/core'
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
	<div className={'u-flex--1 t-background'}>
		<Header title={'Parent'} />
		<div className="screen screen--left">
			<Component {...props}/>
		</div>
	</div>
)


const wrapPanelRight = (Component: (props: any) => JSX.Element) => connect(undefined, { push })((props: any) => (
	<div className={'u-flex--1 t-background panel--right'}>
		<Header onClose={() => {
			props.push('/tifl/list')
		}} title={'Test'}/>
		<div className="screen screen--right">
			<Component {...props}/>
		</div>
	</div>
))

const makePanel = <P extends {}>(leftPanel: Panel, rightPanel: Panel, params?: P) =>
	withRouter(<P extends RouteComponentProps<null>>(props: P) => {
		return (
			<div className={classnames(['u-flex--1', 'u-flex--row'])}>
				{/* <SideMenu /> */}
				<Route path={`${props.match.url}/${leftPanel.id}`} component={() => wrapPanel(leftPanel.component)(props)} />
				<Route path={`${props.match.url}/${leftPanel.id}/${rightPanel.id}`} component={() => {
					const RightComponent =  wrapPanelRight(rightPanel.component)
					return <RightComponent {...props} />
				}} />
			</div>
		)
})

export default makePanel
