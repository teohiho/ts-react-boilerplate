import { Switch } from '@blueprintjs/core'
import { changeTheme } from 'app/setting/redux/action'
import { TPaletteType } from 'app/setting/redux/initalState'
import { TRootState } from 'conf/redux/reducer'
import * as React from 'react'
import { connect } from 'react-redux'
import { compose, pure } from 'recompose'
import { Dispatch } from 'redux'


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
