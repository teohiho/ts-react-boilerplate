// import HomeIcon from '@material-ui/icons/Home';
import * as React from 'react'
import { connect, Dispatch } from 'react-redux'
import { IntlProvider, addLocaleData } from 'react-intl'
import * as en from 'react-intl/locale-data/en'
import * as vi from 'react-intl/locale-data/vi'

import { AppRoute } from './router/router'
import { MuiThemeProvider, CssBaseline } from '@material-ui/core'
import { getTheme } from './theme/themeHelper'
import { TRootState } from './conf/redux/reducer'
import { TTheme } from './module/app/logic.redux/initalState'
const messages = require('./i18n/build.json')

addLocaleData([...en, ...vi])

export namespace App {
    export interface Props extends IAppStateProps {
    }

    export interface State {
    }
}


class App extends React.Component<App.Props, App.State> {
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
        paletteType: state.app.theme.paletteType,
        lang: state.app.lang,
   }
}

const mapDispatchToProps = (dispatch: Dispatch<any>): ISandDispatchProps => {
    return {
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(App)
