import * as React from 'react';
import { Provider } from 'react-redux';

import App from './App';
import configureStore from './conf/redux/redux';

const { store } = configureStore();
class ReduxRoot extends React.Component {
    render() {
        return (
            <Provider store={store}>
                <App />
            </Provider>
        );
    }
}

export default ReduxRoot;
