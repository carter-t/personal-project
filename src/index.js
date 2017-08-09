import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import {BrowserRouter} from 'react-router-dom';
import {Provider} from 'react-redux';
import store from './dux/store.js';
import App from './App.js';

ReactDOM.render(
  <BrowserRouter>
    <Provider store={store}>
      <App/>
    </Provider>
  </BrowserRouter>,
  document.getElementById('root')
);