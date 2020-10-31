import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from '@/store';
import App from '@/components/App';
import LanguageProvider from '@/utils/LanguageProvider';

ReactDOM.render(
  <Provider store={store()}>
    <LanguageProvider>
      <App />
    </LanguageProvider>
  </Provider>,
  document.getElementById('root'),
);
