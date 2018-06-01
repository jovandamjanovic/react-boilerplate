import React from "react";
import { render } from "react-dom";
import { Provider } from 'react-redux';

import Counter from './containers/Counter';

import { createStore } from 'redux';
import store from './store';

const appStore = createStore(
    store,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

render(
    <Provider store={appStore}>
        <div>
            <Counter />
        </div>
    </Provider>, 
    document.getElementById("app")
);

export default 0;