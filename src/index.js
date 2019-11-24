import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {Provider} from "react-redux";
import {reducer} from "./store/reducers";
import {createStore} from "redux";

let store = createStore(reducer);
ReactDOM.render(
    <Provider store={store}>
      <App/>
    </Provider>,
    document.querySelector('#root'));