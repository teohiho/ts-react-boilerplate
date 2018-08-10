import { Switch } from '@blueprintjs/core'
import { TRootState } from 'conf/redux/reducer'
import { changeTheme } from 'module/setting/logic.redux/action'
import { TPaletteType } from 'module/setting/logic.redux/initalState'
import * as React from 'react'
import { FormattedMessage } from 'react-intl'
import { connect, Dispatch } from 'react-redux'
import { compose, pure } from 'recompose'
import { createTab } from 'tpl/tab'
import { SettingLanguage } from './component/SettingLanguage'


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
		Dark Theme:
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
			id: 'th',
			title: <FormattedMessage id="Setting.theme" />,
			panel: <SettingTheme />,
		},
		{
			id: 'la',
			title: <FormattedMessage id="Setting.language" />,
			panel: <SettingLanguage />,
		},
	],
})


export const SettingPage = compose<ISettingPagePropsIn, ISettingPagePropsOut>()(addTab)
