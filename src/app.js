import React from 'react';
import { Router, browserHistory } from 'react-router';
import { Provider } from 'react-redux';
import routes from './routes';
import configureStore from './store/configureStore';
import { syncHistoryWithStore } from 'react-router-redux';

export const store = configureStore();

const history = syncHistoryWithStore(browserHistory, store);

export default class App extends React.Component {
    render() {
        return (
            <Provider store={store}>
                <Router history={history} routes={routes} />
            </Provider>
        );
    }
}
