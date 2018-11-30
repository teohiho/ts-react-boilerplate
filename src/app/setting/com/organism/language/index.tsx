import React from 'react'
import redux from '../../../redux/'
import { Button, MenuItem } from '@blueprintjs/core'
import { compose, pure } from 'recompose'
import { connect } from 'react-redux'
import { Dispatch } from 'redux'
import { FormattedMessage } from 'react-intl'
import { Select } from '@blueprintjs/select'
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
		<Select
			items={[
				{
					id: 'vi',
					text: 'Vietnamese',
				},
				{
					id: 'en',
					text: 'English',
				},
			]}
			itemRenderer={({ text, id }, index) => (
				<MenuItem
					key={id}
					text={text}
					onClick={updateLanguage(id)}
				/>
			)}
			onItemSelect={({ text, id }) => {
			}}
		>
			<Button className="m-l-sm">
				{LANGUAGES[langCode].text}
			</Button>
		</Select>
	</div>
	)
}
const mapStateToProps = (state:TRootState) => ({
	langCode: state.setting.lang,
})

const mapActionsToProps = (dispatch: Dispatch) => ({
	updateLanguage:  (code: string) => () => dispatch(redux.actionCollection.changeLanguage(code)),
})

const withRedux = connect(mapStateToProps, mapActionsToProps)

export default compose<Props, {}>(withRedux, pure)(SettingLanguageView)
