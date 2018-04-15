import { createStore, compose, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { autoRehydrate, persistStore } from 'redux-persist';
import { composeWithDevTools } from 'redux-devtools-extension';

import reducer from './';

const enhance = compose(
    applyMiddleware(thunk),
    composeWithDevTools(autoRehydrate()),
);

const store = createStore(reducer, undefined, enhance);

persistStore(store, { whitelist: ['user'] });

export default store;
