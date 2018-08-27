import { Switch } from '@blueprintjs/core'
import { createTab } from 'com/index'
import { TRootState } from 'conf/redux/reducer'
import { createTabContainer } from 'layout/default/createTabContainer'
import * as React from 'react'
import { FormattedMessage } from 'react-intl'
import { connect } from 'react-redux'
import { compose, pure } from 'recompose'
import { Dispatch  } from 'redux'
import { addBreadcrumb, createContainer } from '../../../layout/default/createContainer'
import { SettingLanguage } from '../com/'
import { changeTheme } from '../redux/action'
import { TPaletteType } from '../redux/initalState'

const styles = require('../scss/style.scss')

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
		<Switch
			checked={paletteType === 'dark' ? true : false}
			onChange={switchTheme}
			className={'switch'}
			label={'Dark Theme'}
		/>
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

const addTab = createTabContainer({
	tabs: [
		{
			path: '',
			component: SettingTheme,
			title: <FormattedMessage id="Setting.theme" />,
			exact: true,
		},
		{
			path: '/language',
			component: SettingLanguage,
			title: <FormattedMessage id="Setting.language" />,
		},
	],
})

export const SettingPage = compose<ISettingPropsOut, ISettingPropsOut>(
	addBreadcrumb(['Setting']),
)(addTab)
