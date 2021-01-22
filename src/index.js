import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
/*import 'jquery/dist/jquery.js';
import 'popper.js/dist/umd/popper.js';
import 'bootstrap/dist/js/bootstrap.js';*/
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import {ProductContextProvider} from './components/ProductContext'
ReactDOM.render(<ProductContextProvider><App /></ProductContextProvider>, document.getElementById('root'));
registerServiceWorker();
