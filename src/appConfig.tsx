import classnames from 'classnames'
import React from 'react'
import { AppRoute } from 'router/router'
import { compose, lifecycle, pure } from 'recompose'
import { connect } from 'react-redux'
import { IntlProvider } from 'react-intl'
import { registerUserLogger } from 'conf/debug/logrocket'
import { settingConfiguration } from 'conf/config'
import { TPaletteType } from 'app/setting/redux/initalState'
import { TRootState } from 'conf/redux/reducer'


const messages = require('./i18n/i18n.__generate__.json')
settingConfiguration()


export interface IAppConfigPropsIn extends IAppConfigPropsOut {
	lang: string
	theme: TPaletteType
}

export interface IAppConfigPropsOut {

}


const withLifeCircle = lifecycle({
	componentDidMount() {
		const sampleUser = {
			id: 'Test-12345',
			name: 'Test Name',
			email: 'TestEmail@gmail.com',
		}
		registerUserLogger(sampleUser)
	},
  })

//  Add theme and language
const App = ({ theme, lang }: IAppConfigPropsIn) => (
	<IntlProvider
		locale={lang}
		messages={messages[lang]}
	>
		<div className={classnames('u-flex--1', theme === 'dark' ? 'bp3-dark' : '')}>
			<AppRoute />
		</div>
	</IntlProvider >
)

const mapStateToProps = (state: TRootState) => ({
	theme: state.setting.theme.paletteType,
	lang: state.setting.lang,
})
const withRedux = connect(mapStateToProps)


export const AppConfig = compose<IAppConfigPropsIn, IAppConfigPropsOut>(withRedux, withLifeCircle, pure)(App)
