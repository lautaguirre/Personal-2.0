import 'bootstrap/dist/css/bootstrap.min.css';

import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';

import App from './components/App';

import './index.scss';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
