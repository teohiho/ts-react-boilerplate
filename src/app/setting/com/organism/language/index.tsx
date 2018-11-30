import React from 'react'
import redux from '../../../redux/'
import { compose, pure } from 'recompose'
import { connect } from 'react-redux'
import { Dispatch } from 'redux'
import { FormattedMessage } from 'react-intl'
import { TRootState } from 'conf/redux/reducer'


type StoreProps = {
	langCode: string,
}
type ActionProps = {
	updateLanguage: (code: string) => () => void,
}
type Props = StoreProps & ActionProps


const LANGUAGES = {
	vi: {
		text: 'Vietnamese',
	},
	en: {
		text: 'English',
	},
}

const SettingLanguageView = ({ langCode, updateLanguage }: Props) => {
	return (
	<div className={'.u-flex--row'}>
		<FormattedMessage id="setting.selectLanguage" />
		<select value={langCode} onChange={(event) => updateLanguage(event.target.value)}>
			<option value="vi">Vietnamese</option>
			<option value="en">English</option>
		</select>
	</div>
	)
}
const mapStateToProps = (state:TRootState) => ({
	langCode: state.setting.lang,
})

const mapActionsToProps = (dispatch: Dispatch) => ({
	updateLanguage:  (code: string) => dispatch(redux.actionCollection.changeLanguage(code)),
})

const withRedux = connect(mapStateToProps, mapActionsToProps)

export default compose<Props, {}>(withRedux, pure)(SettingLanguageView)
