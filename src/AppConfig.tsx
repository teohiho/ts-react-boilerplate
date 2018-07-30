import * as React from 'react'
import { IntlProvider } from 'react-intl'

import { connect, Dispatch } from 'react-redux'

import { settingConfig } from 'conf/config'
import { registerUserLogger } from 'conf/debug/logrocket'
import { TRootState } from 'conf/redux/reducer'
import { compose, lifecycle, pure } from 'recompose'
import { AppRoute } from 'router/router'

import * as classnames from 'classnames'
import { TPaletteType } from 'module/setting/logic.redux/initalState'

const messages = require('./i18n/i18n.__generate__.json')
settingConfig()


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
		<div className={classnames('app', theme === 'dark' ? 'bp3-dark' : '')}>
			<AppRoute />
		</div>
	</IntlProvider >
)

const mapStateToProps = (state: TRootState) => ({
	theme: state.setting.theme.paletteType,
})
const withRedux = connect(mapStateToProps)


export const AppConfig = compose<IAppConfigPropsIn, IAppConfigPropsOut>(withRedux, withLifeCircle, pure)(App)


