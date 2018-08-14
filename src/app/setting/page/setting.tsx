import { Switch } from '@blueprintjs/core'
import { createTab } from 'com/index'
import { TRootState } from 'conf/redux/reducer'
import * as React from 'react'
import { FormattedMessage } from 'react-intl'
import { connect } from 'react-redux'
import { compose, pure } from 'recompose'
import { Dispatch  } from 'redux'
import { SettingLanguage } from '../com/'
import { changeTheme } from '../redux/action'
import { TPaletteType } from '../redux/initalState'


interface ISettingPropsOut {

}

interface ISettingStateToProps {
	paletteType: TPaletteType
}

interface ISettingDispatchToProps {
	switchTheme: () => void
}

interface ISettingPropsIn extends ISettingPropsOut, ISettingStateToProps, ISettingDispatchToProps {

}

const SettingView = ({ switchTheme, paletteType }: ISettingPropsIn) => (
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

const SettingTheme = compose<ISettingPropsIn, ISettingPropsOut>(withRedux, pure)(SettingView)

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


export const SettingPage = compose<ISettingPropsIn, ISettingPropsOut>()(addTab)
