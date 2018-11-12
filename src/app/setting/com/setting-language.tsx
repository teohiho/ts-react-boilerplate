import { Button, MenuItem } from '@blueprintjs/core'
import { compose, pure } from 'recompose'

import { Dispatch } from 'redux'
import { FormattedMessage } from 'react-intl'
import React from 'react'
import { Select } from '@blueprintjs/select'
import { TRootState } from 'conf/redux/reducer'
import { changeLanguage } from '../redux/action'
import { connect } from 'react-redux'

interface ISettingLanguagePropsOut {}
interface ISettingLanguageStateProps {
	langCode: string
}
interface ISettingLanguageActionsProps {
	updateLanguage: (code: string) => () => void
}
interface ISettingLanguagePropsIn extends ISettingLanguagePropsOut, ISettingLanguageStateProps, ISettingLanguageActionsProps {

}
const langs = {
	vi: {
		text: 'Vietnamese',
	},
	en: {
		text: 'English',
	},
}
const SettingLanguageView = ({ langCode, updateLanguage }: ISettingLanguagePropsIn) => {
	return (
	<div className={'.u-flex--row'}>
		<FormattedMessage id="Setting.selectLanguage" />
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
				console.log('AHIHIH')
				// updateLanguage(id)
			}}
		>
			{/* <InputGroup className="m-l-sm" value={'Vietnamese'} disabled/> */}
			<Button className="m-l-sm">
				{langs[langCode].text}
			</Button>
		</Select>
	</div>
	)
}
const mapStateToProps = (state:TRootState) => ({
	langCode: state.setting.lang,
})

const mapActionsToProps = (dispatch: Dispatch) => ({
	updateLanguage:  (code: string) => () => dispatch(changeLanguage(code)),
})

const withRedux = connect(mapStateToProps, mapActionsToProps)

export const SettingLanguage = compose<ISettingLanguagePropsIn, ISettingLanguagePropsOut>(withRedux, pure)(SettingLanguageView)
