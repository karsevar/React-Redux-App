import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {createStore, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import thunk from 'redux-thunk';
import {BrowserRouter as Router} from 'react-router-dom';
import 'semantic-ui-css/semantic.min.css'
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";

import reducer from './reducers';

const store = createStore(reducer, applyMiddleware(thunk));

ReactDOM.render(
    <Provider store={store}>
        <Router>
            <App />
        </Router>
    </Provider>, 
    document.getElementById('root'));

