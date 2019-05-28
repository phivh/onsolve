import React from 'react';
import ReactDOM from 'react-dom';
import { routerMiddleware } from 'connected-react-router'
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import RootReducer from './reducers/root';
import defaultStore from './reducers/default'; 
import Api from './services/api';
import history from "./reducers/history";
import App from './App';
import * as serviceWorker from './serviceWorker';



const api = new Api();

const store = createStore(RootReducer(history), defaultStore, applyMiddleware(routerMiddleware(history), thunk.withExtraArgument(api.get())) );

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>, 
    document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
