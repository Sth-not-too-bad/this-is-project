import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import RootRouter from './router'
import axios from './utils/axios.js'
import * as serviceWorker from './serviceWorker';

// ReactDOM.render(<App />, document.getElementById('root'));
Component.prototype.$axios=axios
ReactDOM.render(
        <RootRouter />
    , document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
