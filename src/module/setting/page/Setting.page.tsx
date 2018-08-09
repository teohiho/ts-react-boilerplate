import { Switch, Tab, Tabs } from '@blueprintjs/core'
import { TRootState } from 'conf/redux/reducer'
import { changeTheme } from 'module/setting/logic.redux/action'
import { TPaletteType } from 'module/setting/logic.redux/initalState'
import * as React from 'react'
import { connect, Dispatch } from 'react-redux'
import { compose, pure } from 'recompose'
import { createTab } from 'tpl/tab'


interface ISettingPagePropsOut {

}

interface ISettingPageStateToProps {
	paletteType: TPaletteType
}

interface ISettingPageDispatchToProps {
	switchTheme: () => void
}

interface ISettingPagePropsIn extends ISettingPagePropsOut, ISettingPageStateToProps, ISettingPageDispatchToProps {

}

const SettingPageView = ({ switchTheme, paletteType }: ISettingPagePropsIn) => (
	<>
		Switch Theme:
		<Switch checked={paletteType === 'dark' ? true : false} onChange={switchTheme} />
	</>
)

const mapStateToProps = (state: TRootState) => ({
	paletteType: state.setting.theme.paletteType,
})

const mapDispatchToProps = (dispatch: Dispatch) => ({
	switchTheme: () => dispatch(changeTheme()),
})
const withRedux = connect(mapStateToProps, mapDispatchToProps)

const SettingTheme = compose<ISettingPagePropsIn, ISettingPagePropsOut>(withRedux, pure)(SettingPageView)

const ReactView = () => (<h1>React</h1>)
const Vue = () => (
	<Tabs
		id="TabsExample"
	>
		<Tab id="rx" title="React" panel={<h1>React</h1>} />
		<Tab id="ng" title="Angular"  panel={<h1>Angular</h1>} />
		<Tabs.Expander />
	</Tabs>

)

const addTab = createTab({
	breadcrumbItems: [
		{
			href: '#',
			text: 'Grand',
		},
		{
			href: '#',
			text: 'Parent',
		},
		{
			text: 'Child',
		},
	],
	tabs: [
		{
			id: 're',
			title: 'React',
			panel: <SettingTheme />,
		},
		{
			id: 'vu',
			title: 'Vue',
			panel: <Vue />,
		},
	],
})


export const SettingPage = compose<ISettingPagePropsIn, ISettingPagePropsOut>()(addTab)
