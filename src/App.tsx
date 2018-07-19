// import HomeIcon from '@material-ui/icons/Home';
import * as React from 'react'
import { addLocaleData, IntlProvider } from 'react-intl'
import * as en from 'react-intl/locale-data/en'
import * as vi from 'react-intl/locale-data/vi'
import { connect, Dispatch } from 'react-redux'

import { CssBaseline, MuiThemeProvider } from '@material-ui/core'
import { registerUserLogger } from 'conf/debug/logrocket'
import { TRootState } from 'conf/redux/reducer'
import { AppRoute } from 'router/router'
import { getTheme } from 'theme/themeHelper'
import { TTheme } from './module/setting/logic.redux/initalState'
const messages = require('./i18n/i18n.__generate__.json')
const log = require('./conf/debug/logrocket')

addLocaleData([...en, ...vi])

export namespace App {
	export interface Props extends IAppStateProps {
	}

	export interface State {
	}
}

class App extends React.Component<App.Props, App.State> {
	componentDidMount() {
		const sampleUser = {
			id: 'Test-12345',
			name: 'Test Name',
			email: 'TestEmail@gmail.com',
		}
		registerUserLogger(sampleUser)
	}

	render() {
		const { paletteType, lang } = this.props
		return (
			<IntlProvider
				locale={lang}
				messages={messages[lang]}
			>
				<MuiThemeProvider
					theme={getTheme(paletteType)}
				>
					<CssBaseline />
					<AppRoute />
				</MuiThemeProvider>
			</IntlProvider>
		)
	}
}

export interface IAppStateProps {
	paletteType: TTheme,
	lang: string
}

export interface ISandDispatchProps {

}


const mapStateToProps = (state: TRootState): IAppStateProps => {
	return {
		paletteType: state.setting.theme.paletteType,
		lang: state.setting.lang,
   }
}

const mapDispatchToProps = (dispatch: Dispatch<any>): ISandDispatchProps => {
	return {
	}
}
export default connect(mapStateToProps, mapDispatchToProps)(App)
