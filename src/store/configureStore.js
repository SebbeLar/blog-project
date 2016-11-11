import {createStore} from 'redux';
import rootReducer from '../reducers';

/* eslint-disable no-underscore-dangle, max-len */
export default function configureStore() {
    const store = createStore(rootReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

    if (module.hot) {
        // Enable Webpack hot module replacement for reducers
        module.hot.accept('../reducers', () => {
            const nextReducer = require('../reducers').default; // eslint-disable-line global-require, max-len
            store.replaceReducer(nextReducer);
        });
    }

    return store;
}
