// import HomeIcon from '@material-ui/icons/Home';
import * as React from 'react'
import { connect, Dispatch } from 'react-redux'
import { AppRoute } from './router/router'
import { MuiThemeProvider, CssBaseline } from '@material-ui/core'
import { getTheme } from './theme/themeHelper'
import { TRootState } from './conf/redux/reducer'
import { TTheme } from './module/app/logic.redux/initalState'

export namespace App {
    export interface Props extends ISandStateProps {
    }

    export interface State {
    }
}


class App extends React.Component<App.Props, App.State> {
    render() {
        return (
            <MuiThemeProvider theme={getTheme(this.props.paletteType)}>
                <CssBaseline />
                <AppRoute />
            </MuiThemeProvider>
        )
    }
}

export interface ISandStateProps {
    paletteType: TTheme
}

export interface ISandDispatchProps {

}


const mapStateToProps = (state: TRootState): ISandStateProps => {
    return {
        paletteType: state.app.theme.paletteType,
   }
}

const mapDispatchToProps = (dispatch: Dispatch<any>): ISandDispatchProps => {
    return {
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(App)
