// import HomeIcon from '@material-ui/icons/Home';
import * as React from 'react'
import withRoot from './withRoot'
import { AppRoute } from './router/router'

export namespace App {
    export interface Props {
    }

    export interface State {
    }
}


class App extends React.Component<App.Props, App.State> {
    render() {
        return (
           <AppRoute />
        )
    }
}

export default withRoot(App)
