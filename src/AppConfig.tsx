import * as React from 'react'
import { IntlProvider } from 'react-intl'

import { connect, Dispatch } from 'react-redux'

import { registerUserLogger } from 'conf/debug/logrocket'
import { settingI18n } from 'conf/i18n/i18n'
import { TRootState } from 'conf/redux/reducer'
import { ThemeProvider } from 'emotion-theming'
import { compose, lifecycle, pure } from 'recompose'
import { AppRoute } from 'router/router'

const messages = require('./i18n/i18n.__generate__.json')
import { TPaletteType } from 'module/setting/logic.redux/initalState'
import { getTheme } from 'theme/theme'
settingI18n()


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

const App = ({ theme, lang }: IAppConfigPropsIn) => (
	<IntlProvider
		locale={lang}
		messages={messages[lang]}
	>
		<ThemeProvider theme={getTheme(theme)}>
			<AppRoute />
		</ThemeProvider>
	</IntlProvider>
)

const mapStateToProps = (state: TRootState) => ({
	theme: state.setting.theme.paletteType,
})
const withRedux = connect(mapStateToProps)


export const AppConfig = compose<IAppConfigPropsIn, IAppConfigPropsOut>(withRedux, withLifeCircle, pure)(App)


