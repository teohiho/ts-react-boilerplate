import { Switch } from '@blueprintjs/core'
import { TRootState } from 'conf/redux/reducer'
import { changeTheme } from 'module/setting/logic.redux/action'
import { TPaletteType } from 'module/setting/logic.redux/initalState'
import * as React from 'react'
import { connect, Dispatch } from 'react-redux'
import { compose, pure } from 'recompose'
import { createTab } from 'tpl/tab'
import { createTabHien } from '../tpl-hien/createTabHien'
const style = require('./Hien.scss')



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

// const AddTab = createTab({
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
// 			panel: <SettingPageView />,
// 			title: 'Hien 1',
// 		},
// 		{
// 			id: 'hien2',
// 			panel: <SpecialCom />,
// 			title: 'Hien 2',
// 		},
// 	],
// })
const AddTab = createTabHien({
	breadcrumbItems: [
		{
			text: 'Grand',
			href: '#',
		},
		{
			text: 'Parent',
			href: '#',
		},
	],
})
export const HienPage = compose(pure)(AddTab)
