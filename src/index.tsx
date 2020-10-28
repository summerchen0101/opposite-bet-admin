import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import 'antd/dist/antd.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import './utils/style.css';
import store from '@/store';
import App from '@/components/App';

ReactDOM.render(
  <Provider store={store()}>
    <App />
  </Provider>,
  document.getElementById('root'),
);
