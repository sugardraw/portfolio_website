import React from 'react';
import ReactDOM from 'react-dom';
import Router from './components/Router';
import * as serviceWorker from './serviceWorker';
import './css/styles.css';

ReactDOM.render(<Router />, document.getElementById('root'));

serviceWorker.unregister();
