import { Switch } from '@blueprintjs/core'
import { TRootState } from 'conf/redux/reducer'
import { changeTheme } from 'module/setting/logic.redux/action'
import { TPaletteType } from 'module/setting/logic.redux/initalState'
import * as React from 'react'
import { connect, Dispatch } from 'react-redux'
import { compose, pure } from 'recompose'
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
		sidebar
		</div>
		<div className="p-h-xl">
		Spacing
		</div>

	</>
)


export const HienPage = compose(pure)(SettingPageView)
