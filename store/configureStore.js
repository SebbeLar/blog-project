import {createStore} from 'redux';
import rootReducer from '../reducers';

export default function configureStore(initalState) {
    const store = createStore(rootReducer, initalState);

    if (module.hot) {
        // Enable Webpack hot module replacement for reducers
        module.hot.accept('../reducers', () => {
            const nextReducer = require('../reducers').default; // eslint-disable-line global-require, max-len
            store.replaceReducer(nextReducer);
        });
    }

    return store;
}
