import { Switch } from '@blueprintjs/core'
import * as React from 'react'
import { connect, Dispatch } from 'react-redux'
import { compose, pure } from 'recompose'
import { TRootState } from '../conf/redux/reducer'
import { changeTheme } from '../module/setting/logic.redux/action'
import { TPaletteType } from '../module/setting/logic.redux/initalState'


interface ISwitchThemePropsOut {

}

interface ISwitchThemeStateToProps {
	paletteType: TPaletteType
}

interface ISwitchThemeDispatchToProps {
	switchTheme: () => void
}

interface ISwitchThemePropsIn extends ISwitchThemePropsOut, ISwitchThemeStateToProps, ISwitchThemeDispatchToProps {

}

const SwitchThemeView = ({ switchTheme, paletteType }: ISwitchThemePropsIn) => (
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

export const SwitchTheme = compose<ISwitchThemePropsIn, ISwitchThemePropsOut>(pure, withRedux)(SwitchThemeView)
