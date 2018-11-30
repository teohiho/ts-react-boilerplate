import React from 'react'
import redux from '../../../redux/'
import { compose, pure } from 'recompose'
import { connect } from 'react-redux'
import { Dispatch } from 'redux'
import { TPaletteType } from '../../../redux/initalState'
import { TRootState } from 'conf/redux/reducer'
import './index.scss'



type StoreProps = {
	paletteType: TPaletteType,
}
type ActionProps = {
	switchTheme: () => void,
}

type Props = StoreProps & ActionProps

const SettingView = ({ switchTheme, paletteType }: Props) => (
	<>
	 	<input
            name="isGoing"
            type="checkbox"
            checked={paletteType === 'dark' ? true : false}
            onChange={switchTheme} />
		Dark Theme
	</>
)

const mapStateToProps = (state: TRootState) => ({
	paletteType: state.setting.theme.paletteType,
})

const mapDispatchToProps = (dispatch: Dispatch) => ({
	switchTheme: () => dispatch(redux.actionCollection.changeTheme()),
})
const withRedux = connect(mapStateToProps, mapDispatchToProps)

export default compose<Props, {}>(withRedux, pure)(SettingView)
