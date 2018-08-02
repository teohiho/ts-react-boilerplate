import { Switch } from '@blueprintjs/core'
import { TRootState } from 'conf/redux/reducer'
import { changeTheme } from 'module/setting/logic.redux/action'
import { TPaletteType } from 'module/setting/logic.redux/initalState'
import * as React from 'react'
import { connect, Dispatch } from 'react-redux'
import { compose, pure } from 'recompose'


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

const SettingPageView = ({ switchTheme, paletteType }: ISettingPagePropsIn) => {
	console.log('>>>>')
	return (
		<>
			Setting Theme:
			<Switch checked={paletteType === 'dark' ? true : false} onChange={switchTheme} />
		</>
	)
}

const mapStateToProps = (state: TRootState) => ({
	paletteType: state.setting.theme.paletteType,
})
const mapDispatchToProps = (dispatch: Dispatch) => ({
	switchTheme: () => dispatch(changeTheme()),
})

const withRedux = connect(mapStateToProps, mapDispatchToProps)

export const SettingPage = compose<ISettingPagePropsIn, ISettingPagePropsOut>(pure, withRedux)(SettingPageView)
