import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware} from 'redux';

import App from './components/app';

import reducers from './reducers';

const createStoreWithMiddleWare= applyMiddleware()(createStore)

ReactDOM.render(
    <Provider store={createStoreWithMiddleWare(reducers)}>
        <App/>
    </Provider>, document.getElementById('root'))
