import classnames from 'classnames'
import React, { memo } from 'react'
import Scrollbars from 'react-custom-scrollbars'
import { compose, lifecycle } from 'recompose'
import { connect } from 'react-redux'
import { Header, SideMenu } from './com'
import { push } from 'connected-react-router'
import { Route, Switch } from 'react-router-dom'
import { RouteComponentProps, withRouter } from 'react-router'


const style = require('./scss/styles.scss')
// Use template

type Panel = {
	id: string,
	component:  (props: any) => JSX.Element,
}


const wrapPanel = (Component: (props: any) => JSX.Element) => (props?: any) => (
	<div className={'u-flex--1 t-background'} style={{ margin: '0.5rem', borderRadius: '0.3rem', overflow: 'hidden', height: '100vh' }}>
		<Header title={'Parent'} />
		<div className="screen screen--left">
			<Component {...props}/>
		</div>
	</div>
)
const LeftPanel = compose(memo, wrapPanel)
// const LeftPanel = compose(
// 	lifecycle({
// 		shouldComponentUpdate() { return false },
// 	}),
// 	wrapPanel)


const wrapPanelRight = (Component: (props: any) => JSX.Element) => (props: any) => (
	<div className={'u-flex--1 t-background panel--right'} style={{ margin: '0.5rem', borderRadius: '0.3rem', overflow: 'hidden' }}>
		<Header onClose={() => {
			props.push('/tifl/list')
		}} title={'Test'}/>
		<div className="screen screen--right">
			<Component {...props}/>
		</div>
	</div>
)
const RightPanel = compose(memo, connect(undefined, { push }), wrapPanelRight)

const makePanel = <P extends {}>(leftPanel: Panel, rightPanel: Panel, params?: P) =>
	withRouter(<P extends RouteComponentProps<null>>(props: P) => {
		return (
			<div className={classnames(['u-flex--1', 'u-flex--row', 't-background4'])}>
				{/* <SideMenu /> */}
				<Route path={`${props.match.url}/${leftPanel.id}`} component={LeftPanel(leftPanel.component)} />
				<Route path={`${props.match.url}/${leftPanel.id}/${rightPanel.id}`} component={RightPanel(rightPanel.component)} />
			</div>
		)
})

export default makePanel
