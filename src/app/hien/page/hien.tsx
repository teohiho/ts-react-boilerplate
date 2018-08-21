// import { createTabHien } from '../com-hien/createTabHien'
import { Switch } from '@blueprintjs/core'
import * as classnames from 'classnames'
import { createTab } from 'com/index'
import { TRootState } from 'conf/redux/reducer'
import { createTabContainer } from 'layout/default/createTabContainer'
import * as React from 'react'
import { connect } from 'react-redux'
import { compose, pure } from 'recompose'
import { Dispatch } from 'redux'
import { HienComposePage } from './hienCompose'
import { HienHelloPage } from './hienHello'


const style = require('../scss/style.scss')



const SettingPageView = () => (
	<>
		<div className="main-display">
			<h1 className="main-h1">
				I'm main
			</h1>
		</div>
		<div className={style.iAmOnlyOne}>
			I'm only one
		</div>
		<h1 className="title sub-title">Hello Apollo13</h1>
		<div className="mixin">
			<button className="login-button">MIXIN</button>
		</div>
		<input className="input-2"/>
		<div className="testFunction">
			FUNCTION
		</div>
		<div className="mad">
			TEST MIXIN
		</div>
		<div className="sidebar">
		Sidebar
		</div>
		<div className="p-h-xl">
		Spacing
		</div>
	</>
)



const SpecialCom = () => (<h1>Abc</h1>)

const addTab = createTabContainer({
	tabs: [
		{
			path: '/',
			component: HienHelloPage,
			title:'Hello',
			exact: true,
		},
		{
			path: '/sample',
			component: SettingPageView,
			title: 'Sample',
		},
		{
			path: '/hien',
			component: SpecialCom,
			title: 'Hien',
		},
		{
			path: '/compose',
			component: HienComposePage,
			title: 'Compose',
		},
	],
	classes:{
		tab: style.transparent,
		tabs: style.transparent,
		body: classnames(style.transparent, 'u-flex--row'),
		// body: 'transparent',
	},
})


export const AddTab = compose()(addTab)
const Body = () => (
	<div className={classnames(style.wrapper) } >
		<AddTab />
	</div>
)



// const addTab = createTab({
// 	breadcrumbItems: [
// 		{
// 			text: 'Grand',
// 			href: '#',
// 		},
// 		{
// 			text: 'Parent',
// 			href: '#',
// 		},
// 	],
// 	tabs: [
// 		{
// 			id: 'hien1',
// 			panel: <HienHelloPage />,
// 			title: 'Hello',
// 		},
// 		{
// 			id: 'hien2',
// 			panel: <SettingPageView />,
// 			title: 'Sample',
// 		},
// 		{
// 			id: 'hien3',
// 			panel: <SpecialCom />,
// 			title: 'Hien',
// 		},
// 		{
// 			id: 'hien4',
// 			panel: <HienComposePage  />,
// 			title: 'Hien Compose',
// 		},
// 	],
// })

export const HienPage = compose(pure)(Body)
