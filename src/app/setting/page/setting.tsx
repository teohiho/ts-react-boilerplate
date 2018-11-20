import React from 'react'
import redux from '../redux/'
import { addBreadcrumb } from 'layout/default/createContainer'
import { compose, pure } from 'recompose'
import { connect } from 'react-redux'
import { createTabContainer } from 'layout/default/createTabContainer'
import { Dispatch } from 'redux'
import { FormattedMessage } from 'react-intl'
import { SettingLanguage } from '../com/'
import { Switch } from '@blueprintjs/core'
import { TPaletteType } from '../redux/initalState'
import { TRootState } from 'conf/redux/reducer'


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
	switchTheme: () => dispatch(redux.actionCollection.changeTheme()),
})
const withRedux = connect(mapStateToProps, mapDispatchToProps)

const SettingTheme = compose<ISettingPropsIn, ISettingPropsOut>(withRedux, pure)(SettingView)

const addTab = createTabContainer({
	tabs: [
		{
			path: '/',
			component: SettingTheme,
			title: <FormattedMessage id="setting.theme" />,
			exact: true,
		},
		{
			path: '/language',
			component: SettingLanguage,
			title: <FormattedMessage id="setting.language" />,
		},
	],
})

export const SettingPage = compose<ISettingPropsOut, ISettingPropsOut>(
	addBreadcrumb(['Setting']),
)(addTab)
