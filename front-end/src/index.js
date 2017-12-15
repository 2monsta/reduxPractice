import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import {Provider} from 'react-redux';
import reduxPromise from 'redux-promise';
import {createStore, applyMiddleware} from 'redux';
import reducer from './reducers/index';

const theStoreWithMiddleware = applyMiddleware(reduxPromise)(createStore)(reducer);

ReactDOM.render(
  <Provider store={theStoreWithMiddleware}>
    <App />
  </Provider>,
  document.getElementById('root'));
registerServiceWorker();
